import {Component} from '@angular/core';
@Component({
 selector: 'time',
 templateUrl: 'app/time/time.component.html',
 styleUrls:['app/time/time.component.css']
})
export class TimeComponent {	
	today:number = Date.now();
}