import { Directive, ElementRef } from '@angular/core';

declare var $: any;

@Directive({
  selector: '[appExample]'
  // uygulama seviyesinde directive'i kullanmamızı sağlayan referanstır.
  //selector özelliği köşeli parantez içerisinde([appExample]) yazılıyorsa bu attribute olarak kullanılacağı anlamına gelmektedir.
  //yok eğer (.appExample) olarak yazılıyorsa bu da class olarak ilgili directibe'in kullanılacağı anlamına gelmektedir.
})
export class ExampleDirective {

  constructor(private element: ElementRef) {
    element.nativeElement.style.backgroundColor = "red";
    $(element.nativeElement).fadeOut(2000).fadeIn();
  }


}