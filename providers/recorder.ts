import { Injectable } from '@angular/core';
import { MediaPlugin, MediaObject } from '@ionic-native/media'; // Recording Plugin

@Injectable()
export class Recorder {

  media: MediaObject = null;
  mediaList: MediaObject[]= [];
// =====
  constructor( private mediaplugin: MediaPlugin, private mediaObject: MediaObject) { 
    this.media = this.getMediaObject();
    this.mediaList = this.getMediaList();
   }

  getMediaObject(): MediaObject{
    if (this.media === null){
      const onStatusUpdate = (status) => console.log(status);
      const onSuccess = () => console.log('Action is successful.');
      const onError = (error) => console.error(error.message);

      this.media = this.mediaplugin.create('../../assets/recordings/record.mp3', onStatusUpdate, onSuccess, onError);
    }
    return this.media;
  }

  getMediaList(){
    return this.mediaList;
  }
// =====
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
    this.media.pause();
  }

  onStop(){
    this.mediaList[0].stop();
  }

}


