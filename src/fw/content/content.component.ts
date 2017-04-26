import { Component, OnInit } from '@angular/core';
import { Book } from '../domains/book'
import { BookService } from '../services/book.service'

@Component({
  selector: 'fw-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  errorMessage: string;
  books: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe(books => this.books = books, error => this.errorMessage = <any>error);
  }
}
