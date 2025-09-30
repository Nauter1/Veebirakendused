function nimiLugemine(){
    // let - muutuja määramine
    let nimi =document.getElementById("nimi");
    let vastus=document.getElementById("vastus");

    // genereerime innerHTML teksti dokumendis
    vastus.innerHTML="Tere, " + nimi.value;
}

function puhasta(){
    // let - muutuja määramine
    let nimi =document.getElementById("nimi");
    let vastus=document.getElementById("vastus");
    let vastus2=document.getElementById("vastus2");

    vastus.innerHTML="Vastusekoht";
    nimi.value="";
    vastus2.style.backgroundColor="white";
}
// taust värviliseks
function varvValik(){
    let vastus2=document.getElementById("vastus2");
    let varv=document.getElementById("varv");

    vastus2.style.backgroundColor=varv.value;
}

function radioValik(){
    let naerata = document.getElementById("naerata");
    let kurvasta = document.getElementById("kurvasta");
    let pilt = document.getElementById("pilt");
    let vastus3=document.getElementById("vastus3");

    if(naerata.checked){
        pilt.src = "images/happy.png";
        vastus3.innerText="YIPPE";
        vastus3.style.color="red"
    }
    else if(kurvasta.checked){
        pilt.src = "images/sad.png";
        vastus3.innerText="boowomp";
        vastus3.style.color="blue"
    }
    else{
        pilt.src = "";
        vastus3.innerText="Tee oma valik!";
        vastus3.style.color="black"
    }
}

function tujuSlider(){
    let tuju=document.getElementById("tuju");
    let vastus4=document.getElementById("vastus4");


    if(tuju.value<=30){
        vastus4.innerHTML="Tuju slider näitab " + tuju.value + " punkti. oh ei!";
    }
    else if(tuju.value<=70){
        vastus4.innerHTML="Tuju slider näitab " + tuju.value + " punkti. hea?!";
    }
    else if(tuju.value>71){
        vastus4.innerHTML="Tuju slider näitab " + tuju.value + " punkti. yippee!";
    }
    else{
        vastus4.innerHTML="Ei saa olla kindel!?"
    }
}

function koolValik(){
    let kool=document.getElementById("kool");
    let vastus5=document.getElementById("vastus5");

    // selectedIndex, 1 rida on nullrida javascriptis
    if(kool.selectedIndex!==0)
    {
        vastus5.innerHTML="Sinu unistuse kool on "+kool.value;
    }
    else{
        vastus5.innerHTML="Tee oma valik!";
    }
}
