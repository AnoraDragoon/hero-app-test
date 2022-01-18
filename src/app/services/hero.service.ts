import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Match } from '../models/match';
import { Hero } from '../models/hero';
import { MOCK_HEROES } from '../models/mock-heroes';

@Injectable({
    providedIn: 'root'
})
export class HeroService {

    private heroes: Hero[] = MOCK_HEROES;


    constructor() { }

    getHeroes(): Observable<Hero[]> {
        // let heroes: Hero[];

        // const search: string = match !== undefined && match.search !== undefined ? match.search : '';
        // heroes = search ? this.heroes.filter((hero: Hero) => hero.name.includes(search)) : this.heroes;

        // const filter: number = match !== undefined && match.filter !== undefined ? match.filter : 0;
        // heroes = filter ? heroes.filter((hero: Hero) => hero.name.includes(search)) : heroes;

        return of(this.heroes);
    }

    public getAges(): Observable<number[]> {
        const result = this.heroes.map((hero: Hero) => hero.age);
        return of(result.filter(this.onlyUnique));
    }

    private onlyUnique(value: unknown, index: number, self: unknown[]) {
        return self.indexOf(value) === index;
    }

    public getHero(id: number): Hero | undefined {
        const hero = this.heroes.find((hero: Hero) => hero.id === id);
        return hero;
    }

    add(hero: Hero): Observable<void> {
        console.log(hero);
        const index: number = this.heroes.length > 0 ? this.heroes.length - 1 : 0;
        const id = this.heroes[index].id + 1;
        const newHero = {
            id: id,
            name: hero.name,
            age: hero.age
        };
        this.heroes.push(newHero);
        console.log(this.heroes);
        return of();
    }

    update(hero: Hero): Observable<boolean> {
        const finded: Hero | undefined = this.heroes.find((inHero: Hero) => inHero.id === hero.id);
        const result: Hero = finded !== undefined ? finded : { id: -1, name: '', age: 0 };
        const index = this.heroes.indexOf(result);

        if (index || index === 0) {
            this.heroes[index] = hero;
            return of(true);
        }
        return of(false);
    }

    delete(hero: Hero): Observable<boolean> {
        const finded: Hero | undefined = this.heroes.find((inHero: Hero) => inHero.id === hero.id);
        const result: Hero = finded !== undefined ? finded : { id: 0, name: '', age: 0 };
        const index = this.heroes.indexOf(result);

        if (index || index >= 0) {
            this.heroes.splice(index, 1);
            return of(true);
        }
        return of(false);
    }
}
