import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import { DemoComponent } from './demo/demo.component';
import { ExerciceComponent } from './exercice/exercice.component';
import { BindingsComponent } from './demo/bindings/bindings.component';
import { PipesComponent } from './demo/pipes/pipes.component';
import { ChronoComponent } from './exercice/chrono/chrono.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'demos', component : DemoComponent, children : [
    { path : 'bindings', component : BindingsComponent },
    { path : "pipes", component : PipesComponent}
  ]},
  {path: 'exercices', component : ExerciceComponent, children : [
    { path : "chrono", component : ChronoComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
