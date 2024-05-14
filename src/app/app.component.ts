import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IntroComponent } from './sections/intro/intro.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { AcademicComponent } from './sections/academic/academic.component';
import { FooterComponent } from './components/footer/footer.component';
import { ImageSizeDirective } from './directives/image-size.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ImageSizeDirective,
    RouterOutlet,
    NavbarComponent,
    IntroComponent,
    ExperienceComponent,
    AcademicComponent,
    FooterComponent,

  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfólio - desenvolvedor designer ';
}
