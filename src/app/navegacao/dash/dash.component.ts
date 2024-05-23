import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NgxChartsModule } from '@swimlane/ngx-charts';

export var single = [
  {
    "name": "Paulo",
    "value": 233333
  },
  {
    "name": "Newjwnw",
    "value": 32423
  },
  {
    "name": "Germany",
    "value": 123213
  },
];

@Component({
  selector: 'nx-dash',
  standalone: true,
  imports: [
    NgxChartsModule,
    MatButtonModule,
  ],
  templateUrl: './dash.component.html',
  styleUrl: './dash.component.scss'
})
export class DashComponent {
  results = single;
}
