import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ["./player.scss"]
})
export class PlayerComponent {

  @Input() name : string = ""
  @Input() ranked : number = 0
  @Input() win : number = 0
  @Input() loose : number = 0
  @Input() avatar : string = ""
  @Input() money : number = 0

  @Input() isAdmin : boolean = false

  @Output() banPlayer : EventEmitter<string> = new EventEmitter<string>()

  constructor(){
  }

  ban(name : string)
  {
    this.banPlayer.emit(name)
  }

}
