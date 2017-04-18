import {Component} from '@angular/core';
import {Student} from './student';
import {STUDENTS,Me} from '../mocks';
@Component({
 selector: 'students',
 templateUrl: 'app/students/students.component.html',
 styleUrls:['app/students/students.component.css']
})
export class StudentsComponent {
	students: Student[];
	ngOnInit(){
		this.students = STUDENTS;
	}
	averageGpa(){
		let sum = 0;
		for(let student of this.students){
			sum += student.gpa;
		}
		return sum/this.students.length;
	}
}