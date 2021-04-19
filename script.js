h6Elem = document.querySelector('#h6Elem')
btnListen = document.querySelector('#btnListen')

SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
recognition = new SpeechRecognition();

var stopVideo = function ( element ) {
    var iframe = element.querySelector( 'iframe');
    var video = element.querySelector( 'video' );
    if ( iframe !== null ) {
        var iframeSrc = iframe.src;
        iframe.src = iframeSrc;
    }
    if ( video !== null ) {
        video.pause();
    }
};

recognition.onstart = function() {
	console.log('yes, Now You can start speeak');
}

recognition.onresult = function (e) {
	resultReceived = e.results[0][0].transcript;
	h6Elem.textContent = resultReceived;
	if (resultReceived === "stop"){
		stopVideo(document.getElementsByTagName("BODY")[0]);
	}
}

btnListen.addEventListener('click', function() {
	h6Elem.textContent = 'listening...'
	recognition.start();
})
