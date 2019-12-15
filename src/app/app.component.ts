import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { goAction } from './store/app.actions';
import { AppState } from './store/app.state';
import { selectorInput } from './store/app.selectors';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  input = 'hello!!!';
  currentState$: Observable<AppState>;
  currentInput: string;
  currentInput$: Observable<string>;
  currentInputSelected: string;
  currentInputSelected$: Observable<string>;

  constructor (
    private store: Store<{root: AppState}>
  ) {}

  ngOnInit() {
    this.currentState$ = this.store.select('root');
    this.currentState$.subscribe(({input}) => this.currentInput = input);
    this.currentInput$ = this.currentState$.pipe(map(({input}) => input));

    this.currentInputSelected$ = this.store.select(selectorInput);
    this.currentInputSelected$.subscribe(input => this.currentInputSelected = input);
  }

  onClick() {
    const {input} = this; 
    this.store.dispatch(goAction({input}));
  }
}
