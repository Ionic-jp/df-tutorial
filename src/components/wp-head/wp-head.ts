import { Component, Input } from '@angular/core';

/**
 * Generated class for the WpHeadComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'wp-head',
  templateUrl: 'wp-head.html'
})
export class WpHeadComponent {
    @Input() title:string;
    @Input() date:string;
}
