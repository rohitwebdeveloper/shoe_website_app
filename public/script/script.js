 
 const hammenu = document.querySelector('.ham-menu');
const ullist= document.querySelector('.ul-list');
hammenu.addEventListener('click',()=>{
    ullist.classList.toggle('active');
    hammenu.classList.toggle('active');
})


function validateform(){
    var name = document.querySelector('#name').value;
    if (name==""){
        document.querySelector('#namerr').innerHTML = 'Please Enter Your Name';
         return false;
    }

    else if(name.length>20){
        document.querySelector("#namerr").innerHTML='The Name is to long';
        return false;
    }
    else if(!isNaN(name)){
        document.querySelector("#namerr").innerHTML='Name cannot be a number';
        return false;
    }

    var email = document.querySelector('#email').value;
    if (email=="") {
        document.querySelector('#emailerr').innerHTML= 'Please Enter Your email ';
        return false;
    }
    
    else if(!isNaN(email)){
        document.querySelector('#emailerr').innerHTML='Please enter correct email address';
        return false;
    }

    else if(email.indexOf('@')<=0){
        document.querySelector('#emailerr').innerHTML='invalid email';
        return false;
    }

}