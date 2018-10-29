<template>
    <div>
        <md-app-toolbar class="md-primary">
            <span class="md-title">Device List</span>
        </md-app-toolbar>
        <device v-for="device in devices" :key="device.DeviceID"></device>
    </div>
</template>

<script>
import Device from './Device.vue'
import consts from './consts.vue'

export default {
    name:"DeviceList",
    data:function(){
        return {
            devices: [{

            }]
        }
    },
    methods:{
        getDeviceList: function(){
            this.$http.get(`${consts.BASE_URI}/net.ap.Device`).then(
                (result)=>{
                    this.devices=result["data"];
                })
        }
    }
}
</script>

<style>

</style>
