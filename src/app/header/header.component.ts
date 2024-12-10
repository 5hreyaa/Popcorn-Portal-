import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class HeaderComponent implements OnInit {
  dropdownVisible = false;

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void { }

  goToHome() {
    this.router.navigate(['home']);
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['login']);
  }

  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }

  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.dropdownVisible = false;
    }
  }
}
