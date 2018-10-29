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