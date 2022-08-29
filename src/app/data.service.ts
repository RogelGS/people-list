import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login/login.service';
import { Person } from './person.model';

@Injectable()
export class DataService {
    constructor(private httpClient: HttpClient, private loginService: LoginService) {}

    //GUARDAR PERSONSAS
    savePeople(person: Person[]) {
        const token = this.loginService.getIdToken();
        this.httpClient.put('https://people-list-b6107-default-rtdb.firebaseio.com/data.json?auth=' + token, person).subscribe(
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
        const token = this.loginService.getIdToken();
        return this.httpClient.get('https://people-list-b6107-default-rtdb.firebaseio.com/data.json?auth=' + token);
    }

    updatePerson(index: number, person: Person) {
        const token = this.loginService.getIdToken();
        let url: string = 'https://people-list-b6107-default-rtdb.firebaseio.com/data/' + index + '.json?auth=' + token;
        this.httpClient.put(url, person).subscribe(
            res => console.log("Persona modificada", res),
            err => console.log("Error al modificar persona", err)
        )
    }

    deletePerson(index: number) {
        const token = this.loginService.getIdToken();
        let url: string = 'https://people-list-b6107-default-rtdb.firebaseio.com/data/' + index + '.json?auth=' + token;
        this.httpClient.delete(url).subscribe(
            res => console.log("Persona eliminada", res),
            err => console.log("Error al eliminar persona", err)
        )
    }
}