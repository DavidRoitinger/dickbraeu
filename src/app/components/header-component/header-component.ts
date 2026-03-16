import { AfterViewInit, Component, ElementRef, inject, signal, ViewChild, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-header-component',
  imports: [
    NgClass
],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss',
})
export class HeaderComponent  {
  router = inject(Router)

  // isShow: WritableSignal<boolean> = signal(false);



  navigateTo(path: string) : void {

    // document.getElementById('offcanvasNavbar')?.classList.remove('show');
    // document.getElementById('offcanvasNavbar')?.classList.add('hiding');
    try{
      //@ts-ignore
      document.getElementsByClassName('navbar-toggler')[0].click();
      document.getElementsByClassName('offcanvas-backdrop')[0].remove();
    } catch {
      console.log("tim stinkt?")
    }
    // console.log(this.isShow());
    // this.isShow.set(true)
    // this.isShow.set(false)
    this.router.navigateByUrl(path);
  }

}
