// 1.	Theory
// a.	Install mysql2 package.
// b.	Prove db connection works.
// c.	Then start your code
// i.	Don’t think look at the examples we have written in the class and copy paste. And not modify my code..


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



connection.query("select 100 from dual",(error,result)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
    }
});



