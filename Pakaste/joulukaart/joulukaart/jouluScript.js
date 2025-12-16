// sirge joon
function fullkaart() {
    magi()
    pilved()
    helbed()
    kuu()
    tekst()
    puu()
    ehted()
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
        t.moveTo(43,518) // algus
        t.lineTo(169,362)
        t.lineTo(208,401)
        t.lineTo(308,278)
        t.lineTo(408,378)
        t.lineTo(408,518)
        t.lineTo(43,518) // lõpp
        t.stroke();
        t.fill();

    }
    if(kaart.getContext){
        let d=kaart.getContext('2d'); // anname tahvlinimi on t
        // joon
        d.strokeStyle="white";
        d.fillStyle="white";
        d.beginPath();
        d.moveTo(169,362)
        d.lineTo(139,400)
        d.lineTo(149,425)
        d.lineTo(159,415)
        d.lineTo(179,405)
        d.lineTo(208,401)
        d.lineTo(169,362)
        d.stroke();
        d.fill();
    }
    if(kaart.getContext){
        let d=kaart.getContext('2d'); // anname tahvlinimi on t
        // joon
        d.strokeStyle="white";
        d.fillStyle="white";
        d.beginPath();
        d.moveTo(308,278)
        d.lineTo(258,339)
        d.lineTo(268,349)
        d.lineTo(278,339)
        d.lineTo(298,369)
        d.lineTo(328,409)
        d.lineTo(378,345)
        d.lineTo(308,278)
        d.stroke();
        d.fill();
    }
    if(kaart.getContext){
        let t=kaart.getContext('2d');
        t.beginPath();
        t.strokeStyle="white";
        t.fillStyle="white";
        t.linewidth = 2;
        t.arc(360,590,150,0,2*Math.PI,true);
        t.stroke();
        t.fill();
    }
    if(kaart.getContext){
        let t=kaart.getContext('2d');
        t.beginPath();
        t.strokeStyle="white";
        t.fillStyle="white";
        t.linewidth = 2;
        t.arc(20,590,130,0,2*Math.PI,true);
        t.stroke();
        t.fill();
    }
    if(kaart.getContext){
        let t=kaart.getContext('2d');
        t.beginPath();
        t.strokeStyle="white";
        t.fillStyle="white";
        t.linewidth = 2;
        t.arc(150,610,130,0,2*Math.PI,true);
        t.stroke();
        t.fill();
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
        t.arc(80,300,40,0,2*Math.PI,true);
        t.stroke();
        t.fill();
    }
    if(kaart.getContext){
        let t=kaart.getContext('2d');
        t.beginPath();
        t.strokeStyle="silver";
        t.fillStyle="silver";
        t.linewidth = 2;
        t.arc(120,290,50,0,2*Math.PI,true);
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

function tekst(){
    const kaart=document.getElementById('kaart');
    if(kaart.getContext){
        const ctx = kaart.getContext("2d");
        ctx.font = "25px Arial";
        ctx.fillStyle = "white";
        ctx.rotate((Math.PI / 180) * 25);
        ctx.fillText("Häid pühi!",260,-40);
        ctx.rotate((Math.PI / 180) * -25);
    }
}

function ehted(){
    const kaart=document.getElementById('kaart');
    if(kaart.getContext){
        let t=kaart.getContext('2d');
        t.beginPath();
        t.fillStyle="yellow";
        t.strokeStyle="yellow";
        t.arc(200,240,15,0,2*Math.PI,true);
        t.stroke();
        t.fill();
    }
    if(kaart.getContext){
        let d=kaart.getContext('2d');
        d.strokeStyle="red";
        d.fillStyle="red";
        d.linewidth = 16;
        d.beginPath();
        d.moveTo(170,278)
        d.lineTo(278,408)
        d.stroke();
        d.fill();
    }
    if(kaart.getContext){
        let t=kaart.getContext('2d');
        t.beginPath();
        t.fillStyle="red";
        t.strokeStyle="red";
        t.arc(220,380,10,0,2*Math.PI,true);
        t.stroke();
        t.fill();
    }
    if(kaart.getContext){
        let t=kaart.getContext('2d');
        t.beginPath();
        t.fillStyle="blue";
        t.strokeStyle="blue";
        t.arc(180,335,10,0,2*Math.PI,true);
        t.stroke();
        t.fill();
    }
    if(kaart.getContext){
        let d=kaart.getContext('2d');
        d.strokeStyle="pink";
        d.fillStyle="pink";
        d.linewidth = 16;
        d.beginPath();
        d.moveTo(130,338)
        d.lineTo(278,500)
        d.stroke();
        d.fill();
    }
    if(kaart.getContext){
        let t=kaart.getContext('2d');
        t.beginPath();
        t.fillStyle="lightgreen";
        t.strokeStyle="lightgreen";
        t.arc(230,320,10,0,2*Math.PI,true);
        t.stroke();
        t.fill();
    }
    if(kaart.getContext){
        let t=kaart.getContext('2d');
        t.beginPath();
        t.fillStyle="lightblue";
        t.strokeStyle="lightblue";
        t.arc(160,400,10,0,2*Math.PI,true);
        t.stroke();
        t.fill();
    }
    if(kaart.getContext){
        let t=kaart.getContext('2d');
        t.beginPath();
        t.fillStyle="pink";
        t.strokeStyle="pink";
        t.arc(230,430,10,0,2*Math.PI,true);
        t.stroke();
        t.fill();
    }
    if(kaart.getContext){
        let t=kaart.getContext('2d');
        t.beginPath();
        t.fillStyle="cyan";
        t.strokeStyle="cyan";
        t.arc(160,460,10,0,2*Math.PI,true);
        t.stroke();
        t.fill();
    }
}

function puu(){
    const kaart=document.getElementById('kaart');
    if(kaart.getContext){
        let t=kaart.getContext('2d');
        t.fillStyle="brown";
        t.fillRect(170,500,50,50)
    }
    if(kaart.getContext){
        // joon
        let t=kaart.getContext('2d');
        t.beginPath();
        t.strokeStyle="green";
        t.fillStyle="green";
        t.lineWidth = 1;
        t.moveTo(100,500) // algus
        t.lineTo(200,370)
        t.lineTo(290,500)
        t.stroke();
        t.fill();
    }
    if(kaart.getContext){
        // joon
        let t=kaart.getContext('2d');
        t.beginPath();
        t.strokeStyle="green";
        t.fillStyle="green";
        t.lineWidth = 1;
        t.moveTo(100,425) // algus
        t.lineTo(200,295)
        t.lineTo(290,425)
        t.stroke();
        t.fill();
    }
    if(kaart.getContext){
        // joon
        let t=kaart.getContext('2d');
        t.beginPath();
        t.strokeStyle="green";
        t.fillStyle="green";
        t.lineWidth = 1;
        t.moveTo(100,375) // algus
        t.lineTo(200,245)
        t.lineTo(290,375)
        t.stroke();
        t.fill();
    }
}


function puhasta(){
    const kaart=document.getElementById('kaart');
    if(kaart.getContext){
        let t=kaart.getContext('2d');
        t.clearRect(0,0,700,700);
    }
}