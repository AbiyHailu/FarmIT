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
    let data = this.jwtDecoder.jwtDecode(localStorage.getItem('authToken'))
    if (data) { 
      this.payload = data['role'];
    } 
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
