import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumberFormat]',
})
export class NumberFormatDirective {
  constructor(private el: ElementRef) {}

  @HostListener('blur') onBlur() {
    let value = this.el.nativeElement.value;
    let numberValue = parseFloat(value);
    if (!isNaN(numberValue)) {
      this.el.nativeElement.value = numberValue.toLocaleString('de-DE');
    }
  }

  @HostListener('focus') onFocus() {
    let value = this.el.nativeElement.value;
    let numberValue = parseFloat(value.replace(/,/g, ''));
    if (!isNaN(numberValue)) {
      this.el.nativeElement.value = numberValue.toString();
    }
  }
}
