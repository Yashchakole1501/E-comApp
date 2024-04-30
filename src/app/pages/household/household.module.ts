import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HouseholdPageRoutingModule } from './household-routing.module';
import { MainService } from 'src/app/services/main.service';
import { HttpClientModule } from '@angular/common/http';
import { HouseholdPage } from './household.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseholdPageRoutingModule,
    HttpClientModule
  ],
  declarations: [HouseholdPage],
  providers: [MainService]
})
export class HouseholdPageModule {}
