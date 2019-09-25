import { Component, OnInit,Input } from '@angular/core';
// import { User } from './app/Employee/User';
// import { EmployeeListServiceService } from './app/Employee/employee-list-service.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  @Input() id: string;

  // userArray: User[]= [];
  
  // constructor(private employeeServiceObj: EmployeeListServiceService)
  // {

  // }

  constructor()
  {
    
  }

  ngOnInit() {   
   
  }

  // ngOnInit() {    
  //   this.employeeServiceObj.getData().subscribe((data)=> {
  //     for(let key in data){
  //       this.userArray.push(data[key]);
  //     }
  // });
}
