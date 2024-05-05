import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, Event as RouterEvent } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Sidebar } from 'primeng/sidebar';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css',
})
export class LayoutPageComponent implements OnInit {
  items: MenuItem[] | undefined;
  activeItem: MenuItem | undefined;
  sidebarVisible: boolean = false;
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  ngOnInit(): void {
    this.items = [
      {
        label: ' Inicio ',
        icon: ' pi pi-home ',
      },
      {
        label: ' Misión ',
        icon: ' pi pi-book ',
      },
    ];

    this.activeItem = this.items[0];
  }

  onActiveItemChange(event: MenuItem) {
    this.activeItem = event;
  }

  closeCallback(e:any): void {
    this.sidebarRef.close(e);
  }
}
