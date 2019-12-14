import { selectorWord } from './app.selectors';
import { Component, OnInit } from '@angular/core';
import { goAction } from './app.actions';
import { AppState } from './app.reducers';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  word = 'hello!!!';
  currentWord = '';

  constructor (
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.store.select(selectorWord).subscribe(state => console.log(state));
  }

  onClick() {
    const {word} = this; 
    this.store.dispatch(goAction({word}));
  }
}
