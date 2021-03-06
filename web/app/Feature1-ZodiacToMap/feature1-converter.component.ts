import { Component } from "@angular/core";

@Component({
  selector: 'F1Converter',
  templateUrl: 'app/Feature1-ZodiacToMap/feature1-converter.component.html',
  styleUrls: ['app/Feature1-ZodiacToMap/feature1-converter.component.css']
})

export class f1Converter {

  ngOnInit() {

  }

  star1:String;
  star2:String;
  star3:String;
  star4:String;
  star5:String;
  star6:String;
  star7:String;
  star8:String;
  star9:String;
  star10:String;
  star11:String;
  
  mapping:boolean = true;
  table:boolean = false;

  convertToTable(){
    this.mapping = false;
    this.table = true;
  }

  convertToMap(){
    this.mapping = true;
    this.table = false;
  }

  zodiacs: [
    {
      "id": 1
      "name": "ARIES"
    },
    {
      "id": 2
      "name": "PISCES"
    },
    {
      "id": 3
      "name": "AQUARIUS"
    },
    {
      "id": 4
      "name": "CAPRICORNUS"
    },
    {
      "id": 5
      "name": "SAGITARIUS"
    },
    {
      "id": 6
      "name": "SCORPIO"
    },
    {
      "id": 7
      "name": "LIBRA"
    },
    {
      "id": 8
      "name": "VIRGO"
    },
    {
      "id": 9
      "name": "LEO"
    },
    {
      "id": 10
      "name": "CANCER"
    },
    {
      "id": 11
      "name": "GERMINI"
    },
    {
      "id": 12
      "name": "TAURUS"
    }
  ]

}
