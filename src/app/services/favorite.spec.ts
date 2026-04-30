import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private favorites: any[] = [];
  private readonly STORAGE_KEY = 'favorit_cerita_anak'; // Nama "laci" penyimpanan di HP

  constructor() {
    // 1. Ambil data yang tersimpan di HP saat pertama kali aplikasi dibuka
    this.loadFavorites();
  }

  // Fungsi untuk memuat data dari memori HP
  private loadFavorites() {
    const savedData = localStorage.getItem(this.STORAGE_KEY);
    if (savedData) {
      this.favorites = JSON.parse(savedData); // Ubah teks jadi array kembali
    }
  }

  // Fungsi untuk menyimpan data ke memori HP
  private saveToStorage() {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.favorites)); // Simpan sebagai teks
  }

  getFavorites() {
    return this.favorites;
  }

  addFavorite(item: any) {
    if (!this.isFavorite(item)) {
      this.favorites.push(item);
      this.saveToStorage(); // PENTING: Langsung simpan permanen
    }
  }

  removeFavorite(item: any) {
    this.favorites = this.favorites.filter(fav => fav.id !== item.id);
    this.saveToStorage(); // PENTING: Update simpanan permanen
  }

  // Fungsi ini juga memperbaiki error "Property isFavorite does not exist"
  isFavorite(item: any): boolean {
    return this.favorites.some(fav => fav.id === item.id);
  }
}