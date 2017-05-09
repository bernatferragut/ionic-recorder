import { Injectable } from '@angular/core';
import { MediaPlugin, MediaObject } from '@ionic-native/media'; // Recording Plugin
import { Storage } from '@ionic/Storage'; // Storage Module

@Injectable()
export class Recorder {

  media: MediaObject;
  mediaList: MediaObject[]= [];

  constructor( public mediaplugin: MediaPlugin, public storage: Storage) {  // Import Media and Storage
    const onStatusUpdate = (status) => console.log(status);       //Param1
    const onSuccess = () => console.log('Action is successful.'); //Param2
    const onError = (error) => console.error(error.message);      //Param3
    this.media = this.mediaplugin.create('record.mp3', onStatusUpdate, onSuccess, onError); //mediaObject
    storage.ready().then(() => {
      console.log('Storage is Ready to use');
    });
   }

  onStartRecord(){
      this.mediaList !== null ? this.mediaList[0].release() : []; // if the list is not empty we empty it and release audio
      this.media.startRecord(); 
  }
  
  onStopRecord(){
    this.media.stopRecord(); 
    this.mediaList.push(this.media); // we push the audio in the list
    this.storage.set('myDB', this.mediaList); // Set set a value in the Storage
  }
  // This is to get the list from the DB function call
  getMyList():any {
    return this.storage.get('myDB').then((val) => {
      this.mediaList = val == null ? []: val; //  We get the value stored in the Storage
      //return this.mediaList.slice();
    });
   }
  // Regular Play Buttons
  onPlay(){
    this.mediaList = this.getMyList();
    this.mediaList[0].play(); 
  }

  onPause(){
    this.mediaList = this.getMyList();
    this.mediaList[0].pause();
  }

  onStop(){
    this.mediaList = this.getMyList();
    this.mediaList[0].stop();
  }
}


