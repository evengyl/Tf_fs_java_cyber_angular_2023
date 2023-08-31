import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[zoomitEvent]'
})
export class ZoomitEventDirective {


  @HostListener("click")
  onMouseClick(){
    this.el.nativeElement.style.color = "grey"
    this.el.nativeElement.style.fontSize = "2rem"
    this.el.nativeElement.style.backgroundColor = "yellow"
  }

  @HostListener("dblclick")
  onMouseDBLClick(){
    this.el.nativeElement.style.color = "black"
    this.el.nativeElement.style.fontSize = "1rem"
    this.el.nativeElement.style.backgroundColor = "transparent"
  }

  constructor(private el : ElementRef) {

    
  }



}
