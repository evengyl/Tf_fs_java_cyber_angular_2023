import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-v1',
  templateUrl: './cart-v1.component.html'
})
export class CartV1Component {

  newArt : string = ""
  newQty : number = 0

  listArticles : any[] = [
    { name : "Pommes", qty : 1, dateAjout : new Date() },
    { name : "Poires", qty : 2, dateAjout : new Date() },
  ]


  addArticle()
  {
    if(this.newArt != undefined && this.newArt != '' && this.newQty != undefined && this.newQty >= 1 && this.newQty <= 5)
    {

      this.newArt = this.newArt.trim().toLowerCase()
      this.newArt = this.newArt.charAt(0).toUpperCase() + this.newArt.slice(1)

      let newArticle = {
        name : this.newArt,
        qty : this.newQty,
        dateAjout : new Date()
      }


      let okAjout = true
      this.listArticles.forEach((art) =>{
        if(art.name == newArticle.name && art.qty <= 5)
        {
          okAjout = false

          let totalQty = newArticle.qty + art.qty
          if(totalQty > 5) totalQty = 5

          art.qty = totalQty
          art.dateAjout = new Date()

        }
      })
      
      if(okAjout) this.listArticles.push(newArticle)
    }
  }

}
