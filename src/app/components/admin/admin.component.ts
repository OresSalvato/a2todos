import { Component, OnInit, ViewChild } from '@angular/core';
import { Globals } from '../../globals';
import { MdSidenav } from '@angular/material';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})

export class AdminComponent implements OnInit {
 @ViewChild(MdSidenav) sidenav: MdSidenav;
  constructor(private globals: Globals) { }
 menuItems: Object[] = [
    {
      name: 'Dashboard',
      description: 'DashboardDescription',
      icon: 'toc',
      path: '/',
    },
    {
      name: 'PaymentHandling',
      description: 'PaymentHandlingDescription',
      icon: 'payment',
      path: '/payment-handling',
      submenuItems: [
        {
          name: 'DirectPayments',
          path: '/payment-handling/direct'
        }
      ]
    },
    {
      name: 'Admin',
      description: 'AdminDescription',
      icon: 'lock_outline',
      path: '/admin',
      role: 'Administrator'
    },
    {
      name: 'Search',
      description: 'SearchDescription',
      icon: 'search',
      path: '/search'
    }
  ];
  ngOnInit() {
  }

}
