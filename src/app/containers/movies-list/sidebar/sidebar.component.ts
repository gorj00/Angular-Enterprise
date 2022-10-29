import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit {
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
