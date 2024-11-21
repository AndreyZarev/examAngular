import { AfterViewInit, Directive, ElementRef, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { UserService } from '../user.service';
@Directive({
  selector: '[appNavbarComponent]'
})
export class NavbarComponentDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2, private userService: UserService) { }

  get isLoggedIn(): boolean {



    return this.userService.isLogged


  }
  ngOnInit(): void {

    if (this.isLoggedIn == true && localStorage.getItem('user') !== undefined) {
      this.renderer.addClass(this.elRef.nativeElement, "navAncors")
      this.renderer.removeClass(this.elRef.nativeElement, "navAncors2")

    } else {
      this.renderer.removeClass(this.elRef.nativeElement, "navAncors")
      this.renderer.addClass(this.elRef.nativeElement, "navAncors2")
    }




  }
  classPick = "navAncors"
  checkLogin() {
    if (this.isLoggedIn) {
      this.classPick = "navAncors"
    }
    if (this.isLoggedIn) {
      this.classPick = "nav2Ancors"
    }

  }







  mouseHoverEventHandler() {




    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', "pink")
  }

  mouseOutEventHandler() {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', "initial")
  }
}
