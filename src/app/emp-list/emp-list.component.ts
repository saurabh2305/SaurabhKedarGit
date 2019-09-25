import { Component, OnInit } from '@angular/core';
import { User } from 'app/Employee/User';
import { EmployeeListServiceService } from 'app/Employee/employee-list-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {


  title = 'Employee Details';


  userArray: User[]= [];
  id: string ;
  
  constructor(private employeeServiceObj: EmployeeListServiceService, private activatedRoute: ActivatedRoute, private route: Router)
  {

  }

  ngOnInit() {
   
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

  EditEmployee(userid: string) :void
  {
    // this.id =  userid.value;
    this.id =  userid;
    this.route.navigate(['./ShowEmployeeDetailss', this.id] );
  }  

}
