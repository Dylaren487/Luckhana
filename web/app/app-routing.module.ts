import {NgModule}              from '@angular/core';
import {RouterModule, Routes}  from '@angular/router';

const appRoute: Routes = [
  {path: 'detail/:id',component:StudentsViewComponent},
  {path: 'view', component: StudentsViewComponent
    ,
    data: {
      student: {
        "id": 2,
        "studentId": "SE-001",
        "name": "Prayuth",
        "surname": "The minister",
        "gpa": 3.59,
        "image": "images/tu.jpg",
        "featured": false,
        "penAmount": 15,
        "description": "The great man ever!!!!"
      }
    }
  },
  {path: 'add', component: StudentsAddComponent},
  {path: 'list', component: StudentsComponent},
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  }
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
