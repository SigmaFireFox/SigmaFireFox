import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonConfig, ButtonSize, ButtonType } from './button.model';

@Component({
  selector: 'sff-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() config: ButtonConfig | undefined;

  buttonType = ButtonType
  buttonSize = ButtonSize
}
