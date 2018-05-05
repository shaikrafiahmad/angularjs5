import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router, Routes } from '@angular/router'
import { DetailsComponent } from './details/app.details.component'
import * as _ from 'underscore';
import { saveAs } from 'file-saver';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

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
  }
  private modals: any[] = [];
  open(id: string) {
    // open modal specified by id
    let modal = _.findWhere(this.modals, { id: id });
    modal.open();
  }
}