import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'admin',
  styleUrls: ['admin.component.scss'], 
  templateUrl: './admin.component.html'
})

export class AdminComponent implements OnInit, OnDestroy {

  subject: Subject<void> = new Subject();

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  navigateTo(destination:string) {   
    this.router.navigate(['admin/' + destination]);
  }

  ngOnDestroy(): void {
    this.subject.next()
  }
}
