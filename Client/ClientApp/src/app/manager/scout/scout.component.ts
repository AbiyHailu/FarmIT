import { Component } from '@angular/core';

@Component({
  selector: 'scout-root',
  templateUrl: './scout.component.html',
  styleUrls: ['./scout.component.css']
})
export class ScoutComponent { 

  ghs:any
  pest:any
  constructor() {  
    this.ghs = this.getGH()
    this.pest = this.getPests()
  }

  getGH(){  
    return [
      {id:1, name:"GH1"},
      {id:2, name:"GH2"},
      {id:3, name:"GH3"},
      {id:4, name:"GH4"}
    ]
  }

  getPests(){
    return [
      {id:1, name:"P1"},
      {id:2, name:"P2"},
      {id:3, name:"P3"},
      {id:4, name:"P4"}
    ]
  }  
  
  addScoutData(gh){
    console.log(gh)
  }
} 

export class Scout {
  id: any
  ghid: string
  pestId:string 
  rownumberStart:any
  rowNumberEnd:any
  amount:any// severity with %
} 