import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  template: `
    <ion-header>
      <ion-navbar light>
                    <ion-searchbar (input)="getItems($event)"></ion-searchbar>

      </ion-navbar>
    </ion-header>
    <ion-content padding>
      <button block (click)="goBack()">Go Back to Beginning</button>
    </ion-content>
  `
})
export class Page4 {
  constructor(public nav: NavController) {

  }

  goBack() {
    this.nav.setRoot(ToolbarPage);
  }
}


@Component({
  template: `
    <ion-header>
      <ion-navbar danger>
        <ion-title>Toolbar: Danger</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content padding>
      <button block (click)="pushPage()">Next Page</button>
    </ion-content>
  `
})
export class Page3 {
  constructor(public nav: NavController) {

  }

  pushPage() {
    this.nav.push(Page4);
  }
}


@Component({
  template: `
    <ion-header>
      <ion-navbar secondary>
      <ion-title>Toolbar: Secondary</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content padding>
      <button block (click)="pushPage()">Next Page</button>
    </ion-content>
  `
})
export class Page2 {
  constructor(public nav: NavController) {

  }

  pushPage() {
    this.nav.push(Page3);
  }

}


@Component({
    // templateUrl: 'build/pages/toolbar/toolbar.html',

     template: `
    <ion-header>
      <ion-navbar blue>
       <button menuToggle>  
    <ion-icon name="menu"></ion-icon>  
   </button>  
    
 <ion-segment>
      <ion-segment-button value="new">
        New
      </ion-segment-button>
      <ion-segment-button value="hot">
        Hot
      </ion-segment-button>
    </ion-segment>




          <ion-buttons end>
      <button royal>
        <ion-icon name="person-add"></ion-icon>
      </button>
    </ion-buttons>
      </ion-navbar>
     
    </ion-header>
    <ion-content padding>
      <button block (click)="pushPage()">Next Page</button>
    </ion-content>

     <ion-footer>
  <ion-toolbar>
    <p>Ash, Misty, Brock</p>
    <ion-buttons end>
      <button royal>
        Send
        <ion-icon name="send"></ion-icon>
      </button>
    </ion-buttons>
  </ion-toolbar>
</ion-footer>
  `
})
export class ToolbarPage {
  constructor(public nav: NavController) {

  }

  pushPage() {
    this.nav.push(Page2);
  }

}
