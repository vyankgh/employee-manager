import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Employee Manager';

  constructor(private location: Location) { }

  ngOnInit() {
  }

  amIAt(path: string): boolean {
    return this.location.isCurrentPathEqualTo(path);
  }
}
