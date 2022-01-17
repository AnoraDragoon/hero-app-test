import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroFormComponent } from './components/hero-form/hero-form.component';
import { HeroesPageComponent } from './components/heroes-page/heroes-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
    { path: 'heroes', component: HeroesPageComponent },
    { path: 'hero/new', component: HeroFormComponent },
    { path: 'hero/:id/edit', component: HeroFormComponent },
    { path: '', redirectTo: '/heroes', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
