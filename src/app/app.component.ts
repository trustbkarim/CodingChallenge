import { Component } from '@angular/core';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // App title
  title = 'Conding challenge';

  // paginator
  length = 3;
  pageSize = 1;
  pageSizeOptions: number[] = [1];

  pageEvent: PageEvent;

  constructor()
  {}

  ngOnInit() {
  }
}
