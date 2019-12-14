import { Component, OnInit } from '@angular/core';
import {goAction, Data} from './app.actions';
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
    private store: Store<Data>
  ) {}

  ngOnInit() {
    this.store.select('word').subscribe(state => console.log(state));
  }

  onClick() {
    const {word} = this; 
    this.store.dispatch(goAction({word}));
  }
}
