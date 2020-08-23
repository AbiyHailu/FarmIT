import { Injectable } from '@angular/core';  

@Injectable({ providedIn: 'root' })
export class  CrudService {
  constructor(
  ) { }

  getAddPlanItems() {
    return [
      { Binding: 'planName', Type: 'text', Label: "Plan Name" }
    ]
  }

  getAddSubscriptionItems() {
    return [
      { Binding: 'company', Type:'text',Label: "Company Name" },
      { Binding: 'subscriptionDate', Type: 'textDate', Label: "Subscription Date" },
      { Binding: 'subscriptionEndDate', Type: 'textDate', Label: "Subscription End Date" },
      { Binding: 'plan', Type: 'text', Label: "Plan Name" }
    ]
  }

  getAddCompany() {
    return [
      { Binding: 'name', Label: "Company Name", Type: 'text' },
      { Binding: 'emailAddress', Label: "Email Address", Type: 'text' },
      { Binding: 'phone', Label: "Phone", Type: 'text' },
      { Binding: 'password', Label: "Password", Type: 'text' }
    ]
  }
  getAddUser() {
    return [
      { Binding: 'emailAddress', Type: 'text', Label: "Email Address" },
      { Binding: 'phone', Type: 'text', Label: "Phone" },
      { Binding: 'firstName', Type: 'text', Label: "First Name" },
      { Binding: 'lastName', Type: 'text', Label: "Last Name" },
      { Binding: 'password', Type: 'text', Label: "Password" },
    ]
  }
}

