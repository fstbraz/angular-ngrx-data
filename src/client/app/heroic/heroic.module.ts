import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeroicRoutingModule, routedComponents } from './heroic-routing.module';
import { HeroDetailComponent } from './heroes/hero-detail.component';
import { VillainDetailComponent } from './villains/villain-detail.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HeroicRoutingModule],
  exports: [VillainDetailComponent, HeroDetailComponent, routedComponents],
  declarations: [VillainDetailComponent, HeroDetailComponent, routedComponents]
})
export class HeroicModule {}
