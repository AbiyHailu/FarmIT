import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class StoreService {

  products: Product[] = []
  issued: Issued[] = []
  recieved: Recieved[] = []
  balance: Balance[] = []
  activeIngredient: ActiveIngredient[] = []
  constructor(
    private http: HttpClient
  ) {
    this.products.push(
      { id: "1", companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", name: "product1", category: "x", expiredDate: "09/20/2020", price: "20.22", metric: "kg", activeIngredientid: "1", activeIngredient: "active1" },
      { id: "2", companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", name: "product2", category: "y", expiredDate: "09/21/2020", price: "2.22", metric: "lt", activeIngredientid: "1", activeIngredient: "active2" },
      { id: "3", companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", name: "product3", category: "z", expiredDate: "22/09/2020", price: "10.22", metric: "lt", activeIngredientid: "1", activeIngredient: "active3" },
      { id: "4", companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", name: "product4", category: "x", expiredDate: "1/08/2020", price: "3.22", metric: "kg", activeIngredientid: "1", activeIngredient: "active4" },
      { id: "5", companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", name: "product5", category: "y", expiredDate: "12/10/2020", price: "40.22", metric: "lt", activeIngredientid: "1", activeIngredient: "actie5" },
      { id: "6", companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", name: "product6", category: "z", expiredDate: "1/09/2020", price: "25.22", metric: "kg", activeIngredientid: "1", activeIngredient: "active6" },
      { id: "7", companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", name: "product7", category: "x", expiredDate: "2/11/2020", price: "4.22", metric: "kg", activeIngredientid: "1", activeIngredient: "active7" },
    )

    this.issued.push(
      { id: "1", companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", productId: "7", productName: "product7", dateIssued: "2/11/2020", amount: "23.5", reason: "spray" },
      { id: "2", companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", productId: "3", productName: "product3", dateIssued: "2/11/2020", amount: "20.5", reason: "spray" },
      { id: "3", companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", productId: "4", productName: "product4", dateIssued: "20/11/2020", amount: "2.5", reason: "spray" }
    )

    this.recieved.push(
      { id: "1", companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", productId: "7", productName: "product7", dateRecieved: "2/11/2020", amount: "12.5" },
      { id: "2", companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", productId: "3", productName: "product3", dateRecieved: "5/11/2020", amount: "10.5" },
      { id: "3", companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", productId: "4", productName: "product4", dateRecieved: "20/11/2020", amount: "2.5" })

    this.balance.push(
      { id: "1", companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", productId: "7", productName: "product7", balanceDate: "2/11/2020", amount: "0.5" },
      { id: "2", companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", productId: "3", productName: "product3", balanceDate: "5/11/2020", amount: "11.5" },
      { id: "3", companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", productId: "4", productName: "product4", balanceDate: "20/11/2020", amount: "22.5" })

    this.activeIngredient.push(
      { id: "1", companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", iaName: "ai1", environmentalToxicity: "12", terestrialToxicity: "11", hazardLevel: "green" },
      { id: "2", companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", iaName: "ai2", environmentalToxicity: "31", terestrialToxicity: "16", hazardLevel: "yellow" },
      { id: "3", companyid: "53dd7524-3129-4a9e-4886-08d82c28e2a9", iaName: "ai3", environmentalToxicity: "32", terestrialToxicity: "7", hazardLevel: "red" },
    )
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
    console.log(product)
    this.products.push(product)
    return of(this.products)

  }
  editProduct(product: Product): Observable<any> {
    //return <Observable<any>>this.http.put("/api/user/" + user.userId, user); 
    let productEdited = this.products.find(e => e.id == "1")
    productEdited = product;
    return of(productEdited);
  }

  /**Issue**/

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
    console.log(issued)
    this.issued.push(issued)
    return of(this.issued)

  }
  editissued(issued: Issued): Observable<any> {
    //return <Observable<any>>this.http.put("/api/user/" + user.userId, user); 
    let IssueEdited = this.issued.find(e => e.id == "1")
    IssueEdited = issued;
    return of(IssueEdited);
  }


  /**Recieved**/
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
    console.log(recieved)
    this.recieved.push(recieved)
    return of(this.recieved)

  }
  editRecieved(recieved: Recieved): Observable<any> {
    //return <Observable<any>>this.http.put("/api/user/" + user.userId, user); 
    let recievedEdited = this.recieved.find(e => e.id == "1")
    recievedEdited = recieved;
    return of(recievedEdited);
  }

  /**Balance**/
  getBalance(): Observable<Balance[]> {
    return of(this.balance)
  }

  /**ActiveIngredients**/
  getAI(): Observable<ActiveIngredient[]> {
    //return <Observable<any>>this.http.get(this.apiUrl);
    return of(this.activeIngredient);
  }

  getAIyId(id: any): Observable<ActiveIngredient> {
    // return <Observable<any>>this.http.get("/api/user/" + id);
    return of(this.activeIngredient.find(e => e.id == "1"))
  }

  addAI(activeIngredient: ActiveIngredient): Observable<any> {
    /* return <Observable<any>><any>this.http.post("/api/user", usermodel)
      .pipe(catchError(this.handleError))
      .subscribe(res => {
          console.log(res)
      })  */

    console.log(activeIngredient)
    this.activeIngredient.push(activeIngredient)
    return of(this.activeIngredient)

  }
  editAI(activeIngredient: ActiveIngredient): Observable<any> {
    //return <Observable<any>>this.http.put("/api/user/" + user.userId, user); 
    let activeIngredientEdited = this.activeIngredient.find(e => e.id == "1")
    activeIngredientEdited = activeIngredient;
    return of(activeIngredientEdited);
  }


}

export interface Product {
  id: string
  companyid: string
  name: string
  category: string
  expiredDate: string
  price: string
  metric: string
  activeIngredientid: string
  activeIngredient: string
}

export interface Issued {
  id: string
  companyid: string
  productId: string
  productName: string
  dateIssued: string
  amount: string
  reason: string
}
export interface Recieved {
  id: string
  companyid: string
  productId: string
  productName: string
  dateRecieved: string
  amount: string
}
export interface Balance {
  id: string
  companyid: string
  productId: string
  productName: string
  balanceDate: string
  amount: string
}

export interface ActiveIngredient {
  id: string
  companyid: string
  iaName: string
  environmentalToxicity: string
  terestrialToxicity: string
  hazardLevel: string// enum
}