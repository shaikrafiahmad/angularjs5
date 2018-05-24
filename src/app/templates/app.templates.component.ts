import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router'
import { DetailsComponent } from '../details/app.details.component'
import * as _ from 'underscore';
import { saveAs } from 'file-saver';
import * as jsPDF from 'jspdf';


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
    name = localStorage.getItem("name"); 
    lastname = localStorage.getItem("lastname");  
    email = localStorage.getItem("email"); 
    mobile = localStorage.getItem("mobile");  
    date = localStorage.getItem("date");
    summary = localStorage.getItem("profile");

    @ViewChild('content') content: ElementRef;
    public downloadPDF() {
      let doc = new jsPDF();
  
      let specialElementHandler = {
        '#editor': function (element, renderer) {
          return true;
        }
      };
      let content = this.content.nativeElement;
      doc.fromHTML(content.innerHTML, 15, 15, {
        'widht': 190,
        'elementHandler': specialElementHandler
      });
  
      doc.save('test.PDF');
      doc.save('test.doc');
      localStorage.removeItem('dynamic')
      localStorage.removeItem('name')
      localStorage.removeItem('lastname')
      localStorage.removeItem('email')
      localStorage.removeItem('mobile')
      localStorage.removeItem('date')
      localStorage.removeItem('profile')
      this.router.navigate(['template'])
    }
    private modals: any[] = [];
    open(id: string) {
      // open modal specified by id
      let modal = _.findWhere(this.modals, { id: id });
      modal.open();
    }
}