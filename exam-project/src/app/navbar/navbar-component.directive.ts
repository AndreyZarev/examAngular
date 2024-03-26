import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
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
    if (this.isLoggedIn == true) {
      this.renderer.addClass(this.elRef.nativeElement, "navAncors")
    } else {
      this.renderer.removeClass(this.elRef.nativeElement, "navAncors")
      this.renderer.addClass(this.elRef.nativeElement, "navAncors2")
    }

    // this.renderer.listen(this.elRef.nativeElement, "mouseover", this.mouseHoverEventHandler.bind(this));

    // this.renderer.listen(this.elRef.nativeElement, "mouseout", this.mouseOutEventHandler.bind(this));


  }

  mouseHoverEventHandler() {




    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', "pink")
  }

  mouseOutEventHandler() {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', "initial")
  }
}
