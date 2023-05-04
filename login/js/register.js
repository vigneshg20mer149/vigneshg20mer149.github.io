

const signup_msg=document.getElementById('login-msg');

const name=document.forms['form']['name']
const username=document.forms['form']['username']
const pass=document.forms['form']['password']
const email=document.forms['form']['email']
const pass1=document.forms['form']['password1']

const user_err=document.getElementById('user-err')
const pass_err=document.getElementById('pass-err')
const email_err=document.getElementById('email-err')
const name_err=document.getElementById('name-err')
const err_msg=document.getElementById('err-msg')
const pass_err1=document.getElementById('pass-err1')
const len_err=document.getElementById('len-err')

if ( window.history.replaceState ) {
  window.history.replaceState( null, null, window.location.href );
}

function validate(){
    if(name.value.length==0 || username.value.length==0 || email.value.length==0 || pass.value.length==0){
        err_msg.style.display="block";
        return false;
    }
    if(name.value.length!=0 && username.value.length!=0 && email.value.length!=0 && pass.value.length!=0){
        err_msg.style.display="none";
        if(pass.value!=pass1.value){
            pass_err.style.display="block";
            pass_err1.style.display="block";
            return false;
        }
        pass_err.style.display="none";
        pass_err1.style.display="none";
        if(pass.value.length<8){
            len_err.style.display="block";
            return false;
        }
    }
    $(document).ready(function(){
        var sessionId = generateSessionId();
        sessionStorage.setItem('sessionId', sessionId);
        var sessionId = sessionStorage.getItem('sessionId');
        var data={
            name:$('#name').val(),
            username:$('#username').val(),
            password:$('#password').val(),
            email:$('#email').val(),
            action:$('#action').val(),
        }
    $.ajax({

        url: "https:localhost/login/php/register.php",
        type:"POST",
        data:data,
        success:function(response){
            console.log(response);
        },
        error: function(xhr, status, error){
            console.error(error);
        }
    
    }
    ) 

    $.ajax({

        url: "https:localhost/login/php/register.php",
        type:"GET",
        data:data,
        success:function(response){
            console.log(response);
        },
        error: function(xhr, status, error){
            console.error(error);
        }
    
    }
    ) 
    });
}