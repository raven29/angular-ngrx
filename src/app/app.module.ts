import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import * as appRedusers from './store/app.reducers';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      root: appRedusers.reducer,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
