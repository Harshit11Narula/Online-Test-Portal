import { Userinput } from './userinput';
import { Injectable } from '@angular/core';

@Injectable()
export class ManagequestionService {
  all_question: Userinput[] = new Array();
  allSelected: number[] = new Array();
  allStyle: string[] = new Array();
  constructor() {
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
    for (var j = 0; j < this.all_question.length; j++){
      this.allSelected.push(0);
      this.allStyle.push('btn-light');
    }
    
  }
  getAllQuestion() {
    return this.all_question;
  }
  getQuestionById(id: number) {
    return this.all_question[id];
  }
  getQuestionLength() {
    return this.all_question.length;
  }
  getAllSelected() {
    return this.allSelected;
  }
  getSelectedById(id: number) {
    return this.allSelected[id];
  }
  setSelectedById(id: number, val: number) {
    this.allSelected[id] = val;
  }
  getSelectedLength() {
    return this.allSelected.length;
  }
  getAllStyle() {
    return this.allStyle;
  }
  setAllStyleById(id: number, val: string) {
    this.allStyle[id] = val;
  }
  getScore() {
    var score: number = 0;
     for (let i = 0; i < this.allSelected.length; i++) {
       if (
         Number(this.allSelected[i]) -
           Number(parseInt(this.all_question[i]['ans'], 10)) ==
         0
       ) {
         score += 2;
       }
     }
    return score;
  }
}
