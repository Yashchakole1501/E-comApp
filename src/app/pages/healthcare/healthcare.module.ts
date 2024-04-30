import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HealthcarePageRoutingModule } from './healthcare-routing.module';
import { HealthcarePage } from './healthcare.page';
import { MainService } from 'src/app/services/main.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HealthcarePageRoutingModule,
    HttpClientModule
  ],
  declarations: [HealthcarePage],
  providers: [MainService]
})
export class HealthcarePageModule {}
