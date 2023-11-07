import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { CommonModule, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolBarComponent } from './Fixed/tool-bar/tool-bar.component';
import { FooterComponent } from './Fixed/footer/footer.component';
import { PaginaPrincipalComponent } from './Content/pagina-principal/pagina-principal.component';
import { HospedajesComponent } from './Content/hospedajes/hospedajes.component';
import { EntretenimientoComponent } from './Content/entretenimiento/entretenimiento.component';
import { RestaurantesComponent } from './Content/restaurantes/restaurantes.component';
import { ModuleModule } from './Modulo/module/module.module';
import { BaresComponent } from './Content/bares/bares.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    FooterComponent,
    PaginaPrincipalComponent,
    HospedajesComponent,
    EntretenimientoComponent,
    RestaurantesComponent,
    BaresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ModuleModule,
    
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
