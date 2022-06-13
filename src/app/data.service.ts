import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from './person.model';

@Injectable()
export class DataService {
    constructor(private httpClient: HttpClient) {}

    //GUARDAR PERSONSAS
    savePeople(person: Person[]) {
        this.httpClient.put('https://people-list-b6107-default-rtdb.firebaseio.com/data.json', person).subscribe(
            // res => {
            //     console.log("Resultado de guardar personas " + res);
            // },
            // err => {
            //     console.log("Error al guardar Persona " + err);
            // }
            res => console.log("Resultado de guardar personas " + res),
            err => console.log("Error al guardar Persona " + err)
        );
    }

    loadPeople() {
        return this.httpClient.get('https://people-list-b6107-default-rtdb.firebaseio.com/data.json');
    }
}