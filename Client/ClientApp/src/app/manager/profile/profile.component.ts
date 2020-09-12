import { Component, OnDestroy } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { CommonMethedsService } from '../../shared.service/commonMethodes';
import { Plant, GH, ProfileService, GHPlant } from './service/profile.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnDestroy {
  subject: Subject<void> = new Subject();
  gh: GH[] = []
  plants: Plant[] = []
  ghPlants: GHPlant[] = []
  selectedIndex: number
  ghStstusIndex:number
  plStstusIndex:number
  statusGh: string
  statusPlGh: string
  constructor(
    private profileService: ProfileService,
    private commonMethodes: CommonMethedsService
  ) {
    this.getGH()
    this.getPlants()
    this.getGHPlants()
    this.selectedIndex =1
  }

  getGH() {
    this.profileService.getGHs()
      .pipe(takeUntil(this.subject))
      .subscribe(res => {  
        this.gh = res
        if ( this.gh &&this.gh.length > 0) {
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
    this.profileService.getGHs()
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        this.plants = res
      })
  }

  getGHPlants() {
    this.profileService.getGHs()
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        this.ghPlants = res
        if ( this.ghPlants && this.ghPlants.length > 0) {
          this.statusPlGh = "(Completed)" 
          this.plStstusIndex = 0
        } else {
          this.statusPlGh = "(Not Completed)" 
          this.plStstusIndex =1
        }
      })
  }

  getSelected(index:number){
    console.log(index)
   this.selectedIndex =index  
  }

  ngOnDestroy(): void {
    this.subject.next()
  }
}

