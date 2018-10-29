const exec = require('child_process').exec;
const cmd = "/usr/bin/env arp -a"

var getARPList = function(){
    return new Promise((res, rej)=>{
        var MAClist = []

        exec(cmd, function(error, stdout, stderr){
            var output = stdout.split("\n");
            for(var i=0; i<output.length; i++){
                var arp = output[i].split(" ");
                MAClist.push(arp[3]);
            }
            res(MAClist)
        })
    });
}
async function main(){
    var list = await getARPList()
    console.log(list)
}

main()