import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './main/home/home.component';
import { HeaderComponent } from './main/header/header.component';
import { AboutComponent } from './main/about/about.component';
import { ContactComponent } from './main/contact/contact.component';
import { ShitComponent } from './main/shit/shit.component';
import { ProductComponent } from './_commons/components/product/product.component';
import { AllProductsComponent } from './_commons/components/all-products/all-products.component';
import { OneProductComponent } from './_commons/components/one-product/one-product.component';
import { ShitOneComponent } from './main/shit-one/shit-one.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ErrorComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    ShitComponent,
    ProductComponent,
    AllProductsComponent,
    OneProductComponent,
    ShitOneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
