import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from 'src/app/models/hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
    selector: 'app-options-panel',
    templateUrl: './options-panel.component.html',
    styleUrls: ['./options-panel.component.scss']
})
export class OptionsPanelComponent {

    @Input() heroID: number = -1;
    public searchParam: string = '';
    @Output() onSearch: EventEmitter<string> = new EventEmitter;


    constructor(private service: HeroService) { }

    confirm(heroID: number): void {
        const hero = this.service.getHero(heroID) as Hero;
        if (confirm(`¿Está seguro que desea borrar el heroe: ${hero.name}?`)) {
            this.service.delete(hero);
        }
    }

    search() {
        this.onSearch.emit(this.searchParam);
    }
}
