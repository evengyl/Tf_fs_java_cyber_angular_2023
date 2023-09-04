import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn } from '@angular/router';
import { GuardsAuthService } from './guards-auth.service';

export const privateAccessGuard: CanActivateFn = (route, state) => {

  console.log("Guard UNE route")

  let guardAuthServe = inject(GuardsAuthService)

  if(guardAuthServe.isConnectGuard)
    return true

    return false
};


export const privateAccessChildGuard: CanActivateChildFn = (route, state) => {

  console.log("Guard la route et LES ENFANTS")


  let guardAuthServe = inject(GuardsAuthService)

  if(guardAuthServe.isConnectGuard)
    return true

    return false
};