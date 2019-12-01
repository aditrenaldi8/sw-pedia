import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './component/main/main.component';
import { PeepleComponent } from './component/peeple/peeple.component';
import { SpeciesComponent } from './component/species/species.component';
import { FilmsComponent } from './component/films/films.component';
import { PlanetsComponent } from './component/planets/planets.component';
import { VehiclesComponent } from './component/vehicles/vehicles.component';
import { StarshipsComponent } from './component/starships/starships.component';


const routes: Routes = [
  {
      path: '',
      redirectTo: '/main',
      pathMatch: 'full'
  },
  {
      path: 'main',
      component: MainComponent,
  },
  {
    path: 'characters',
    component: PeepleComponent, 
  },
  {
    path: 'planets',
    component: PlanetsComponent, 
  },
  {
    path: 'species',
    component: SpeciesComponent, 
  },
  {
    path: 'films',
    component: FilmsComponent, 
  },
  {
    path: 'vehicles',
    component: VehiclesComponent, 
  },
  {
    path: 'starships',
    component: StarshipsComponent, 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
