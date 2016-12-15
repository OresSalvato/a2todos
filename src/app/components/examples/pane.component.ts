import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pane',
  templateUrl: './pane.component.html',
  styleUrls: ['./pane.component.css'],
  inputs: [                   // List which property need to be bound
    'title',                      //  - title mapped to component title
    'isOpen'                        //  - open attribute mapped to component open property
  ],
})
export class PaneComponent implements OnInit {
  title: string;                  //  - title property
  isOpen: boolean;
  constructor() {
    this.title = '';
    this.isOpen = true;
  }

  ngOnInit() {
  }

  // Public API
  toggle() { this.isOpen = !this.isOpen; }
  open() { this.isOpen = true; }
  close() { this.isOpen = false; }
}
