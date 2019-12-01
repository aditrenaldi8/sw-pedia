import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppService } from './service/app.service';
import { MainComponent } from './component/main/main.component';
import { PeepleComponent } from './component/peeple/peeple.component';
import { PlanetsComponent } from './component/planets/planets.component';
import { FilmsComponent } from './component/films/films.component';
import { SpeciesComponent } from './component/species/species.component';
import { VehiclesComponent } from './component/vehicles/vehicles.component';
import { StarshipsComponent } from './component/starships/starships.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PeepleComponent,
    PlanetsComponent,
    FilmsComponent,
    SpeciesComponent,
    VehiclesComponent,
    StarshipsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    SharedModule
  ],
  exports:[
  
  ],
  providers: [
    AppService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
