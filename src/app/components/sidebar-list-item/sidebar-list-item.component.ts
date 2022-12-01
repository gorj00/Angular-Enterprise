import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar-list-item',
  templateUrl: './sidebar-list-item.component.html',
  styleUrls: ['./sidebar-list-item.component.less']
})
export class SidebarListItemComponent implements OnInit {
  @Input() text: string = '';
  @Input() icon: string = '';
  @Input() emitData: any;
  @Output() onClicked = new EventEmitter<number | null>();

  constructor() { }

  onClick() {
    this.onClicked.emit(this.emitData ? this.emitData : null)
  }

  ngOnInit(): void {
  }

}
