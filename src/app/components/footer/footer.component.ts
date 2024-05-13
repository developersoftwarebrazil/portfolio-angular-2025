import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  emailAddress = 'contatodevelopersoftwarebrazildna@gmail.com';
  currentYears!: number;

  constructor(){}
  ngOnInit(): void {
    this.getCurrentYear();
  }

  getCurrentYear(){
    this.currentYears = new Date().getFullYear();
  }
}
