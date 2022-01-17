Webcam.set({
    width: 400,
    height: 300,
    image_format: 'jpeg',
    jpeg_quality: 90
})

camera = document.getElementById("camera")
Webcam.attach('#camera')
function TakeSnapshot() {
    Webcam.snap(function (image) {
        document.getElementById("result").innerHTML = '<img id="capture_image" src="' + image + '">'
    })
}
console.log("ml5 version", ml5.version)
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Age16QCVi/model.json', model_loaded)


function model_loaded(){
    console.log("model is loaded")
}
function Check() {
img=document.getElementById("captured_image")
classifier.classify(img, GotResults)
}

function GotResults(error, results) {
if(error){
    console.log(error)
}
else{
    console.log(results)
    label=results[0].label
    confidence=(results[0].confidence*100).toFixed(2)
    console.log(confidence)

    document.getElementById("name").innerHTML=label
    document.getElementById("confidence").innerHTML=confidence+" %"
}
}