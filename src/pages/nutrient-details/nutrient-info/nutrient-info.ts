import { Component  , Input} from '@angular/core';
import { Nutrients } from '../../../model/nutrients';

/**
 * Generated class for the NutrientDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'app-nutrient-info',
  templateUrl: 'nutrient-info.html',
})
export class NutrientInfoComponent {

  @Input('nutrient') nutrient : Nutrients;

  constructor() {
  }

  

}
