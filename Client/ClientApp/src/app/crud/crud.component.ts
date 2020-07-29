import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs'; 
import { takeUntil } from "rxjs/operators";
import { FormGroup, FormControl } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
 
@Component({
  selector: 'crud',
  styleUrls: ['crud.component.css'], 
  templateUrl: './crud.component.html',
})
export class CrudComponent implements OnInit, OnDestroy {

  @Input() public data: any;
  @Input() public type: any;
  subject: Subject<void> = new Subject();
  subscriptions: any
  constructor( 
    public activeModal: NgbActiveModal,
  ) { 
     
  }

  dataForm:FormGroup
  ngOnInit(): void {
    console.log("data", this.data)
    this.dataForm = this.createForm(this.data)
    console.log("this.dataForm", this.dataForm)
  }

  enablform=false
  createForm(data) {
    console.log("data", data)
    const formGroup = {};
    
    data.forEach(e => {
      formGroup[e.Binding] = new FormControl(e.Value || '')
    })
    this.enablform=true
    return new FormGroup(formGroup);
  }

  submitData(dataForm:any) { 
    this.activeModal.close(dataForm.value)
  }

  cancel() { 
    this.activeModal.close(this.data)
  }
  ngOnDestroy(): void {
      this.subject.next()
    }
}
