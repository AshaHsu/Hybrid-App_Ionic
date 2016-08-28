import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the GesturesPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/gestures/gestures.html',
})
export class GesturesPage {
  public tap: number = 0;
  public press: number = 0;
  public pan: number = 0;
public swipe:number=0;
  constructor(private navCtrl: NavController) {

  }

   tapEvent(e) {
    this.tap++;
  }
  pressEvent(e) {
    this.press++;
  }
 panEvent(e) {
    this.pan++;
  }

  swipeEvent(e) {
    this.swipe++;
  }
}
