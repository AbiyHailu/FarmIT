import { Component, OnDestroy } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CrudComponent } from 'src/app/crud/crud.component';
import { FormControl, FormGroup } from '@angular/forms';
import { Farm, GH, GHPlant, Plant, ProfileService } from './profile.service';
import { MethodesService } from 'src/app/services/methods.service';
import { CrudService } from 'src/app/crud/crud.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnDestroy {
  subject: Subject<void> = new Subject();
  farm: Farm
  gh: GH[] = []
  plants: Plant[] = []
  ghPlants: GHPlant[] = []
  selectedIndex: number
  ghStstusIndex: number
  plStstusIndex: number
  modalRef: any
  units: any = []

  constructor(
    private profileService: ProfileService,
    private commonMethodesService: MethodesService,
    private modalService: NgbModal,
    private crudService: CrudService,
  ) {

  }
 
editFarmtData(farm: Farm) {
  this.modalRef = this.modalService.open(CrudComponent, {
    centered: true,
    size: 'md',
    backdrop: 'static',
    keyboard: false
  });

  this.modalRef.componentInstance.data = this.commonMethodesService.assignEditValues(this.crudService.getAddFarm(), farm);
  this.modalRef.componentInstance.type = "Edit Farm profile";
  this.modalRef.result.then(result => {
    console.log('result', result)
    if (result != null) {
      this.profileService.editFarmProfile(result)
    }
  })
}

addGreenhouse() {
  this.modalRef = this.modalService.open(CrudComponent, {
    centered: true,
    size: 'md',
    backdrop: 'static',
    keyboard: false
  });

  this.modalRef.componentInstance.data = this.crudService.getAddGH()
  this.modalRef.componentInstance.type = "Edit GreenHouse";
  this.modalRef.result.then(result => {
    console.log('result', result)
    if (result != null) {
      this.profileService.editFarmProfile(result)
    }
  })
}

editGreenHouses(greenhouse: GH) {
  console.log(greenhouse)
  this.modalRef = this.modalService.open(CrudComponent, {
    centered: true,
    size: 'md',
    backdrop: 'static',
    keyboard: false
  });

  this.modalRef.componentInstance.data = this.commonMethodesService.assignEditValues(this.crudService.getAddGH(), greenhouse);
  this.modalRef.componentInstance.type = "Edit GreenHouse";
  this.modalRef.result.then(result => {
    console.log('result', result)
    if (result != null) {
      this.profileService.editFarmProfile(result)
    }
  })
}

addPlant() {
  this.modalRef = this.modalService.open(CrudComponent, {
    centered: true,
    size: 'md',
    backdrop: 'static',
    keyboard: false
  });

  this.modalRef.componentInstance.data = this.crudService.getAddPlant()
  this.modalRef.componentInstance.type = "Add new Plant";
  this.modalRef.result.then(result => {
    console.log('result', result)
    if (result != null) {
      this.profileService.editFarmProfile(result)
    }
  })
}

ediePlant(plant: GH) {
  console.log(plant)
  this.modalRef = this.modalService.open(CrudComponent, {
    centered: true,
    size: 'md',
    backdrop: 'static',
    keyboard: false
  });

  this.modalRef.componentInstance.data = this.commonMethodesService.assignEditValues(this.crudService.getAddPlant(), plant);
  this.modalRef.componentInstance.type = "Edit Plant";
  this.modalRef.result.then(result => {
    console.log('result', result)
    if (result != null) {
      this.profileService.editFarmProfile(result)
    }
  })
}

addGhPlant() {
  let buildItems = this.crudService.getAddGHPlant()
  let plantNameList = []
  this.plants.forEach(e => { plantNameList.push(e.name) })
  buildItems.filter(e => e.Binding == "plantName")[0].SelectList = plantNameList

  let ghNameList = []
  this.gh.forEach(e => { ghNameList.push(e.name) })
  buildItems.filter(e => e.Binding == "ghName")[0].SelectList = ghNameList

  this.modalRef = this.modalService.open(CrudComponent, {
    centered: true,
    size: 'md',
    backdrop: 'static',
    keyboard: false
  });

  this.modalRef.componentInstance.data = buildItems;
  this.modalRef.componentInstance.type = "Edit Plant";
  this.modalRef.result.then(result => {
    console.log('result', result)
    if (result != null) {
      this.profileService.editFarmProfile(result)
    }
  })
}

