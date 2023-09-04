import { Injectable } from "@angular/core";
import { AuthCartV3Service } from "./auth-cart-v3.service";

@Injectable({
    providedIn: "root"
})
export class ArticleService {

    listArticles: any[] = []
    total : number = 0

    isConnectCartV3 : boolean = false

    constructor(private autCartV3Serve : AuthCartV3Service)
    {
        this.isConnectCartV3 = this.autCartV3Serve.isConnectCartV3 ? true : false

        let tmpList = localStorage.getItem("listArticleCartV3")
        if(tmpList != "" && tmpList != null)
            this.listArticles = JSON.parse(tmpList)

        this.calculTotalCart()
    }


    addArticle(newArticle: { name: string, qty: number })
    {
        this.isConnectCartV3 = this.autCartV3Serve.isConnectCartV3 ? true : false

        if (newArticle.name != undefined &&
             newArticle.name != '' &&
              newArticle.qty != undefined &&
               newArticle.qty >= 1 &&
                newArticle.qty <= 5 && 
                this.isConnectCartV3
        ) 
        {

            newArticle.name = newArticle.name.trim().toLowerCase()
            newArticle.name = newArticle.name.charAt(0).toUpperCase() + newArticle.name.slice(1)

            let newArticleToAdd = {
                name: newArticle.name,
                qty: newArticle.qty,
                dateAjout: new Date()
            }


            let okAjout = true
            this.listArticles.forEach((art) => {
                if (art.name == newArticleToAdd.name && art.qty <= 5) {
                    okAjout = false

                    let totalQty = newArticleToAdd.qty + art.qty
                    if (totalQty > 5) totalQty = 5

                    art.qty = totalQty
                    art.dateAjout = new Date()

                }
            })

            if (okAjout) this.listArticles.push(newArticleToAdd)


            this.calculTotalCart()
            localStorage.setItem("listArticleCartV3", JSON.stringify(this.listArticles))
        }
        
        return this.listArticles
    }

    delArticle(name: string)
    {
        this.listArticles = this.listArticles.filter((art) => {
            if (art.name == name) return false

            return true
        })

        this.calculTotalCart()
        localStorage.setItem("listArticleCartV3", JSON.stringify(this.listArticles))

        return this.listArticles
    }


    removeAllArt()
    {
        localStorage.removeItem("listArticleCartV3")
        this.listArticles = []
        this.calculTotalCart()
    }


    calculTotalCart()
    {
        this.total = 0

        this.listArticles.forEach((item) => {
            this.total += item.qty
        })
    }
}