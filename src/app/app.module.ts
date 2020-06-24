import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { ProductListComponent } from './components/product-list.component';
import { CartComponent } from './components/cart.component';
import { HeaderComponent } from './components/header.component';
import { MyMainService } from './main.service';
import { MySharedService } from './shared.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ServerComponent,
    ServersComponent,
    HeaderComponent,
    ProductListComponent,
    CartComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    MyMainService,
    MySharedService],
  bootstrap: [AppComponent ,HeaderComponent]
})
export class AppModule { }
