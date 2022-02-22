import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { NavHeaderList, NavHeader, NavHeaderLink, NestNavHeaderList } from '../shared/models/nav-item.model';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: 'side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit, OnDestroy {

  headerList: NavHeaderList[] = [];
  navTitle: string = "Home";
  compDest$: Subject<any> = new Subject<any>();
  nestedMenu: NestNavHeaderList[] = [];
  openStatus: boolean = true;

  @Output()
  navClose: EventEmitter<any> = new EventEmitter<any>();

  constructor(public router: Router, private cdr: ChangeDetectorRef) {
    this.createAllOptions();
    this.createZorroMenu();
  }

  createAllOptions() {
    this.headerList.push(
      new NavHeaderList(new NavHeader("Topics"), [
        new NavHeaderLink("Overview", "grid_view", ["/", "home"]),
      ]),
      new NavHeaderList(new NavHeader("Help & Settings"), [
        new NavHeaderLink("My Account", "account_circle", ["/", "my-account"]),
      ])
    );
  }

  createZorroMenu() {
    this.nestedMenu.push(
      {
        parent: {
          display: 'Overview',
          iconName: 'container',
          url: ['/', 'home'],
          items: [
            {
              display: 'Summary',
              iconName: 'project',
              url: ['overview']
            },
            {
              display: 'Components',
              iconName: 'project',
              url: ['component']
            },
            {
              display: 'Ng If',
              iconName: 'project',
              url: ['ngif']
            },
            {
              display: 'Ng Switch',
              iconName: 'project',
              url: ['ngswitch']
            },
            {
              display: 'Ng Style Ng Class',
              iconName: 'project',
              url: ['ngstylengclass']
            },
            {
              display: 'ViewChild',
              iconName: 'project',
              url: ['viewchild']
            },
            {
              display: 'Projection',
              iconName: 'project',
              url: ['projection']
            },
          ]
        },
      },
      { parent: {
        display: 'Components',
        iconName: 'container',
        url: ['/', 'home', 'components'],
        items: [
          {
            display: 'A',
            iconName: 'project',
            url: ['a'],
            items: [
              {
                display: 'AA',
                iconName: 'project',
                url: ['aa']
              },
              {
                display: 'BB',
                iconName: 'project',
                url: ['bb']
              }
            ]
          },
          {
            display: 'B',
            iconName: 'project',
            url: ['b']
          }
        ]
      },
    },{
      parent: {
        display: 'Pipes',
        iconName: 'container',
        url: ['/', 'home', 'pipes'],
        items: [
          {
            display: 'A',
            iconName: 'project',
            url: ['a']
          },
          {
            display: 'B',
            iconName: 'project',
            url: ['b']
          }
        ]
      },
    })
  }

  ngOnInit() {
  }

  onNavClose() {
    this.navClose.emit(true);
  }

  onNavItemClick() {
    //this.navClose.emit(true);
  }

  onTitleClick() {
    this.router.navigate(['/']);
    //this.navClose.emit(true);
  }

  ngOnDestroy() {
    this.compDest$.next(null);
    this.compDest$.complete();
  }
}

