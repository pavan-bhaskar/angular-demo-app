import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmpListComponent} from './emp-list/emp-list.component';
import {DeptListComponent} from './dept-list/dept-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "emp", component: EmpListComponent },
  { path:"dept", component: DeptListComponent},
  { path: "home", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ EmpListComponent, DeptListComponent, HomeComponent];

