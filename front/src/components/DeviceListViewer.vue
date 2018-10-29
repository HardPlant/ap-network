<template>
    <div>
        <span>{{message}}</span>
        <button v-on:click="getDeviceList">장비 목록 보기</button>
        <ul v-if="devices !== null"
        v-for="device in devices" :key="device.DeviceID">
            <li>{{device.DeviceID}}</li>
            <li>{{device.currentAP}}</li>
            <li>{{device.deviceMAC}}</li>
            <hr/>
        </ul>
    </div>
</template>

<script>
import consts from "./consts"

export default {
    name:"TestViewer",
    mount: function(){
        this.getDeviceList()
    },
    data:function(){
        return {
            message: "",
            devices: []
        }
    },
    methods:{
        getDeviceList: function(){
            this.message = "Fetching"
            this.$http.get(`${consts.BASE_URI}/net.ap.Device`).then(
                (result)=>{
                    this.devices=result["data"];
                    this.message = ""
                })
        }
    }

}
</script>

<style>

</style>
