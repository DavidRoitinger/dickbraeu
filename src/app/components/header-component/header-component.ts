import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-component',
  imports: [
  ],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss',
})
export class HeaderComponent {

  router = inject(Router)


  navigateTo(path: string) : void {
    this.router.navigateByUrl(path);
  }

}
