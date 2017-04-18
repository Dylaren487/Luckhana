import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {StudentsComponent} from './students/students.component';
import {TimeComponent} from './time/time.component';
import {Student} from './students/student';
@NgModule({
 declarations: [ AppComponent,
				StudentsComponent,
				TimeComponent],
 imports: [BrowserModule],
 bootstrap: [AppComponent]
})
export class AppModule {}