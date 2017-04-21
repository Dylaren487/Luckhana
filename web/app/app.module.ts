import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HttpModule} from "@angular/http";
import {ImageService} from "./service/image-service";
import {f3Converter} from "./Feature3-DateToZodiac/feature3-converter.component";
import {FormsModule} from "@angular/forms";
import {appRouteModule} from "./app-routing.module";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {f5Upload} from "./Feature5-Upload/upload/feature5-upload.component";
import {f5Show} from "./Feature5-Upload/show/feature5-show.component";
import {f5List} from "./Feature5-Upload/list/feature5-list.component";
import {f4Map} from "./Feature4-Map/feature4-map.component";
import {FileNotFoundComponent} from "./filenotfound/file-not-found.component";

@NgModule({
  declarations: [AppComponent, f3Converter, f4Map, f5Upload, f5Show, f5List, FileNotFoundComponent],
  imports: [BrowserModule, HttpModule, FormsModule, appRouteModule],
  bootstrap: [AppComponent],
  providers: [ImageService, {provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppModule {
}
