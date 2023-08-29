import { Component } from '@angular/core'

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.component.html'
})
export class ChronoComponent {

  zero: string = '0'
  minutes: number = 0
  secondes: number = 0
  timeUpdater: any

  start() {
    this.timeUpdater = setInterval(() => {
      if (this.secondes < 59) {
        this.secondes += 1
      } else {
        this.secondes = 0
        this.minutes += 1
      }
    }, 1000)
  }
  pause() {
    clearInterval(this.timeUpdater)
  }

  stop() {
    clearInterval(this.timeUpdater)
    this.secondes = 0
    this.minutes = 0
  }
}
