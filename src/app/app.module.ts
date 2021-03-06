import { ManagequestionService } from './managequestion.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatChipsModule } from '@angular/material/chips'; 
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { StartComponent } from './start/start.component';
import { TestComponent } from './test/test.component';
import { QuestionComponent } from './question/question.component';
import { ScorePageComponent } from './score-page/score-page.component';
  import { from } from 'rxjs';

@NgModule({
  declarations: [AppComponent, LoginComponent, StartComponent, TestComponent, QuestionComponent, ScorePageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
  ],
  providers: [ManagequestionService],
  bootstrap: [AppComponent],
})
export class AppModule {}
