import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MethodesService } from '../../../services/methods.service';
import { CrudService } from '../../../crud/crud.service';
import {  GH, ProfileService } from '../profile.service';
import { CrudComponent } from '../../../crud/crud.component';

@Component({
    selector: 'production-area',
    templateUrl: './production-area.component.html',
    styleUrls: ['./production-area.component.scss']
})

export class ProductionAreaComponent {
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
        this.getGhs(this.company)
    }

    ghs: GH[]=[]
    getGhs(companyid) {
        this.profileService.getGHByCompanyId(companyid)
            .pipe(takeUntil(this.subject))
            .subscribe(res => {
                if (res)
                    this.ghs = res 
            })
    }

    modalRef: any
    title = 'Edit Farm Profile'
    editItem(item) {
        let builderItems = this.crudService.getAddGH()
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
                this.profileService.editGH(result)
        })
    }

    editGh(item) {
        console.log(item)
    }

    ghDetails(item) {
        console.log(item)
    }

    ngOnDestroy(): void {
        this.subject.next();
    }
}
