import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccessControlService {
  constructor() { }

  accessRoutes: any[] = [
    { role: 'adm', routes : ['admin', 'analysis'] },
    { role: 'analyst', routes : ['analysis'] },
    { role: 'user', routes : [] }
  ]

  verifyAccess(route: string): boolean{
    const accessRoute = this.accessRoutes.find(item => item.role == sessionStorage.getItem('role')).routes
    return !!accessRoute.includes(route)
  }
}
