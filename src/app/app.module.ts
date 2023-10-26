import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { SharedModule } from './shared/shared.module';


// Configuracion del locales de la app
import localeEsPE from '@angular/common/locales/es-PE'
import localeFrCA from '@angular/common/locales/fr-CA'

import { registerLocaleData } from '@angular/common';


// llamamos a esta función para que establezca en angular todos los idiomas que queremos
// usar en nuestra aplicación (en este caso localeEsPE), recordar que esto afecta a los pipes
registerLocaleData(localeEsPE);
registerLocaleData(localeFrCA);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    SharedModule
  ],
  providers: [
    { provide:LOCALE_ID, useValue:'es-PE'} // Establece este idioma local en toda la aplicación
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
