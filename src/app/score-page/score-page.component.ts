import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score-page',
  templateUrl: './score-page.component.html',
  styleUrls: ['./score-page.component.css']
})
export class ScorePageComponent implements OnInit {
  score;
  constructor() { }

  ngOnInit(): void {
    console.log(history.state.navigationId);
    this.score = history.state.navigationId;
  }

}
