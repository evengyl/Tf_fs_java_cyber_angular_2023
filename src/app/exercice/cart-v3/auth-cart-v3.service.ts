import { Injectable } from "@angular/core";

@Injectable({
     providedIn : "root"
})
export class AuthCartV3Service{

    isConnectCartV3 : boolean | null = null

    constructor()
    {
        let localStorageConnectValue = localStorage.getItem("isConnectCartV3")

        if(localStorageConnectValue == null)
            this.isConnectCartV3 = false
        else
            this.isConnectCartV3 = true
    }

    loginCartV3()
    {
      localStorage.setItem("isConnectCartV3", "true")
      return this.isConnectCartV3 = true
    }
  
    logoutCartV3()
    {
      localStorage.removeItem("isConnectCartV3")
      return this.isConnectCartV3 = false
    }
}