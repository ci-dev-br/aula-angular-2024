import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapaRoutingModule } from './mapa-routing.module';
import { MapaComponent } from './mapa.component';
import 'leaflet/dist/leaflet.css';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [MapaComponent],
  imports: [
    CommonModule,
    MapaRoutingModule,
    LeafletModule
  ]
})
export class MapaModule { }
