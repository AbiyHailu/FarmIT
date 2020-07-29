import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs'; 
import { takeUntil } from "rxjs/operators"; 
import { UserService } from '../../services/manger.service/userService';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdninCrudService } from '../../services/shared.service/AdminCrudService';
import { CrudComponent } from '../../crud/crud.component';

@Component({
  selector: 'manage-user',
  styleUrls: ['manage-user.component.css'], 
  templateUrl: './manage-user.component.html',
})
export class ManageUserComponent implements OnInit, OnDestroy {

  subject: Subject<void> = new Subject();
  users: any
  modalRef: any

  constructor(
    private userService: UserService,
    private modalService: NgbModal,
    private adminCrudService: AdninCrudService,
  ) {
    this.users = []
    this.userService.getUsers()
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        this.users = res;
        console.log("this.users", this.users)
      })
  }
 
  ngOnInit(): void {

  }
  manage(create: string) {
    console.log(create)
    let builderItems = this.adminCrudService.getAddUser();
    console.log('builderItems', builderItems)
    this.modalRef = this.modalService.open(CrudComponent, {
      centered: true,
      size: 'md',
      backdrop: 'static',
      keyboard: false
    });

    this.modalRef.componentInstance.data = builderItems;
    this.modalRef.componentInstance.type = "Add User";
    this.modalRef.result.then(result => {
      console.log('result', result) 
      this.userService.addSUser(result) 
   
    })
  }
 
  ngOnDestroy(): void {
    this.subject.next()
  } 
}
