import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompFormComponent } from './components/comp-form/comp-form.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule,CompFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app-gereciador_de_gasto_front';
}
