import { Component, OnDestroy } from '@angular/core'; 
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { CommonMethedsService } from '../../shared.service/commonMethodes';

@Component({
  selector: 'pest-root',
  templateUrl: './pest.component.html',
  styleUrls: ['./pest.component.scss']
})
export class PestComponent implements OnDestroy {
  subject: Subject<void> = new Subject();
  reports = [];
  catagorizedReports = []
  loading = true
  constructor( 
    private commonMethodes:CommonMethedsService
  ) { 
    
  }
 
  ngOnDestroy(): void {
    this.subject.next()
  } 
}

