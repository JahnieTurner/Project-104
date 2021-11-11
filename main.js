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
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Age16QCVi/model.json', model_loaded)