import { Component } from '@angular/core';
import { Issued, Recieved, Product, StoreService } from './service/store.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent {
  subject: Subject<void> = new Subject();
  products: Product[] = []
  issued: Issued[] = []
  recieved: Recieved[] = []
  balance:any =[]
  sortedData=[]
  selectedindex: number
  constructor(
    private storeService: StoreService
  ) {
    this.sortedData =[]
    this.selectedindex = 1
    this.getProducts()
    this.getIssued()
    this.getRecieved()
    
  }

  getProducts() {
    this.storeService.getProducts()
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        this.products = res
        this.sortedData = this.products
        console.log( this.sortedData )
      })
  }

  getIssued() {
    this.storeService.getIssued()
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        this.issued = res
      })
  }

  getRecieved() {
    this.storeService.getRecieved()
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        this.recieved = res
      })
  }
 sorted=[]
 title='Create a New Product'
  getSelected(item: string) { 
      this.sortedData =[]
    if (item == 'product') {  
      this.selectedindex = 1
      this.sortedData =this.products
      this.title='Create a New Product'
    }
    if (item == 'issued') {

      this.selectedindex = 2
      this.sortedData =this.issued
      
      this.title='Issue a Product'
    }
    if (item == 'recieved') {

      this.selectedindex = 3
      this.sortedData =this.recieved
      
      this.title='Recieve a Product'
    }
    if (item == 'balance') {

      this.selectedindex = 4
      this.sortedData =this.balance 
      this.title=''
    }
  }
}




