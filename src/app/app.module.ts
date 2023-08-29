import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { ExerciceComponent } from './exercice/exercice.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from "@angular/forms";
import { PipesComponent } from './demo/pipes/pipes.component';
import { BindingsComponent } from './demo/bindings/bindings.component';
import { TvaPipe } from './demo/pipes/tva.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    ExerciceComponent,
    NavComponent,
    HomeComponent,
    PipesComponent,
    BindingsComponent,
    TvaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
