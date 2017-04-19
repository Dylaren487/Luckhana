import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HttpModule} from "@angular/http";
import {ImageService} from "./service/image-service";
import {f3Converter} from "./Feature3-DateToZodiac/feature3-converter.component";
import {FormsModule} from "@angular/forms";
import {appRouteModule} from "./app-routing.module";

@NgModule({
  declarations: [AppComponent, f3Converter],
  imports: [BrowserModule, HttpModule, FormsModule, appRouteModule],
  bootstrap: [AppComponent],
  providers: [ImageService]
})
export class AppModule {
}
