import { Component, OnInit } from '@angular/core';
import { Book } from '../domains/book'

@Component({
  selector: 'fw-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  books : Array<Book> = [
    { id: 1, title:"Pro ASP.NET Core MVC", authors: ["Adam Freeman"], coverUrl: "https://images-na.ssl-images-amazon.com/images/I/41AvcJ1UAZL._SX348_BO1,204,203,200_.jpg", downloadUrl: "" },
    { id: 2, title:"Hooked: How to Build Habit-Forming Products", authors: ["Nir Eyal"], coverUrl: "https://images-na.ssl-images-amazon.com/images/I/51zJw1jpACL._SX329_BO1,204,203,200_.jpg", downloadUrl: "" },
    { id: 3, title:"Your Code as a Crime Scene: Use Forensic Techniques to Arrest Defects, Bottlenecks, and Bad Design in Your Programs", authors: ["Adam Tornhill"], coverUrl: "https://images-na.ssl-images-amazon.com/images/I/51sHGZfwq-L._SX415_BO1,204,203,200_.jpg", downloadUrl: "" },
    { id: 4, title:"The Nature of Software Development: Keep It Simple, Make It Valuable, Build It Piece by Piece", authors: ["Ron Jeffries"], coverUrl: "https://images-na.ssl-images-amazon.com/images/I/51Ehd9aWRGL._SX415_BO1,204,203,200_.jpg", downloadUrl: "" }
    //
  ];

  ebooks : Array<Book> = [
    { id: 5, title:"Investor Relations Guidebook - CPE Edition", authors: ["Steven M. Bragg"], coverUrl: "https://images-na.ssl-images-amazon.com/images/I/41YUoNMZfcL._SX348_BO1,204,203,200_.jpg", downloadUrl: "https://s3.amazonaws.com/q4read/71p8wc12e98qw32Investor+Relations+v3.pdf" }
  ];

  constructor() { }

  ngOnInit() {
  }

}
