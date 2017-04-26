import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../domains/book'

@Pipe({
  name: 'realBook'
})
export class RealBookPipe implements PipeTransform {

  transform(value: Book[], args?: any): any {
    if (value === undefined) return value;
    else return value.filter(book => book.downloadUrl === "");
  }

}
