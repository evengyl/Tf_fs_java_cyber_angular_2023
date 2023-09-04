export interface Player{
    name : string
    ranked : number
    win : number
    loose : number
    avatar : string
    money : number
}

export interface Players{
    playersList : Player[]

    ban(player : Player) : boolean
    asc?() : void
    desc() : void
}