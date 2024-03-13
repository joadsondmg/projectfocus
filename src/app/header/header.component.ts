import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    private auth: AuthService,
    private route: Router,
    private data: UserdataService
  ){}

  dropdownVisible = false

  showDropDown() {
    this.dropdownVisible = !this.dropdownVisible;
  }

  logout() {
      this.auth.logout()
      this.route.navigate(['/login'])
    }  

    redirectAnalysis() {
      this.route.navigate(['analysis']);
    }

    redirectInfo() {
      this.route.navigate(['info']);
    }
}
