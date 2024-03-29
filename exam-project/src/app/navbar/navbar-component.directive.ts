import { Directive, ElementRef, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { UserService } from '../user.service';
@Directive({
  selector: '[appNavbarComponent]'
})
export class NavbarComponentDirective implements OnInit, OnChanges {

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
  ngOnChanges(changes: SimpleChanges): void {
    if (this.isLoggedIn == true) {
      this.renderer.addClass(this.elRef.nativeElement, "navAncors")
      this.renderer.removeClass(this.elRef.nativeElement, "navAncors2")

    } else {
      this.renderer.removeClass(this.elRef.nativeElement, "navAncors")
      this.renderer.addClass(this.elRef.nativeElement, "navAncors2")
    }
  }
  mouseHoverEventHandler() {




    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', "pink")
  }

  mouseOutEventHandler() {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', "initial")
  }
}
