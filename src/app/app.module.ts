import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormComponent } from './people/form/form.component';
import { LogginService } from './LogginService.service';
import { PeopleService } from './people.service';
import { PersonComponent } from './people/person/person.component';
import { PeopleComponent } from './people/people.component';
import { ErrorComponent } from './error/error.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    PersonComponent,
    PeopleComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LogginService, PeopleService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
