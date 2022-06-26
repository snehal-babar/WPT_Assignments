window.addEventListener('DOMContentLoaded',()=>{
    let empno1=document.querySelector("#empno");
    let empname1=document.querySelector('#empname');
    let email1=document.querySelector('#email');
    let deptid1=document.querySelector('#deptid');
    

    let add=document.querySelector("#add");
    let modify=document.querySelector("#modify");
    let remove=document.querySelector("#remove");
    let view=document.querySelector("#view");
    let viewonid=document.querySelector("#viewonid");
    let s=document.querySelector("#s");
    let op=document.querySelector("#op");

    const emp=[{empno:1,empname:"snehal",email:"snehal@abc",deptid:10},
                {empno:2,empname:"mayuri",email:"mayuri@abc",deptid:20}
                ];
        if(empno1.value == ''){
                modify.disabled=true;
                remove.disabled=true;
                add.disabled=true;
               } 
              
    empno1.addEventListener('blur',()=>{
        
        for(let i=0;i<emp.length;i++){
            if(empno1.value == emp[i].empno){
                
                modify.disabled=false;
                remove.disabled=false;
                add.disabled=true;
                break;
            }
            else{
                modify.disabled=true;
                remove.disabled=true;
                add.disabled=false;
            }
        }
    });
    add.addEventListener('click',()=>{
        if(empname1.avlue != '' && email1.value != '' && deptid1 != '' ){
            emp.push({empno:empno1.value,empname:empname1.value,email:email1.value,deptid:deptid1.value});
            op.innerHTML="element added successfully";
        }
        else{
            op.innerHTML="element not added successfully";
        }
        empno1.value='';
        empname1.value='';
        email1.value='';
        deptid1.value='';
        
    });
    modify.addEventListener('click',()=>{
            let i=0;
            while(i<emp.length){
                if(empno1.value ==emp[i].empno){
                    break;
                    i++;
                }
            }
            let newempno=prompt("enter new empno");
            emp[i].empno=newempno;
            let newempname=prompt("enter new emp name");
            emp[i].empname=newempname;
            let newemail=prompt("enter new email");
            emp[i].email=newemail;
            let newdeptid=prompt("enter new deptid");
            emp[i].deptid=newdeptid;

            s.innerHTML="element edited";
            empno1.value='';
            empname1.value='';
            email1.value='';
            deptid1.value='';
    });

    view.addEventListener('click',()=>{
        op.innerHTML='';
        for(let i=0;i<emp.length;i++){
            op.innerHTML+='<span>'+emp[i].empno+'<span>'+"  ";
            op.innerHTML+='<span>'+emp[i].empname+'<span>'+"  ";
            op.innerHTML+='<span>'+emp[i].email+'<span>'+"  ";
            op.innerHTML+='<span>'+emp[i].deptid+'<span>'+"  ";
            op.innerHTML+='<br>';
        }
    });
    remove.addEventListener('click',()=>{
        let i;
        for(i=0;i<emp.length;i++){
            if(empno1.value == emp[i].empno){
                break;
            }
          
        }
        emp.splice(i,1);
        s.innerHTML="element removed";
        empno1.value='';
        empname1.value='';
        email1.value='';
        deptid1.value='';
    });
    viewonid.addEventListener('click',()=>{
        op.innerHTML='';
       
        for(let i=0;i<emp.length;i++){
            if(deptid1.value==emp[i].deptid){
               
                op.innerHTML+='<span>'+emp[i].empno+'</span>'+"  ";
                op.innerHTML+='<span>'+emp[i].empname+'</span>'+"  ";
                op.innerHTML+='<span>'+emp[i].email+'</span>'+" ";
                op.innerHTML+='<span>'+emp[i].deptid+'</span>'+" ";
                op.innerHTML+='<br>';
                

            }
        }
    });

});