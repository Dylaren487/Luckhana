import {Component} from "@angular/core";
import {MapService} from "../service/map.service";

@Component({
  selector: 'F4Map',
  templateUrl: 'app/Feature4-Map/feature4-map.component.html',
  styleUrls: ['app/Feature4-Map/feature4-map.component.css']
})

export class f4Map{
  locations:Location[];
  lat: number = 18.796143;
  lng: number = 98.979263;
  zoom: number = 14;
  constructor(private mapService: MapService){}
  ngOnInit(){
    this.mapService.getAllLocation().subscribe((locations)=>this.locations=locations);
  }
}
