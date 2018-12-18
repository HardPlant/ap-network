const BASE_URL = "localhost:3000/api";

class Device {
    constructor(deviceMAC){
        this.DeviceID = getTimeStamp();
        this.connectedDevice = [];
        this.currentAP = "";
        this.deviceMac = deviceMAC;
    }
}

var axios = {
    get: ()=>{},
    post: ()=>{},
    put: ()=>{},
    delete: ()=>{}
}

var BlockchainModel = {
    connectDevice : function() {

    },
    disconnectDevice : function() {

    },
    registerDevice : function() {

    },
    getDevice : function() {
        axios.get("BASE_URL"+"/net.ap.Device").then(function(result){
            deviceList = JSON.parse(result);
            for(result)
        });
    },
    addDevice : function() {

    },
}

var APDeviceController = {
    ARPChanged : function() {
         
    },
    DeviceConnected : function() {

    },
    DeviceDisconnected : function() {

    },
}

var WebController = {
    AddDevice : function(deviceMAC) {
        BlockchainModel.addDevice(new Device(deviceMAC));
    },
    RemoveDevice : function(deviceID) {
        BlockchainModel.removeDevice(new Device(deviceID));
    }
}