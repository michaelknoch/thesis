import {Component} from '@angular/core';
import {OtherComponent} from '../components/otherComponent.comp';

@Component({
    selector: 'basic-component',
    directives: [OtherComponent],
    templateUrl: 'basic.html',
    styleUrls: ['basic.css']
})

export class BasicComponent {

    private someData: Array<number> = [];

    constructor() {

    }

    public getData() -> Array<number> {
        return this.someData;
    }
}
