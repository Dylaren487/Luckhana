import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Location} from "../entity/location";

@Injectable()
export class MapService {
  constructor(private http: Http) {
  }
  getAllLocation() {
    return this.http.get('http://localhost:8080/luckhana/Map').map((res) => res.json());
  }
}
