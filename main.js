
Webcam.set ({
    width: 400,
    height: 350,
    image_format: 'png',
    png_quality:90
});

Webcam.attach('#camera');



function snapshot() {

    Webcam.snap(function(data_uri) {
        document.getElementById("results").innerHTML = '<img id="image_taken" src="'+ data_uri +'"/>';
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/[...]model.json', modelloaded)