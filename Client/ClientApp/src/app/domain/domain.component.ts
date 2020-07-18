import { Component, OnInit, OnDestroy } from '@angular/core';
 import { Router } from '@angular/router'; 
import { Subject } from 'rxjs';

@Component(
  {
    selector: 'domain',
    styleUrls: ['domain.component.scss'],
    templateUrl: 'domain.component.html'
  }
)

export class DomainComponent implements OnInit, OnDestroy {
    subject: Subject<void> = new Subject(); 
    url: string

    constructor( 
        private router: Router, 
    ) {
      console.log("test")
    }

  ngOnInit() { } 
    activeIndex: number;
    control = null
  
     
    ngOnDestroy(): void {
        this.subject.next();
    }
}
