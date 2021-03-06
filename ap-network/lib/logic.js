/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
/**
 * Write your transction processor functions here
 */

/**
 * Register a temp Device.
 * @param {net.ap.registerDevice} registerDevice
 * @transaction
 */

async function registerDevice(tx) {
    // Save the old value of the asset.
    const participantRegistry = await getParticipantRegistry('net.ap.Device');

    const factory = getFactory();
    const newDevice = factory.newResource('net.ap','Device', tx.time)

    newDevice.newDeviceMAC = tx.newDeviceMAC
    newDevice.deviceFrom = tx.deviceFrom

    await participantRegistry.add(newDevice);
}

/**
 * Connect a Device.
 * @param {net.ap.connectDevice} connectDevice
 * @transaction
 */
async function connectDevice(tx) {
    // Get the asset registry for the asset.
    const Registry = await getParticipantRegistry('net.ap.Device');
    var ConnectingDevice = await Registry.get(tx.deviceFrom);
    var TargetDevice = await Registry.get(tx.deviceFrom);

    ConnectingDevice.currentAP = TargetDevice.DeviceID;
    TargetDevice.connectedDevice.push(ConnectingDevice.DeviceID);

    // Update the asset in the asset registry.
    await Registry.update(ConnectingDevice);
    await Registry.update(TargetDevice);

    // Emit an event for the modified asset.
    let event = getFactory().newEvent('net.ap', 'DeviceConnected');
    event.deviceFrom = tx.deviceFrom;
    event.deviceTo = tx.deviceTo;
    emit(event);
}

/**
 * Disconnect a Device.
 * @param {net.ap.disconnectDevice} disconnectDevice
 * @transaction
 */
async function disconnectDevice(tx) {
    // Get the asset registry for the asset.
    const Registry = await getParticipantRegistry('net.ap.Device');
    var DisconnectingDevice = await Registry.get(tx.deviceFrom)
    var TargetDevice = await Registry.get(tx.deviceFrom)

    DisconnectingDevice.currentAP = "";
    TargetDevice.connectedDevice = TargetDevice.connectedDevice.filter(e=> e !==DisconnectingDevice.DeviceID);

    // Update the asset in the asset registry.
    await Registry.update(DisconnectingDevice);
    await Registry.update(TargetDevice);

    // Emit an event for the modified asset.
    let event = getFactory().newEvent('net.ap', 'DeviceDisconnected');
    event.deviceFrom = tx.deviceFrom;
    event.deviceTo = tx.deviceTo;
    emit(event);
}