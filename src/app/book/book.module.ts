import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BookPageRoutingModule } from './book-routing.module';

// Hapus import BookPage dari sini jika tidak diperlukan lagi di module
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookPageRoutingModule
    // Jika BookPage ingin digunakan di module ini, masukkan ke imports, BUKAN declarations
  ],
  declarations: [] // Kosongkan bagian ini
})
export class BookPageModule {}