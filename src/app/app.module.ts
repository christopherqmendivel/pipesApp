import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

// Configuración del locale de la app
import localeEsHN from '@angular/common/locales/es-HN';
import localeFrCA from '@angular/common/locales/fr-CA';

import { registerLocaleData } from '@angular/common';
import { OrderComponent } from './products/pages/order/order.component';

registerLocaleData( localeEsHN );
registerLocaleData( localeFrCA );

// Módulo personalizado

/* 
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { MenuComponent } from './shared/components/menu/menu.component';
import { SharedModule } from 'primeng/api';
import localEsHN from '@angular/common/locales/es-HN';
*/

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-HN'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
