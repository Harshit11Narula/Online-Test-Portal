import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { state } from '@angular/animations';
import { ManagequestionService } from '../managequestion.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  time: string;
  time_rem: number;
  minutesLeft: string;
  secondLeft: string;
  remaining_time: number;
  constructor(public activatedRoute: ActivatedRoute, public router: Router, public manageSerive: ManagequestionService) {
    this.time = '0%';
    this.time_rem = 0;
    this.minutesLeft = "15";
    this.secondLeft = "00";
    this.remaining_time = 900;
  }
  pd = setInterval(() => {
    this.time_rem++;
    this.time = '' + this.time_rem + '%';
    if (this.time_rem == 100) {
      this.router.navigateByUrl('/result');
      clearInterval(this.pd);
    }
  }, 9000);

  qw = setInterval(() => {
    this.remaining_time--;
    if (this.remaining_time == 0) {
      this.router.navigateByUrl('/result', );
      clearInterval(this.qw);
    }
    if ( Math.floor(this.remaining_time / 60.0) < 10) {
      this.minutesLeft = "0" + Math.floor(this.remaining_time / 60.0);
    } else {
      this.minutesLeft = Math.floor(this.remaining_time / 60.0).toString();
    }
    if (this.remaining_time % 60 < 10) {
      this.secondLeft = '0' + this.remaining_time % 60;
    } else {
      this.secondLeft = '' + this.remaining_time % 60;
    }
    
  }, 1000);

  ngOnInit(): void {}
}
