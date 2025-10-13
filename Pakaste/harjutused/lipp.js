function eestiLipp(){
    const lipp=document.getElementById("lipp")
    if(lipp.getContext){
        let l = lipp.getContext("2d")
        l.fillStyle="blue";
        l.fillRect(0,0,330,70);
        l.fillStyle="black";
        l.fillRect(0,70,330,70);
        l.fillStyle="white";
        l.fillRect(0,140,330,70);
    }
}

function franceLipp(){
    const lipp=document.getElementById("lipp")
    if(lipp.getContext){
        let l = lipp.getContext("2d")
        l.fillStyle="blue";
        l.fillRect(0,0,110,210);
        l.fillStyle="white";
        l.fillRect(110,0,110,210);
        l.fillStyle="red";
        l.fillRect(220,0,110,210);
    }
}

function canadaLipp(){
    const lipp=document.getElementById("lipp")
    const fail=new Image();
    fail.src="images/Flag_of_Canada_(leaf).png";
    if(lipp.getContext){
        let l = lipp.getContext("2d")
        l.fillStyle="red";
        l.fillRect(0,0,90,210);
        l.fillStyle="white"
        l.fillRect(90,0,300,210)
        fail.onload=()=> {
            l.drawImage(fail, 95, 40, 141, 144)
        }
        l.fillStyle="red";
        l.fillRect(240,0,90,210);
    }
}