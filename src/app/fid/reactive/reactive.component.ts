import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { createFormControl2 } from 'src/app/shared/general.utils';
import { FileUploadService } from '../fid.service';

@Component({
  selector: 'app-fid-reactive',
  templateUrl: 'reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class FidReactiveComponent implements OnInit {

  @ViewChild('uploadInput')
  uploadInput?: ElementRef;


  constructor(public fs: FileUploadService, private http: HttpClient) {
  }

  ngOnInit() {
  }

  onUploadFileChange(uploadEvent: any) {
    const files: FileList = uploadEvent.target?.files;
    if (files) {
      const fileIndexArr = Object.keys(files);
      fileIndexArr.forEach((index: any) => {
        this.fs.attachFile(files[index], new Date().getTime() + index + '');
      });
    }
  }

  onUploadClick() {
    const uploadEle = this.uploadInput?.nativeElement as HTMLInputElement;
    if (uploadEle) {
      uploadEle.click();
    }
  }
}
