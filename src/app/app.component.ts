import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'ngsp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [RouterModule]
})
export class AppComponent {
  title = 'ngsp works!';
}
