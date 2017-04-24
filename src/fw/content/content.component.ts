import { Component, OnInit } from '@angular/core';
import { Book } from '../domains/book'

@Component({
  selector: 'fw-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  books : Array<Book> = [
    { id: 1, title:"The Underground Railroad: A Novel", authors: ["Colson Whitehead"], imageUrl: "" },
    { id: 2, title:"The Nix: A novel", authors: ["Nathan Hill"], imageUrl: "" }
  ];

  constructor() { }

  ngOnInit() {
  }

}
