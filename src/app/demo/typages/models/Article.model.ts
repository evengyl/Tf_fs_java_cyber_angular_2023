export class Article
{
    public name : string
    public qty : number
    public dateAjout : Date

    constructor(name : string, qty : number, dateAjout : Date){
        this.name = name
        this.qty = qty
        this.dateAjout = dateAjout
    }
}



export class ArticleV2
{
    private _name : string = ""
    private _qty : number = 0
    private _dateAjout : Date | null = null
    private _ttc : number = 0


    public get ttc() : number{
        return this._ttc as number
    }

    public get name(){
        return this._name
    }

    public set name(theName : string){
        this._name = theName
    }


    public get qty(){
        return this._qty
    }

    public set qty(theQty : number){
        this._ttc += theQty * 1.21
        this._qty = theQty
    }


    
    public get dateAjout(){
        return this._dateAjout as Date
    }

    public set dateAjout(theDateAjout : Date){
        this._dateAjout = theDateAjout
    }



}
