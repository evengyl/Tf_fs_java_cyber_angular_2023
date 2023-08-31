import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[zoomitEventParam]'
})
export class ZoomitEventParamDirective {

  @Input() zoomitEventParam : string[] = []
  
  @HostListener("click")
  onMouseClick(){
    this.el.nativeElement.style.color = "grey"
    this.el.nativeElement.style.fontSize = this.zoomitEventParam[1] + "px"
    this.el.nativeElement.style.backgroundColor = this.zoomitEventParam[0]
  }

  //tout les event possible, similaire à un addEventListener classique !!!!
  @HostListener("dblclick")
  onMouseDBLClick(){
    this.el.nativeElement.style.color = "black"
    this.el.nativeElement.style.fontSize = "1rem"
    this.el.nativeElement.style.backgroundColor = "transparent"
  }

  constructor(private el : ElementRef) {

  }

}
