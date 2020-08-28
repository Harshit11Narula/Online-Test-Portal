import { Userinput } from './../userinput';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { state } from '@angular/animations';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  question_Id: number;
  all_question: Userinput[] = new Array();
  checked: string;
  selected_ans: number;
  selected_event;
  all_style: any[];
  all_selected: any[];
  score: any;

  constructor(public activatedRoute: ActivatedRoute, public router: Router) {
    this.checked = '';
    this.selected_ans = 0;
    this.all_question.push(
      new Userinput(
        'Which community Angular JS belongs to?',
        'Twitter',
        'Google',
        'Microsoft',
        'Facebook',
        '2'
      )
    );
    this.all_question.push(
      new Userinput(
        'What is the priority level of directives?',
        'Level 1',
        'Level 2',
        'Level 3',
        'Level 4',
        '1'
      )
    );
    this.all_question.push(
      new Userinput(
        'What is the correct syntax to write an expression?',
        '{{expression}}',
        '[expression]',
        '{expression}',
        '[[expression]]',
        '1'
      )
    );
    this.all_question.push(
      new Userinput(
        'Which service converts object to string?',
        '$interval',
        '$http',
        '$timeout',
        '$httpParamSerializer',
        '4'
      )
    );
    this.all_question.push(
      new Userinput(
        'Which directive is used to start an angularJS application?',
        'ng-app',
        'ng-start',
        'ng-begin',
        'ng-init',
        '1'
      )
    );
    this.all_question.push(
      new Userinput(
        'Which directive binds the values of application data to HTML input controls in angular JS?',
        'ng-app',
        'ng-model',
        'ng-bind',
        'None of the above',
        '2'
      )
    );
    this.all_question.push(
      new Userinput(
        'Which directive binds Application data to HTML tags in angular JS?',
        'ng-app',
        'ng-model',
        'ng-bind',
        'None of the above',
        '3'
      )
    );
    this.all_question.push(
      new Userinput(
        'Which function is used to create a module?',
        'add.module()',
        'angular.module()',
        'create.module()',
        'angular.CreateModule()',
        '2'
      )
    );
    this.all_question.push(
      new Userinput(
        'Which of the following is a filter in Angular Js?',
        'Currency',
        'Date',
        'Uppercase',
        'All of the above',
        '4'
      )
    );
    this.all_question.push(
      new Userinput(
        'How to combine filter with expression?',
        'Using Comma {{expression, pipe}}',
        'Using Dot {{expression. pipe}}',
        'Using PIpe {{expression | pipe}}',
        'Using Slash {{expression / pipe}}',
        '3'
      )
    );
    this.all_question.push(
      new Userinput(
        'What is data binding in angular JS?',
        'Synchronization between model part and view part',
        'Synchronization between controller part and view part',
        'Synchronization between model part and controller part',
        'None of the above',
        '1'
      )
    );
    this.all_question.push(
      new Userinput(
        'How many $RootScope an angular JS application can have?',
        'Zero',
        'One',
        'Two',
        'Infinity',
        '2'
      )
    );
    this.all_question.push(
      new Userinput(
        'Which directive is used to specify a controller in HTML element?',
        'ng-control',
        'ng-controller',
        'ng-ctrl',
        'Controller',
        '2'
      )
    );
    this.all_question.push(
      new Userinput(
        'Which sign is used as prefix for the built-in objects in AngularJS?',
        '#',
        '%',
        '@',
        '$',
        '4'
      )
    );
    this.all_question.push(
      new Userinput(
        'Which service is used to communicate with remote server?',
        '$interval',
        '$http',
        '$animate',
        '$timeout',
        '2'
      )
    );
  }

  ngOnInit(): void {
    this.question_Id = parseInt(this.activatedRoute.snapshot.params['Eid']);
    this.all_style = Object.keys(history.state[0]).map(function (key) {
      return history.state[0][key];
    });
    this.all_selected = Object.keys(history.state[1]).map(function (key) {
      return history.state[1][key];
    });
    this.selected_ans = this.all_selected[this.question_Id - 1];
    // this.all_style = history.state;
  }

  prev() {
    this.question_Id = parseInt(this.activatedRoute.snapshot.params['Eid']);
    if (this.question_Id > 1) {
      this.all_selected[this.question_Id - 1] = this.selected_ans;
      this.question_Id--;
      this.selected_ans = this.all_selected[this.question_Id - 1];
      this.router.navigateByUrl('/test/' + this.question_Id, {
        state: [this.all_style, this.all_selected],
      });
    }
  }
  next() {
    this.question_Id = parseInt(this.activatedRoute.snapshot.params['Eid']);
    if (this.question_Id < this.all_question.length) {
      this.all_selected[this.question_Id - 1] = this.selected_ans;

      this.question_Id++;
      this.selected_ans = this.all_selected[this.question_Id - 1];
      this.router.navigateByUrl('/test/' + this.question_Id, {
        state: [this.all_style, this.all_selected],
      });
    }
  }
  selectEventHandler(p1: number, event) {
    this.selected_event = event;
    this.selected_ans = p1;
    this.all_selected[this.question_Id - 1] = this.selected_ans;
    this.all_style[this.question_Id - 1] = 'btn-success';
    console.log(this.all_style);
  }
  finishTest() {
    console.log(this.all_question);
    this.score = 0;

    for (let i = 0; i < this.all_selected.length; i++) {
      
      if (Number(parseInt(this.all_selected[i], 10)) - Number(parseInt(this.all_question[i]['ans'], 10)) == 0) {
        this.score += 2;
      }
    }
    console.log(this.score);
    this.router.navigateByUrl('/result', { state: this.score });
  }
  move(p1: number) {
    this.selected_ans = this.all_selected[p1 - 1];
    this.question_Id = p1;
    this.router.navigateByUrl('/test/' + p1, {
      state: [this.all_style, this.all_selected],
    });
  }
  reset() {
    this.selected_ans = 0;
    this.all_selected[this.question_Id - 1] = this.selected_ans;
    this.all_style[this.question_Id - 1] = 'btn-light';
  }
}
