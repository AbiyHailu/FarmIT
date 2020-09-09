import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from "rxjs/operators";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CrudComponent } from '../../crud/crud.component';
import { CrudService } from '../../crud/service/crud.service';
import { UserService, User } from './service/user.service';
import { SubscriptionService } from '../../admin/subscription/service/subscription.service';
import { CommonMethedsService } from 'src/app/shared.service/commonMethodes';
 
@Component({
  selector: 'user',
  styleUrls: ['user.component.scss'],
  templateUrl: './user.component.html',
})
export class ManageUserComponent implements OnInit, OnDestroy {

  subject: Subject<void> = new Subject();
  users: any
  modalRef: any

  constructor(
    private userService: UserService,
    private modalService: NgbModal,
    private adminCrudService: CrudService,
    private subscriptionService: SubscriptionService,
    private commonMethodesService: CommonMethedsService

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

  createNewUser( ) { 
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
      if (result != null) { 
        this.userService.addSUser(result)
      }
    })
  }

  editUser(user:User){
    console.log(user)   
    this.modalRef = this.modalService.open(CrudComponent, {
      centered: true,
      size: 'md',
      backdrop: 'static',
      keyboard: false
    });

    this.modalRef.componentInstance.data = this.commonMethodesService.assignEditValues(this.adminCrudService.getAddUser(), user);
    this.modalRef.componentInstance.type = "Add User";
    this.modalRef.result.then(result => { 
      console.log('result', result)
      if (result != null) { 
        this.userService.addSUser(result)
      }
    }) 
  }

 
  ngOnDestroy(): void {
    this.subject.next()
  }
}
