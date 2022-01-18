import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from 'src/app/models/hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
    selector: 'app-hero-form',
    templateUrl: './hero-form.component.html',
    styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {

    public form: FormGroup;
    public hero: Hero;

    constructor(private fb: FormBuilder, private service: HeroService, private router: Router, private route: ActivatedRoute) {
        this.form = this.formInit({ id: -1, name: '', age: 0 });
        this.hero = { id: -1, name: '', age: 0 };
    }

    ngOnInit(): void {
        const id: number = (this.route.snapshot.paramMap.has('id') ? Number(this.route.snapshot.paramMap.get('id')) : -1) as number;
        if (id >= 0) {
            this.loadHero(id);
        }
    }

    public save(): void {
        if (!this.form.valid) return;

        const id: number = (this.route.snapshot.paramMap.has('id') ? Number(this.route.snapshot.paramMap.get('id')) : -1) as number;
        if (id >= 0) {
            this.service.update(this.form.value);
        } else {
            this.service.add(this.form.value);
        }
        this.router.navigate(['/heroes'])
    }

    loadHero(id: number): void {
        this.hero = this.service.getHero(id) as Hero;
        this.form = this.formInit(this.hero);
    }

    private formInit(hero: Hero): FormGroup {
        return this.fb.group({
            id: [hero.id, [Validators.required]],
            name: [hero.name, [Validators.required]],
            age: [hero.age, [Validators.required]],
        })
    }

}
