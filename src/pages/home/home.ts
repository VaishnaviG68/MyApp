import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FoodDataService } from '../../providers/food-data-service';
import { LocalStorageService } from '../../providers/local-storage-service';
import { Food } from '../../model/food';
import { NutrientDetailsPage } from '../nutrient-details/nutrient-details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items : Array<any>;
  constructor(public navCtrl: NavController , private service : FoodDataService , private storageService: LocalStorageService) {
  }
  

  getItems(ev) {
  
    var context = this;

    // set val to the value of the ev target
    var val = ev.target.value;

    this.service.serch(val).then(res => {
      context.items = [];
      context.items.push(res);
    }).catch(err => console.error(err));

  }

  showDetails (food : Food) {
    this.storageService.data = food;
    this.navCtrl.push(NutrientDetailsPage);
  }
}
