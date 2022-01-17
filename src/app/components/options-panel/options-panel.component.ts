import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-options-panel',
    templateUrl: './options-panel.component.html',
    styleUrls: ['./options-panel.component.scss']
})
export class OptionsPanelComponent {

    @Input() heroID: number;


    constructor() { }

}
