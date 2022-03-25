import { Component, OnInit } from '@angular/core';
import { CoreService } from '../core.service';

@Component({
  selector: 'app-core-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(public cs: CoreService) {
  }

  updateTitle() {
    this.cs.updateLoading();
  }

  updateActual() {
    this.cs.updateActualData();
  }

  updateActual2() {
    this.cs.updateActualDataName();
  }

  ngOnInit() {
    this.cs.setTitle();
    this.cs.homeTitle$.subscribe(
      (res) => {
        console.log(res, 'emitted');
      }
    );

    this.cs.homeTitleWithNewReference$.subscribe(
      (res) => {
        console.log(res, 'new ref emitted');
      }
    );

    this.cs.loading$.subscribe(
      (res) => {
        console.log(res, '(loading) emitted');
      }
    );

    this.cs.loadingNewRef$.subscribe(
      (res) => {
        console.log(res, '(loading) new ref emitted');
      }
    );

    this.cs.address$.subscribe(
      (res) => {
        console.log(res, '(address) emitted');
      }
    );

    this.cs.addressNewRef$.subscribe(
      (res) => {
        console.log(res, '(address) new ref emitted');
      }
    );


  }
}
