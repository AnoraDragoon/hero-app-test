import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../models/hero';
import { MOCK_HEROES } from '../models/mock-heroes';

@Injectable({
    providedIn: 'root'
})
export class HeroService {

    private heroes: Hero[] = MOCK_HEROES;


    constructor() { }

    getHeroes(match?: string): Observable<Hero[]> {
        const heroes = of(
            Boolean(match) ?
                this.heroes.filter((hero: Hero) => hero.name.includes(match)) :
                this.heroes
        );
        return heroes;
    }

    add(name: string): Observable<void> {
        const id = this.heroes[this.heroes.length - 1].id + 1;
        const hero = {
            id: id,
            name: name
        };
        this.heroes.push(hero);
        return of();
    }

    update(hero: Hero): Observable<boolean> {
        const index = this.heroes.indexOf(this.heroes.find((inHero: Hero) => inHero.id = hero.id));
        if (index) {
            this.heroes[index] = hero;
            return of(true);
        }
        return of(false);
    }

    delete(hero: Hero): Observable<boolean> {
        const index = this.heroes.indexOf(this.heroes.find((inHero: Hero) => inHero.id = hero.id));
        if (index) {
            this.heroes.slice(index, 1);
            return of(true);
        }
        return of(false);
    }
}
