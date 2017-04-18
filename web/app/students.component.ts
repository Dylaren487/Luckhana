import {Component} from '@angular/core';
@Component({
 selector: 'students',
 template: `<ul>
		<li *ngFor="let student of students">
			<h2>{{student.studentId }}</h2>
			<p> {{student. name | uppercase}} {{student.surname}}</p>			
			<p *ngIf="student.gpa > 2.5">Good Student who get grade {{student.gpa | number:'1.2-2'}}</p>
			<p *ngIf="student.gpa <= 2.5">Bad Student who get grade {{student.gpa  | number:'1.2-2'}}</p>
		</li>
	</ul>
	
	<p> The average gpa is {{averageGpa()}} </p>`
})
export class StudentsComponent {	
	students = [{
		"id": 1,
		"studentId":"562110507",
		"name":"Prayuth",
		"surname":"Tu",
		"gpa":4.00
	},{
		"id": 2,
		"studentId":"562110509",
		"name":"Pu",
		"surname":"Priya",
		"gpa":0}];
	averageGpa(){
		let sum = 0;
		for(let student of this.students){
			sum += student.gpa;
		}
		return sum/this.students.length;
	}
}