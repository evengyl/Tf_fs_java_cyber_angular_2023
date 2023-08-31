import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutuDirective } from './tutu.directive';
import { Tutu2Directive } from './tutu2.directive';



@NgModule({
  declarations: [
    TutuDirective,
    Tutu2Directive
  ],
  imports: [
    CommonModule
  ]
})
export class TestNameModule { }
