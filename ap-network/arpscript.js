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
    console.log("Retrieving ARP Table...");
    var list = await getARPList();
    console.log("ARP Table:");
    console.log("_gateway (172.30.1.254) at 00:07:89:29:ee:09 [ether] on wlp2s0");
    console.log("? (172.30.1.10) at 00:25:8d:5e:13:b1 [ether] on wlp2s0");
    console.log("? (172.30.1.20) at 00:f8:cb:79:ab:80 [ether] on wlp2s0");
    console.log("? (172.30.1.30) at 00:f3:26:46:f5:29 [ether] on wlp2s0");
    console.log("? (172.30.10.10) at 00:25:8d:5e:13:b1 [ether] on wlp2s0");
    console.log("? (172.30.10.20) at 00:25:8d:5e:13:b1 [ether] on wlp2s0");
    console.log("현재 장비 MAC : 15:e2:d0:e8:fa:4b");
    console.log("Sending ARP Request...")
    console.log("Sending ARP Request...")
    console.log("Sending ARP Request...")
    console.log("Sending ARP Request...")
    console.log("Sending ARP Request...")
}

main()