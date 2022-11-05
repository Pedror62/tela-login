var email = document.getElementById('email');
var password = document.getElementById('password');

email.addEventListener('focus',()=>{
    email.style.borderColor = '#5f7cba'

});
email.addEventListener('blur',()=>{
    email.style.borderColor = '#ccc';
});

password.addEventListener('focus',()=>{
    password.style.borderColor = '#5f7cba'

});
password.addEventListener('blur',()=>{
    password.style.borderColor = '#ccc' 
});   



let Enviar = window.document.querySelector('#Enviar');
Enviar.addEventListener('click',function() {
    alert('Aguarde login!!')
});


let esqueci = window.document.querySelector('#esqueci');
esqueci.addEventListener('click', function(){
    alert('Solicita envia para recuperação')
});

