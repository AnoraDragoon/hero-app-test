import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { HeroFormComponent } from './components/hero-form/hero-form.component';
import { OptionsPanelComponent } from './components/options-panel/options-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroFormComponent,
    OptionsPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
