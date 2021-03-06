import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { FormComponent } from './people/form/form.component';
import { PeopleComponent } from './people/people.component';

const routes: Routes = [
  {path: '', component: PeopleComponent},
  {path: 'people', component: PeopleComponent, children: [
    {path: 'add', component: FormComponent},
    {path: ':id', component: FormComponent},
  ]},
  {path: '**', component: ErrorComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
