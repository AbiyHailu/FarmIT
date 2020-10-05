import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MethodesService } from '../../../services/methods.service';
import { CrudService } from '../../../crud/crud.service';
import { Farm, ProfileService } from '../profile.service';
import { CrudComponent } from '../../../crud/crud.component';

@Component({
    selector: 'farm',
    templateUrl: './farm.component.html',
    styleUrls: ['./farm.component.scss']
})

export class FarmComponent {
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
        this.getFarms(this.company)
    }

    farm: Farm
    getFarms(companyid) {
        this.profileService.getFarmByCompanyiD(companyid)
            .pipe(takeUntil(this.subject))
            .subscribe(res => {
                if (res)
                    this.farm = res[0]
            })
    }

    modalRef: any
    title = 'Edit Farm Profile'
    editItem(item) {
        let builderItems = this.crudService.getAddFarm()
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
                this.profileService.editFarmProfile(result)
        })
    }

    editFarm(item) {
        console.log(item)
    }

    farmDetails(item) {
        console.log(item)
    }

    ngOnDestroy(): void {
        this.subject.next();
    }
}
