function eesnimiValik(){
    // let - muutuja määramine
    let eesnimi =document.getElementById("eesnimi");
    let eesnimiresponse=document.getElementById("eesnimiresponse");

    // genereerime innerHTML teksti dokumendis
    eesnimiresponse.innerHTML="Sinu eesnimi on " + eesnimi.value
}
function perenimiValik(){
    // let - muutuja määramine
    let perenimi=document.getElementById("perenimi");
    let perenimiresponse=document.getElementById("perenimiresponse");

    // genereerime innerHTML teksti dokumendis
    perenimiresponse.innerHTML="Sinu perenimi on " + perenimi.value
}

function radioAnkeet(){
    let naine = document.getElementById("naine");
    let mees = document.getElementById("mees");
    let muu = document.getElementById("muu");
    let suguresponse=document.getElementById("suguresponse");

    if(naine.checked){
        suguresponse.innerText="Tere naine!";
        suguresponse.style.color="red"
    }
    else if(mees.checked){
        suguresponse.innerText="Tere härra!";
        suguresponse.style.color="blue"
    }
    else if(muu.checked){
        suguresponse.innerText="Oled hoopis midagi muud!";
        suguresponse.style.color="black"
    }
}

function colorAnkeet(){
    let color=document.getElementById("color");
    let colorresponse=document.getElementById("colorresponse");

    colorresponse.innerHTML="See on su lemmikvärv!"
    colorresponse.style.color=color.value;
}

function nõustumineAnkeet(){
    let nõustumine = document.getElementById("nõustumine");
    let nõustumresponse=document.getElementById("nõustumresponse");
    if(nõustumine.checked){
        nõustumresponse.innerHTML="Aitäh et nõustud!";
    }
    else{
        nõustumresponse.innerHTML="";
    }
}
