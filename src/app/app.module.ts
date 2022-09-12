import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { NavComponent } from './component/nav/nav.component';
import { HeaderComponent } from './component/header/header.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { FiltersComponent } from './component/shopping-cart/filters/filters.component';
import { ProductListComponent } from './component/shopping-cart/product-list/product-list.component';
import { DialogComponent } from './component/shopping-cart/filters/dialog/dialog.component';

@NgModule({
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    NavComponent,
    HeaderComponent,
    ShoppingCartComponent,
    FiltersComponent,
    ProductListComponent,
    DialogComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
