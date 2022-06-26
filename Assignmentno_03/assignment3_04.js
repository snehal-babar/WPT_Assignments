// 4.	Build a complete UI by using jquery on presentation, real server side with database where scenario is very simple, 
//         if we give pincode, areaname should appear.
// a.	In one textbox we type pincode, when blur event occurs show the area name next to the pincode textbox.

const express =require('express');
const app=express();
app.use(express.static("static"));

const mysql=require('mysql2');
const connection=mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'cdac',
    database:'pleasework',
    port:3306
});


app.get('/getareaname',(req,res)=>{
    let pincode=req.query.pincode;
    let output={status:false,areaname:""};
    connection.query('select areaname from que4 where pincode=?',[pincode],(error,result)=>{
        if(error){
        console.log(error);
        }
        else{
            console.log(result);
            if(result.length>0){
                output.status=true;
                output.areaname=result[0].areaname;
            }
            else{
                console.log("no return");
            }
        }
        res.send(output);
    });

    
});

app.listen(900,()=>{

});