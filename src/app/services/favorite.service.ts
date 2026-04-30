import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private favorites: any[] = [];
  // Ini nama "laci" penyimpanan di HP lo
  private readonly STORAGE_KEY = 'children_story_favorites'; 

  constructor() {
    // PAS APLIKASI DIBUKA (SETELAH DI-CLOSE), INI BAKAL NGAMBIL DATA LAMA
    this.loadFavorites();
  }

  // Fungsi buat baca data yang udah pernah disimpan
  private loadFavorites() {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    if (saved) {
      try {
        this.favorites = JSON.parse(saved);
      } catch (e) {
        console.error('Gagal baca data favorit', e);
        this.favorites = [];
      }
    }
  }

  // Fungsi buat nulis data ke memori permanen HP
  private saveToStorage() {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.favorites));
  }

  getFavorites() {
    return this.favorites;
  }

  addFavorite(item: any) {
    if (!this.isFavorite(item)) {
      this.favorites.push(item);
      this.saveToStorage(); // DISIMPAN PERMANEN DI SINI
    }
  }

  removeFavorite(item: any) {
    this.favorites = this.favorites.filter(fav => fav.id !== item.id);
    this.saveToStorage(); // DISIMPAN ULANG PAS DIHAPUS
  }

  isFavorite(item: any): boolean {
    return this.favorites.some(fav => fav.id === item.id);
  }
}