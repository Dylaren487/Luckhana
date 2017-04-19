import {NgModule}              from '@angular/core';
import {RouterModule, Routes}  from '@angular/router';
import {f3Converter} from "./Feature3-DateToZodiac/feature3-converter.component";
import {f5Upload} from "./Feature5-Upload/upload/feature5-upload.component";
import {f5List} from "./Feature5-Upload/list/feature5-list.component";
import {f5Show} from "./Feature5-Upload/show/feature5-show.component";

const appRoute: Routes = [
  {path: 'f3', component: f3Converter},
  {path: 'f5Upload', component: f5Upload},
  {path: 'f5List', component: f5List},
  {path: ':id',component:f5Show}
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
