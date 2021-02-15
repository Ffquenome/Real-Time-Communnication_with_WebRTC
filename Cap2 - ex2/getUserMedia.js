/*

//navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia
//|| navigator.mozGetUserMedia;

// Use constraints to ask for a video-only MediaStream:
var constraints = {audio: false, video: true};
var video = document.querySelector("video");
// Callback to be called in case of success...
function successCallback(stream) {
// Note: make the returned stream available to console for inspection
window.stream = stream;

video.srcObject = stream;

// We're all set. Let's just play the video out!
video.play();
}
// Callback to be called in case of failures...
function errorCallback(error){
  console.log("navigator.getUserMedia error: ", error);
}
// Main action: just call getUserMedia() on the navigator object
navigator.mediaDevices.getUserMedia(constraints, successCallback, errorCallback);

*/


/*
Streama a webcan do note no browser. (Não esquecer de usar o Web server do chrome).
*/



'use strict';

// On this codelab, you will be streaming only video (video: true).
const mediaStreamConstraints = {
  video: true,
};

// Video element where stream will be placed.
const localVideo = document.querySelector('video');

// Local stream that will be reproduced on the video.
let localStream; 
/*
 esse let declara a variavel somente aqui (poderia ser 
 somente dentro de uma função por exemplo);
*/


// Handles success by adding the MediaStream to the video element.
function gotLocalMediaStream(mediaStream) {
  localStream = mediaStream; // não faz nada ainda
  localVideo.srcObject = mediaStream;
}

// Handles error by logging a message to the console with the error message.
function handleLocalMediaStreamError(error) {
  console.log('navigator.getUserMedi eraror: ', error);
}

// Initializes media stream.
navigator.mediaDevices.getUserMedia(mediaStreamConstraints)
  .then(gotLocalMediaStream).catch(handleLocalMediaStreamError);
