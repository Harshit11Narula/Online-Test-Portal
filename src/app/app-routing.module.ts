import { ScorePageComponent } from './score-page/score-page.component';
import { QuestionComponent } from './question/question.component';
import { TestComponent } from './test/test.component';
import { StartComponent } from './start/start.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'start', component: StartComponent },
  {
    path: "test", component: TestComponent,
    children: [
      { path: ':Eid', component: QuestionComponent},
    ]
  },
  {path: "result" , component:ScorePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
