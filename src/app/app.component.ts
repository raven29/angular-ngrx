import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { goAction } from './app.actions';
import { AppState } from './app.state';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  word = 'hello!!!';
  currentWord: string;
  currentWord$: Observable<AppState>;
  currentWordForTemplate$: Observable<string>;

  constructor (
    private store: Store<{root: AppState}>
  ) {}

  ngOnInit() {
    this.currentWord$ = this.store.select('root');
    this.currentWord$.subscribe(({word}) => this.currentWord = word);
    this.currentWordForTemplate$ = this.currentWord$.pipe(map(({word}) => word));
  }

  onClick() {
    const {word} = this; 
    this.store.dispatch(goAction({word}));
  }
}
