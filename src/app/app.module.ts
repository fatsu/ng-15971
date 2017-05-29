import { BrowserModule } from '@angular/platform-browser';
import {FactoryProvider, isDevMode, NgModule, NgZone} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

const ngZoneFactory = () => new NgZone({enableLongStackTrace: isDevMode()})

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    // <FactoryProvider> {
    //   provide: NgZone,
    //   useFactory: ngZoneFactory
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
