import { Component, OnInit, Output } from '@angular/core';
import { ChartjsModule } from '@ctrl/ngx-chartjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lineData: any
  lineOptions: any

  constructor() { }

  ngOnInit() {
    this.showGraph()
  }

  showGraph() {
    this.lineData = {
      labels: ["100", "200", "300", "400", "500", "600"],
      datasets: [

        {
          label: "Value",
          backgroundColor: 'rgba(26,179,148,0.5)',
          borderColor: "rgba(26,179,148,0.7)",
          pointBackgroundColor: "rgba(26,179,148,1)",
          pointBorderColor: "#fff",
          data: [0, 0.05, 0.07, 0.09, 0.15, 0.25]
        }
      ]
    };

    this.lineOptions = {
      responsive: true
    };
  }

}
