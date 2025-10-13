// checkbox valikud
function valiAnsambel(){
    let abba=document.getElementById("abba");
    let beatle=document.getElementById("beatle");
    let system=document.getElementById("system");
    let viismiinus=document.getElementById("viismiinus");
    let vastus=document.getElementById("vastus");

    let valik="";

    if (abba.checked){
        valik+=abba.value+", ";
    }

    if (beatle.checked){
        valik+=beatle.value+", ";
    }

    if (system.checked){
        valik+=system.value+", ";
    }

    if (viismiinus.checked){
        valik+=viismiinus.value+", ";
    }



    vastus.innerHTML="Sinu valitud muusikud: "+valik;

}

function arvamusAnsambel(){
    let vastus=document.getElementById("arvamusresponse");
    let arvamus=document.getElementById("arvamus");

    vastus.innerHTML="Sinu arvamus:  "+arvamus.value;

}

function tunnidAnsambel(){
    let vastus=document.getElementById("tunnidresponse");
    let tunnid=document.getElementById("tunnid");

    vastus.innerHTML="Sa kuulad muusikat "+ +tunnid.value + " tundi päevas";

}

function raadioAnsambel(){
    let jah=document.getElementById("jah");
    let ei=document.getElementById("ei");
    let raadioresponse=document.getElementById("raadioresponse");
    if (jah.checked){
        raadioresponse.innerText="Raadio Kuulamine: Jah";
    }
    if (ei.checked){
        raadioresponse.innerText="Raadio Kuulamine: Ei";
    }


}

function loeteluAnsambel(){
    let loeteluresponse=document.getElementById("loeteluresponse");
    let loetelu=document.getElementById("loetelu");

    loeteluresponse.innerHTML="Sinu nimetatud jaamad:  "+loetelu.value;

}

function rohkemAnkeet(){
    let classic=document.getElementById("classic");
    let swing=document.getElementById("swing");
    let electro=document.getElementById("electro");
    let dubstep=document.getElementById("dubstep");
    let tradition=document.getElementById("tradition");
    let rock=document.getElementById("rock");
    let rohkemresponse=document.getElementById("rohkemresponse");
    if (classic.checked){
        rohkemresponse.innerText="Sinu vastus: Klassikaline muusika";
    }
    if (swing.checked){
        rohkemresponse.innerText="Sinu vastus: Swing muusika";
    }
    if (electro.checked){
        rohkemresponse.innerText="Sinu vastus: Electro muusika";
    }
    if (dubstep.checked){
        rohkemresponse.innerText="Sinu vastus: Dubstep muusika";
    }
    if (tradition.checked){
        rohkemresponse.innerText="Sinu vastus: Traditsiooniline muusika";
    }
    if (rock.checked){
        rohkemresponse.innerText="Sinu vastus: Rock muusika";
    }


}
function ResetAnsambel(){
    let abba=document.getElementById("abba");
    let beatle=document.getElementById("beatle");
    let system=document.getElementById("system");
    let viismiinus=document.getElementById("viismiinus");
    let vastus=document.getElementById("vastus");
    let arvamusresponse=document.getElementById("arvamusresponse");
    let arvamus=document.getElementById("arvamus");
    let tunnidresponse=document.getElementById("tunnidresponse");
    let tunnid=document.getElementById("tunnid");
    let jah=document.getElementById("jah");
    let ei=document.getElementById("ei");
    let raadioresponse=document.getElementById("raadioresponse");
    let loeteluresponse=document.getElementById("loeteluresponse");
    let loetelu=document.getElementById("loetelu");
    let classic=document.getElementById("classic");
    let swing=document.getElementById("swing");
    let electro=document.getElementById("electro");
    let dubstep=document.getElementById("dubstep");
    let tradition=document.getElementById("tradition");
    let rock=document.getElementById("rock");
    let rohkemresponse=document.getElementById("rohkemresponse");

    abba.checked=false;
    beatle.checked=false;
    system.checked=false;
    viismiinus.checked=false;
    vastus.innerHTML="";
    arvamusresponse.innerHTML="";
    arvamus.innerHTML="";
    tunnidresponse.innerHTML="";
    tunnid.innerHTML="";
    jah.checked=false;
    ei.checked=false;
    raadioresponse.innerHTML="";
    loeteluresponse.innerHTML="";
    loetelu.innerHTML="";
    classic.checked=false;
    swing.checked=false;
    electro.checked=false;
    dubstep.checked=false;
    tradition.checked=false;
    rock.checked=false;
    rohkemresponse.innerHTML="";
}

