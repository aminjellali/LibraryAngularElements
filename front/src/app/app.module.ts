import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector} from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { MatTableModule } from '@angular/material/table';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ChartsModule } from 'ng2-charts';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent
  ],
  imports: [
    ChartsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatInputModule,
    HttpClientModule,
    SweetAlert2Module,
    MatTableModule,
  ],
  entryComponents: [
    BarChartComponent
  ],
  providers: []
})
export class AppModule {
  constructor(private injector: Injector) {

  }
  ngDoBootstrap() {
    const element = createCustomElement(BarChartComponent, { injector: this.injector });
    customElements.define('bar-chart-widget', element);
  }
}
