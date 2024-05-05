import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { TabMenuModule } from 'primeng/tabmenu';
import { SidebarModule } from 'primeng/sidebar';
import { StyleClassModule } from 'primeng/styleclass';

import { CiberneticaRoutingModule } from './cibernetica-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    CiberneticaRoutingModule,
    ButtonModule,
    MenubarModule,
    TabMenuModule,
    SidebarModule,
    StyleClassModule
  ]
})
export class CiberneticaModule { }
