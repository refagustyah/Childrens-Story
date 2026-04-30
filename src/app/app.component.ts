import { Component } from '@angular/core';
import { Platform } from '@ionic/angular'; // Tambahkan ini
import { App } from '@capacitor/app';       // Tambahkan ini

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})

export class AppComponent {
  constructor(private platform: Platform) {
    this.initializeApp();
  }

  initializeApp() {
   // Di dalam initializeApp()
this.platform.ready().then(() => {
  console.log('Platform ready!'); // Tambahkan log ini buat ngetes
  App.addListener('backButton', ({ canGoBack }) => {
    if (!canGoBack) {
      App.exitApp();
    } else {
      window.history.back();
    }
  });
});
  }
}
