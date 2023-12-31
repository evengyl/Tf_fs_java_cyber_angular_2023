import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import { DemoComponent } from './demo/demo.component';
import { ExerciceComponent } from './exercice/exercice.component';
import { BindingsComponent } from './demo/bindings/bindings.component';
import { PipesComponent } from './demo/pipes/pipes.component';
import { ChronoComponent } from './exercice/chrono/chrono.component';
import { PipeCustomComponent } from './exercice/pipe-custom/pipe-custom.component';
import { DirectivesComponent } from './demo/directives/directives.component';
import { CartV1Component } from './exercice/cart-v1/cart-v1.component';
import { DirectivesPart2Component } from './demo/directives-part2/directives-part2.component';
import { DirectivesCustomComponent } from './demo/directives-custom/directives-custom.component';
import { ExosCustomDirectiveComponent } from './exercice/exos-custom-directive/exos-custom-directive.component';
import { TopPlayersComponent } from './demo/inputOutput/top-players/top-players.component';
import { ListArticlesComponent } from './exercice/cart-v2/list-articles/list-articles.component';
import { ServicesComponent } from './demo/services/services.component';
import { CartV3Component } from './exercice/cart-v3/cart-v3.component';
import { RefreshPromiseComponent } from './demo/refresh-promise/refresh-promise.component';
import { GuardsComponent } from './demo/guards/guards.component';
import { PrivateCompoComponent } from './demo/guards/private-compo/private-compo.component';
import { privateAccessChildGuard, privateAccessGuard } from './demo/guards/private-access.guard';
import { TypagesComponent } from './demo/typages/typages.component';
import { ReactiveFormsComponent } from './demo/reactive-forms/reactive-forms.component';
import { ObsComponent } from './demo/obs/obs.component';
import { StateCompoComponent } from './demo/state-compo/state-compo.component';
import { HttpClientComponent } from './demo/http-client/http-client.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'demos', component : DemoComponent, children : [
    { path : 'bindings', component : BindingsComponent },
    { path : "pipes", component : PipesComponent},
    { path : "directives", component : DirectivesComponent},
    { path : "directivesPart2", component : DirectivesPart2Component},
    { path : "directivesCustom", component : DirectivesCustomComponent},
    { path : "inputOutput", component : TopPlayersComponent},
    { path : "services", component : ServicesComponent},
    { path : "promise", component : RefreshPromiseComponent},
    { path : "guards", component : GuardsComponent},
    { path : "privateAccess", component : PrivateCompoComponent, canActivate : [privateAccessGuard]},
    { path : "types", component : TypagesComponent},
    { path : "reactiveForms", component : ReactiveFormsComponent},
    { path : "obs", component : ObsComponent},
    { path : "stateCompo", component : StateCompoComponent},
    { path : "httpclient", component : HttpClientComponent},
  ]},
  {path: 'exercices', canActivateChild : [privateAccessChildGuard], component : ExerciceComponent, children : [
    { path : "chrono", component : ChronoComponent },
    { path : "pipeCustom", component : PipeCustomComponent },
    { path : "cartv1", component : CartV1Component },
    { path : "customDirective", component : ExosCustomDirectiveComponent },
    { path : "cartv2", component : ListArticlesComponent },
    { path : "cartv3", component : CartV3Component },

  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
