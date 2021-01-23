import { SlidesComponent } from './../slides/slides.component';
import { FormZayavkaComponent } from './../form-zayavka/form-zayavka.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, FormZayavkaComponent, SlidesComponent]
})
export class HomePageModule { }
