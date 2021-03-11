import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { demoapiService } from '../services/demoapi.service';

@Component({
  selector: 'app-emp-list',
  templateUrl:'./emp-list.component.html',
  styles: [
  ]
})
export class EmpListComponent  {

  constructor(private demoapi: demoapiService ) { }
lstUsers : Employee[];


  ngOnInit() {
  
    this.demoapi.getUsers().subscribe((res) => {
      this.lstUsers = res;
    })
  }
}
