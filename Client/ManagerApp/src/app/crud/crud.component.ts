import { Component, Input, OnInit, OnDestroy, EventEmitter } from '@angular/core'; 
import { FormGroup, FormControl } from '@angular/forms'; 
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
 
@Component({
  selector: 'crud',
  styleUrls: ['crud.component.scss'], 
  templateUrl: './crud.component.html',
})
export class CrudComponent implements OnInit, OnDestroy {

  @Input() public data: any;
  @Input() public type: any;  
  @Input() public message: any;  //for planting error 
  @Input() public disablebutton: boolean; 
  subscriptions: any
  constructor( 
    public activeModal: NgbActiveModal 
  ) {  
  }

  dataForm:FormGroup
  ngOnInit(): void {
    this.dataForm = this.createForm(this.data) 
  }

  enablform=false
  createForm(data) { 
    const formGroup = {};
    
    data.forEach(e => {  
      formGroup[e.Binding] = new FormControl({value: e.Value ||'', disabled: e.Disable||false} ) 
    })
    this.enablform=true
    return new FormGroup(formGroup);
  }

  public event: EventEmitter<any> = new EventEmitter();
  onChange(val:any){ 
    this.event.emit(val);
    console.log(val)

  }
 
  onChangePlanting(val:any){ 

    this.event.emit(val);
    console.log(val) 
  }

  submitData(dataForm: any) {
    this.activeModal.close(dataForm.value) 
  }

  cancel() { 
    this.activeModal.close(null)
  }

  ngOnDestroy(): void {

  }
}
