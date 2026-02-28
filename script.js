function go() {
let url = document.getElementById("youtubeUrl").value;
let videoId = extractVideoId(url);

if(videoId) {
let embedUrl = "https://www.youtube.com/embed/" + videoId;
document.getElementById("result").innerHTML =
`<iframe width="560" height="315" 
    src="${embedUrl}" 
    frameborder="0" 
    allowfullscreen></iframe>`;
} else {
document.getElementById("result").innerHTML = "Lien invalide";
}
}

function extractVideoId(url) {
let regExp = /^.*(youtu\.be\/|v\/|watch\?v=|embed\/)([^#\&\?]*).*/;
let match = url.match(regExp);
return (match && match[2].length === 11) ? match[2] : null;
}