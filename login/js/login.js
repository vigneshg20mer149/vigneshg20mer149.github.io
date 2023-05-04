const username=document.forms['form']['username']
const pass=document.forms['form']['pass']

const user_err=document.getElementById('user-err')
const pass_err=document.getElementById('pass-err')



function validate(){
    
    if(username.value.length==0){
        user_err.style.display="block";
        return false
    }
    if(username.value.length!=0 && pass.value.length==0){
        user_err.style.display="none";
        pass_err.style.display="block";
        return false
    }
    if(username.value.length!=0 && pass.value.length!=0){
        user_err.style.display="none";
        pass_err.style.display="none";
    }
    $.ajax({
            url: 'http://localhost/login/php/login.php',
            type: 'POST',
            dataType: 'json',
            data: { username: username, pass: pass },
            success: function(response) {
                if (response.status == 'success') {
                    //window.location.href = 'https:localhost/login/profile.html';
                    login(username,pass);
                    isLoggedIn(); 
                    isLoggedIn();
                } else {
                    $('#error-message').html('Incorrect username or password.');
                }
            }
        });


    
}

function saveSession(user) {
  localStorage.setItem('user', JSON.stringify(user));
}


function getSession() {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
}


function clearSession() {
  localStorage.removeItem('user');
}


function login(username, password) {
  
  if (username === 'myusername' && password === 'mypassword') {
    saveSession({ username });
    return true;
  }
  return false;
}

function isLoggedIn() {
  return getSession() !== null;
}












