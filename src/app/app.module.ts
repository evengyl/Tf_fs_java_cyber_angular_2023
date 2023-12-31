import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { ExerciceComponent } from './exercice/exercice.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PipesComponent } from './demo/pipes/pipes.component';
import { BindingsComponent } from './demo/bindings/bindings.component';
import { TvaPipe } from './demo/pipes/tva.pipe';
import { PipeCustomComponent } from './exercice/pipe-custom/pipe-custom.component';
import { EurotobtcPipe } from './exercice/pipe-custom/eurotobtc.pipe';
import { JhmsPipe } from './exercice/pipe-custom/jhms.pipe';
import { DirectivesComponent } from './demo/directives/directives.component';
import { CartV1Component } from './exercice/cart-v1/cart-v1.component';
import { BobonneTranslatePipe } from './exercice/cart-v1/bobonne-translate.pipe';
import { DirectivesPart2Component } from './demo/directives-part2/directives-part2.component';
import { DirectivesCustomComponent } from './demo/directives-custom/directives-custom.component';
import { ZoomitDirective } from './demo/directives-custom/zoomit.directive';
import { ZoomitEventDirective } from './demo/directives-custom/zoomit-event.directive';
import { ZoomitEventParamDirective } from './demo/directives-custom/zoomit-event-param.directive';
import { ExosCustomDirectiveComponent } from './exercice/exos-custom-directive/exos-custom-directive.component';
import { TrimerDirective } from './exercice/exos-custom-directive/trimer.directive';
import { TopPlayersComponent } from './demo/inputOutput/top-players/top-players.component';
import { PlayerComponent } from './demo/inputOutput/player/player.component';
import { BobonneTranslateV2Pipe } from './exercice/cart-v2/list-articles/bobonne-translate.pipe';
import { ListArticlesComponent } from './exercice/cart-v2/list-articles/list-articles.component';
import { SystemAddArticleComponent } from './exercice/cart-v2/system-add-article/system-add-article.component';
import { ArticleComponent } from './exercice/cart-v2/list-articles/article/article.component';
import { ServicesComponent } from './demo/services/services.component';
import { CartV3Component } from './exercice/cart-v3/cart-v3.component';
import { RefreshPromiseComponent } from './demo/refresh-promise/refresh-promise.component';
import { GuardsComponent } from './demo/guards/guards.component';
import { PrivateCompoComponent } from './demo/guards/private-compo/private-compo.component';
import { TypagesComponent } from './demo/typages/typages.component';
import { ReactiveFormsComponent } from './demo/reactive-forms/reactive-forms.component';
import { ObsComponent } from './demo/obs/obs.component';
import { CompoForObsDemoComponent } from './compo-for-obs-demo/compo-for-obs-demo.component';
import { StateCompoComponent } from './demo/state-compo/state-compo.component';
import { HttpClientComponent } from './demo/http-client/http-client.component';
import { HttpClientModule } from '@angular/common/http'

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
    DirectivesComponent,
    CartV1Component,
    BobonneTranslatePipe,
    DirectivesPart2Component,
    DirectivesCustomComponent,
    ZoomitDirective,
    ZoomitEventDirective,
    ZoomitEventParamDirective,
    ExosCustomDirectiveComponent,
    TrimerDirective,
    TopPlayersComponent,
    PlayerComponent,
    BobonneTranslateV2Pipe,
    ListArticlesComponent,
    SystemAddArticleComponent,
    ArticleComponent,
    ServicesComponent,
    CartV3Component,
    RefreshPromiseComponent,
    GuardsComponent,
    PrivateCompoComponent,
    TypagesComponent,
    ReactiveFormsComponent,
    ObsComponent,
    CompoForObsDemoComponent,
    StateCompoComponent,
    HttpClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
