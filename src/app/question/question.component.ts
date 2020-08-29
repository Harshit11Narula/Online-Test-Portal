import { from } from 'rxjs';
import { Userinput } from './../userinput';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { state } from '@angular/animations';
import { ManagequestionService } from '../managequestion.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  question_Id: number;
  checked: string;
  selected_ans: number;
  selected_event;
  all_style: string[];
  score: any;
  currentQuestion: Userinput;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public manageSerive: ManagequestionService
  ) {
    this.checked = '';
    this.selected_ans = 0;
  }

  ngOnInit(): void {
    this.question_Id = parseInt(this.activatedRoute.snapshot.params['Eid']);
    this.currentQuestion = this.manageSerive.getQuestionById(
      this.question_Id - 1
    );
    this.all_style = this.manageSerive.getAllStyle();
    this.selected_ans = this.manageSerive.getSelectedById(this.question_Id - 1);
  }

  prev() {
    this.question_Id = parseInt(this.activatedRoute.snapshot.params['Eid']);
    
    if (this.question_Id > 1) {
      this.manageSerive.setSelectedById(
        this.question_Id - 1,
        this.selected_ans
      );
      this.question_Id--;
      this.currentQuestion = this.manageSerive.getQuestionById(
        this.question_Id - 1
      );
      this.selected_ans = this.manageSerive.getSelectedById(
        this.question_Id - 1
      );
      this.router.navigateByUrl('/test/' + this.question_Id);
    }
  }
  next() {
    this.question_Id = parseInt(this.activatedRoute.snapshot.params['Eid']);

    if (this.question_Id < this.manageSerive.getQuestionLength()) {
      this.manageSerive.setSelectedById(
        this.question_Id - 1,
        this.selected_ans
      );

      this.question_Id++;
      this.currentQuestion = this.manageSerive.getQuestionById(
        this.question_Id - 1
      );
      this.selected_ans = this.manageSerive.getSelectedById(
        this.question_Id - 1
      );
      this.router.navigateByUrl('/test/' + this.question_Id);
    }
  }
  selectEventHandler(p1: number, event) {
    this.selected_event = event;
    this.selected_ans = p1;
    this.manageSerive.setSelectedById(this.question_Id - 1, this.selected_ans);
    this.manageSerive.setAllStyleById(this.question_Id - 1, 'btn-success');
    this.all_style[this.question_Id - 1] = 'btn-success';
    console.log(this.all_style);
  }
  finishTest() {
    this.score = this.manageSerive.getScore();
    this.router.navigateByUrl('/result', { state: this.score });
  }
  move(p1: number) {
    this.selected_ans = this.manageSerive.getSelectedById(p1 - 1);
    this.question_Id = p1;
    this.currentQuestion = this.manageSerive.getQuestionById(
      this.question_Id - 1
    );
    this.router.navigateByUrl('/test/' + p1);
  }
  reset() {
    this.selected_ans = 0;
    this.manageSerive.setSelectedById(this.question_Id - 1, this.selected_ans);
    this.manageSerive.setAllStyleById(this.question_Id - 1, 'btn-light');
    this.all_style[this.question_Id - 1] = 'btn-light';
  }
}
// 9990632868
