import { Component } from '@angular/core';

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html'
})
export class ListArticlesComponent {

  newArt : string = ""
  newQty : number = 0

  listArticles : any[] = [
    { name : "Pommes", qty : 1, dateAjout : new Date() },
    { name : "Poires", qty : 2, dateAjout : new Date() },
  ]



  addArticle(newArticle : {name : string, qty : number})
  {
    if(newArticle.name != undefined && newArticle.name != '' && newArticle.qty != undefined && newArticle.qty >= 1 && newArticle.qty <= 5)
    {

      newArticle.name = newArticle.name.trim().toLowerCase()
      newArticle.name = newArticle.name.charAt(0).toUpperCase() + newArticle.name.slice(1)

      let newArticleFinal = {
        name : newArticle.name,
        qty : newArticle.qty,
        dateAjout : new Date()
      }


      let okAjout = true
      this.listArticles.forEach((art) =>{
        if(art.name == newArticleFinal.name && art.qty <= 5)
        {
          okAjout = false

          let totalQty = newArticleFinal.qty + art.qty
          if(totalQty > 5) totalQty = 5

          art.qty = totalQty
          art.dateAjout = new Date()

        }
      })
      
      if(okAjout) this.listArticles.push(newArticleFinal)
    }
  }


  delArticle(name : string){
    this.listArticles = this.listArticles.filter((art) => {
      if(art.name == name) return false

      return true
    })
  }
}
