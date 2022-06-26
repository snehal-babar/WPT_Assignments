// 3.	Create a table called  resource with resource id integer, primary key, resourcename varchar(15), status boolean
// a.	Demonstrate 
// i.	Insert
// ii.	Update  -- category and price
// iii.	Multi select – query on status
// iv.	Single select  -- query on resourceid.	

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

connection.query("insert into resource1 values(?,?,?) ",[10,"mno",false],(error,result)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
    }
});