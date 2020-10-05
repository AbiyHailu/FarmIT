import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})

export class StoreComponent {

  constructor(private router: Router) {
  }
 
}
