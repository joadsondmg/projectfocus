import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private route: Router
  ) { }

  loginRedirect() {
    this.route.navigate(['/login'])
  }

  ngOnInit(): void {
    if(sessionStorage.getItem('access-token')){
    this.route.navigate(['/info'])
    }
  }

}
