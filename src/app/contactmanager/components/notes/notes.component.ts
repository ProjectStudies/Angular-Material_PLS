import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Note } from '../../models/note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() notes: Note[];

  displayedColumns: string[] = ['position', 'title', 'date'];
  dataSource:MatTableDataSource<Note>;

  constructor() { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Note>(this.notes);    
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnChanges(changes: SimpleChanges) {
    // only run when property "data" changed
    if (changes['notes']) {
        this.notes = changes['notes'].currentValue;
        this.dataSource = new MatTableDataSource<Note>(this.notes);
        this.ngAfterViewInit();      
    }
}

}
