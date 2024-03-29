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
    debugger
    if (this.isLoggedIn == true) {
      this.renderer.addClass(this.elRef.nativeElement, "navAncors")
      this.renderer.removeClass(this.elRef.nativeElement, "navAncors2")

    } else {
      this.renderer.removeClass(this.elRef.nativeElement, "navAncors")
      this.renderer.addClass(this.elRef.nativeElement, "navAncors2")
    }



    // this.renderer.listen(this.elRef.nativeElement, "mouseover", this.mouseHoverEventHandler.bind(this));

    // this.renderer.listen(this.elRef.nativeElement, "mouseout", this.mouseOutEventHandler.bind(this));


  }
  classPick = "navAncors"
  checkLogin() {
    if (this.isLoggedIn) {
      this.classPick = "navAncors"
    }
    this.classPick
  }







  mouseHoverEventHandler() {




    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', "pink")
  }

  mouseOutEventHandler() {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', "initial")
  }
}
