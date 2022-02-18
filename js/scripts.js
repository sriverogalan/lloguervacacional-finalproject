var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertTrigger = document.getElementById('liveAlertBtn')

function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible col-9 mx-auto" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
}

if (alertTrigger) {
  alertTrigger.addEventListener('click', function () {
    alert('Els canvis han estat guardats correctament.', 'success')
  })
}

function canviaEsp(){

  const banderaIdioma = document.querySelector('#flagActual');

  const banderaTriada = document.querySelector('#espF').getAttribute('src');
  const textTriat = document.querySelector('#espT').innerHTML;

  document.querySelector('#textActual').innerHTML = textTriat;

  banderaIdioma.setAttribute('src', banderaTriada);
  
}

function canviaCat(){

  const banderaIdioma = document.querySelector('#flagActual');

  const banderaTriada = document.querySelector('#catF').getAttribute('src');
  const textTriat = document.querySelector('#catT').innerHTML;

  document.querySelector('#textActual').innerHTML = textTriat;

  banderaIdioma.setAttribute('src', banderaTriada);
  
}

function canviaFra(){

  const banderaIdioma = document.querySelector('#flagActual');

  const banderaTriada = document.querySelector('#fraF').getAttribute('src');
  const textTriat = document.querySelector('#fraT').innerHTML;

  document.querySelector('#textActual').innerHTML = textTriat;

  banderaIdioma.setAttribute('src', banderaTriada);
  
}

function canviaAle(){

  const banderaIdioma = document.querySelector('#flagActual');

  const banderaTriada = document.querySelector('#aleF').getAttribute('src');
  const textTriat = document.querySelector('#aleT').innerHTML;

  document.querySelector('#textActual').innerHTML = textTriat;

  banderaIdioma.setAttribute('src', banderaTriada);
  
}

function canviaEng(){

  const banderaIdioma = document.querySelector('#flagActual');

  const banderaTriada = document.querySelector('#engF').getAttribute('src');
  const textTriat = document.querySelector('#engT').innerHTML;

  document.querySelector('#textActual').innerHTML = textTriat;

  banderaIdioma.setAttribute('src', banderaTriada);
  
}

function canviaEeuu(){

  const banderaIdioma = document.querySelector('#flagActual');

  const banderaTriada = document.querySelector('#eeuuF').getAttribute('src');
  const textTriat = document.querySelector('#eeuuT').innerHTML;

  document.querySelector('#textActual').innerHTML = textTriat;

  banderaIdioma.setAttribute('src', banderaTriada);
  
}

function canviaIta(){

  const banderaIdioma = document.querySelector('#flagActual');

  const banderaTriada = document.querySelector('#itaF').getAttribute('src');
  const textTriat = document.querySelector('#itaT').innerHTML;

  document.querySelector('#textActual').innerHTML = textTriat;

  banderaIdioma.setAttribute('src', banderaTriada);
  
}

function canviaPor(){

  const banderaIdioma = document.querySelector('#flagActual');

  const banderaTriada = document.querySelector('#porF').getAttribute('src');
  const textTriat = document.querySelector('#porT').innerHTML;

  document.querySelector('#textActual').innerHTML = textTriat;

  banderaIdioma.setAttribute('src', banderaTriada);
  
}

function canviaJap(){

  const banderaIdioma = document.querySelector('#flagActual');

  const banderaTriada = document.querySelector('#japF').getAttribute('src');
  const textTriat = document.querySelector('#japT').innerHTML;

  document.querySelector('#textActual').innerHTML = textTriat;

  banderaIdioma.setAttribute('src', banderaTriada);
  
}