import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { Employee } from './Employee';
import { Http,Response} from '@angular/http';
import { User } from './User';
import 'rxjs'

@Injectable()
export class EmployeeListServiceService {

   /* employees:  Employee [] = [{
      employeeID: '1',
      employeeFirstName: 'Krunal',
      employeeLastName: '110470116021',
      employeeAddress: 'VVP Engineering College',
      employeeAge: 35
    },
    {
      employeeID: '2',
      employeeFirstName: 'Rushabh',
      employeeLastName: '110470116023',
      employeeAddress: 'VVP Engineering College',
      employeeAge: 30
    },
    {
      employeeID: '3',
      employeeFirstName: 'Ankit',
      employeeLastName: '110470116022',
      employeeAddress: 'VVP Engineering College',
      employeeAge: 27
    }];*/

    
  constructor(private http: Http) { }

  

  /*public getEmployeeList(): any {
    const employeesObservable = new Observable(observer => {
      setTimeout(() => {
          observer.next(this.employees);
      }, 1000);
});

return employeesObservable;
}*/
public getData():Observable<User[]>{
  //return this.http.get('http://jsonplaceholder.typicode.com/todos/1').map((response:Response)=><User[]>response.json() as User[]);
  return this.http.get('https://jsonplaceholder.typicode.com/albums').map((response: Response) => <User[]> response.json()); 
}
}
