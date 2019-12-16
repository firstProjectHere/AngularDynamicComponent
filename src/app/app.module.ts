import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TestService } from './services/test.service';

import { FormsModule } from '@angular/forms';
import { MessageComponent } from './message/message.component';
import { DynamicComponent } from './dynamic/dynamic.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    DynamicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  entryComponents: [DynamicComponent],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
