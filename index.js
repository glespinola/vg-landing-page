//EmailJS init
emailjs.init('7sslgbX1XSBX3pwCP')


const btn = document.getElementById('button');
const btnContactar = document.getElementById('contactar')
const name1 = document.querySelector('#name');
const phone = document.querySelector('#phone')
const message = document.querySelector('#message')
const email = document.querySelector('#email')

//Clear inputs
const clearInputs = ()=> {
    name1.value = '';
    phone.value = '';
    message.value = '';
    email.value = '';
}

btnContactar.addEventListener('click', ()=>{
  name1.focus()
})

//Form
document.getElementById('form')
.addEventListener('submit', function(event) {
event.preventDefault();

btn.value = 'Enviando...';

const serviceID = 'default_service';
const templateID = 'template_px51639';

emailjs.sendForm(serviceID, templateID, this)
.then(() => {
    btn.value = 'Enviar';
    //Swal ALert
    const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  Toast.fire({
    icon: 'success',
    title: '¡El correo fue enviado correctamente!'
  })
    clearInputs();
    }, (err) => {

    btn.value = 'Enviar';
    //Swal Alert
    alert(JSON.stringify(err));
    const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  Toast.fire({
    icon: 'error',
    title: '¡Ha ocurrido un error, Por favor intente de nuevo!'
  })
});
});
