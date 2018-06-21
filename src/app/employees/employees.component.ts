import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employee: Employee = {
    employeeId: 1,
    firstName: 'Sanket',
    middleName: 'Sunil',
    lastName: 'Kudalkar',
    gender: 'M',
    phoneNumber: 9403405750,
    eMail: 'sanket.4857@gmail.com',
    birthDate: new Date('1994-01-10'),
    joiningDate: new Date('2017-01-02'),
    designation: 'Software Engineer',
    bloodGroup: 'O+',
    address: 'Meera Palace'
  };

  constructor() { }

  ngOnInit() {
  }

}
