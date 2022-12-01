import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent{
  public appPages = [
    { title: 'Inicio', url: 'casa', icon: 'home' },
    { title: 'Nosotros', url: 'about', icon: 'people' },
    { title: 'Perfil', url: 'perfil', icon: 'mail' },  
    { title: 'Contacto', url: 'contact', icon: 'mail' },
    { title: 'Conversor', url: 'conversor', icon: 'archive' },
    { title: 'Clima', url: 'clima', icon: 'sunny' },
    { title: 'Cerrar Sesión', url: '/home', icon: 'log-out' },
  ];


  ngOnInit() {
  }

}
