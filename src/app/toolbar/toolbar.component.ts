import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

    routes = [
        {
            link: '/',
            name: 'home',
        },
        {
            link: '/resources',
            name: 'resources',
        },
        {
            link: '/problem',
            name: 'problem',
        },
    ];
    
}
