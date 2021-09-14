function preload() {

}
function setup() {
    canvas= createCanvas(600,500)
    canvas.position(300,250)
    video= createCapture(VIDEO)
    video.hide()
}

function draw() {
    image(video,0,0,600,500)
    tint(tint_colour)
}

tint_colour=""

function apply_filter() {
    tint_colour= document.getElementById("colourinput").value;
}

function take_snapshot() {
    save("filtered_image.png")
}