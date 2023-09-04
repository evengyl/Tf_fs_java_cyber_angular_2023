import { Component } from '@angular/core';
import { ArticleService } from './article.serivce';
import { AuthCartV3Service } from './auth-cart-v3.service';

@Component({
  selector: 'app-cart-v3',
  templateUrl: './cart-v3.component.html'
})
export class CartV3Component {

  newArt : string = ""
  newQty : number = 0

  listArticles: any[] = []
  totalCart : number = 0

  isConnectCartV3 : boolean = false

  constructor(private artServe : ArticleService, 
      private authCartServe : AuthCartV3Service
  )
  {
    this.listArticles = this.artServe.listArticles
    this.totalCart = this.artServe.total
    this.isConnectCartV3 = this.authCartServe.isConnectCartV3 ? true : false
  }

  addArticle()
  {
    this.listArticles = this.artServe.addArticle({ name : this.newArt, qty : this.newQty})
    this.totalCart = this.artServe.total
  }

  delArticle(name : string)
  {
    this.listArticles = this.artServe.delArticle(name)
    this.totalCart = this.artServe.total
  }

  removeAllArt()
  {
    this.artServe.removeAllArt()
    this.listArticles = this.artServe.listArticles
    this.totalCart = this.artServe.total
  }

  loginCartV3()
  {
    this.isConnectCartV3 = this.authCartServe.loginCartV3()
  }

  logoutCartV3()
  {
    this.isConnectCartV3 = this.authCartServe.logoutCartV3()
  }
}
