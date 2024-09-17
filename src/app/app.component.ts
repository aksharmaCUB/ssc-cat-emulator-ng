import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UtilityModule } from './common/utility/utility.module';
import { HeaderComponent } from './layouts/header/header.component';
import { SubHeaderComponent } from './layouts/sub-header/sub-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UtilityModule, HeaderComponent, SubHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'emulator';
}
