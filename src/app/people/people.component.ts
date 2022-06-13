import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeopleService } from '../people.service';
import { Person } from '../person.model';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  people: Person[] = [];
  
  constructor(private peopleService: PeopleService, private router: Router) {}

  ngOnInit(): void {
      // this.people = this.peopleService.people;
      this.peopleService.getPeople().subscribe(
        (res)  => {
          this.people =  res as Person[];
          this.peopleService.setPeople(res as Person[]);
        }
      );
  }

  add() {
    this.router.navigate(['people/add'])
  }
}
