import { Component } from '@angular/core';
import { PeopleService } from './people.service';
import { Person } from './person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listado de personas';

  // getPersonAdded(person: Person) {
  //   // this.people.push(person);
  //   this.peopleService.getPersonAdded(person);
  // }
}
