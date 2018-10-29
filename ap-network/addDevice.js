const exec = require("child_process").exec;
const fs = require('fs')

const command = "composer participant add -c admin@ap-network"
for(var i=1; i<=5;i++){
    var json = fs.readFileSync(`device${i}.json`)
    var data = JSON.stringify(JSON.parse(json))
    console.log(data)
    exec(`${command} -d '${data}'`, (error, stdout, stderr)=>{
        console.log(`error: ${error}`)
        console.log(`stdout: ${stdout}`)
        console.log(`stderr: ${stderr}`)
    })
}
process.exit(0)