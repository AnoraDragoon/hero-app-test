import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero';
import { Match } from 'src/app/models/match';
import { HeroService } from 'src/app/services/hero.service';

@Component({
    selector: 'app-heroes-page',
    templateUrl: './heroes-page.component.html',
    styleUrls: ['./heroes-page.component.scss']
})
export class HeroesPageComponent implements OnInit {

    public heroes: Hero[] = [];
    public selectedId: number = -1;

    public search?: string;
    public filter?: number;


    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.getHeroes();
    }

    reloadHeroes(): void {
        this.getHeroes({ search: this.search, filter: this.filter });
    }

    select(event: Hero): void {
        this.selectedId = event.id;
    }

    private getHeroes(match?: Match): void {
        this.heroService.getHeroes(match)
            .subscribe((heroes: Hero[]) => this.heroes = heroes)
    }
}
