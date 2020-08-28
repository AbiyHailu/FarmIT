import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs'; 
import { takeUntil } from "rxjs/operators";  
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'; 
import { CrudComponent } from '../../crud/crud.component';
import { CrudService } from '../../crud/service/crud.service';
import { UserService } from './service/user.service';
import { SubscriptionService } from '../../admin/subscription/service/subscription.service';

@Component({
  selector: 'user',
  styleUrls: ['user.component.css'], 
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
 //   private JwtDecodeService: JwtDecodeService,
  
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

  subscriptions
  assignPermissions(userId) {
    console.log(userId)
    //get company id
    let data = localStorage.getItem('authToken');
     
    console.log("data", data)
    // this.subscriptionService.getSubscriptionByCompnyId()
   // this.subscriptions =

    //get planIds
    //gget userpermission
    //check desplay permission if it has lessthan 2 or 10incse of scout
    //do not show those permission the user belong to 
  }
  editUser(userId) {
    console.log(userId)
    this.userService.getUserById(userId)
      .pipe(takeUntil(this.subject))
      .subscribe(res => { 
        console.log("user", res)
        //then get all the permissions make a join on theis call on the backend 
        //
      })
  }
  ngOnDestroy(): void {
    this.subject.next()
  } 
}
