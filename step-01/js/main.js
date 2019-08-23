'use strict';

// On this codelab, you will be streaming only video (video: true).
const mediaStreamConstraints = {
  video: true, // video only. audio는 기본값이 disabled 이다.
};

// Video element where stream will be placed.
const localVideo = document.querySelector('video');

// Local stream that will be reproduced on the video.
let localStream;

// Handles success by adding the MediaStream to the video element.
function gotLocalMediaStream(mediaStream) {
  localStream = mediaStream;
  localVideo.srcObject = mediaStream;
}

// Handles error by logging a message to the console with the error message.
function handleLocalMediaStreamError(error) {
  console.log('navigator.getUserMedia error: ', error);
}

// Initializes media stream.
// getUserMedia 가 호출되면, 브라우저는 camera 에 대한 access 권한을 사용자에게 요청! (물론 처음 access한 경우일 때.)
// getUserMedia 가 성공적으로 호출되면 MediaStream 객체가 리턴된다.
// 이 MediaStream 객체는 srcObject attribute를 통해 media element로 사용된다. (저 위의 gotLocalMediaStream function 참조)
navigator.mediaDevices.getUserMedia(mediaStreamConstraints)
  .then(gotLocalMediaStream).catch(handleLocalMediaStreamError);
