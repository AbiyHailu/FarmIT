import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class StoreService {
  products: Product[] = []
  issued: Issued[] = []
  recieved: Recieved[] = []
  constructor(
    private http: HttpClient
  ) {
    this.products.push(
      { id: "1", name: "product1", category: "x", expiredDate: "1/02/2020", price: "20.22", metric: "kg", activeIngredient: "active1" },
      { id: "2", name: "product2", category: "y", expiredDate: "2/02/2020", price: "2.22", metric: "lt", activeIngredient: "active2" },
      { id: "3", name: "product3", category: "z", expiredDate: "4/04/2020", price: "10.22", metric: "lt", activeIngredient: "active3" },
      { id: "4", name: "product4", category: "x", expiredDate: "1/08/2020", price: "3.22", metric: "kg", activeIngredient: "active4" },
      { id: "5", name: "product5", category: "y", expiredDate: "12/10/2020", price: "40.22", metric: "lt", activeIngredient: "actie5" },
      { id: "6", name: "product6", category: "z", expiredDate: "1/09/2020", price: "25.22", metric: "kg", activeIngredient: "active6" },
      { id: "7", name: "product7", category: "x", expiredDate: "2/11/2020", price: "4.22", metric: "kg", activeIngredient: "active7" },
    )

    this.issued.push(
      { id: "1", productId: "7", productName: "product7", dateIssued: "2/11/2020", amount: "23.5", reason: "spray" },
      { id: "2", productId: "3", productName: "product3", dateIssued: "2/11/2020", amount: "20.5", reason: "spray" },
      { id: "3", productId: "4", productName: "product4", dateIssued: "20/11/2020", amount: "2.5", reason: "spray" }
    )

    this.recieved.push(
      { id: "1", productId: "7", productName: "product7", dateRecieved: "2/11/2020", amount: "12.5" },
      { id: "2", productId: "3", productName: "product3", dateRecieved: "5/11/2020", amount: "10.5" },
      { id: "3", productId: "4", productName: "product4", dateRecieved: "20/11/2020", amount: "2.5" }) 
  }

  getProducts(): Observable<Product[]> {
    //return <Observable<any>>this.http.get(this.apiUrl);
    return of(this.products);
  }

  getProductById(id: any): Observable<Product> {
    // return <Observable<any>>this.http.get("/api/user/" + id);
    return of(this.products.find(e => e.id == "1"))
  }

  addProduct(product: Product): Observable<any> {
    /* return <Observable<any>><any>this.http.post("/api/user", usermodel)
      .pipe(catchError(this.handleError))
      .subscribe(res => {
          console.log(res)
      })  */
    this.products.push(product)
    return of(this.products)

  }
  editProduct(product: Product): Observable<any> {
    //return <Observable<any>>this.http.put("/api/user/" + user.userId, user); 
    let productEdited = this.products.find(e => e.id == "1")
    productEdited = product;
    return of(productEdited);
  }

  getIssued(): Observable<Issued[]> {
    //return <Observable<any>>this.http.get(this.apiUrl);
    return of(this.issued);
  }

  getIssuedById(id: any): Observable<Issued> {
    // return <Observable<any>>this.http.get("/api/user/" + id);
    return of(this.issued.find(e => e.id == "1"))
  }

  addIssued(issued: Issued): Observable<any> {
    /* return <Observable<any>><any>this.http.post("/api/user", usermodel)
      .pipe(catchError(this.handleError))
      .subscribe(res => {
          console.log(res)
      })  */
    this.issued.push(issued)
    return of(this.issued)

  }
  editissued(issued: Issued): Observable<any> {
    //return <Observable<any>>this.http.put("/api/user/" + user.userId, user); 
    let IssueEdited = this.issued.find(e => e.id == "1")
    IssueEdited = issued;
    return of(IssueEdited);
  }

  getRecieved(): Observable<Recieved[]> {
    //return <Observable<any>>this.http.get(this.apiUrl);
    return of(this.recieved);
  }

  getRecievedById(id: any): Observable<Recieved> {
    // return <Observable<any>>this.http.get("/api/user/" + id);
    return of(this.recieved.find(e => e.id == "1"))
  }

  addRecieved(recieved: Recieved): Observable<any> {
    /* return <Observable<any>><any>this.http.post("/api/user", usermodel)
      .pipe(catchError(this.handleError))
      .subscribe(res => {
          console.log(res)
      })  */
    this.recieved.push(recieved)
    return of(this.recieved)

  }
  editRecieved(recieved: Recieved): Observable<any> {
    //return <Observable<any>>this.http.put("/api/user/" + user.userId, user); 
    let recievedEdited = this.recieved.find(e => e.id == "1")
    recievedEdited = recieved;
    return of(recievedEdited);
  }
}

export interface Product {
  id: string
  name: string
  category: string
  expiredDate: string
  price: string
  metric: string
  activeIngredient: string
}

export interface Issued {
  id: string
  productId: string
  productName: string
  dateIssued: string
  amount: string
  reason: string
}
export interface Recieved {
  id: string
  productId: string
  productName: string
  dateRecieved: string
  amount: string
}
