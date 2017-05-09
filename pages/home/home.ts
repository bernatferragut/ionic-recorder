import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Recorder } from './../../providers/recorder'; // we import the Recorder Service
import { MediaObject } from '@ionic-native/media';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  recMediaList: MediaObject[];

  constructor(public navCtrl: NavController, public recorder: Recorder) { // we inject the Recorder Service
    this.recMediaList = this.recorder.mediaList;
   } 
   
   startRecording(){
     this.recorder.onStartRecord();
   }

   stopRecording(){
     this.recorder.onStopRecord();
     this.recMediaList = this.recorder.mediaList;
   }

   play(){
     this.recorder.onPlay();
   }
   pause(){
     this.recorder.onPause();
   }

   stop(){
     this.recorder.onStop();
   }
}
