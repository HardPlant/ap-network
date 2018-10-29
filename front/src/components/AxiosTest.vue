<template>
    <div id="ax">
        <p v-bind="message">{{message}}</p>
        <button v-on:click="getDeviceList">장비 목록 보기</button>
        <button v-on:click="registerDevice">연결 트랜잭션</button>
        <button v-on:click="registerDevice">연결 해제 트랜잭션</button>
    </div>
</template>

<script>
const baseURI= 'http://localhost:3000/api';
import axios from 'axios'

export default {
    name: 'ax',
    data: function(){
        return {
            message: "",
            devices : []
        }
    },
    methods: {
        getDeviceList: function(){
            this.$http.get(`${baseURI}/net.ap.Device`).then(
                (result)=>{
                    this.devices=result["data"];
                    this.message=this.devices[0]["DeviceID"];
                })
        },
        setDeviceList: function(){
            this.$http.post(`${baseURI}/`).then(
                (result)=>{
                    this.message=result;

                })
        },
        registerDevice: function(){
            this.$http.post(`${baseURI}/`).then(
                (result)=>{
                    this.message=result;

                })
        },
        connectDevice: function(){
            var transaction = {
                "$class": "net.ap.registerDevice",
                "newDeviceMAC": "string",
                "time": "string",
                "deviceFrom": "string",
                "transactionId": "string",
                "timestamp": "2018-10-29T04:48:31.437Z"
                }
            this.$http.post(`${baseURI}/`).then(
                (result)=>{
                    this.message=result;
                
                })
        },
        getConnectionTransaction: function(){
            this.$http.post(`${baseURI}/`).then(
                (result)=>{
                    this.message=result;

                })
        },
        disconnectDevice: function(){
            this.$http.post(`${baseURI}/`).then(
                (result)=>{
                    this.message=result;
                })
        },
    }
}
</script>

<style>

</style>
