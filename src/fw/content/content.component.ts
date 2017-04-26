import { Component, OnInit } from '@angular/core';
import { Book } from '../domains/book'
import {AngularFire, FirebaseListObservable} from 'angularfire2';


@Component({
  selector: 'fw-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  books: FirebaseListObservable<any[]>;
  ebooks: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) { 
    this.books = af.database.list('/books', {
      query: {
        orderByChild: 'downloadUrl',
        equalTo: '' 
      }
    });
    this.ebooks = af.database.list('/books', {
      query: {
        orderByChild: 'downloadUrl',
        startAt: 'http' 
      }
    });
  }

  ngOnInit() {
  }

}
