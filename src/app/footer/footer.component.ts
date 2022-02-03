import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FooterLink, FooterSection, IFooterSection } from './footer.model';

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class AppFooterComponent implements OnInit {

  footerTitle: string = "@KQ 2022";
  myUrl: string = "https://yiqu.github.io/";
  appTitle: string = environment.appTitle;
  footerSections: IFooterSection[] = [];

  constructor() {
    this.createFooterLinks();
  }

  ngOnInit() {
  }

  createFooterLinks() {
    this.footerSections.push(
      new FooterSection('About',
        [
          new FooterLink('What is AU', ''),
          new FooterLink('What is Udemy', ''),
          new FooterLink('What is this', 'https://github.com/yiqu/udemy-au')
        ]
      ),
      new FooterSection('Developers',
        [
          new FooterLink('Docs', ''),
          new FooterLink('Getting started', ''),
          new FooterLink('Community', '')
        ]
      ),
      new FooterSection('Blog',
        [
          new FooterLink('My blog', 'https://yiqu.github.io/'),
        ]
      )
    );
  }
}
