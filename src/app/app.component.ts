import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { goAction } from './app.actions';
import { AppState } from './app.state';
import { selectorWord } from './app.selectors';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  word = 'hello!!!';
  currentState$: Observable<AppState>;
  currentWord: string;
  currentWord$: Observable<string>;
  currentWordSelected: string;
  currentWordSelected$: Observable<string>;

  constructor (
    private store: Store<{root: AppState}>
  ) {}

  ngOnInit() {
    this.currentState$ = this.store.select('root');
    this.currentState$.subscribe(({word}) => this.currentWord = word);
    this.currentWord$ = this.currentState$.pipe(map(({word}) => word));

    this.currentWordSelected$ = this.store.select(selectorWord);
    this.currentWordSelected$.subscribe(word => this.currentWordSelected = word);
  }

  onClick() {
    const {word} = this; 
    this.store.dispatch(goAction({word}));
  }
}
