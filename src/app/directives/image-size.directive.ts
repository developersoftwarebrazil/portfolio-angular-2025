import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appImageSize]',
  standalone: true
})
export class ImageSizeDirective implements OnInit {
  @Input() appImageSize!: string;

  constructor(
    private el: ElementRef,
    private render: Renderer2
  ) { }

  ngOnInit(): void {
   this.render.setStyle(this.el.nativeElement, 'width', this.appImageSize);
   this.render.setStyle(this.el.nativeElement, 'heigth', "auto")
  }

}
