import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FavoriteService } from '../services/favorite.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ]
})
export class FavoritePage implements OnInit {
  // 1. DAFTARKAN VARIABEL INI (Nama harus sama dengan yang dipakai di fungsi)
  favorites: any[] = [];

  constructor(
    public favService: FavoriteService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadData();
  }

  // Dipanggil setiap kali halaman favorit dibuka agar data tidak kosong
  ionViewWillEnter() {
    this.loadData();
  }

  // 2. KONSISTENSI NAMA: Gunakan this.favorites
  async loadData() {
    // Pastikan fungsi di Service kamu tidak pakai 'await' jika itu bukan Promise
    const data = this.favService.getFavorites();
    this.favorites = data;
  }

  // Hapus favorite melalui service
  async remove(item: any) {
    this.favService.removeFavorite(item);
    this.loadData(); // Refresh list setelah dihapus
  }

  openDetail(item: any) {
    this.router.navigate(['/detail', item.id]); 
  }

  goHome() { this.router.navigate(['/home']); }
  goBook() { this.router.navigate(['/book']); }
}