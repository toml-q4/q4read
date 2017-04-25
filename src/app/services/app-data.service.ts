import { Injectable } from '@angular/core';
import { Book } from '../../fw/domains/book';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppDataService {

  private books : Array<Book> = [
    { id: 1, title:"The Underground Railroad (Pulitzer Prize Winner) (National Book Award Winner) (Oprah's Book Club): A Novel", authors: ["Colson Whitehead"], imageUrl: "" },
    { id: 2, title:"The Nix: A novel", authors: ["Nathan Hill"], imageUrl: "" }
  ];

  constructor() {
  }

}
