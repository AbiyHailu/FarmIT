import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnDestroy {
 
  subject: Subject<void> = new Subject(); 

  
  
  ngOnDestroy(): void {
    this.subject.next();
  }
}
