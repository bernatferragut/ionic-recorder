import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MediaPlugin, MediaObject } from '@ionic-native/media'; // Recording Plugin

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  audio: MediaObject;
  audioList: MediaObject[]= [];

  constructor(public navCtrl: NavController, private media: MediaPlugin) {  }

  // Lifecycle Hookup
  ionViewDidEnter(){
    const onStatusUpdate = (status) => console.log(status);
    const onSuccess = () => console.log('Action is successful.');
    const onError = (error) => console.error(error.message);

    this.audio  = this.media.create('record.mp3', onStatusUpdate, onSuccess, onError);
  }

  onStartRecord(){
      this.audioList !== null ? this.audioList[0].release() : [];
      this.audio.startRecord(); 
  }
  
  onStopRecord(){
    this.audio.stopRecord(); 
    this.audioList.push(this.audio); // we paush the audio in the list
  }

  onPlay(){
    //this.audio.play();
    this.audioList[0].play();
  }

  onPause(){
    this.audio.pause();
  }

  onStop(){
    //this.audio.stop();
    this.audioList[0].stop();
  }

}
