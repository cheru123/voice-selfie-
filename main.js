camera=document.getElementById("d1")

Webcam.set({ 
    width:300,
    height:200,
    image_format:"jpeg",
    jpeg_quality:100
});

var Speechrecognition=window.webkitSpeechRecognition;

var recognition=new Speechrecognition();

function start(){

    document.getElementById("d2").innerHTML="";

    recognition.start();
}

recognition.onresult=function(event){

    console.log(event);

    var content=event.results[0][0].transcript;

    if(content=="peace"){

        speak();
    }
}
function speak(){

    Webcam.attach('#d1')
    var cherry=window.speechSynthesis;
    speakdata="say cheese    taking your selfie in 5 4 3 2 1"
    utterthis=new SpeechSynthesisUtterance(speakdata);
    cherry.speak(utterthis);
}