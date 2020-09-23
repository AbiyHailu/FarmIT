import { Component, OnDestroy } from '@angular/core';  
import { Subject } from 'rxjs'; 

@Component({
  selector: 'protection',
  templateUrl: './protection.component.html',
  styleUrls: ['./protection.component.scss']
})
export class ProtectionComponent implements OnDestroy {
  subject: Subject<void> = new Subject();
  reports = [];
  catagorizedReports = []
  loading = true
  constructor(  
  ) { 
    
  }
 
  ngOnDestroy(): void {
    this.subject.next()
  } 
}

