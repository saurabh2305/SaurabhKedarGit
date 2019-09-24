import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { EmployeeListServiceService } from './Employee/employee-list-service.service';
import { EmployeeDetailsComponent } from './EmployeeDetails/employee-details/employee-details.component';
//import {NgxPaginationModule} from 'ngx-pagination';
import { RouterModule, Routes } from '@angular/router';
import { EmpListComponent } from './emp-list/emp-list.component';

const appRoute: Routes = [
  { path: 'EmployeeList', component: EmpListComponent },
  { path: 'ShowEmployeeDetailss', component: EmployeeDetailsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    EmpListComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoute)
    //NgxPaginationModule    
  ],
  providers: [EmployeeListServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
