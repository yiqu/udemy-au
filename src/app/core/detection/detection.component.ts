import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-detection',
  templateUrl: 'detection.component.html',
  styleUrls: ['./detection.component.scss']
})
export class DetectionComponent implements OnInit {

  aa = 12;
  bb = {
    a: 'a'
  };

  inputCtrl: FormControl;

  nameObject: any;
  newNameObject: any;

  constructor() {
    this.inputCtrl = new FormControl(null);
    this.nameObject = {
      name: 'DEFAULT'
    };
    this.newNameObject = {
      name: 'DEFAULT'
    };
  }

  ngOnInit() {
    this.updateVal(this.aa, this.bb);
    //console.log(this.aa, this.bb); 12, A

    this.inputCtrl.valueChanges.subscribe((res) => {
      this.nameObject.name = res;
      this.newNameObject = {
        ...this.nameObject
      }
    });
  }

  updateVal(x: any, b: any) {
    x = 6;
    b.a = 'A';
  }
}
