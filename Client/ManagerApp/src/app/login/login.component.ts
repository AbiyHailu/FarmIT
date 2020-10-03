import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';      
import { AuthService } from '../services/auth.service';
import { SharedDataService } from '../services/shared.data.service';

@Component({
  selector: 'app-login',
  styleUrls: ['login.component.scss'], 
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {

  loading = false;
  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private sharedDataService: SharedDataService
  ) {  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  get loginFormControl() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';

    this.authService.login(this.loginForm.value)
      .pipe(first())
      .subscribe(
        data => {  
          let role = data.userDetails.userType
          if (role && role.toLowerCase() === 'admin') { 
            this.router.navigate(['/admin/dashboard']);
          } else if (role && role.toLowerCase() === 'manager') {
            this.router.navigate(['/manager']);
          } else if (role && role.toLowerCase() === 'user') {
            this.router.navigate(['/user']);
          } else {
            this.router.navigate([returnUrl]); 
          } 
        },
        error => { 
          this.loading = false;
          this.loginForm.reset();
          this.loginForm.setErrors({
            invalidLogin: true
          });
        });
  }
}
