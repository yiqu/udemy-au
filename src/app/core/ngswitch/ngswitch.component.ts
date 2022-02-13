import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'selector-name',
  templateUrl: 'ngswitch.component.html',
  styleUrls: ['./ngswitch.component.scss']
})

export class NgSwitchComponent implements OnInit {

  choice?: string;
  options: string[] = ['success', 'info', 'warning'];
  randResult: number = -1;

  constructor() { }

  ngOnInit() { }

  toggle() {
    const res = Math.random();
    this.randResult = Math.floor(Math.random() * 3);
    this.choice = this.options[this.randResult];
  }
}
