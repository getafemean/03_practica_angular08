import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.scss']
})
export class CrearProductoComponent implements OnInit {

  @ViewChild('denominacion') denominacionRef: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.denominacionRef.nativeElement.focus()
  }

  addProducto(formProducto: any): void {
    console.log(formProducto);
    formProducto.reset();
    this.denominacionRef.nativeElement.focus()
    //console.log(formProducto.value)
  }

}
