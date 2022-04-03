import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { createFormControl2 } from 'src/app/shared/general.utils';

@Component({
  selector: 'app-fid-reactive',
  templateUrl: 'reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class FidReactiveComponent implements OnInit {

  @ViewChild('uploadInput')
  uploadInput?: ElementRef;


  constructor() {
  }

  ngOnInit() {
  }

  onUploadFileChange(uploadEvent: any) {
    const files: FileList = uploadEvent.target?.files;
    console.log(files)
  }

  onUploadClick() {
    const uploadEle = this.uploadInput?.nativeElement as HTMLInputElement;
    if (uploadEle) {
      uploadEle.click();
    }
  }
}
