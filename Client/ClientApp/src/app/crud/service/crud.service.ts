import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CrudService {

  constructor(
  ) { }

  getAddPlanItems() {
    return [
      { Binding: 'planName', Type: 'text', Label: "Enter Plan Name" }
    ]
  }

  getAddSubscriptionItems() {
    return [
      { Binding: 'company', Type: 'text', Label: "Enter Company Name" },
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
      { Binding: 'firstName', Type: 'text', Label: "Enter First Name" },
      { Binding: 'lastName', Type: 'text', Label: "Enter Last Name" },
      { Binding: 'emailAddress', Type: 'text', Label: "Enter Email Address" },
      { Binding: 'phone', Type: 'text', Label: "Enter Phone" },
      { Binding: 'password', Type: 'text', Label: "Enter Password" },
      { Binding: 'permission', Type: 'select', Label: "Permissions", SelectList: ["Scout", "Store", "Protection"] },
      { Binding: 'isActive', Type: 'select', Label: "Active or inactive", SelectList: ["Active", "Inactive"] },
    ]
  }

  getAddFarm() {
    return [
      { Binding: 'name', Type: 'text', Label: "Enter Farm Name" },
      { Binding: 'areaName', Type: 'text', Label: "Enter Area Name / City" },
      { Binding: 'country', Type: 'text', Label: "Enter Area country" },
      { Binding: 'longitude', Type: 'number', Label: "Longitude" },
      { Binding: 'latittude', Type: 'number', Label: "Latittude" },
      { Binding: 'totalSize', Type: 'number', Label: "Total Farm Size (ha)" },
    ]
  }

  getAddGH(): any {
    return [
      { Binding: 'name', Type: 'text', Label: "Enter Farm Name" },
      { Binding: 'productName', Type: 'select', Label: "Select Type", SelectList: ["GreenHouse", "Open Field"] },
      { Binding: 'length', Type: 'number', Label: "Length" },
      { Binding: 'width', Type: 'number', Label: "Width" },
      { Binding: 'rows', Type: 'number', Label: "Row numbers" },
    ]
  }
  getAddPlant(): any {
    return [
      { Binding: 'name', Type: 'text', Label: "Enter Name of the plant" },
      { Binding: 'varity', Type: 'text', Label: "Enter Varity " }
    ]
  }

  getAddGHPlant(): any {
    return [
      { Binding: 'plantName', Type: 'select', Label: "Select Plants", Disable: "", SelectList: [] },
      { Binding: 'ghName', Type: 'select', Label: "Select Greenhouse", Disable: "", SelectList: [] }, 
      { Binding: 'numberPlanted', Type: 'number', Label: "Number Planted" },
      { Binding: 'numberPlanted', Type: 'number', Label: "heactar Planted" }, 
      { Binding: 'datePlanted', Type: 'textDate', Label: "Planting Date" }, 
      { Binding: 'dateCleared', Type: 'textDate', Label: "Crearing Date" },
    ]
  }

  getAddScoutData() {
    return [
      { Binding: 'greenhouse', Type: 'text', Label: "", Disable: "true" },
      { Binding: 'pest', Type: 'select', Label: "Select Pest", Disable: "", SelectList: [] },
      { Binding: 'amount', Type: 'slide', Label: "Level" },
      { Binding: 'rownumberStart', Type: 'number', Label: "Row Number From" },
      { Binding: 'rowNumberEnd', Type: 'number', Label: "Row Number To" },
    ]
  }

  getAddProduct(): any {
    return [
      { Binding: 'name', Type: 'text', Label: "Product Name" },
      { Binding: 'category', Type: 'select', Label: "Select Category", SelectList: [] },
      { Binding: 'expiredDate', Type: 'textDate', Label: "Expiration Date" },
      { Binding: 'price', Type: 'number', Label: "Price" },
      { Binding: 'metric', Type: 'select', Label: "Select Unit", SelectList: [] },
      { Binding: 'activeIngredient', Type: 'select', Label: "Select Active Ingredient", Disable: "", SelectList: [] },
    ]
  }

  issueaProduct(): any {
    return [
      { Binding: 'productName', Type: 'select', Label: "Select Product", SelectList: [] },
      { Binding: 'dateIssued', Type: 'textDate', Label: "Date" },
      { Binding: 'amount', Type: 'number', Label: "Amount" },
      { Binding: 'reason', Type: 'text', Label: "Reason", Disable: "" }
    ]
  }

  recieveProduct(): any {
    return [
      { Binding: 'productName', Type: 'select', Label: "Select Product", SelectList: [] },
      { Binding: 'dateRecieved', Type: 'textDate', Label: "Date" },
      { Binding: 'amount', Type: 'number', Label: "Amount" },
    ]
  }

  getAddAi(): any {
    return [
      { Binding: 'iaName', Type: 'text', Label: "Name" },
      { Binding: 'environmentalToxicity', Type: 'text', Label: "Environmental Toxicity" },
      { Binding: 'terestrialToxicity', Type: 'text', Label: "Terestrial Toxicity" },
      { Binding: 'hazardLevel', Type: 'select', Label: "Hazard Level", SelectList: ["green", "red", "yellow"] },
    ]
  }
  getThresholdSetting(): any {
    return [
      { Binding: 'pest', Type: 'selectEmit', Label: "Pests", SelectList: [ ] }, 
      { Binding: 'economic', Type: 'number', Label: "Economic threshold level" },
      { Binding: 'damage', Type: 'number', Label: "Damage threshold level" }
    ]
  }
}

