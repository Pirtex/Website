var calendly = document.getElementById("Cal")
var image = document.getElementById("p-image")

function isMobile() {
  return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

if (isMobile()) {
  calendly.style.position = "absolute"
  calendly.style.zIndex = "-1000"
  calendly.style.transform = "scale(0.1)"
  image.innerHTML = '<img class="p-image" src="book-a-call.png" />'
}
else
{
  calendly.style.position = "relative"
  calendly.style.left = "0px"
  image.innerHTML = ""
}