import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocalStorageService } from '../../providers/local-storage-service';
import { Nutrients } from '../../model/nutrients';

/**
 * Generated class for the NutrientDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-nutrient-details',
  templateUrl: 'nutrient-details.html',
})
export class NutrientDetailsPage {
  nutrients : Nutrients[];
  foodName : string;
  constructor(public navCtrl: NavController, public service: LocalStorageService) {
  }

  ionViewDidLoad() {
    this.nutrients = this.service.data.nutrients;
    this.foodName = this.service.data.name;
  }

}
