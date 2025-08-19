import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavLink } from '../../core/models/navbar-link.model';
import { NavbarService } from '../../core/services/navbar.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  cadastroLinks: NavLink[] = [];

  constructor(private navbarService: NavbarService) { }

  ngOnInit(): void {
    this.cadastroLinks = this.navbarService.getCadastroLinks();
  }

  getUserName(): string {
    return "Marcia Pereira";
  }

  isAdmin():boolean{
    return true;
  }

  logout(){
    console.log("logout");
  }
}