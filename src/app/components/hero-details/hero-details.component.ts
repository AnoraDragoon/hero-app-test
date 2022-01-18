import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Hero } from 'src/app/models/hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
    selector: 'app-hero-details',
    templateUrl: './hero-details.component.html',
    styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnChanges {

    @Input() heroID: number = -1;
    public hero?: Hero;


    constructor(private service: HeroService) { }

    ngOnChanges(): void {
        if (this.heroID < 0) {
            this.hero = undefined;
            return;
        }
        this.hero = this.service.getHero(this.heroID);
    }

}
