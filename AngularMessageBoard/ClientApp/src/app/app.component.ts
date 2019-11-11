import { Component, Input, } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h3>Message Board</h3>
    <div>
      <post [title]="postTitle"></post>
    </div>
  `
})
export class AppComponent {
  postTitle = 'First Post!';
}





@Component({
  selector: 'post',
  template: '<div>{{title}}</div>'
})
export class PostComponent
{
  @Input() title: string;
}
