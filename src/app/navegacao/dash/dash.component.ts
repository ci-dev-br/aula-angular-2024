import { Component } from '@angular/core';

export var single = [

  {
    "name": "Germany",
    "value": 8940000
  },
  {
    "name": "USA",
    "value": 5000000
  }
]

@Component({
  selector: 'nx-dash',
  templateUrl: './dash.component.html',
  styleUrl: './dash.component.scss'
})
export class DashComponent {

  results = single;

}
