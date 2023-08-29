import { Component } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.scss']
})
export class BindingsComponent {

  title: string = 'Hello FL023040';
  enabled: boolean = false;

  changeTitle() {
    this.title = 'I love coffee';
  }

  disableMe() {
    this.title = 'Je t\'ai désactivé ahahaha';
    this.enabled = !this.enabled;
  }

}
