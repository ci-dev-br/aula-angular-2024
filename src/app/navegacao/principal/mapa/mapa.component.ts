import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nx-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  options = {
    // layers: [
    //   tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    // ],
    // zoom: 5,
    // center: latLng(46.879966, -121.726909)
  };
}
