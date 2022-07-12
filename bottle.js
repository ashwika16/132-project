mg="";
status1="";

function preload(){
    img =loadImage('bottles.jpg');
}
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector =ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML ="Status : Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded");
    status1 = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error,results){
    if(error) 
    {
        console.log(error);
        
    }
    else{
        console.log(results);
        object= results;
    }
    
}
