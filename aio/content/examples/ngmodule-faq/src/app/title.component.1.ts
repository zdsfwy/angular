// #docplaster
// #docregion
// #docregion v1
import { Component } from '@angular/core';
// #enddocregion v1
import { UserService } from './user.service';
// #docregion v1

@Component({
  selector: 'app-title',
  templateUrl: './title.component.1.html'
})
export class TitleComponent {
  title = 'Angular Modules';
// #enddocregion v1
  user = '';

  constructor(userService: UserService) {
    this.user = userService.userName;
  }
// #docregion v1
}
// #enddocregion v1
