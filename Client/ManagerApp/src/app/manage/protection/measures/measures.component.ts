import { Component, OnDestroy } from '@angular/core'; 
import { Subject } from 'rxjs'; 

@Component({
  selector: 'measures',
  templateUrl: './measures.component.html',
  styleUrls: ['./measures.component.scss']
})

export class MeasuresComponent implements OnDestroy {

  subject: Subject<void> = new Subject();
 
  constructor( 
  ) { 
  }
 
  ngOnDestroy(): void {
    this.subject.next()
  }
}

