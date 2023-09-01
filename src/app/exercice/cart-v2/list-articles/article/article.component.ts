import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html'
})
export class ArticleComponent {

  @Input() name : string = ""
  @Input() qty : number = 0
  @Input() dateAjout : Date = new Date()

  @Output() delArticleEvent : EventEmitter<string> = new EventEmitter<string>()


  delArticle(name : string)
  {
    this.delArticleEvent.emit(name)
  }

}
