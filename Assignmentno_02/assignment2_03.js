// 3.	Nodejs inbuilt module http
// a.	Setup a web server on port 800
// b.	Read a parameter called radius from the url string
// c.	Print the diameter on the browser window.

const http = require('http');
const url=require('url');

http.createServer((req,res)=>{
    let r=url.parse(req.url,true).query;
    let diameter=r.radius*2;
    res.write("Diameter of a circle= "+diameter);
    res.end();
}).listen(1234);