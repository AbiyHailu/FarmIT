import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MethodesService } from '../../../services/methods.service';
import { CrudService } from '../../../crud/crud.service';
import { Farm, GH, GHPlant, ProfileService } from '../profile.service';
import { CrudComponent } from '../../../crud/crud.component';

@Component({
    selector: 'plantings',
    templateUrl: './plantings.component.html',
    styleUrls: ['./plantings.component.scss']
})

export class PlantingsComponent {
    subject: Subject<void> = new Subject();
    constructor(
        private cm: MethodesService,
        private profileService: ProfileService,
        private crudService: CrudService,
        private modalService: NgbModal
    ) {
        this.getCompanyDetails()

    }

    company: string
    getCompanyDetails() {
        this.company = this.cm.checkCompany()
        this.getPlantings(this.company)
        this.getGhs(this.company)
    }

    plantings: GHPlant[] = []
    getPlantings(companyid: string) {
        this.profileService.getPlantingsById(companyid)
            .pipe(takeUntil(this.subject))
            .subscribe(res => {
                this.plantings = res
                console.log(this.plantings)

            })
    }


    ghs: GH[] = []
    getGhs(companyid) {
        this.profileService.getGHByCompanyId(companyid)
            .pipe(takeUntil(this.subject))
            .subscribe(res => {
                this.ghs = res
            })
    }

    createNewItem() {
        this.modalRef = this.modalService.open(CrudComponent, {
            centered: true,
            size: 'md',
            backdrop: 'static',
            keyboard: false
        });

        this.modalRef.componentInstance.data = this.crudService.getAddGHPlant();
        this.modalRef.componentInstance.type = this.title;
        this.modalRef.result.then((result: any) => {
            if (result != null)
                this.profileService.addPlant(result)
        })
    }
    modalRef: any
    title = 'Plant a plant in Greenhouse'
    editItem(item: any) {
        let builderItems = this.crudService.getEditGHPlant()
        builderItems = this.cm.assignEditValues(builderItems, item)

        this.modalRef = this.modalService.open(CrudComponent, {
            centered: true,
            size: 'md',
            backdrop: 'static',
            keyboard: false
        });

        this.modalRef.componentInstance.data = builderItems;
        this.modalRef.componentInstance.type = this.title;
        this.modalRef.componentInstance.event.subscribe(res => {
            console.log(item.ghId)
            console.log(res);
            if (res.Binding == 'haPlanted') {
                this.checkIfPlantareaisOccupied(res.Value, item.ghId )
                this.modalRef.componentInstance.message= this.message  
                this.modalRef.componentInstance.disablebutton= this.disablebutton 
            }

        })
        this.modalRef.result.then((result: any) => {
            if (result != null)
                this.profileService.editFarmProfile(result)
        })
    }
 
    disablebutton = false
    message = ''
    checkIfPlantareaisOccupied(val, id) {  
        let remaining = this.getTotalGHarea(id) - this.getSumofPltArea(id) 
        if (val > remaining) {
            this.message = "There is only" + ' ' + remaining + ' ' + "ha remain in this greenhouse "
            this.disablebutton = true 
        } else {
            this.disablebutton =  false 
            this.message = '' 
        }
    }

    getTotalGHarea(id) {
        return this.ghs.find(e => e.id == id).size
    }

    getSumofPltArea(id) {
        let now = new Date().getTime() 
        let totalarea = 0
        this.plantings.filter(e => e.ghId == id).forEach(e => {
            let actual = new Date(e.dateCleared).getTime() 
            if (now > actual) { 
                totalarea += e.haPlanted
            }
        })
        return totalarea
    }

    editFarm(item: any) {
        console.log(item)
    }

    farmDetails(item: any) {
        console.log(item)
    }

    ngOnDestroy(): void {
        this.subject.next();
    }
}
