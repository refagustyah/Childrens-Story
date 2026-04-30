import { Component } from '@angular/core';
import { Router } from '@angular/router'; // HttpClient dihapus karena offline
import { FavoriteService } from '../services/favorite.service';
import { CommonModule } from '@angular/common'; // Tambahkan ini
import { IonicModule } from '@ionic/angular'; // Tambahkan ini
import { FormsModule } from '@angular/forms'; // Tambahkan ini
import { Keyboard } from '@capacitor/keyboard';

@Component({
  selector: 'app-book',
  templateUrl: './book.page.html',
  styleUrls: ['./book.page.scss'],
  standalone: true, // Pastikan ini ada jika BookPage kamu adalah standalone
  imports: [CommonModule, IonicModule, FormsModule] // Tambahkan module yang diperlukan di sini jika standalone
})
export class BookPage {

  filteredStories: any[] = [];
  selectedCategory: string = 'all';

  constructor(
    public favService: FavoriteService, 
    private router: Router
  ) {}

  stories = [
    // --- CATEGORY: Cerita Rakyat ---
    { title: 'Malin Kundang', category: 'Cerita Rakyat', image: 'assets/icon/Malin Kundang.jpg', id: 'malin' },
    { title: 'Timun Mas', category: 'Cerita Rakyat', image: 'assets/icon/Timun Mas.jpg', id: 'timun_mas' },
    { title: 'Danau Toba', category: 'Cerita Rakyat', image: 'assets/icon/Danau Toba.jpg', id: 'danau_toba' },
    { title: 'Lutung Kasarung', category: 'Cerita Rakyat', image: 'assets/icon/Lutung Kasarung.jpg', id: 'lutung_kasarung' },
    { title: 'Nyi Roro Kidul', category: 'Cerita Rakyat', image: 'assets/icon/Nyi Roro Kidul.jpg', id: 'nyi_roro_kidul' },
    { title: 'Bawang Merah dan Bawang Putih', category: 'Cerita Rakyat', image: 'assets/icon/Bawang Merah dan Putih.jpg', id: 'bawang_merah_putih' },
    { title: 'Batu Menangis', category: 'Cerita Rakyat', image: 'assets/icon/Batu Menangis.jpg', id: 'batu_menangis' },
    { title: 'Joko Kendil', category: 'Cerita Rakyat', image: 'assets/icon/Joko Kendil.jpg', id: 'joko_kendil' },
    { title: 'Rawa Pening', category: 'Cerita Rakyat', image: 'assets/icon/Rawa Pening.jpg', id: 'rawa_pening' },
    { title: 'Sangkuriang', category: 'Cerita Rakyat', image: 'assets/icon/Sangkuriang.jpg', id: 'sangkuriang' },
    { title: 'Jaka Tarub', category: 'Cerita Rakyat', image: 'assets/icon/Jaka Tarub.jpg', id: 'jaka_tarub' },
    { title: 'Keong Mas', category: 'Cerita Rakyat', image: 'assets/icon/Keong Mas.jpg', id: 'keong_mas' },
    { title: 'Asal Usul Selat Bali', category: 'Cerita Rakyat', image: 'assets/icon/Asal Usul Selat Bali.jpg', id: 'asal_usul_selat_bali' },
    { title: 'Batu Gantung', category: 'Cerita Rakyat', image: 'assets/icon/Batu Gantung.jpg', id: 'batu_gantung' },
    { title: 'Sura dan Baya', category: 'Cerita Rakyat', image: 'assets/icon/Sura dan Baya.jpg', id: 'sura_dan_baya' },
    { title: 'Legenda Tangkuban Perahu', category: 'Cerita Rakyat', image: 'assets/icon/Legenda Tangkuban Perahu.jpeg', id: 'legenda_tangkuban_perahu' },
    { title: 'Roro Jonggrang', category: 'Cerita Rakyat', image: 'assets/icon/Roro Jonggrang.jpeg', id: 'roro_jonggrang' },
    { title: 'Legenda Pulau Kapal', category: 'Cerita Rakyat', image: 'assets/icon/Legenda Pulau Kapal.jpeg', id: 'legenda_pulau_kapal' },
    { title: 'Putri Hijau', category: 'Cerita Rakyat', image: 'assets/icon/Putri Hijau.jpeg', id: 'putri_hijau' },
    { title: 'Sabai Nan Aluih', category: 'Cerita Rakyat', image: 'assets/icon/Sabai Nan Aluih.jpeg', id: 'Sabai Nan Aluih' },
    { title: 'Legenda Pesut Mahakam', category: 'Cerita Rakyat', image: 'assets/icon/Legenda Pesut Mahakam.jpeg', id: 'Legenda Pesut Mahakam' },
    { title: 'La Dana dan Kerbaunya', category: 'Cerita Rakyat', image: 'assets/icon/La Dana dan Kerbaunya.jpeg', id: 'La Dana dan Kerbaunya' },

    // --- CATEGORY: Dongeng Dunia ---
    { title: 'Pinokio', category: 'Dongeng Dunia', image: 'assets/icon/Pinokio.jpg', id: 'pinokio' },
    { title: 'Putri Tidur dan Benang Takdir', category: 'Dongeng Dunia', image: 'assets/icon/Putri Tidur.jpg', id: 'putri_tidur_orisinal' },
    { title: 'Aladin dan Lampu Ajaib', category: 'Dongeng Dunia', image: 'assets/icon/Aladin.jpg', id: 'aladin_dan_lampu_ajaib' },
    { title: 'Jack dan Pohon Kacang Ajaib', category: 'Dongeng Dunia', image: 'assets/icon/Jack dan Pohon Kacang.jpg', id: 'jack_dan_pohon_kacang_ajaib' },
    { title: 'Rapunzel', category: 'Dongeng Dunia', image: 'assets/icon/Rapunzel.jpg', id: 'rapunzel' },
    { title: 'Gadis Penjual Korek Api', category: 'Dongeng Dunia', image: 'assets/icon/Gadis Penjual Korek Api.jpg', id: 'gadis_penjual_korek_api' },
    { title: 'Putri Salju dan Tujuh Kurcaci', category: 'Dongeng Dunia', image: 'assets/icon/Putri Salju dan Tujuh Kurcaci.jpg', id: 'putri_salju__dan_tujuh_kurcaci' },
    { title: 'The Pied Piper of Hamelin', category: 'Dongeng Dunia', image: 'assets/icon/The Pied Piper of Hamelin.jpeg', id: 'The Pied Piper of Hamelin' },
    { title: 'Thumbelina', category: 'Dongeng Dunia', image: 'assets/icon/Thumbelina.jpeg', id: 'Thumbelina' },
    { title: 'Puss in Boots', category: 'Dongeng Dunia', image: 'assets/icon/Puss in Boots.jpeg', id: 'Puss in Boots' },

    // --- CATEGORY: Fabel ---
    { title: 'Tiga Babi dan Serigala', category: 'Fabel (Cerita Hewan)', image: 'assets/icon/Tiga Babi dan Serigala.jpg', id: 'tiga_babi_dan_serigala' },
    { title: 'Tiga Babi Kecil: Ujian di Lembah Angin', category: 'Fabel (Cerita Hewan)', image: 'assets/icon/Tiga Babi.jpg', id: 'tiga_babi_lembah_angin' },
    { title: 'Si Kancil yang Cerdik', category: 'Fabel (Cerita Hewan)', image: 'assets/icon/Si Kancil yang Cerdik.jpg', id: 'si_kancil_yang_cerdik' },
    { title: 'Angsa Bertelur Emas', category: 'Fabel (Cerita Hewan)', image: 'assets/icon/Angsa Bertelur Emas.jpg', id: 'angsa_bertelur_emas' },
    { title: 'Kera dan Kura-kura', category: 'Fabel (Cerita Hewan)', image: 'assets/icon/Kera dan Kura-Kura.jpg', id: 'kera_dan_kurakura' },
    { title: 'Beruang dan Lebah', category: 'Fabel (Cerita Hewan)', image: 'assets/icon/Beruang dan Lebah.jpg', id: 'beruang_dan_lebah' },
    { title: 'Singa dan Tikus', category: 'Fabel (Cerita Hewan)', image: 'assets/icon/Singa dan Tikus.jpg', id: 'singa_dan_tikus' },
    { title: 'Kancil dan Siput', category: 'Fabel (Cerita Hewan)', image: 'assets/icon/Kancil dan Siput.jpg', id: 'kancil_dan_siput' },
    { title: 'Tikus Desa dan Tikus Kota', category: 'Fabel (Cerita Hewan)', image: 'assets/icon/Tikus Kota dan Desa.jpg', id: 'tikus_desa_kota' },
    { title: 'Chaki Sang Pembawa Cahaya', category: 'Fabel (Cerita Hewan)', image: 'assets/icon/Chaki Sang Pembawa Cahaya.jpg', id: 'chaki_pembawa_cahaya' },
    { title: 'Kancil dan Jembatan Rahasia', category: 'Fabel (Cerita Hewan)', image: 'assets/icon/Kancil dan Buaya.jpg', id: 'kancil_dan_buaya_orisinal' },
    { title: 'Anak Gembala dan Alarm Palsu', category: 'Fabel (Cerita Hewan)', image: 'assets/icon/Anak Gembala.jpg', id: 'anak_gembala_dan_alarm_palsu' },
    { title: 'Gagak dan Sebuah Kendi', category: 'Fabel (Cerita Hewan)', image: 'assets/icon/Gagak dan Sebuah Kendi.jpg', id: 'gagak_dan_sebuah_kendi' },
    { title: 'Semut dan Belalang', category: 'Fabel (Cerita Hewan)', image: 'assets/icon/Semut dan Belalang.jpg', id: 'semut_dan_belalang' },
    { title: 'Serigala Berbulu Domba', category: 'Fabel (Cerita Hewan)', image: 'assets/icon/Serigala Berbulu Domba.jpg', id: 'serigala_berbulu_domba' },
    { title: 'Penebang Kayu dan Kapak Emas', category: 'Fabel (Cerita Hewan)', image: 'assets/icon/Kapak Emas.jpg', id: 'penebang_kayu_dan_kapak_emas' },
    { title: 'Kelinci dan Kura-kura', category: 'Fabel (Cerita Hewan)', image: 'assets/icon/Kelinci dan Kura-kura.jpg', id: 'kelinci_dan_kura_kura' },
    { title: 'Itik Buruk Rupa', category: 'Fabel (Cerita Hewan)', image: 'assets/icon/Itik Buruk Rupa.jpg', id: 'itik_buruk_rupa' },
    { title: 'Kancil dan Harimau', category: 'Fabel (Cerita Hewan)', image: 'assets/icon/Kancil dan Harimau.jpg', id: 'kancil_dan_harimau' },
    { title: 'Gajah yang Baik Hati', category: 'Fabel (Cerita Hewan)', image: 'assets/icon/Gajah yang Baik Hati.jpeg', id: 'gajah_baik_hati' },
    { title: 'Mimpi Terbang Si Lala', category: 'Fabel (Cerita Hewan)', image: 'assets/icon/Mimpi Terbang Si Lala Kupu-Kupu.jpeg', id: 'mimpi_terbang_si_lala' },
    { title: 'Persahabatan Kerbau dan Burung Jalak', category: 'Fabel (Cerita Hewan)', image: 'assets/icon/Persahabatan Kerbau dan Burung Jalak.jpeg', id: 'persahabatan_kerbau_dan_burung_jalak' },
    { title: 'Anak Ayam yang Cerdik', category: 'Fabel (Cerita Hewan)', image: 'assets/icon/Anak Ayam yang Cerdik.jpeg', id: 'anak_ayam_yang_cerdik' },
    { title: 'Semut dan Kepompong', category: 'Fabel (Cerita Hewan)', image: 'assets/icon/Semut dan Kepompong.jpeg', id: 'semut_dan_kepompong' },
    { title: 'Kancil dan Sabuk Raja', category: 'Fabel (Cerita Hewan)', image: 'assets/icon/Kancil dan Sabuk Raja.jpeg', id: 'kancil_dan_sabuk_raja' },
  ];

