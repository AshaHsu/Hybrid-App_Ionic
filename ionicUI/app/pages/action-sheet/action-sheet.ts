import { Component } from '@angular/core';
import { NavController,ActionSheetController } from 'ionic-angular';

/*
  Generated class for the ActionSheetPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/action-sheet/action-sheet.html',
})
export class ActionSheetPage {

  constructor(private navCtrl: NavController, public actionsheetCtrl:ActionSheetController) {

  }

  presentActionSheet(){
    let actionSheet=this.actionsheetCtrl.create({
    title:'Modify your album',
    buttons:[
      {
        text:'Destructive',
        role:'destructive',
        handler:()=>{
          console.log('Destructive clicked');
        }
      },{
        text:'Archive',
        handler:()=>{
          console.log('Archive clicked');
        }
      },{
        text:'Cancel',
        role:'cancel',
        handler:()=>{
          console.log('Cancel clicked');
        }
      }
    ]

  });
actionSheet.present();
}
}
