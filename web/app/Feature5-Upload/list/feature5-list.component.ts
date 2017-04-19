import {Component} from "@angular/core";
import {Picture} from "../../entity/picture";
import {ActivatedRoute, Params} from "@angular/router";
import {ImageService} from "../../service/image-service";
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'F5List',
  templateUrl: 'feature5-list.component.html',
  styleUrls: ['feature5-list.component.css']
})

export class f5List{
  pictures:Picture[];
  constructor(private imageService:ImageService){}
  ngOnInit() {
    this.imageService.getAllImage().subscribe((pictures)=>this.pictures=pictures);
  }
}
