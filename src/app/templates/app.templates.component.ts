import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router'
import { DetailsComponent } from '../details/app.details.component'


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
    data = localStorage.getItem("dynamic");
    test = localStorage.getItem("test"); 
    lastname = localStorage.getItem("lastname");  
}