import { Component } from '@angular/core';
import {ModalController, Platform, NavParams, ViewController, NavController} from 'ionic-angular';

/*
  Generated class for the InputsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/modals/modals.html',
})
export class ModalsPage {

   constructor(public modalCtrl: ModalController) { }


   openModal(characterNum) {

    let modal = this.modalCtrl.create(ModalsContentPage, characterNum);
    modal.present();
  }
}

@Component({
   templateUrl: 'build/pages/modals/modal-content.html',
})

class ModalsContentPage {
character;
  characters: Array<{name: string,quote:string,image:any ,items:Array<{title: string, note: any}> }>;  
  constructor(
      public platform: Platform,
      public params: NavParams,
      public viewCtrl: ViewController
  ) {
    this.characters = [
      {
        name: 'Asha',
        quote: 'yoyoyoyoyoyo',
        image: 'img/logo.png',
        items: [
          { title: 'email', note: 'hsuasha@gmail.com' },
          { title: 'location', note: 'Toronto' },
          { title: 'Website', note: 'http://letshelloworld.blogspot.ca' }
        ]
      },
      {
        name: 'Asha Hsu',
        quote: 'hihihihihi!',
        image: 'img/logo.png',
        items: [
          { title: 'language', note: 'English, Mandarin' },
          { title: 'title', note: 'Web/App/Game Developer' },
          { title: 'Website', note: 'http://letshelloworld.blogspot.ca' }
        ]
      },
      {
        name: 'Hsu',
        quote: 'hahahahahahaha',
        image: 'img/logo.png',
        items: [
           { title: 'love', note: 'programming, dog, shopping' },
          { title: 'location', note: 'Toronto' },
          { title: 'Website', note: 'http://letshelloworld.blogspot.ca' }
        ]
      }
    ];
    this.character = this.characters[this.params.get('charNum')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}