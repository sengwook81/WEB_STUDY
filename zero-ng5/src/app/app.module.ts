import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule, NZ_LOCALE, enUS } from 'ng-zorro-antd';

import { AppComponent } from './app.component';
import { TestComponent } from './form/test/test.component';



@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule.forRoot()
  ],
  providers: [{ provide: NZ_LOCALE, useValue: enUS }],
  bootstrap: [AppComponent]
})
export class AppModule { }
