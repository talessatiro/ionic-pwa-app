import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';

/**
 * Generated class for the AdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ad',
  templateUrl: 'ad.html',
})
export class AdPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.setRoot();
    console.log('0 - constructor AdPage');
    console.log(this.navParams.data);
  }

  setRoot(){
    this.navCtrl.setRoot(AdPage);
  }

  pushPageAbout (): void {
    this.navCtrl.push(AboutPage);
  }

  popPage() {
    this.navCtrl.pop();
  }

  ionViewCanEnter(): Promise<any> {
    console.log('1 - ionViewCanEnter AdPage');
   return new Promise((resolve, reject) => {
     setTimeout(()=>{
        resolve();
     }, 3000);
   });
    //return true;
  }

  /**
   * Execute quando a pagina foi carregada e esta ativa
   */
  ionViewDidLoad() {
    console.log('2 - ionViewDidLoad AdPage');
  }

  ionViewWillEnter(){
    console.log('3 - ionViewWillEnter AdPage');
  }

  ionViewDidEnter(){
    console.log('4 - ionViewDidEnter AdPage');
  }

  ionViewCanLeave(): boolean{
    console.log('5 - ionViewCanLeave AdPage');
    return true;
  }

  ionViewWillLeave(){
    console.log('6 - ionViewWillLeave AdPage');
  }
  
  ionViewDidLeave(){
    console.log('7 - ionViewDidLeave AdPage');
  }

  ionViewWillUnload(){
    console.log('8 - ionViewWillUnload AdPage');
  }

}
