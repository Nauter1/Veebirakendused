// sirge joon
function sirgeJoon() {
    // määrame tahvli
    const tahvel=document.getElementById('tahvel');
    if(tahvel.getContext){
        let t=tahvel.getContext('2d'); // anname tahvlinimi on t
        // joon
        t.beginPath();
        t.strokeStyle="red";
        t.lineWidth = 3;
        t.moveTo(50,100) // algus
        t.lineTo(150,200) // lõpp
        t.stroke();
    }
}

function magi() {
    // määrame tahvli
    const kaart=document.getElementById('kaart');
    if(kaart.getContext){
        let t=kaart.getContext('2d'); // anname tahvlinimi on t
        // joon
        t.beginPath();
        t.strokeStyle="blue";
        t.fillStyle="blue";
        t.lineWidth = 1;
        t.moveTo(243,518) // algus
        t.lineTo(369,362)
        t.lineTo(408,401)
        t.lineTo(508,278)
        t.lineTo(608,378)
        t.lineTo(608,518)
        t.lineTo(243,518) // lõpp
        t.stroke();
        t.fill();
    }
    if(kaart.getContext){
        let d=kaart.getContext('2d'); // anname tahvlinimi on t
        // joon
        d.strokeStyle="white";
        d.fillStyle="white";
        d.beginPath();
        d.moveTo(369,362)
        d.lineTo(339,400)
        d.lineTo(349,425)
        d.lineTo(359,415)
        d.lineTo(379,405)
        d.lineTo(408,401)
        d.lineTo(369,362)
        d.stroke();
        d.fill();
    }
    if(kaart.getContext){
        let d=kaart.getContext('2d'); // anname tahvlinimi on t
        // joon
        d.strokeStyle="white";
        d.fillStyle="white";
        d.beginPath();
        d.moveTo(508,278)
        d.lineTo(458,339)
        d.lineTo(468,349)
        d.lineTo(478,339)
        d.lineTo(498,369)
        d.lineTo(528,409)
        d.lineTo(578,345)
        d.lineTo(508,278)
        d.stroke();
        d.fill();
    }

}

function kuu(){
    const kaart=document.getElementById('kaart');
    if(kaart.getContext){
        let t=kaart.getContext('2d');
        t.beginPath();
        t.strokeStyle="white";
        t.fillStyle="white";
        t.linewidth = 2;
        t.arc(80,80,60,0,2*Math.PI,true);
        t.stroke();
        t.fill();
    }
    if(kaart.getContext){
        let t=kaart.getContext('2d');
        t.beginPath();
        t.strokeStyle="silver";
        t.fillStyle="silver";
        t.linewidth = 2;
        t.arc(80,100,20,0,2*Math.PI,true);
        t.stroke();
        t.fill();
    }
    if(kaart.getContext){
        let t=kaart.getContext('2d');
        t.beginPath();
        t.strokeStyle="silver";
        t.fillStyle="silver";
        t.linewidth = 2;
        t.arc(60,60,15,0,2*Math.PI,true);
        t.stroke();
        t.fill();
    }
    if(kaart.getContext){
        let t=kaart.getContext('2d');
        t.beginPath();
        t.strokeStyle="silver";
        t.fillStyle="silver";
        t.linewidth = 2;
        t.arc(110,60,12,0,2*Math.PI,true);
        t.stroke();
        t.fill();
    }
    if(kaart.getContext){
        let t=kaart.getContext('2d');
        t.beginPath();
        t.strokeStyle="silver";
        t.fillStyle="silver";
        t.linewidth = 2;
        t.arc(60,100,10,0,2*Math.PI,true);
        t.stroke();
        t.fill();
    }
}

function pilved(){
    const kaart=document.getElementById('kaart');
    if(kaart.getContext){
        let t=kaart.getContext('2d');
        t.beginPath();
        t.strokeStyle="silver";
        t.fillStyle="silver";
        t.linewidth = 2;
        t.arc(180,160,40,0,2*Math.PI,true);
        t.stroke();
        t.fill();
    }
    if(kaart.getContext){
        let t=kaart.getContext('2d');
        t.beginPath();
        t.strokeStyle="silver";
        t.fillStyle="silver";
        t.linewidth = 2;
        t.arc(190,120,50,0,2*Math.PI,true);
        t.stroke();
        t.fill();
    }
    if(kaart.getContext){
        let t=kaart.getContext('2d');
        t.beginPath();
        t.strokeStyle="silver";
        t.fillStyle="silver";
        t.linewidth = 2;
        t.arc(210,135,50,0,2*Math.PI,true);
        t.stroke();
        t.fill();
    }
    if(kaart.getContext){
        let t=kaart.getContext('2d');
        t.beginPath();
        t.strokeStyle="silver";
        t.fillStyle="silver";
        t.linewidth = 2;
        t.arc(250,155,60,0,2*Math.PI,true);
        t.stroke();
        t.fill();
    }

    if(kaart.getContext){
        let t=kaart.getContext('2d');
        t.beginPath();
        t.strokeStyle="silver";
        t.fillStyle="silver";
        t.linewidth = 2;
        t.arc(370,280,40,0,2*Math.PI,true);
        t.stroke();
        t.fill();
    }
    if(kaart.getContext){
        let t=kaart.getContext('2d');
        t.beginPath();
        t.strokeStyle="silver";
        t.fillStyle="silver";
        t.linewidth = 2;
        t.arc(390,260,50,0,2*Math.PI,true);
        t.stroke();
        t.fill();
    }
    if(kaart.getContext){
        let t=kaart.getContext('2d');
        t.beginPath();
        t.strokeStyle="silver";
        t.fillStyle="silver";
        t.linewidth = 2;
        t.arc(410,245,50,0,2*Math.PI,true);
        t.stroke();
        t.fill();
    }
    if(kaart.getContext){
        let t=kaart.getContext('2d');
        t.beginPath();
        t.strokeStyle="silver";
        t.fillStyle="silver";
        t.linewidth = 2;
        t.arc(350,235,60,0,2*Math.PI,true);
        t.stroke();
        t.fill();
    }
}

function helbed(){
    const kaart=document.getElementById('kaart');
    if(kaart.getContext){
        for(let i=0;i<100;i++){
            const randx = Math.random()*600;
            const randy=Math.random()*700;
            let t=kaart.getContext('2d');
            t.beginPath();
            t.strokeStyle="white";
            t.fillStyle="white";
            t.linewidth = 2;
            t.arc(randx,randy,2,0,2*Math.PI,true);
            t.stroke();
            t.fill();
        }

    }
}

function rectJoon(){
    const kaart=document.getElementById('kaart');
    let width=document.getElementById('width');
    let height=document.getElementById('height');
    if(kaart.getContext){
        let t=kaart.getContext('2d');
        t.fillStyle="purple";
        t.fillRect(50,30,width.value,height.value)
    }
}


function puhasta(){
    const kaart=document.getElementById('kaart');
    if(kaart.getContext){
        let t=kaart.getContext('2d');
        t.clearRect(0,0,700,700);
    }
}