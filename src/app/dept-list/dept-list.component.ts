import { Component, OnInit } from '@angular/core';
import { Department } from '../models/Department';

@Component({
  selector: 'app-dept-list',
  templateUrl: './dept-list.component.html',
  styles: [
  ]
})
export class DeptListComponent implements OnInit {

  constructor() { }
  lstDept : Department[];

  ngOnInit(): void {
    
var dt = [
  {deptid : 100, dname:"adf", location: "sadfsadf"},
  {deptid : 101, dname:"adf", location: "sadfsadf"},
  {deptid : 102, dname:"adf", location: "sadfsadf"}
]
   this.lstDept = dt;

  }

}
