import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
})
export class StartComponent implements OnInit {
  empName: string;
  warning: string;
  constructor(public router: Router) {
  }

  ngOnInit(): void {
    this.empName = history.state.name;
  }

  starttest(p1) {
    if (!p1) {
      this.warning = 'Please select the checkbox';
    } else {
      this.router.navigateByUrl('/test/1');
    }
  }
}
