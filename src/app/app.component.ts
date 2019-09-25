import { Component, OnInit } from '@angular/core';
import { EmployeeListServiceService } from './Employee/employee-list-service.service';
import { Employee } from './Employee/Employee';
import { User } from './Employee/User';
import {ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  title = 'Employee Details';

  //employeeListArray: Employee[] = [];
  userArray: User[]= [];
  
  constructor(private employeeServiceObj: EmployeeListServiceService, private activatedRoute: ActivatedRoute, private route: Router)
  {

  }

  ngOnInit() {
    // const employeeObservable = this.employeeServiceObj.getEmployeeList();

    // employeeObservable.subscribe((empServiceData: Employee[]) => {
    //     this.employeeListArray = empServiceData;
    //});
    this.employeeServiceObj.getData().subscribe((data)=> {
      for(let key in data){
        this.userArray.push(data[key]);
      }
  });  
  }

  
  NavigteEmployeeDetails(): void
  {
   this.route.navigate(['./ShowEmployeeDetailss']);
  }

  
    
  

}
