import { Component, OnDestroy } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { CommonMethedsService } from '../../shared.service/commonMethodes';
import { Plant, GH, ProfileService, GHPlant, Farm } from './service/profile.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CrudComponent } from 'src/app/crud/crud.component';
import { CrudService } from 'src/app/crud/service/crud.service';

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
  farmStatusIndex: number
  ghStstusIndex: number
  plStstusIndex: number
  statusFarm: string = "(Completed)"
  statusGh: string
  statusPlGh: string 
  modalRef: any
  
  constructor(
    private profileService: ProfileService,
    private commonMethodesService: CommonMethedsService, 
    private modalService: NgbModal, 
    private crudService: CrudService,
  ) {
    this.getFarm()
    this.getGH()
    this.getPlants()
    this.getGHPlants()
    this.selectedIndex = 0
  }

  getFarm() {
    this.profileService.getFarm()
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        if (res && res.length > 0) {
          this.farm = res[0]
          this.farmStatusIndex = 0
          if (!this.farm.setupCompleted) {
            this.statusFarm = "(Not Completed)"
            this.farmStatusIndex = 1
          }
        }
      })
  }

  getGH() {
    this.profileService.getGHs()
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        this.gh = res
        if (this.gh && this.gh.length > 0) {
          this.statusGh = "(Completed)"
          this.ghStstusIndex = 0
        } else {
          console.log(true)
          this.statusGh = "(Not Completed)"
          this.ghStstusIndex = 1
        }
      })
  }

  getPlants() {
    this.profileService.getPlants()
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        this.plants = res
      })
  }

  getGHPlants() {
    this.profileService.getGHPlants()
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        this.ghPlants = res

        console.log("this.ghPlants", this.ghPlants)
        if (this.ghPlants && this.ghPlants.length > 0) {
          this.statusPlGh = "(Completed)"
          this.plStstusIndex = 0
        } else {
          this.statusPlGh = "(Not Completed)"
          this.plStstusIndex = 1
        }
      })
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

  addGreenhouse(){  
      this.modalRef = this.modalService.open(CrudComponent, {
        centered: true,
        size: 'md',
        backdrop: 'static',
        keyboard: false
      });
  
      this.modalRef.componentInstance.data =  this.crudService.getAddGH() 
      this.modalRef.componentInstance.type = "Edit GreenHouse";
      this.modalRef.result.then(result => { 
        console.log('result', result)
        if (result != null) { 
          this.profileService.editFarmProfile(result)
        }
      })   
  }
  
  editGreenHouses(greenhouse:GH){ 
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

  addPlant(){  
    this.modalRef = this.modalService.open(CrudComponent, {
      centered: true,
      size: 'md',
      backdrop: 'static',
      keyboard: false
    });

    this.modalRef.componentInstance.data =  this.crudService.getAddPlant() 
    this.modalRef.componentInstance.type = "Add new Plant";
    this.modalRef.result.then(result => { 
      console.log('result', result)
      if (result != null) { 
        this.profileService.editFarmProfile(result)
      }
    })   
}

  ediePlant(plant:GH){ 
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

  addGhPlant(){
    let buildItems =this.crudService.getAddGHPlant()
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

    this.modalRef.componentInstance.data = buildItems ;
    this.modalRef.componentInstance.type = "Edit Plant";
    this.modalRef.result.then(result => { 
      console.log('result', result)
      if (result != null) { 
        this.profileService.editFarmProfile(result)
      }
    })   
  }

  edieGhPlant(ghplt){
    console.log(ghplt)
    
    let buildItems =this.crudService.getAddGHPlant()
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

  ngOnDestroy(): void {
    this.subject.next()
  }
}

