import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
    selector: 'app-heroes-page',
    templateUrl: './heroes-page.component.html',
    styleUrls: ['./heroes-page.component.scss']
})
export class HeroesPageComponent implements OnInit {

    public heroes: Hero[];
    public selectedId: number;


    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.getHeroes();
    }

    private getHeroes(): void {
        this.heroService.getHeroes()
            .subscribe((heroes: Hero[]) => this.heroes = heroes)
    }
}
