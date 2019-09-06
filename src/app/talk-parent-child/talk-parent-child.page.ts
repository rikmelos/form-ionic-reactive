import {Component, OnInit} from '@angular/core';
import { LoadingController } from '@ionic/angular';
import * as jsPDF from 'jspdf';
import domtoimage from 'dom-to-image';
import { File, IWriteOptions } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-talk-parent-child',
  templateUrl: './talk-parent-child.page.html',
  styleUrls: ['./talk-parent-child.page.scss'],
})
export class TalkParentChildPage implements OnInit {

  loading: any;

  constructor(public loadingController: LoadingController,
              private file: File,
              private fileOpener: FileOpener) {
  }

  ngOnInit() {
  }

  exportPdf() {
    const div = document.getElementById('pdf');
    const options = { background: 'white', height: 845, width: 595 };
    domtoimage.toPng(div, options).then((dataUrl) => {
      //Initialize JSPDF
      const doc = new jsPDF('p', 'mm', 'a4');
      //Add image Url to PDF
      doc.addImage(dataUrl, 'PNG', 0, 0, 210, 340);
      doc.save('pdfDocument.pdf');
    });
  }


}
