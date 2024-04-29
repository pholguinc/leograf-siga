import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  isCollapsed = false;

  sidebarItems!: any[];

  constructor(private sidebarService: SidebarService, private router:Router) {}

  ngOnInit(): void {
    const currentUrl = this.router.url;
    if (
      currentUrl === '/admin/seguridad' ||
      currentUrl.startsWith('/admin/seguridad/mantenimientos')
    ) {
      this.sidebarItems = this.sidebarService.sidebarItems;
    } else {
      this.sidebarItems = [];
    }

  }
}
