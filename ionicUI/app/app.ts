import { Component,ViewChild } from '@angular/core';  
 import { ionicBootstrap, Platform,MenuController,Nav } from 'ionic-angular';  
 import { StatusBar } from 'ionic-native';  
 import { HomePage } from './pages/home/home';  
 import {ActionSheetPage} from './pages/action-sheet/action-sheet';  
import {AlertPage}from './pages/alert/alert';
import {BadgePage}from './pages/badge/badge';
import {CardsPage}from './pages/cards/cards';
import {AdvancedcardsPage} from './pages/advancedcards/advancedcards';
import {CheckboxPage} from './pages/checkbox/checkbox';
import {DatetimePage} from './pages/datetime/datetime';
import {GesturesPage} from './pages/gestures/gestures';
import {InputsPage} from './pages/inputs/inputs';

import {ListsPage} from './pages/lists/lists';
import {Lists2Page} from './pages/lists-2/lists-2';
import {LoadingPage} from './pages/loading/loading';
import {ModalsPage} from './pages/modals/modals';
import {NavigationPage} from './pages/navigation/navigation';
import {PopoverPage} from './pages/popover/popover';
import {RadiosPage} from './pages/radios/radios';
import {RangesPage} from './pages/ranges/ranges';
import {SearchPage} from './pages/search/search';
import {SegmentPage} from './pages/segment/segment';
import {SelectsPage} from './pages/selects/selects';
import {SlidesPage} from './pages/slides/slides';
import {TabPage} from './pages/tab/tab';
import {ToastPage} from './pages/toast/toast';
import {ToolbarPage} from './pages/toolbar/toolbar';



 @Component({  
   templateUrl: 'build/app.html',  
 })  
 class MyApp {  
  @ViewChild(Nav) nav: Nav;  
  rootPage: any = HomePage;  
  pages: Array<{title: string, component: any}>;  
  constructor(  
   private platform: Platform,  
   private menu: MenuController  
  ) {  
    this.platform.ready().then(() => {  
    StatusBar.styleDefault();  
   }); 

   this.pages = [  
    { title: 'Home', component: HomePage },  
    { title: 'Action Sheets', component: ActionSheetPage },  
        { title: 'Alert', component: AlertPage },  
        { title: 'Badges', component: BadgePage },  
        { title: 'Cards', component: CardsPage },  
        { title: 'Advanced Cards', component: AdvancedcardsPage },  
        { title: 'Checkbox', component: CheckboxPage },  
        { title: 'Date Time', component: DatetimePage },  
        { title: 'Gestures', component: GesturesPage },  
        { title: 'Inputs', component: InputsPage }, 

        { title: 'Lists', component: ListsPage },  
        { title: 'Lists 2', component: Lists2Page },  
        { title: 'Loading', component: LoadingPage },  
        { title: 'Modals', component: ModalsPage },  
        { title: 'Navigation', component: NavigationPage },  
        { title: 'Popover', component: PopoverPage },  
          { title: 'Radios', component: RadiosPage },  
        { title: 'Ranges', component: RangesPage },  
         { title: 'Search', component: SearchPage },  
        { title: 'Segment', component: SegmentPage }, 
          { title: 'Selects', component: SelectsPage },  
        { title: 'Slides', component: SlidesPage },   
          { title: 'Tab', component: TabPage },  
        { title: 'Toast', component: ToastPage },  
        { title: 'Toolbar', component: ToolbarPage },  
   ];  
  }  
  openPage(page) {  
   this.menu.close();  
   this.nav.setRoot(page.component);  
  }  
 }  
 ionicBootstrap(MyApp);  

