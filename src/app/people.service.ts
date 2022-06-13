import { EventEmitter, Injectable } from '@angular/core';
import { DataService } from './data.service';
import { LogginService } from './LogginService.service';
import { Person } from './person.model';

@Injectable()
export class PeopleService {
  // people: Person[] = [
  //   new Person('Diego', 'Alvares'),
  //   new Person('Laura', 'González'),
  //   new Person('Luis', 'Vazquez'),
  // ];
  people: Person[] = [];

  greetings = new EventEmitter<number>();

  constructor(private logginService: LogginService, private dataservice: DataService) {}

  setPeople(people: Person[]) {
    this.people = people;
  }

  getPersonAdded(person: Person) {
    this.logginService.sendMessageToConsole("Agregamos persona: " + person.firstName + person.lastName);
    this.people.push(person);
    this.dataservice.savePeople(this.people);
  }

  getPeople() {
    return  this.dataservice.loadPeople();
  }

  findPerson(index: number) {
    let person: Person = this.people[index];
    return person;
  }

  updatePerson(index: number, person: Person) {
    let newPerson = this.people[index];
    newPerson.firstName = person.firstName;
    newPerson.lastName = person.lastName;
  }

  deletePerson(index: number) {
    this.people.splice(index, 1);
  }
}
