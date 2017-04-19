import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {Picture} from "../entity/picture";
import {Observable} from "rxjs/Rx";

@Injectable()
export class ImageService{
  constructor(private http:Http){
  }
  addImage(picture : Picture, file:any){
    let formData = new FormData();
    let fileName: string;
    formData.append('file', file);
    return this.http.post('http://localhost:8080/luckhana/image', formData)
      .flatMap(filename => {
        picture.image = filename.text();
        let headers = new Headers({'Content-type': 'application/json'});
        let options = new RequestOptions({headers: headers, method: 'POST'});
        let body = JSON.stringify(picture);
        return this.http.post('http://localhost:8080/luckhana', body, options)
          .map(res => {
            return res.json();
          })
          .catch((error: any) => {
            return Observable.throw(new Error(error.status))
          })
      })
  }
  getAllImage(){
    return this.http.get('http://localhost:8080/luckhana')
      .map((res) => res.json());
  }
  getImage(id:number){
    let picture: Picture;
    return this.http.get('http://localhost:8080/luckhana/' + id)
      .map((res: Response) => {
        if (res) {
          if (res.status === 200) {
            return res.json()
          }
          if (res.status === 204) {
            return null;
          }
        }
      })
      .catch((error: any) => {
        if (error.status === 500) {
          return Observable.throw(new Error(error.status));
        }
        else if (error.status === 400) {
          return Observable.throw(new Error(error.status));
        }
        else if (error.status === 409) {
          return Observable.throw(new Error(error.status));
        }
        else if (error.status === 406) {
          return Observable.throw(new Error(error.status));
        }
        return error;
      })
      ;
  }
}
