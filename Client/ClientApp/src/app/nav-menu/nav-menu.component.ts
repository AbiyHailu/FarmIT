import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared.service/auth.service';
import { JwtDecodeService } from '../shared.service/jwtdecoder.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  payload: any = null
  constructor(
    private router: Router,
    private authService: AuthService,
    private jwtDecoder: JwtDecodeService 
  ) { 
    let data = this.checkUser();
    if (data) {
      console.log(data)
      this.payload = data['role'];
    } 
  }
  checkUser() {
    return this.jwtDecoder.jwtDecode(localStorage.getItem('authToken')) 
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  logIn() { 
    this.router.navigate(['/login']);
  }

  logOut() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
