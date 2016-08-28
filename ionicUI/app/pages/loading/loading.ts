import { Component } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';

/*
  Generated class for the LoadingPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/loading/loading.html',
})
export class LoadingPage {

  constructor(private navCtrl: NavController, public loadCtrl:LoadingController) {

  }
precentLoading(){
  let loading =this.loadCtrl.create({
    content:"please Wait...",
    duration:3000
  });

  loading.present();
}
}
