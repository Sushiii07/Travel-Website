const people = ["images/Image.png", "images/Image2.png", "images/Image3.png"];
const text = ['"On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."',
              '“After going through a number of sites, I had to settle for Jadoo because honestly it was a no brainer trying someone else”',
              '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.”']
const names = ["<b>Mike Taylor</b>", "<b>Sarah Connor</b>", "<b>Chris Thomas</b>"]
const pos = ["Lahore, Pakistan", "Globetrotter", "CEO of Red Button"]
var i=0 
var j=1

var line1 = document.getElementsById("line-1")
var line1Y = 0

function nextImage() {
    i++
    j++
    document.getElementById("changing-image").src = people[(3+i%3)%3]
    document.getElementById("changing-text").innerHTML = text[(3+i%3)%3]
    document.getElementById("name1").innerHTML = names[(3+i%3)%3]
    document.getElementById("name2").innerHTML = names[(3+j%3)%3]
    document.getElementById("position1").innerHTML = pos[(3+i%3)%3]
    document.getElementById("position2").innerHTML = pos[(3+j%3)%3]

}

function prevImage() {
    i--
    j--
    document.getElementById("changing-image").src = people[(3+(i%3))%3]
    document.getElementById("changing-text").innerHTML = text[(3+i%3)%3]
    document.getElementById("name1").innerHTML = names[(3+i%3)%3]
    document.getElementById("name2").innerHTML = names[(3+j%3)%3]
    document.getElementById("position1").innerHTML = pos[(3+i%3)%3]
    document.getElementById("position2").innerHTML = pos[(3+j%3)%3]
}

function dropdown() {
    document.getElementById("navbar-id").classList.toggle("show");

    line1Y += 20;
    line1.style.transform = "translateY(" + line1Y + "px)";
    bird.style.left = line1Y + 'px';
}

