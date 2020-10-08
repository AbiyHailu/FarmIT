import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MethodesService } from '../../../services/methods.service';
import { CrudService } from '../../../crud/crud.service';
import { Plant, ProfileService } from '../profile.service';
import { CrudComponent } from '../../../crud/crud.component';

@Component({
    selector: 'plant',
    templateUrl: './plants.component.html',
    styleUrls: ['./plants.component.scss']
})

export class PlantComponent {
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
        this.getPlants(this.company)
    }

    plants: Plant[]=[]
    getPlants(companyid: string) {
        this.profileService.getPlantsByCompanyId(companyid)
            .pipe(takeUntil(this.subject))
            .subscribe(res => { 
                this.plants = res 
            })
    }

    createNewItem(){ 
        this.modalRef = this.modalService.open(CrudComponent, {
            centered: true,
            size: 'md',
            backdrop: 'static',
            keyboard: false
        });

        this.modalRef.componentInstance.data = this.crudService.getAddPlant() ;
        this.modalRef.componentInstance.type = this.title;
        this.modalRef.result.then((result: any) => {
            if (result != null)
                this.profileService.addPlant(result)
                this.getPlants(this.company )
        }) 
    }

    modalRef: any
    title = 'Add New Plant'
    editItem(item: any) {
        let builderItems = this.crudService.getAddPlant()
        builderItems = this.cm.assignEditValues(builderItems, item)

        this.modalRef = this.modalService.open(CrudComponent, {
            centered: true,
            size: 'md',
            backdrop: 'static',
            keyboard: false
        });

        this.modalRef.componentInstance.data = builderItems;
        this.modalRef.componentInstance.type = this.title;
        this.modalRef.result.then((result: any) => {
            if (result != null)
                this.profileService.editPlant(result)
        })
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
