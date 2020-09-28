import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { AuthService } from '../services/auth.service';
import { JwtDecodeService } from '../services/jwtdecode.service';
import { SharedDataService } from '../services/shared.data.service';
import { MethodesService } from '../services/methods.service';
@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {
  isExpanded = false;
  payload: any = null
  userData: any = null
  constructor(
    private router: Router,
    private authService: AuthService,
    private jwtDecoder: JwtDecodeService,
    private sharedDataService: SharedDataService,
    private cm: MethodesService
  ) { 
    let data = this.cm.checkUser();
    if (data) { 
      console.log(data)
      this.userData =data
      this.payload = data['role'];
    } 
  }
 
  toggle = false
  toggleSideBar() {
    this.toggle = !this.toggle 
    console.log("this.toggle" , this.toggle )
    this.sharedDataService.changeToggleSideBar(this.toggle) 
  }
   
  logIn() { 
    this.router.navigate(['/login']);
  }

  logOut() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
