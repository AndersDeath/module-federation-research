import { Mfe1UiModule } from '@module-federation-research/mfe1-ui';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    Mfe1UiModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
