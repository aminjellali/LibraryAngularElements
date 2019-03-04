import { WidgetOneService } from './widget-one.service';
import { Component, OnInit, ViewEncapsulation, Injector } from '@angular/core';
import { Magazine } from '../../shared/Magazine';
import { Novel } from '../../shared/Novel';
import Swal from 'sweetalert2';
import { createCustomElement } from '@angular/elements';

@Component({
  selector: 'app-widget-one',
  templateUrl: './widget-one.component.html',
  styleUrls: ['./widget-one.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class WidgetOneComponent implements OnInit {

  libraryName: String;
  novelsTable: Novel[] = [];
  magazinesTable: Magazine[] = [];
  magazineAttributes: String[] = [];


  constructor(public widgetOneService: WidgetOneService){
    
  }

  ngOnInit() {
  }
  // fetching the general data from the service
  getAllBooksByLibraryName() {
    this.widgetOneService.getNovelsAndMagazinesByLibraryName(this.libraryName).subscribe(
      result => {
        this.novelsTable = result['novelsList'];
        this.magazinesTable = result['magazineList'];
        this.magazineAttributes = Object.keys(this.magazinesTable[0]);
      },
      error => {
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: error.error.message
        });
      },
    );
  }



}
