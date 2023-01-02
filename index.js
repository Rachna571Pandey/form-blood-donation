const name1=document.getElementById("name1");
const name2=document.getElementById("name2");
const email=document.getElementById("email");
const phone=document.getElementById("phone");

name1.addEventListener('blur',()=>{
    
    let regex=/^[a-zA-Z]([0-9a-zA-Z]){,10}/;
    let str=name1.value;
    console.log(regex,str);
    if(regex.test(str)){
        console.log('it matched');
        name1.classList.remove("is-invalid")

    } 
    else{
        console.log("no matched")
        name1.classList.add("is-invalid")
    }
})


name2.addEventListener('blur',()=>{
    let regex=/^[a-zA-Z]([0-9a-zA-Z]){2,10}/;
    let str=name2.value;
    console.log(regex,str);
    if(regex.test(str)){
        console.log('it matched');
        name2.classList.remove("is-invalid")

    } 
    else{
        console.log("no matched")
        name2.classList.add("is-invalid")
    }

})


email.addEventListener('blur',()=>{
    console.log("email is blurred");

    let regex=/^([_\-\.0-9a-zA-Z]+)@(_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str=email.value;
    console.log(regex,str);
    if(regex.test(str)){
        console.log('it matched');
    email.classList.remove("is-invalid")

    } 
    else{
        console.log("no matched")
        email.classList.add("is-invalid")
    }
})


phone.addEventListener('blur',()=>{
    console.log("phone is blurred");
    let regex=/^[0-9]{10}/;
    let str=phone.value;
    console.log(regex,str);
    if(regex.test(str)){
        console.log('it matched');
        phone.classList.remove("is-invalid")

    } 
    else{
        console.log("no matched")
        phone.classList.add("is-invalid")
    }
})






