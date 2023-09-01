import { Component } from '@angular/core';
import { ArticleService } from './article.serivce';

@Component({
  selector: 'app-cart-v3',
  templateUrl: './cart-v3.component.html'
})
export class CartV3Component {

  newArt : string = ""
  newQty : number = 0
  listArticles: any[] = []

  constructor(private artServe : ArticleService){
    this.listArticles = this.artServe.listArticles
  }

  addArticle()
  {
    this.listArticles = this.artServe.addArticle({ name : this.newArt, qty : this.newQty})
  }

  delArticle(name : string){
    this.listArticles = this.artServe.delArticle(name)
  }
}
