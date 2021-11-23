import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-services',
  templateUrl: './all-services.component.html',
  styleUrls: ['./all-services.component.scss'],
})
export class AllServicesComponent implements OnInit {

  nombrefiltrado = '';
  public prueba = [
    {
      Operador: "TRANSPORTES DEL ATLANTICO CARIBEÑO SOCIEDAD ANONIMA  ",
      PorcentajePavimentado: "0,95441",
    },
    {
      Operador: "BUSES SAN MIGUEL HIGUITO SOCIEDAD ANONIMA  ",
      PorcentajePavimentado: "0,695845",
    },
    {
      Operador: "COOPERATIVA DE AUTOBUSEROS NACIONALES ASOCIADOS R L  ",
      PorcentajePavimentado: "0,379054",
    }    
  ]
  constructor() { }

  ngOnInit() {}

}
