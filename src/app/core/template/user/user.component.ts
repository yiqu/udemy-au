import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { TemplateDescComponent } from '../profile-desc/desc.component';
import { TemplatePicComponent } from '../profile-pic/pic.component';
import { User } from '../template.component';

@Component({
  selector: 'app-template-user',
  templateUrl: 'user.component.html',
  styleUrls: ['./user.component.scss']
})
export class TemplateUserComponent implements OnInit {

  @Input()
  userPicTpl: TemplateRef<TemplatePicComponent> | null = null;

  @Input()
  userDescTpl: TemplateRef<TemplateDescComponent> | null = null;

  @Input()
  user?: User;

  constructor() { }

  ngOnInit() { }
}
