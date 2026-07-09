import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  //Variable para saber si el menu esta abierto o cerrado
  menuabierto = false;
  
  //Función para abrir y cerrar el menu cuando se da click en el boton
  toggleMenu() {
    this.menuabierto = !this.menuabierto;
    console.log(this.menuabierto);
  }

}
