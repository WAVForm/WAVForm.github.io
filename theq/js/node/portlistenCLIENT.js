const http = require(`http`);
const ngrok = require('ngrok');
const {exec} = require('child_process');

const host = `localhost`;
const port = 8000;
let clientServerIP = ``;
const webServerIP = `https://justyunis.xyz/qport/`;

async function getTunnel() {
    await ngrok.disconnect();
    await ngrok.kill();
    const url = await ngrok.connect(port);
    let body = {"host":url}
    console.log(body);
    fetch(webServerIP+`newhost`, {
        method: "POST",
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(body)
    });
    setTimeout(getTunnel, 1800000);
}

getTunnel();

const listener = function(req, res){
    let data = "";
    req.on('data', (chunk)=>{
        data += chunk;
    })
    req.on('end', ()=>{
        let body = JSON.parse(data);
    if(req.method == `POST` && req.url == `/song`){
        console.log(JSON.stringify(body));

        exec(`cd "C:\\Program Files\\VideoLAN\\VLC" && vlc ${body.url} --one-instance --playlist-enqueue`, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
        });
    }

    res.writeHead(200, {'Content-Type':'text/plain'})
    res.end(`OK`); 
})}

const serv = http.createServer(listener);
serv.listen(port,host,()=>{
    console.log(`Server running on http://${host}:${port}`)
})
