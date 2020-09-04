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
}

