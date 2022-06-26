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

connection.query("select * from item where price < ? ",[250],(error,result)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
    }
});