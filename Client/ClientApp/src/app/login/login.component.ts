import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';    
import { AuthService } from '../services/shared.service/authService';

@Component({
  selector: 'app-login',
  styleUrls: ['login.component.css'], 
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  loading = false;
  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService 
  ) { 
  }
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
          this.router.navigate([returnUrl]); 
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
