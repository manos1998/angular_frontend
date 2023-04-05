import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInformationComponent } from './components/add-information/add-information.component';
import { ListInformationComponent } from './components/list-information/list-information.component';

const routes: Routes = [
  { path: '', redirectTo: 'informations', pathMatch: 'full' },
  { path: 'informations', component: ListInformationComponent },
  { path: 'add', component: AddInformationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }