
function cambiarcolor() {
  let color = document.getElementById("fondo").value;
  document.getElementById("divbody").style.backgroundColor = color;
}



function getLocation() {
  var x = document.getElementById("demo");

  if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
  var x = document.getElementById("demo");
  x.innerHTML = "Latitud: " + position.coords.latitude + 
  "<br>Longitud: " + position.coords.longitude;
}

function allowDrop(ev) {
  ev.preventDefault();
  ev.target.classList.add('hover');
  
}

function drag(ev) {
  dragSrcEl = this;
  ev.dataTransfer.setData("text", ev.target.id);
  ev.target.classList.remove('hover');
  
}

function drop(ev) {
    ev.target.classList.remove('hover');
 
    ev.preventDefault();
  
    var data = ev.dataTransfer.getData("text");

    const id = ev.dataTransfer.getData('text');
    const numero = id.split('-')[1];

    const id2 =ev.target.id;
    const numero2 = id2.split('-')[1];
    
    if (numero2 == numero) {
      ev.target.appendChild(document.getElementById(data));
    }
    

    console.log(numero);
    console.log(numero2);
    
}

function onleave(ev){
  ev.target.classList.remove('hover');
}