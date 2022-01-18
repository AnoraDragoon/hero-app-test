import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';

import { HeroListComponent } from './components/hero-list/hero-list.component';
import { HeroFormComponent } from './components/hero-form/hero-form.component';
import { OptionsPanelComponent } from './components/options-panel/options-panel.component';
import { HeroesPageComponent } from './components/heroes-page/heroes-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';
import { FilterHeroPipe } from './pipes/filter-hero.pipe';
import { PaginationPipe } from './pipes/pagination.pipe';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
    declarations: [
        AppComponent,
        HeroListComponent,
        HeroFormComponent,
        OptionsPanelComponent,
        HeroesPageComponent,
        PageNotFoundComponent,
        HeroDetailsComponent,
        FilterHeroPipe,
        PaginationPipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatSliderModule,
        MatFormFieldModule,
        MatInputModule,
        MatListModule,
        MatPaginatorModule,
        MatButtonModule,
        MatSelectModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
