import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  @Output() sendQuestionNumber = new EventEmitter<Number>();
  temp: Number;

  constructor(public activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.temp = parseInt(this.activatedRoute.snapshot.params['qId']);
    this.sendQuestionNumber.emit(this.temp);
  }
}
