window.addEventListener('DOMContentLoaded',()=>{
    let array=[10,20,30,40,50,60,70,80,90];
    let text1=document.querySelector("#text1");
    let add1=document.querySelector("#add1");
    let edit1=document.querySelector("#edit1");
    let delete1=document.querySelector("#delete1");
    let view1=document.querySelector("#view1");
    let show1=document.querySelector("#show1");
    let s=document.querySelector("#s");
    let op=document.querySelector("#op");

    text1.addEventListener('blur',()=>{
        let text2=text1.value;
            for(let i=0;i<array.length;i++){
                if(text2==array[i]){
                    edit1.disabled=false;
                    delete1.disabled=false;
                    s.innerHTML="Present";
                    add1.disabled=true;
                    
                    break;
                }
                else{
                    add1.disabled=false;
                    s.innerHTML="Not Present";
                }
                
            }
        
    });
    add1.addEventListener('click',()=>{
        let text2=text1.value;
            for(let i=0;i<array.length;i++){
                if(text2==array[i]){
                    edit1.disabled=true;
                    delete1.disabled=true;
                    s.innerHTML="Present";
                    add1.disabled=true;
                    
                    break;
                }
                else{
                    array.push(text2);
                    s.innerHTML="Not Present";
                    edit1.disabled=true;
                    delete1.disabled=true;
                    add1.disabled=true;
                    view1.disabled=true;
                    show1.disabled=true;
                }
                
            }
                    
    }); 

    view1.addEventListener('click',()=>{
        op.innerHTML=array;
    });
    edit1.addEventListener('click',()=>{
        let i=0;
        while(i< array.length){
            if(text1.value == array[i])
            break;
            i++;
        }
        console.log(i);
        let newNum=prompt("enter new number");
        array[i]=newNum;
        s.innerHTML="element edited"
        text1.value="";
    });
    delete1.addEventListener('click',()=>{
        let i=0;
        while(i<array.length){
            if(text1.value == arr[i])
            break;
            i++;
        }
        array.splice(i,1);
        s.innerHTML="number deleted";
        text1.value="";
    });
   show1.addEventListener('click',()=>{
    let i=0;
    for(i=0;i<array.length;i++){
        if(i%2 != 0){
            op.innerHTML+=array[i];
        }
    }
   });
    });