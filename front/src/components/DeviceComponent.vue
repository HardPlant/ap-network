<template>
    <div>
        <md-card md-with-hover>
            <md-ripple>
            <md-card-header>
                <div class="md-title">{{device.DeviceID}}</div>
            </md-card-header>
            <md-card-content>
                <md-table>
                    <md-table-row>
                        <md-table-head>ID</md-table-head>
                        <md-table-head>MAC</md-table-head>
                        <md-table-head>Connected AP</md-table-head>
                    </md-table-row>
                    <md-table-row>
                        <md-table-cell>{{device.DeviceID}}</md-table-cell>
                        <md-table-cell>{{device.deviceMAC}}</md-table-cell>
                        <md-table-cell>{{device.currentAP}}</md-table-cell>
                    </md-table-row>
                </md-table>
            </md-card-content>
            <md-card-actions>
                <md-button
                v-for="item in device.connectedDevice"
                :key="item.DeviceID">
                    {{item.DeviceID}}
                </md-button>
            </md-card-actions>
            </md-ripple>
        </md-card>
    </div>
</template>

<script>
export default {
    name: "DeviceListCard",
    props: ['device']
}
</script>

<style>
  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>
