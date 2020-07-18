import { Component, OnInit, OnDestroy } from '@angular/core';
 import { Router } from '@angular/router'; 
import { Subject } from 'rxjs';

@Component(
    {
    selector: 'user',
    styleUrls: ['user.component.scss'],
    templateUrl: 'user.component.html'
    }
)

export class UserComponent implements OnInit, OnDestroy {
    subject: Subject<void> = new Subject(); 
    url: string

    constructor( 
        private router: Router, 
    ) {   
    }

  ngOnInit() { } 
    activeIndex: number;
    control = null 
     
    ngOnDestroy(): void {
        this.subject.next();
    }
}
