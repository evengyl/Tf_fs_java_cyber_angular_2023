import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateStoreService {

  //propriétés à émettre
  private isConnect : boolean = false
  private userInfos : any = {
    name : "loic",
    age : 32
  }


  //behavior d'émission
  private _isConnect$ : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isConnect)
  private _userInfos$ : BehaviorSubject<any> = new BehaviorSubject<any>(this.userInfos)


  //props obs/observer async
  public isConnect$ : Observable<boolean> = this._isConnect$.asObservable()
  public userInfos$ : Observable<any> = this._userInfos$.asObservable()


  setIsConnect(stateConnect : boolean){
    this.isConnect = stateConnect
    this._isConnect$.next(this.isConnect)
  }
  
    
  setUserInfos(userUpdate : any){
    this.userInfos = userUpdate
    this._userInfos$.next(this.userInfos)
  }



  getIsConnect(){
    return this.isConnect
  }

  getUserInfos(){
    return this.userInfos
  }


  constructor() { }
}
