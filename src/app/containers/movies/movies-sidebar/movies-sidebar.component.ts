import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-sidebar',
  templateUrl: './movies-sidebar.component.html',
  styleUrls: ['./movies-sidebar.component.less']
})
export class MoviesSidebarComponent implements OnInit {
  genres: { name: string }[] = [
    {name: 'Action'},
    {name: 'Comedy'},
    {name: 'Drama'},
    {name: 'Fantasy'},
    {name: 'Horror'},
    {name: 'Mystery'},
    {name: 'Romance'},
    {name: 'Thriller'},
  ]

  users: string[] = ['John', 'Maria', 'Stan'];

  constructor() { }

  ngOnInit(): void {
  }

}
