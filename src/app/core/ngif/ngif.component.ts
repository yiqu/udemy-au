import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'selector-name',
  templateUrl: 'ngif.component.html',
  styleUrls: ['./ngif.component.scss']
})
export class NgIfComponent implements OnInit {

  showText: boolean = false;

  constructor() { }

  ngOnInit() { }

  toggleShow() {
    this.showText = !this.showText;
  }
}
