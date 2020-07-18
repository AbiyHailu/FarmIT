import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  styleUrls: ['dashboard.component.css'], 
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  //Get plan By Company id for manager for user specific
  sideButtons = [
    { "Subscription": "Store", "Actionlink": "link", "Other": "other" },
    { "Subscription": "Fertigation", "Actionlink": "link", "Other": "other" },
    { "Subscription": "Protection", "Actionlink": "link", "Other": "other" },
    { "Subscription": "PackHouse", "Actionlink": "link", "Other": "other" }
  ]
}
