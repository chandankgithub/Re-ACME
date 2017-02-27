import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {ProductModule} from './products/product.module';

import { AppComponent }  from './app.component';
import { WelcomeComponent} from './home/welcome.component';

@NgModule({
  imports: [ 
              BrowserModule, 
              RouterModule.forRoot([
                {path:'welcome', component: WelcomeComponent},
                {path:'', component: WelcomeComponent}
              ]),
              FormsModule,
              HttpModule,
              ProductModule
            ],
  exports:[RouterModule],
  declarations: [ AppComponent, WelcomeComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
