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
    public ages: number[] = [];
    public selectedId: number = -1;

    public search?: string;
    public filter?: number;


    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.getHeroes();
        this.getAges();
    }

    select(event: Hero): void {
        this.selectedId = event.id;
    }

    find($event: string): void {
        this.search = $event;
    }

    private getHeroes(): void {
        this.heroService.getHeroes()
            .subscribe((heroes: Hero[]) => { this.heroes = heroes; });
    }

    private getAges(): void {
        this.heroService.getAges()
            .subscribe((ages: number[]) => { this.ages = ages; });
    }
}
