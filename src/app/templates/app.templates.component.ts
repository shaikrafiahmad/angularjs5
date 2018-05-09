import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router'


@Component({
    selector: 'template-root',
    templateUrl: '../templates/app.templates.componenet.html',
    styleUrls: ['../templates/app.templates.component.scss']
})

export class TemplatesComponent {
    constructor(private router: Router) {

    }
    templateWrite() {
        this.router.navigate(['login']);
    }

}