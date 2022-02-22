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


//Funcions per canviar el text i la imatge del idioma

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


//Validació per cancel·lar reserva

function validaCancelacio(){

  const cancel = document.querySelector('#cancel').value;

  if (cancel != "Estic d'acord"){
    document.querySelector('#noCancel').innerHTML = "No ho has confirmat" + cancel;
  } else {
    window.location.href = "/index.html";
  }
}

//Validació formulari contacte

function validaContacte(){

  const name = document.querySelector('#nomContact').value;

  const surname1 = document.querySelector('#llinatge1Contact').value;

  const mail = document.querySelector('#emailContact').value;

  const tel = document.querySelector('#telefonContact').value;

  if (name == ""){
    document.querySelector('#nomContact').classList.add('bg-danger', 'text-white');
  } else {
    document.querySelector('#nomContact').classList.remove('bg-danger', 'text-white');
  }

  if (surname1 == ""){
    document.querySelector('#llinatge1Contact').classList.add('bg-danger', 'text-white');
  } else {
    document.querySelector('#llinatge1Contact').classList.remove('bg-danger', 'text-white');
  }

  if (mail == ""){
    document.querySelector('#emailContact').classList.add('bg-danger', 'text-white');
  } else {
    document.querySelector('#emailContact').classList.remove('bg-danger', 'text-white');
  }

  if (tel == ""){
    document.querySelector('#telefonContact').classList.add('bg-danger', 'text-white');
  } else {
    document.querySelector('#telefonContact').classList.remove('bg-danger', 'text-white');
  }


  if (name == "" || surname1 == "" || mail == "" || tel == ""){
    document.querySelector('#campsErronis').innerHTML = "Tots els camps obligatoris s'han de rellenar.";
  } else {
    window.location.href = "/index.html";
  }

}

//Validació alta usuari

function validaAlta(){

  const username = document.querySelector('#userSign').value;

  const name = document.querySelector('#nameSign').value;

  const surname1 = document.querySelector('#surname1Sign').value;

  const mail = document.querySelector('#emailSign').value;

  const password = document.querySelector('#passwordSign').value;

  const location = document.querySelector('#ubiSign').value;

  const tel = document.querySelector('#telSign').value;


  if (username == ""){
    document.querySelector('#userSign').classList.add('bg-danger', 'text-white');
  } else {
    document.querySelector('#userSign').classList.remove('bg-danger', 'text-white');
  }

  if (name == ""){
    document.querySelector('#nameSign').classList.add('bg-danger', 'text-white');
  } else {
    document.querySelector('#nameSign').classList.remove('bg-danger', 'text-white');
  }

  if (surname1 == ""){
    document.querySelector('#surname1Sign').classList.add('bg-danger', 'text-white');
  } else {
    document.querySelector('#surname1Sign').classList.remove('bg-danger', 'text-white');
  }

  if (mail == ""){
    document.querySelector('#emailSign').classList.add('bg-danger', 'text-white');
  } else {
    document.querySelector('#emailSign').classList.remove('bg-danger', 'text-white');
  }

  if (password.length < 8){
    document.querySelector('#passwordSign').classList.add('bg-danger', 'text-white');
  } else {
    document.querySelector('#passwordSign').classList.remove('bg-danger', 'text-white');
  }

  if (location == ""){
    document.querySelector('#ubiSign').classList.add('bg-danger', 'text-white');
  } else {
    document.querySelector('#ubiSign').classList.remove('bg-danger', 'text-white');
  }

  if (tel == ""){
    document.querySelector('#telSign').classList.add('bg-danger', 'text-white');
  } else {
    document.querySelector('#telSign').classList.remove('bg-danger', 'text-white');
  }

  if(username == "" || name == "" || surname1 == "" || mail == "" || password.length < 8 || location == "" || tel == ""){
    document.querySelector('#campsErronis').innerHTML = "Tots els camps obligatoris s'han de rellenar.";
  } else {
    window.location.href = "/index.html";
  }
}