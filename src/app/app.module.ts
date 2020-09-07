import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { MainViewComponent } from './main-view/main-view.component';
import { AddUserViewComponent } from './add-user-view/add-user-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    MainViewComponent,
    AddUserViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
