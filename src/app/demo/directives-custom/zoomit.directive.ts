import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[zoomit]'
})
export class ZoomitDirective {

  constructor(private el : ElementRef) {

    this.el.nativeElement.style.color = "grey"
    this.el.nativeElement.style.fontSize = "2rem"
    this.el.nativeElement.style.backgroundColor = "yellow"
  }
}

//simple explain
//quand angular va faire le "new ZoomitDirect()"
//il va détecter dans le constructor qu'il à besoin de donner ElementRef
//il va donc procéder pour envoyer ça dans le constructeur LUI MEME pour pouvoir l'utiliser
