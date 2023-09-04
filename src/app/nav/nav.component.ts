import { Component, DoCheck, inject } from '@angular/core';
import { GuardsAuthService } from '../demo/guards/guards-auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent implements DoCheck{

  isNavigationAllowed : boolean = false

  constructor(private auth : GuardsAuthService){

  }

  ngDoCheck(): void {
    //console.log("Checked")
    //Attention le doCheck demédie a ne pas devoir faire des OBS partout... mais est appele TOUT LE TEMPS POUR TOUT !!!
    //un hover, une directive, un click etc.... donc des centaine de fois par minutes de navigation...
    //a utiliser avec la plus grande prudence et parcimonie
    // throw new Error('Method not implemented.');
    
 

    this.isNavigationAllowed = this.auth.isConnectGuard as boolean

  }
}
