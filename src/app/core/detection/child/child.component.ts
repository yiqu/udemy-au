import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detection-child',
  templateUrl: 'child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DetectionChildComponent implements OnInit {

  @Input()
  name: string = "";

  @Input()
  nameObject: any;

  constructor(public cdr: ChangeDetectorRef) { }

  ngOnInit() { }

  update() {
    this.cdr.markForCheck();
  }
}
