// 2.	Create a table called  item with itemno integer, primary key, itemname varchar(15), price integer, category varchar(15)
// a.	Demonstrate 
// i.	Insert
// ii.	Update  -- category and price
// iii.	Multi select – query on category
// iv.	Single select  -- query on itemno.
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

connection.query("insert into item values(?,?,?,?) ",[10,"xyz",100,"abc"],(error,result)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
    }
});
