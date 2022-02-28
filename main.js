s_1="";
ob= [];
w="";
h="";
x=0;
y=0;
e1="";

function preload() {
    img1= loadImage("img123.jpg");
    img2= loadImage("2931423.jpg");
    k= loadImage("1.jpg");
}

function setup(){
    canvas= createCanvas(600,500);
    canvas.position(480,300);
    o_b= ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("s1").innerHTML=" : detecting.....";
}

function modelLoaded() {
    console.log("😎😎😎😎😎😎😎😎😎loaded😎😎😎😎😎😎😎😎😎");
    s_1= true;
    o_b.detect(k,g_r);
}

function g_r(error,result) {
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        ob= result;
    }
}

function draw() {
    image(k,25,25,550,450);
    if(s_1 != ""){
        for (i = 0; i < ob.length; i++) {
    
            w= ob[i].width;
            h= ob[i].height;
            x= ob[i].x;
            y= ob[i].y;
            e1= ob[i].label;
            c= ob[i].confidence;
            c= floor(c);
        
            fill("red");
            text(e1,x+5,y+100);
            text(c+"%",x+50,y+100);
            noFill();
            stroke("red");
            rect(x,y,w,h);
            document.getElementById("s1").innerHTML=": "+e1;
            document.getElementById("s2").innerHTML="Baby found";
            o_b.detect(k,g_r); 
    }

}
}