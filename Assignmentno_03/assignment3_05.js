// 5.	Change the donkeys name
// a.	Build a complete UI by using jquery on presentation, real server side with database where scenario is very simple, 
//     if we give acno, balance should appear.
// b.	In one textbox we type accno, when blur event occurs show the balance, should appear  next to the acno textbox.

let express=require('express');
let app=express();
app.use(express.static("static"));

let mysql2=require('mysql2');
let connection=mysql2.createConnection({
    host: 'localhost',
    user:'root',
    password:'cdac',
    database:'pleasework',
    port:3306

});

app.get('/getbalance',(req,res)=>{
    let accno=req.query.accno;
    let output={status:false,balance:""};
    connection.query('select balance from que5 where accno=?',[accno],(error,result)=>{
        if(error){
            console.log(error);
        }
        else{
            console.log(result);
            if(result.length>0){
                output.status=true;
                output.balance=result[0].balance;
            }
        }
        res.send(output);
    });
});

app.listen(900,()=>{

});

