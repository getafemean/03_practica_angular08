import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidateCif } from '../validators/cif.validator';

@Component({
  selector: 'app-crear-factura',
  templateUrl: './crear-factura.component.html',
  styleUrls: ['./crear-factura.component.scss']
})
export class CrearFacturaComponent implements OnInit {

  formFactura: FormGroup;
  user: string = 'Juan Pérez';

  constructor() { }

  ngOnInit(): void {
    this.formFactura = new FormGroup({
      cliente: new FormControl('', [Validators.required, Validators.minLength(4)]),
      cif: new FormControl('', [ValidateCif]),
      fechaFactura: new FormControl((new Date()).toISOString().substring(0,10)),
      baseImponible: new FormControl(0),
      tipoIVA: new FormControl(0.21),
      importeIVA: new FormControl(0),
      totalFactura: new FormControl(0)
    })
    this.actualizarFactura();
    if(localStorage.getItem('borradorFra')) {
      let borradorFra = JSON.parse(localStorage.getItem('borradorFra'));
      this.formFactura.get('cliente').setValue(borradorFra.cliente);
      this.formFactura.get('cif').setValue(borradorFra.cif);
      this.formFactura.get('fechaFactura').setValue(borradorFra.fechaFactura);
      this.formFactura.get('baseImponible').setValue(borradorFra.baseImponible);
      this.formFactura.get('tipoIVA').setValue(borradorFra.tipoIVA);
    }
  }

  actualizarFactura() {
    this.formFactura.valueChanges
                    .subscribe(objetoForm => {
                      this.formFactura.get('importeIVA')
                                      .patchValue(objetoForm.baseImponible * objetoForm.tipoIVA, {emitEvent: false})
                      this.formFactura.get('totalFactura')
                                      .patchValue(objetoForm.baseImponible + objetoForm.baseImponible * objetoForm.tipoIVA, {emitEvent: false})
                    })
  }

  addFactura() {
    let factura = {...this.formFactura.value, user: this.user};
    console.log(factura);
  }

  guardarBorrador() {
    let factura = {...this.formFactura.value};
    localStorage.setItem('borradorFra', JSON.stringify(factura))
  }

}
