import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzCarouselModule,
    NzIconModule,
    NzInputModule,
    NzRateModule,
    NzDropDownModule,
    NzMessageModule,
    NzEmptyModule
  ],
  exports:[
    NzCarouselModule,
    NzIconModule,
    NzInputModule,
    NzRateModule,
    NzDropDownModule,
    NzMessageModule,
    NzEmptyModule
  ]
})
export class ModuleModule { }
