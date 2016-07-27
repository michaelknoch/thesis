import {Component, OnChanges, ElementRef, Input} from '@angular/core';
declare var cytoscape: any;
@Component({
    selector: 'ng2-cytoscape',
    template: '<div id="cy"></div>',
    styles: [`#cy {
        height: 100%; width: 100%; position: absolute; left: 0; top: 0;
    }`]
})

export class NgCytoscape implements OnChanges {
    @Input() public elements;
    @Input() public style;
    @Input() public layout;
    @Input() public zoom;

    public constructor(private el: ElementRef) {
        this.layout = this.layout || {...};
        this.zoom = this.zoom || {...};
        this.style = this.style || cytoscape.stylesheet()
                .selector('node')
                .css({...});
    }

    public ngOnChanges() {
        this.render();
    }

    public render() {
        jQuery(this.el.nativeElement).cytoscape({
            layout: this.layout,
            minZoom: this.zoom.min,
            maxZoom: this.zoom.max,
            style: this.style,
            elements: this.elements,
        });
    }
}
