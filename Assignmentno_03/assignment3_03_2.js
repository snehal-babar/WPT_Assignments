const express =require('express');
const app=express();

const mysql=require('mysql2');
const connection=mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'cdac',
    database:'pleasework',
    port:3306
});

connection.query("update resource1 set resourcename=? where resourceid=? ",["pqr",10],(error,result)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
    }
});