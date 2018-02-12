import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatCheckboxModule  } from '@angular/material/checkbox';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenavModule;

  reason = '';

  close(reason: string) {
    this.reason = reason;
  }
  constructor() { }

  ngOnInit() {
  }

}
