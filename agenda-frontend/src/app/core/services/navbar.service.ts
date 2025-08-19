import { Injectable } from '@angular/core';
import { NavLink } from '../models/navbar-link.model';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  getCadastroLinks(): NavLink[] {
    return [
      { label: 'Áreas', path: '/cadastros/areas' },
      { label: 'Profissionais', path: '/cadastros/profissionais' },
      { label: 'Tipos de Atendimento', path: '/cadastros/tipos-atendimento' },
      { divider: true },
      { label: 'Clientes', path: '/cadastros/clientes' },
      { divider: true },
      { label: 'Usuários', path: '/cadastros/usuarios' },
    ];
  }
  
  // More links here
}