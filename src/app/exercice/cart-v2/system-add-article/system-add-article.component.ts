import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-system-add-article',
  templateUrl: './system-add-article.component.html'
})
export class SystemAddArticleComponent {

  newArt : string = ""
  newQty : number = 0

  @Output() addArticleEvent : EventEmitter<{name : string, qty : number}> = new EventEmitter<{name : string, qty : number}>()


  addArticle(){
    this.addArticleEvent.emit({name : this.newArt, qty : this.newQty})
  }

}
