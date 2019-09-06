import { Component, OnInit } from '@angular/core';
import { UserUtil } from 'src/app/utils/user.utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  constructor(
    private route: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    UserUtil.clear();
    this.route.navigate(['login']);
  }
}
