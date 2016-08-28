import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the SelectsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/selects/selects.html',
})
export class SelectsPage {


  musicAlertOpts: { title: string, subTitle: string };

  constructor() {
    this.musicAlertOpts = {
      title: '1994 Music',
      subTitle: 'Select your favorite'
    };
  }

  stpSelect() {
    console.log('STP selected');
  }

}
