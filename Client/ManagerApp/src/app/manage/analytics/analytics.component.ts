import { Component } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MethodesService } from 'src/app/services/methods.service';
import { GH, ProfileService } from '../profile/profile.service';
import { Pest, PestService } from '../protection/pest/pest.service';
import { SettingService, ThresholdLevelSetting } from '../setting/setting.service';
import { Scout, ScoutService } from '../protection/scout/scout.service';
 
@Component({
  selector: 'analytics',
  styleUrls: ['analytics.component.scss'],
  templateUrl: './analytics.component.html',
})

export class AnalyticsComponent {
  subject: Subject<void> = new Subject();
  constructor(
    private cm: MethodesService,
    private settingService: SettingService,
    private scoutService: ScoutService,
    private profileService: ProfileService,
    private pestService: PestService

  ) {
    this.getCompanyDetails()
    // this.weightedAverage(5, 20, 200) 
    this.prepareChardData("1", "1", "week")
  } 
  
  lineChartData: ChartDataSets[] = [
    { data: [ ], label: ' ' },
    { data: [ 2.3, 4.4, 3.3], label: ' test' },
  ];
  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  lineChartOptions:ChartOptions = {  } ;
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
     // backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = false;
  public lineChartType = 'line';
  public lineChartPlugins = [];

 
  filteredData: any[]
  scoutdata = []
  scoutLabel = "string"
  prepareChardData(ghId, pestId, selectedTime) { 
    let filterdByDate = []
    filterdByDate =this.scoutData.filter(e => this.cm.convertTime(e.createdDate) > this.cm.selectedTime(selectedTime) && e.pestId == pestId && e.ghid == ghId)
    let currentGhRow = this.ghs.find(e => e.id == ghId).rows 
    this.scoutLabel = this.ghs.find(e => e.id == ghId).name

    let x = []
    filterdByDate.forEach(e => {
      if (x.length == 0) {
        let weighted = this.cm.weightedAverage(e.rownumberStart, e.rowNumberEnd, currentGhRow) * e.amount
        x.push({ date: e.createdDate, ghId: e.ghid, weightAmount: weighted })
      } else if (x.length > 0) {
        console.log(true)
        if (x.filter(n => n.date == e.createdDate && n.ghId == ghId).length > 0) {
          let weighted = this.cm.weightedAverage(e.rownumberStart, e.rowNumberEnd, currentGhRow) * e.amount
          x.filter(n => n.date == e.createdDate && n.ghId == ghId)[0].weightAmount + weighted

        } else {
          let weighted = this.cm.weightedAverage(e.rownumberStart, e.rowNumberEnd, currentGhRow) * e.amount
          x.push({ date: e.createdDate, ghId: e.ghid, weightAmount: weighted })
        }
      }
    })

    this.lineChartData[0].data = this.cm.prepareLineChartData(x )
    this.lineChartData[0].label =this.scoutLabel
    this.lineChartLabels =  this.cm.prepareLineeChartLabels(x)
    //then filter byGH 
    console.log("filterdByDate", filterdByDate)
    console.log("x", x) 
 
    // console.log(this.scoutdata, this.scoutdata)
  } 

  company: string
  getCompanyDetails() {
    this.company = this.cm.checkCompany()
    this.getSetting(this.company)
    this.getScoutData(this.company)
    this.getGreenHouses(this.company)
    this.getPests(this.company)
  }

  ghs: GH[]
  getGreenHouses(companyid) {
    this.profileService.getGHByCompanyId(companyid)
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        this.ghs = res
        console.log("gh", this.ghs)
      })
  }

  pests: Pest[]
  getPests(companyid) {
    this.pestService.getPestByCompanyId(companyid)
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        this.pests = res
        console.log("pests", this.pests)
      })
  }

  thresholdSetting: ThresholdLevelSetting[]
  getSetting(id: string) {
    this.settingService.getThresholdlevelSetting(id)
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        this.thresholdSetting = res
        console.log(this.thresholdSetting)
      })
  }

  scoutData: Scout[]
  getScoutData(companyId) {
    this.scoutService.getScoutByCompanyId(companyId)
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        this.scoutData = res
        console.log("scout", this.scoutData)
      })
  }


  ngOnDestroy(): void {
    this.subject.next()
  }
}
