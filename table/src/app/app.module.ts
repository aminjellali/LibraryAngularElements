import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { WidgetOneComponent } from './widget-one/widget-one.component';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { createCustomElement } from '@angular/elements';


@NgModule({
  declarations: [
    AppComponent,
    WidgetOneComponent
  ],
  imports: [
    BrowserModule,
    SweetAlert2Module,
    FormsModule,
    MatInputModule,
    MatTabsModule,
    HttpClientModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  entryComponents: [
    WidgetOneComponent
  ],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const element = createCustomElement(WidgetOneComponent, { injector: this.injector });
    customElements.define('aj-table-element', element);
  }
}
