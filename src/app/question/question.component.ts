import { Userinput } from './../userinput';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  question_Id: number;
  all_question: Userinput[] = new Array();

  constructor(public activatedRoute: ActivatedRoute, public router: Router) {
    this.all_question.push(
      new Userinput(
        'Q.1 Which community Angular JS belongs to?',
        'Twitter',
        'Google',
        'Microsoft',
        'Facebook',
        'Google'
      )
    );
    this.all_question.push(
      new Userinput(
        'Q.2 AngularJS is entirely based on HTML and JavaScript',
        'Twitter',
        'Google',
        'Microsoft',
        'Facebook',
        'Google'
      )
    );
    this.all_question.push(
      new Userinput(
        'Q.3 What is the correct syntax to write an expression?',
        '{{expression}}',
        '[expression]',
        '{expression}',
        '[[expression]]',
        '{{expression}}'
      )
    );
    this.all_question.push(
      new Userinput(
        'Q.4 Which service converts object to string?',
        '$interval',
        '$http',
        '$timeout',
        '$httpParamSerializer',
        '$httpParamSerializer'
      )
    );
    this.all_question.push(
      new Userinput(
        'Q.5 Which directive is used to start an angularJS application?',
        'ng-app',
        'ng-start',
        'ng-begin',
        'ng-init',
        'ng-app'
      )
    );
    this.all_question.push(
      new Userinput(
        'Q.6 Which directive binds the values of application data to HTML input controls in angular JS?',
        'ng-app',
        'ng-model',
        'ng-bind',
        'None of the above',
        'ng-model'
      )
    );
    this.all_question.push(
      new Userinput(
        'Q.7 Which directive binds Application data to HTML tags in angular JS?',
        'ng-app',
        'ng-model',
        'ng-bind',
        'None of the above',
        'ng-bind'
      )
    );
    this.all_question.push(
      new Userinput(
        'Q.8 Which function is used to create a module?',
        'add.module()',
        'angular.module()',
        'create.module()',
        'angular.CreateModule()',
        'angular.module()'
      )
    );
    this.all_question.push(
      new Userinput(
        'Q.9 Which of the following is a filter in Angular Js?',
        'Currency',
        'Date',
        'Uppercase',
        'All of the above',
        'All of the above'
      )
    );
    this.all_question.push(
      new Userinput(
        'Q.10 How to combine filter with expression?',
        'Using Comma {{expression, pipe}}',
        'Using Dot {{expression. pipe}}',
        'Using PI pe {{expression | pipe}}',
        'Using Slash {{expression / pipe}}',
        'Using PIpe {{expression | pipe}}'
      )
    );
    this.all_question.push(
      new Userinput(
        'Q.11 What is data binding in angular JS?',
        'Synchronization between model part and view part',
        'Synchronization between controller part and view part',
        'Synchronization between model part and controller part',
        'None of the above',
        'Synchronization between model part and view part'
      )
    );
    this.all_question.push(
      new Userinput(
        'Q.12 How many $RootScope an angular JS application can have?',
        'Zero',
        'One',
        'Two',
        'Infinity',
        'One'
      )
    );
    this.all_question.push(
      new Userinput(
        'Q.13 Which directive is used to specify a controller in HTML element?',
        'ng-control',
        'ng-controller',
        'ng-ctrl',
        'Controller',
        'ng-controller'
      )
    );
    this.all_question.push(
      new Userinput(
        'Q.14 Which sign is used as prefix for the built-in objects in AngularJS?',
        '#',
        '%',
        '@',
        '$',
        '$'
      )
    );
    this.all_question.push(
      new Userinput(
        'Q.15 Which service is used to communicate with remote server?',
        '$interval',
        '$http',
        '$animate',
        '$timeout',
        '$http'
      )
    );
  }

  ngOnInit(): void {
    this.question_Id = parseInt(this.activatedRoute.snapshot.params['Eid']);
  }
  prev() {
    
    if (this.question_Id > 1) {
      this.question_Id--;
      this.router.navigateByUrl("/test/" + this.question_Id);
    }
  }
  next() {
    
    console.log('/test/' + this.question_Id);
    if (this.question_Id < this.all_question.length) {
      this.question_Id++;
      this.router.navigateByUrl("/test/" + this.question_Id);
    }
  }
}
