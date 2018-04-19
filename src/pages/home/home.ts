import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { AdPage } from '../ad/ad';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
     public loading: LoadingController,
    public alert: AlertController) {

  }

  pushPage (): void {
    const load = this.loading.create({
      content: 'Por Favor aguarde ...'
    });

    load.present();
    this.navCtrl.push(AdPage, {type: 'page'}).then((data)=>{
      load.dismiss();
      if(!data) {
        this.alert.create({
          title: 'Alert APP!!!',
          subTitle: 'Não foi possível entrar na página! =(',
          buttons: [
            'OK'
          ]
        }).present();
      }
      console.log(data);
    });
  }

}
