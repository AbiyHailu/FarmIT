import { Injectable } from '@angular/core';  

@Injectable({ providedIn: 'root' })
export class  CrudService {
 
  constructor(
  ) { }

  getAddPlanItems() {
    return [
      { Binding: 'planName', Type: 'text', Label: "Enter Plan Name" }
    ]
  }

  getAddSubscriptionItems() {
    return [
      { Binding: 'company', Type:'text',Label: "Enter Company Name" },
      { Binding: 'subscriptionDate', Type: 'textDate', Label: "Enter Subscription Date" },
      { Binding: 'subscriptionEndDate', Type: 'textDate', Label: "Enter Subscription End Date" },
      { Binding: 'plan', Type: 'text', Label: "Enter Plan Name" }
    ]
  }

  getAddCompany() {
    return [
      { Binding: 'name', Label: "Enter Company Name", Type: 'text' },
      { Binding: 'emailAddress', Label: "Enter Email Address", Type: 'text' },
      { Binding: 'phone', Label: "Enter Phone", Type: 'text' },
      { Binding: 'password', Label: "Enter Password", Type: 'text' }
    ]
  }
  getAddUser() {
    return [
      { Binding: 'emailAddress', Type: 'text', Label: "Enter Email Address" },
      { Binding: 'phone', Type: 'text', Label: "Enter Phone" },
      { Binding: 'firstName', Type: 'text', Label: "Enter First Name" },
      { Binding: 'lastName', Type: 'text', Label: "Enter Last Name" },
      { Binding: 'password', Type: 'text', Label: "Enter Password" },
    ]
  }
  getAddScoutData() {
    return [
      { Binding: 'greenhouse', Type: 'text', Label: "",  Disable:"true"},
      { Binding: 'pest', Type: 'select', Label: "Select Pest" , Disable:"", SelectList:[] },
      { Binding: 'value', Type: 'slide', Label: "Level" },
      { Binding: 'row', Type: 'number', Label: "Row Number From" },
      { Binding: 'row', Type: 'number', Label: "Row Number To" },
    ]
  }

  getAddProduct(): any {
    return [
      { Binding: 'name', Type: 'text', Label: "Product Name" },
      { Binding: 'category', Type: 'select', Label: "Select Category" ,  SelectList:[] }, 
      { Binding: 'expiredDate', Type: 'textDate', Label: "Expiration Date" },
      { Binding: 'price', Type: 'number', Label: "Price" }, 
      { Binding: 'metric', Type: 'select', Label: "Select Unit" ,  SelectList:[] }, 
      { Binding: 'activeIngredient', Type: 'select', Label: "Select Active Ingredient" , Disable:"", SelectList:[] }, 
    ]
  }

  issueaProduct(): any {
    return [ 
      { Binding: 'productName', Type: 'select', Label: "Select Product" ,   SelectList:[] },  
      { Binding: 'dateIssued', Type: 'textDate', Label: "Date" }, 
      { Binding: 'amount', Type: 'number', Label: "Amount" },
      { Binding: 'reason', Type: 'text', Label: "Reason", Disable:"" }
    ]
  }

  recieveProduct(): any {return [
    { Binding: 'productName', Type: 'select', Label: "Select Product" , SelectList:[] },  
    { Binding: 'dateRecieved', Type: 'textDate', Label: "Date" }, 
    { Binding: 'amount', Type: 'number', Label: "Amount" }, 
  ] }

  getAddAi (): any {return [ 
    { Binding: 'iaName', Type: 'text', Label: "Name" },
    { Binding: 'environmentalToxicity', Type: 'text', Label: "Environmental Toxicity" },
    { Binding: 'terestrialToxicity', Type: 'text', Label: "Terestrial Toxicity" },
    { Binding: 'hazardLevel', Type: 'select', Label: "Hazard Level" , SelectList:["green", "red", "yellow"] },  
  ] }
}

