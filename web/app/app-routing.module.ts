import { f2Converter } from './Feature2-TableToMap/feature2-converter.component';
import { f1Converter } from './Feature1-MapToTable/feature1-converter.component';
import {NgModule}              from '@angular/core';
import {RouterModule, Routes}  from '@angular/router';
import {f3Converter} from "./Feature3-DateToZodiac/feature3-converter.component";
import {f5Upload} from "./Feature5-Upload/upload/feature5-upload.component";
import {f5List} from "./Feature5-Upload/list/feature5-list.component";
import {f5Show} from "./Feature5-Upload/show/feature5-show.component";
import {f4Map} from "./Feature4-Map/feature4-map.component";
import {FileNotFoundComponent} from "./filenotfound/file-not-found.component";

const appRoute: Routes = [
  {path: 'f1',component:f1Converter},
  {path: 'f2',component:f2Converter},
  {path: 'f5Show/:id',component:f5Show},
  {path: 'f3', component: f3Converter},
  {path: 'f4', component: f4Map},
  {path: 'f5Upload', component: f5Upload},
  {path: 'f5List', component: f5List},
  {path: '**', component: FileNotFoundComponent}
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
