import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: 'template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {


  users: User[] = [
    {
      name: 'Kevin',
      picUrl: '111',
      desc: 'Software dev',
      registered: true
    },
    {
      name: 'Ben',
      picUrl: '222',
      desc: 'System dev',
      registered: false
    },
    {
      name: 'Jack',
      picUrl: '333',
      desc: 'Devops dev',
      registered: true
    }
  ]

  constructor() {
  }

  ngOnInit() {
  }
}


export interface User {
  name: string;
  picUrl: string;
  desc: string;
  registered: boolean;
}
