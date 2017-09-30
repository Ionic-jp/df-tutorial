import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { WordpressProvider } from '../../providers/wordpress/wordpress';

/**
 * Generated class for the ArticlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
    segment: 'article/:id',
    defaultHistory: ['HomePage']
})
@Component({
  selector: 'page-article',
  templateUrl: 'article.html',
  providers: [ WordpressProvider ]
})
export class ArticlePage {
    post:{
        ID   : number,
        title : string,
        content : string,
        date  : string
    } = {
        ID   : null,
        title : null,
        content : null,
        date : null
    };

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public loadingCtrl: LoadingController,
        public wp: WordpressProvider
    ) {
    }

    ionViewDidLoad() {
        let loading = this.loadingCtrl.create();
        loading.present();

        const id = this.navParams.get('id');
        this.wp.get_article(id)
            .subscribe(data => {
                this.post = data;
                loading.dismiss();
            });
    }

}
