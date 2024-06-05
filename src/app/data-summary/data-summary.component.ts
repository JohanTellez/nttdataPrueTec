import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-summary',
  templateUrl: './data-summary.component.html',
  styleUrls: ['./data-summary.component.css']
})
export class DataSummaryComponent implements OnInit {

  dataClient: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const storedData = sessionStorage.getItem('dataClient');
    if (storedData) {
      this.dataClient = JSON.parse(storedData);
    }
  }

  goToDataEntry() {
    this.router.navigate(['']);
  }

}
