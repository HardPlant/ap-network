<template>
    <div id="ax">
        <button v-on:click="getDeviceList">장비 목록 보기</button>
        <button v-on:click="registerDevice">장비 등록</button>
    </div>
</template>

<script>
const baseURI= 'https://';

export default {
    name: 'ax',
    data: function(){
        return {
            devices : []
        }
    },
    methods: {
        getDeviceList: ()=>{
            this.$http.get(`${baseURI}/`).then(
                (result)=>{

                })
        },
        registerDevice: ()=>{
            this.$http.post(`${baseURI}/`).then(
                (result)=>{

                })
        }
    }
}
</script>

<style>

</style>
