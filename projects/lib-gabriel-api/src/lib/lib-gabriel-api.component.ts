import { Component } from '@angular/core';
import { LibGabrielApiService } from './lib-gabriel-api.service';

@Component({
  selector: 'lib-lib-gabriel-api',
  standalone: true,
  imports: [],
  template: `
    <p>
      lib-gabriel-api works!
    </p>
  `,
  styles: ``
})
export class LibGabrielApiComponent {

  constructor(private service: LibGabrielApiService){

  }

  async chamarApi(url: string){
    return await this.service.getData(url)
  }

}
