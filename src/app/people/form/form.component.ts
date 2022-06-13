import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LogginService } from '../../LogginService.service';
import { PeopleService } from '../../people.service';
import { Person } from '../../person.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  // @Output() personAdded = new EventEmitter<Person>();

  inputName: string = "";
  inputLastName: string = "";
  index: number = -1;
  modoEdicion : number = 0;

  constructor(private peopleService: PeopleService, private router: Router, private route: ActivatedRoute) {
    this.peopleService.greetings.subscribe((i: number) => {
      alert("El indice es: " + i)
    })
  }

  onAddPerson() {
    let person = new Person(this.inputName, this.inputLastName);
    if (this.modoEdicion === 1) {
      this.peopleService.updatePerson(this.index, person);
    } else {
      this.peopleService.getPersonAdded(person);
    }
    this.router.navigate(['people']);
  }

  deletePerson() {
    if(this.index >= 0) {
      this.peopleService.deletePerson(this.index);
    }

    this.router.navigate(['people']);
  }


  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
    this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion'];

    if (this.modoEdicion === 1) {
      let person: Person = this.peopleService.findPerson(this.index);
      console.log(person);
      this.inputName = person.firstName;
      this.inputLastName = person.lastName;
    }
  }

}
