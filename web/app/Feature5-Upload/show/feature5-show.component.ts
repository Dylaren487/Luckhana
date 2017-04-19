import {Component} from "@angular/core";
import {Picture} from "../../entity/picture";
import {ActivatedRoute, Params} from "@angular/router";
import {ImageService} from "../../service/image-service";
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'F5Show',
  templateUrl: 'feature5-show.component.html',
  styleUrls: ['feature5-show.component.css']
})

export class f5Show{
  picture:Picture;
  constructor(private route: ActivatedRoute, private imageService:ImageService){}
  ngOnInit() {
    this.route.params
      .switchMap((params:Params) => this.imageService.getImage(+params['id']))
      .subscribe((picture:Picture) => this.picture = picture);
  }
}
