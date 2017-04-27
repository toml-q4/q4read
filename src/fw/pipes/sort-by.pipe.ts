import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../domains/book'

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(value: Book[], [config='title']): any {
    if (value === undefined) {
      return value;
    }
    else {
      if (config === "author")
      {
        return value.sort(function(a,b) {
          var a_authors = a.authors.join(", ");
          var b_authors = b.authors.join(", ");
          return (a_authors > b_authors) ? 1 : ((b_authors > a_authors) ? -1 : 0);
        } );
      }
      else if (config === "title") {
        return value.sort(function(a,b) {return (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0);} );
      }
      else {
        return value;
      }
    }
  }

}
