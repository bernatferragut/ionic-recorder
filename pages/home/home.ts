import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Recorder } from './../../providers/recorder'; // we import the Recorder Service

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, 
              public recorder: Recorder) { } // we inject the Recorder Service
   
   startRecording(){
     this.recorder.onStartRecord();
   }

   stopRecording(){
     this.recorder.onStopRecord();
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
