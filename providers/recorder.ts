import { Injectable } from '@angular/core';
import { MediaPlugin, MediaObject } from '@ionic-native/media'; // Recording Plugin

@Injectable()
export class Recorder {

  media: MediaObject;
  mediaList: MediaObject[]= [];
// =====
  constructor( private mediaplugin: MediaPlugin) { 
    const onStatusUpdate = (status) => console.log(status);       //Param1
    const onSuccess = () => console.log('Action is successful.'); //Param2
    const onError = (error) => console.error(error.message);      //Param3
    this.media = this.mediaplugin.create('record.mp3', onStatusUpdate, onSuccess, onError); //mediaObject
   }

  onStartRecord(){
      this.mediaList !== null ? this.mediaList[0].release() : []; // if the list is not empty we empty it and release audio
      this.media.startRecord(); 
  }
  
  onStopRecord(){
    this.media.stopRecord(); 
    this.mediaList.push(this.media); // we paush the audio in the list
  }

  onPlay(){
    this.mediaList[0].play();
  }

  onPause(){
    this.mediaList[0].pause();
  }

  onStop(){
    this.mediaList[0].stop();
  }

}


