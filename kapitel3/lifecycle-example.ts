import {Component, OnInit, OnDestroy, OnChanges, SimpleChanges} from '@angular/core'
@Component({
    selector: 'lifecycle-example',
})
export class LifecycleExample implements OnInit, OnDestroy, OnChanges {
    constructor() {}
    ngOnInit() {
        // Initialisierung
    }
    ngOnChanges(changes: SimpleChanges) {
        // Datenaenderung
    }
    ngOnDestroy() {
        // Dekonstruktion
    }
}