function FinalAnsambel(){
    let abba=document.getElementById("abba");
    let beatle=document.getElementById("beatle");
    let system=document.getElementById("system");
    let viismiinus=document.getElementById("viismiinus");
    let vastus=document.getElementById("valikvastus");
    let arvamusresponse=document.getElementById("finalarvamusresponse");
    let arvamus=document.getElementById("arvamus");
    let tunnidresponse=document.getElementById("finaltunnidresponse");
    let tunnid=document.getElementById("tunnid");
    let jah=document.getElementById("jah");
    let ei=document.getElementById("ei");
    let raadioresponse=document.getElementById("finalraadioresponse");
    let loeteluresponse=document.getElementById("finalloeteluresponse");
    let loetelu=document.getElementById("loetelu");
    let classic=document.getElementById("classic");
    let swing=document.getElementById("swing");
    let electro=document.getElementById("electro");
    let dubstep=document.getElementById("dubstep");
    let tradition=document.getElementById("tradition");
    let rock=document.getElementById("rock");
    let rohkemresponse=document.getElementById("finalrohkemresponse");

    let valik="";

    if (abba.checked){
        valik+=abba.value+", ";
    }

    if (beatle.checked){
        valik+=beatle.value+", ";
    }

    if (system.checked){
        valik+=system.value+", ";
    }

    if (viismiinus.checked){
        valik+=system.value+", ";
    }



    vastus.innerHTML="Millised muusikuid/ansambleid sa tead? Sinu valitud muusikud: "+valik;

    arvamusresponse.innerHTML="Mida arvad muuisika kuulamisest koolis? Sinu arvamus:  "+arvamus.value;

    tunnidresponse.innerHTML="Mitu tundi päevas sa kuulad muusikat? Sa kuulad muusikat "+ +tunnid.value + " tundi päevas";

    if (jah.checked){
        raadioresponse.innerText="Kas sa kuulad Raadiot? Sinu vastus: Jah";
    }
    if (ei.checked){
        raadioresponse.innerText="Kas sa kuulad Raadiot? Sinu vastus: Ei";
    }

    loeteluresponse.innerHTML="Milliseid raadiojaamu oskad nimetada? Sinu nimetatud jaamad:  "+loetelu.value;

    if (classic.checked){
        rohkemresponse.innerText="Millist muusikat sa kõige rohkem kuulad? Sinu vastus: Klassikaline muusika";
    }
    if (swing.checked){
        rohkemresponse.innerText="Millist muusikat sa kõige rohkem kuulad? Sinu vastus: Swing muusika";
    }
    if (electro.checked){
        rohkemresponse.innerText="Millist muusikat sa kõige rohkem kuulad? Sinu vastus: Electro muusika";
    }
    if (dubstep.checked){
        rohkemresponse.innerText="Millist muusikat sa kõige rohkem kuulad? Sinu vastus: Dubstep muusika";
    }
    if (tradition.checked){
        rohkemresponse.innerText="Millist muusikat sa kõige rohkem kuulad? Sinu vastus: Traditsiooniline muusika";
    }
    if (rock.checked){
        rohkemresponse.innerText="Millist muusikat sa kõige rohkem kuulad? Sinu vastus: Rock muusika";
    }


}