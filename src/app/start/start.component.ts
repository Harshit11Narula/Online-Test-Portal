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
  allStyle: string[] = new Array();
  allSelected: number[] = new Array();
  constructor(public router: Router) {
    this.allStyle.push('btn-light');
    this.allStyle.push('btn-light');
    this.allStyle.push('btn-light');
    this.allStyle.push('btn-light');
    this.allStyle.push('btn-light');
    this.allStyle.push('btn-light');
    this.allStyle.push('btn-light');
    this.allStyle.push('btn-light');
    this.allStyle.push('btn-light');
    this.allStyle.push('btn-light');
    this.allStyle.push('btn-light');
    this.allStyle.push('btn-light');
    this.allStyle.push('btn-light');
    this.allStyle.push('btn-light');
    this.allStyle.push('btn-light');
    

    this.allSelected.push(0);
    this.allSelected.push(0);
    this.allSelected.push(0);
    this.allSelected.push(0);
    this.allSelected.push(0);
    this.allSelected.push(0);
    this.allSelected.push(0);
    this.allSelected.push(0);
    this.allSelected.push(0);
    this.allSelected.push(0);
    this.allSelected.push(0);
    this.allSelected.push(0);
    this.allSelected.push(0);
    this.allSelected.push(0);
    this.allSelected.push(0);
  }

  ngOnInit(): void {
    this.empName = history.state.name;
  }

  starttest(p1) {
    if (!p1) {
      this.warning = 'Please select the checkbox';
    } else {
      this.router.navigateByUrl('/test/1', { state: [this.allStyle , this.allSelected] });
    }
  }
}