edieGhPlant(ghplt) {
  console.log(ghplt)

  let buildItems = this.crudService.getAddGHPlant()
  let plantNameList = []
  this.plants.forEach(e => { plantNameList.push(e.name) })
  buildItems.filter(e => e.Binding == "plantName")[0].SelectList = plantNameList

  let ghNameList = []
  this.gh.forEach(e => { ghNameList.push(e.name) })
  buildItems.filter(e => e.Binding == "ghName")[0].SelectList = ghNameList

  this.modalRef = this.modalService.open(CrudComponent, {
    centered: true,
    size: 'md',
    backdrop: 'static',
    keyboard: false
  });

  this.modalRef.componentInstance.data = this.commonMethodesService.assignEditValues(buildItems, ghplt);
  this.modalRef.componentInstance.type = "Edit Plant";
  this.modalRef.result.then(result => {
    console.log('result', result)
    if (result != null) {
      this.profileService.editFarmProfile(result)
    }
  })
}

getSelected(index: number) {
  console.log(index)
  this.selectedIndex = index
}


createForm(data) {
  const formGroup = {};
  data.forEach(e => {
    formGroup[e.Binding] = new FormControl({ value: e.Value || '', disabled: e.Disable || false })
  })
  return new FormGroup(formGroup);
}




totalSize: number
lengthmain: number
widthmain: number
errormessage = ''
unitError = ''
nameErrorMessage = ''
calculateDimensions(size: number, unit: string) {
  if (!unit) {
    this.unitError = "Select unit"
  } else {
    this.unitError = " "
    if (unit == 'm2') {
      //size must be below 1 digites :should be inproved 
      if (size.toString().length <= 3) {
        this.errormessage = "* Farm size is too small (min 1000 m2)"
      } else {
        this.errormessage = ""
        this.widthmain = 500
        this.lengthmain = 300
        this.totalSize = size
      }
    } else if (unit == 'ha') {
      if (size.toString().length > 3) {
        this.errormessage = "farm size is too big (max 100 ha)"
      } else {
        if (size > 100) {
          this.errormessage = "farm size is too big (max 100 ha)"
        } else {
          this.widthmain = 800
          this.lengthmain = 500
          this.totalSize = size
        }
      }
    }
  }
}

GreenHs: [{ name: string, type: string; length: number, width: number, rows: number, size: number, unit: string }]
numberofGHs: number
numberofGH(value: number) {
  this.GreenHs = [{ name: '', type: '', length: 0, width: 0, rows: 0, size: 0, unit: 'ha' }]
  this.numberofGHs = value
  for (let index = 1; index < value; index++) {
    this.GreenHs.push({ name: '', type: '', length: 0, width: 0, rows: 0, size: 0, unit: 'ha' })
  }
  console.log(this.GreenHs)
}

Plots: [{ name: string, type: string; length: number, width: number, rows: number, size: number, unit: string }]
numberofPlotss: number
numberofPlots(value: number) {
  this.Plots = [{ name: '', type: '', length: 0, width: 0, rows: 0, size: 0, unit: 'ha' }]
  this.numberofPlotss = value
  for (let index = 1; index < value; index++) {
    this.Plots.push({ name: '', type: '', length: 0, width: 0, rows: 0, size: 0, unit: 'ha' })
  }
  console.log("this.Plots", this.Plots)
}

addDimensionForGHs(index: number, width: number, length: number, rows: number) {
  console.log(index, width, length)
  this.GreenHs[index].width = width;
  this.GreenHs[index].length = length
  this.GreenHs[index].rows = rows
  this.GreenHs[index].name = "GH" + index + 1
  this.Plots[index].type = "GreenHouse"
  this.GreenHs[index].size = this.calculateGhSize(length, width)
  console.log(this.GreenHs)
}
addDimensionForPlotss(index: number, width: number, length: number, rows: number) {
  console.log(index, width, length)
  this.Plots[index].width = width;
  this.Plots[index].length = length
  this.Plots[index].rows = rows
  this.Plots[index].name = "Plot" + index + 1
  this.Plots[index].type = "Open Field"
  this.Plots[index].size = this.calculateGhSize(length, width)
  console.log(this.GreenHs)
}

farmIndex: any
ghIndex: any
plotIndex: any
toggleFarm() {
  this.farmIndex = !this.farmIndex
  this.ghIndex = false
  this.plotIndex = false
}

toggleGh() {
  this.farmIndex = false!
  this.ghIndex = !this.ghIndex
  this.plotIndex = false
}

togglePlot() {
  this.farmIndex = false!
  this.ghIndex = false
  this.plotIndex = !this.plotIndex
}


calculateGhSize(length: number, width: number) {
  return length * width / 10000
}
ngOnDestroy(): void {
  this.subject.next()
}
}

