import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-log',
  templateUrl: './navbar-log.component.html',
  styleUrls: ['./navbar-log.component.css']
})
export class NavbarLogComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  CerrarSesion(){
    this.router.navigate(['/home']);

 }

}
