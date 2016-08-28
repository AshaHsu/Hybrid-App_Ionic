import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
/*
  Generated class for the AlertPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/alert/alert.html',
})
export class AlertPage {

  constructor(private navCtrl: NavController, public alertCtrl:AlertController) {

  }

  presentAlert(){
    let alert=this.alertCtrl.create({
      title:'Hello!',
      subTitle:'Welcome to my GitHub, I hope you will find it helpful',
      buttons:['Ok','Yes']

    });
    alert.present();
  }


  presentPromptAlert(){
    let promptAlert=this.alertCtrl.create({
      title:'login',
      message:"enter your name",
      inputs:[
       { name:'first name',
        placeholder:'Asha'},
         { name:'last name',
        placeholder:'Hsu'}
      ],
      buttons: [
        {
          text:'cancel',
          handler:data=>{
            console.log('cancel clicked');
          }
        },{
           text:'submit',
          handler:data=>{
            console.log('submit clicked');
          }
        }
      ]

    });

    promptAlert.present();
  }


  presentRadioAlert(){
let radioAlert=this.alertCtrl.create();
radioAlert.setTitle('color');

radioAlert.addInput({
type:'radio',
label:'blue',
value:'blue',
checked:true
});

radioAlert.addInput({
type:'radio',
label:'red',
value:'red',
checked:false
});


radioAlert.addButton('cancel');
radioAlert.addButton({
text:'ok',
handler:data=>{
}
});
  radioAlert.present();
  }


  presentCheckbox(){
    let checkbox=this.alertCtrl.create();
checkbox.setTitle('What color you like?');
checkbox.addInput({
  type:'checkbox',
  label:'red',
  value:'value1',
  checked:true
});
checkbox.addInput({
  type:'checkbox',
  label:'green',
  value:'value1',
});

checkbox.addInput({
  type:'checkbox',
  label:'blue',
  value:'value2',
});

checkbox.addInput({
  type:'checkbox',
  label:'yellow',
  value:'value1',
});
checkbox.addButton('cancel');
checkbox.addButton({
text:'ok',
handler:data=>{
}
});
  checkbox.present();

  }
}
