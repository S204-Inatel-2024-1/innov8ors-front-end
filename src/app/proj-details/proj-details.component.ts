import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-proj-details',
  standalone: true,
  imports: [
    MatExpansionModule, 
    MatFormFieldModule],
  templateUrl: './proj-details.component.html',
  styleUrl: './proj-details.component.css'
})
export class ProjDetailsComponent {
  panelOpenState: boolean = false;
}
