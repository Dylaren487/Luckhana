import {NgModule}              from '@angular/core';
import {RouterModule, Routes}  from '@angular/router';
import {f3Converter} from "./Feature3-DateToZodiac/feature3-converter.component";

const appRoute: Routes = [
  {path: '3', component: f3Converter}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoute)
  ],
  exports: [
    RouterModule
  ]
})
export class appRouteModule {
}
