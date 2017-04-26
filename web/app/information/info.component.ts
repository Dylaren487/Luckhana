import {Component} from "@angular/core";
@Component({
  selector:'info',
  templateUrl:'app/information/info.component.html',
  styleUrls: ['app/information/info.component.css']
})

export class InfoComponent{
  cmuOfficeAddress : string = "Chiang Mai University, 239 Huay Kaew Road, Muang District, Chiang Mai, Thailand, 50200";
  cmuOfficePhone: string = "+66 53 941000";
  cmuOfficeFax: string = "+66 53 217143, 943002";
  cmuPRPhone: string = "+66 53 941000";
  cmuPRFax: string = "+66 53 217143, 943002";
  cmuPREmail: string = "prcmu239@gmail.com";
}
