import {Component, OnInit} from '@angular/core';
import {Book} from '../../book';
import {BookService} from '../../book.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) {
    this.showAll();
  }

  ngOnInit(): void {
  }

  showAll(): Book[] {
    this.bookService.getAllBook().subscribe(books => {
      this.books = books;
    });
    return this.books;
  }

  // tslint:disable-next-line:typedef
  delete(id) {
    if (confirm('Mày đã nghĩ kĩ chưa?')) {
      this.bookService.deleteBook(id).subscribe(
        next => {
          this.books = this.showAll();
        },
        error => {
          alert('error');
        }
      );
    }
  }
}
