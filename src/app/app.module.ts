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
import { PipeCustomComponent } from './exercice/pipe-custom/pipe-custom.component';
import { EurotobtcPipe } from './exercice/pipe-custom/eurotobtc.pipe';
import { JhmsPipe } from './exercice/pipe-custom/jhms.pipe';
import { DirectivesComponent } from './demo/directives/directives.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    ExerciceComponent,
    NavComponent,
    HomeComponent,
    PipesComponent,
    BindingsComponent,
    TvaPipe,
    PipeCustomComponent,
    EurotobtcPipe,
    JhmsPipe,
    DirectivesComponent
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
