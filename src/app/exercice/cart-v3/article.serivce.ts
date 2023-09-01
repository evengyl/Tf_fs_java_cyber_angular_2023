import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class ArticleService {

    listArticles: any[] = [
        { name: "Pommes", qty: 1, dateAjout: new Date() },
        { name: "Poires", qty: 2, dateAjout: new Date() },
    ]


    addArticle(newArticle: { name: string, qty: number }) {
        if (newArticle.name != undefined && newArticle.name != '' && newArticle.qty != undefined && newArticle.qty >= 1 && newArticle.qty <= 5) 
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


        }
        
        return this.listArticles
    }

    delArticle(name: string) {
        this.listArticles = this.listArticles.filter((art) => {
            if (art.name == name) return false

            return true
        })

        return this.listArticles
    }
}