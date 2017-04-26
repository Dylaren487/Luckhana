import { MapService } from './../service/map.service';
import {Component, ViewChild, ElementRef} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'F6Contact',
  templateUrl: 'app/Feature6-Contact/feature6-contact.component.html',
  styleUrls: ['app/Feature6-Contact/feature6-contact.component.css']
})

export class f6Contact{

  locations:Location[];
  lat: number = 18.808287;
  lng: number = 98.954676;
  zoom: number = 16;
  constructor(private mapService: MapService){}
  ngOnInit(){
    this.mapService.getAllLocation().subscribe((locations)=>this.locations=locations);
  }
}

