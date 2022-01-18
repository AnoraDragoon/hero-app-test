import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../models/hero';

@Pipe({
    name: 'filterHero'
})
export class FilterHeroPipe implements PipeTransform {

    transform(value: Hero[], ...args: unknown[]): Hero[] {
        return value.filter((hero: Hero) => {
            const v1 = (args[0] !== '' && args[0] !== undefined) ?
                hero.name.toLocaleLowerCase().includes((args[0] as string).trim().toLocaleLowerCase()) :
                true;
            const v2 = args[1] as number > -1 && args[1] !== undefined ?
                hero.age === args[1] :
                true;
            return v1 && v2;
        });
    }

}
