import { Component, OnInit } from '@angular/core';
import { conexionService } from '../Services/conexion.service';

@Component({
  selector: 'app-viewservices',
  templateUrl: './viewservices.page.html',
  styleUrls: ['./viewservices.page.scss'],
})
export class ViewservicesPage implements OnInit {

  nombrefiltrado = '';
  valor= false;

  public prueba = [
    {
      Operador: "TRANSPORTES DEL ATLANTICO CARIBEÑO SOCIEDAD ANONIMA  ",
      PorcentajePavimentado: "0,95441",
      reservado: true
    },
    {
      Operador: "BUSES SAN MIGUEL HIGUITO SOCIEDAD ANONIMA  ",
      PorcentajePavimentado: "0,695845",
      reservado: true
    },
    {
      Operador: "COOPERATIVA DE AUTOBUSEROS NACIONALES ASOCIADOS R L  ",
      PorcentajePavimentado: "0,379054",
      reservado: false
    }    
  ]
  
  constructor(private conexion: conexionService) { }

  ngOnInit() {
    this.conexion.getAllServices().subscribe(res => {
      console.log(res);
    });
  }

}