  ionViewWillEnter() {
    this.filterByCategory();
  }

  filterByCategory() {
    if (this.selectedCategory === 'all') {
      this.filteredStories = [...this.stories];
    } else {
      this.filteredStories = this.stories.filter((item: any) => 
        item.category === this.selectedCategory
      );
    }
  }

  filterCerita(event: any) {
    const value = event.target.value?.toLowerCase() || '';
    this.filteredStories = this.stories.filter((item: any) => {
      const matchSearch = item.title.toLowerCase().includes(value);
      const matchCategory = this.selectedCategory === 'all' || item.category === this.selectedCategory;
      return matchSearch && matchCategory;
    });
  }

  toggleFavorite(item: any) {
    if (this.favService.isFavorite(item)) {
      this.favService.removeFavorite(item);
    } else {
      this.favService.addFavorite(item);
    }
  }

  bukaCerita(cerita: any) {
    this.router.navigate(['/detail', cerita.id]);
  }

  async searching() {
  // 1. Jalankan kodingan cari ceritanya di sini...
  console.log("Mencari cerita...");

  // 2. Perintah sakti buat ngilangin keyboard:
  await Keyboard.hide(); 
}

  goHome() { this.router.navigate(['/home']); }
  goBook() { this.router.navigate(['/book']); }
  goFavorite() { this.router.navigate(['/favorite']); }
}