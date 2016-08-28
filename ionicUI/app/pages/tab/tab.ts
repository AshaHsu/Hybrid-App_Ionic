import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ViewController, Platform} from 'ionic-angular';
/*
  Generated class for the TabPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  template: `
    <ion-header>
      <ion-navbar>
        <button menuToggle>  
    <ion-icon name="menu"></ion-icon>  
   </button>  
        <ion-title>Tabs</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content>
    </ion-content>
`})
class TabTextPage {

  constructor(platform: Platform) {
  }
}


@Component({
   templateUrl: 'build/pages/tab/tab.html',
})
export class TabPage {

  constructor(private navCtrl: NavController) {

  }
 tabOne = TabTextPage;
  tabTwo = TabTextPage;
  tabThree = TabTextPage;
}
