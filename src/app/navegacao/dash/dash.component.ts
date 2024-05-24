import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { NgxChartsModule } from '@swimlane/ngx-charts';

export var single = [
  {
    "name": "United Kingdom",
    "value": 36240,
    "extra": {
      "code": "uk"
    }
  },
  {
    "name": "Spain",
    "value": 33000,
    "extra": {
      "code": "es"
    }
  },
  {
    "name": "Italy",
    "value": 35800,
    "extra": {
      "code": "it"
    }
  }
]

@Component({
  selector: 'nx-dash',
  standalone: true,
  imports: [
    NgxChartsModule,
    MatButton
  ],
  templateUrl: './dash.component.html',
  styleUrl: './dash.component.scss'
})
export class DashComponent {
  results = single
}
