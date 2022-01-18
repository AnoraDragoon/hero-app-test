import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { Observable } from 'rxjs';
import { Hero } from 'src/app/models/hero';

@Component({
    selector: 'app-hero-list',
    templateUrl: './hero-list.component.html',
    styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent {

    @Input()
    public heroes: Hero[] = [];

    public pageSize = 10;
    public pageIndex = 0;
    @Output() selectionChange: EventEmitter<Hero> = new EventEmitter;



    constructor() { }

    load(heroes: Hero[], pageIndex: number, pageSize: number) {
        const elements: Hero[] = [];
        for (let index = pageIndex; index < pageIndex + pageSize && index < heroes.length; index++) {
            elements.push(this.heroes[index]);
        }
        return elements;
    }

    select(event: MatSelectionListChange) {
        this.selectionChange.emit(event.options[0].value);
    }
}
