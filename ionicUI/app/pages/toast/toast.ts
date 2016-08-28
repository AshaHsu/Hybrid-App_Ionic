import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';

/*
  Generated class for the ToastPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/toast/toast.html',
})
export class ToastPage {

  constructor(private navCtrl: NavController,public toastCtrl: ToastController) {

  }
 presentToast() {
    let toast = this.toastCtrl.create({
      message: 'User was added successfully',
      duration: 3000
    });
    toast.present();
  }
}
