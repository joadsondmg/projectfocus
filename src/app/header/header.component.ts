import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
constructor(
  private route: Router,
  private auth: AuthService
) {}

dropdownVisible = false

showDropDown() {
  this.dropdownVisible = !this.dropdownVisible;
}

logout() {
  this.auth.logout()
  this.route.navigate(['/login'])
}

}
