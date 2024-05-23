import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { PintarDeRedDirective } from './pintar-de-red.directive';
import { PintarDeBlueDirective } from './pintar-de-blue.directive';
import { CepPipe } from './cep.pipe';
import localePt from '@angular/common/locales/pt';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import { Interceptor } from './interceptor';
import { ApiModule } from 'src/api/api.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
registerLocaleData(localePt);


@NgModule({
  declarations: [
    AppComponent,
    CepPipe,
    // PintarDeRedDirective,
    // PintarDeBlueDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ApiModule.forRoot({ rootUrl: 'http://localhost:3000' }),
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [

  ],
  providers: [
    AuthService,
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    },
    {
      provide: 'API_URL',
      useValue: 'https://pokeapi.co/api/v2/'
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }