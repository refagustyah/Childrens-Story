import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage-angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  standalone: false
})
export class DetailPage implements OnInit {
  cerita: any = null;
  ceritaId: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    // 1. Ambil ID dari URL
    this.ceritaId = this.route.snapshot.paramMap.get('id') || '';

    // 2. Teks Cerita Anda (Tetap di sini agar tidak berubah)
    const data: any = {

     malin: {
        title: 'Si Malin Kundang',
        image: 'assets/icon/Malin Kundang.jpg',
        content: [
          `**Gema di Pesisir Air Manis**
          
Di sebuah desa yang aromanya selalu bercampur antara garam laut dan kayu busuk, hiduplah seorang pemuda bernama Malin. Ia tidak hanya mewarisi garis rahang yang tegas dari ayahnya yang hilang di laut, tetapi juga ambisi yang membakar dadanya setiap kali melihat ufuk timur. Ibunya, Mande, adalah seorang wanita yang tangannya selalu kasar karena mengeringkan ikan, namun matanya selalu lembut saat menatap putra tunggalnya.

Suatu pagi, saat kabut masih memeluk erat dermaga kayu yang mulai rapuh, Malin memutuskan untuk pergi. "Ibu," katanya tanpa menatap mata Mande, "Lautan ini terlalu sempit untuk mimpiku. Aku tidak ingin mati hanya dengan bau amis di pakaianku."

Mande tidak melarang, sebab ia tahu burung yang memiliki sayap kuat tak akan pernah betah di sangkar bambu. Ia hanya membekalkan sebungkus nasi ketan dan segenggam doa yang tak putus-putus.

---

**Puncak Kejayaan**

Tahun-tahun berlalu seperti deburan ombak. Malin bukan lagi pemuda yang bajunya compang-camping. Di tanah seberang, ia belajar bahwa dunia hanya tunduk pada mereka yang memiliki emas dan nyali. Ia membangun kerajaan dagangnya di atas keringat dan kelicikan yang terukur. Ia menikahi seorang putri saudagar yang kulitnya seputih gading dan tutur katanya semanis madu.

Suatu ketika, kapalnya yang megah—sebuah kastel terapung dengan layar sutra—berlabuh di desa kelahirannya untuk mengisi persediaan. Kabar itu menyebar lebih cepat dari badai. “Malin telah kembali!” teriak orang-orang. Mande, dengan kaki yang gemetar karena usia, berlari menuju dermaga. Ia tidak peduli pada kemegahan kapal itu; ia hanya mencari mata putranya.

---

**Pertemuan yang Mengubah Segalanya**

Saat Malin turun dengan jubah beludrunya, Mande menerjang kerumunan. "Malin! Anakku!" teriaknya sambil berusaha merengkuh kaki pria itu.

Istri Malin mengernyitkan dahi, menutup hidungnya dari bau laut dan kemiskinan yang menguar dari tubuh wanita tua itu. "Siapa wanita peminta-minta ini, Tuan? Bukankah kau bilang ibumu telah lama tiada?" tanyanya dengan nada rendah.

Di sinilah hati Malin membatu. Ia melihat ibunya, melihat pakaian lusuhnya, dan melihat tatapan memuja dari rakyat jelata. Rasa malu merayap lebih kuat daripada rasa rindu. Baginya, mengakui wanita ini berarti menghancurkan citra kemuliaan yang ia bangun dengan susah payah.

"Aku tidak mengenalmu, wanita tua!" bentak Malin. Ia menendang tangan ibunya yang mencoba menyentuh ujung jubahnya hingga wanita itu terjerembap ke pasir. "Pengawal! Usir wanita gila ini! Jangan biarkan dia mengotori pandanganku!"

---

**Sumpah di Tepian Pantai**

Dengan hati hancur, Mande hanya bisa menatap punggung putranya yang berjalan angkuh kembali ke atas kapal. Malin memerintahkan anak buahnya untuk segera mengangkat sauh dan membentangkan layar, ingin secepat mungkin meninggalkan desa itu seolah-olah ingin lari dari dosanya.

Saat kapal mulai bergerak menjauh dan membelah ombak, Mande bersimpuh di bibir pantai yang basah. Ia mengangkat tangannya yang gemetar ke langit yang mulai meredup. "Ya Tuhan, jika pria itu memang bukan anakku, maafkanlah kelancanganku. Namun jika benar ia adalah Malin putraku... biarlah alam yang menjadi saksi atas durhakanya."

---

**Amukan Alam**

Belum jauh kapal itu meninggalkan teluk, langit yang tadinya cerah berubah menjadi hitam pekat seolah-olah cahaya matahari dihisap paksa. Angin menderu dengan suara seperti raungan binatang buas. Kapal megah yang tadinya stabil, kini terombang-ambing seperti kulit kacang di tengah amukan samudra. 

Ombak setinggi raksasa menghantam dek kapal, menghancurkan layar sutra dan tiang-tiang kayu yang kokoh. Di tengah kekacauan itu, Malin berdiri di atas dek, baru menyadari bahwa alam sedang membalas perbuatannya. Saat petir menyambar tepat di atas kepalanya, ia merasakan dingin yang luar biasa merambat dari telapak kakinya. Bukan dingin air laut, melainkan kekakuan yang merayap naik, mengubah daging menjadi mineral.

Malin mencoba bersujud ke arah pantai, ingin meneriakkan kata "Ibu", namun lidahnya telah menjadi kaku. Sebelum kapal itu benar-benar tenggelam, sosok Malin telah tegak mematung dalam posisi memohon ampun, terkunci selamanya dalam penyesalan yang membatu.`,
        ]
      },

      timun_mas: {
        title: 'Timun Mas',
        image: 'assets/icon/Timun Mas.jpg',
        content: [
          `**Benih Perjanjian Kegelapan**

Di pinggiran hutan yang rimbun, hiduplah seorang janda tua bernama Mbok Srini. Kesepian telah menjadi kawan setianya selama puluhan tahun, hingga suatu malam, sebuah kekuatan besar muncul dari balik pepohonan. Buto Ijo, raksasa dengan kulit sehijau lumut dan taring yang mencuat, berdiri di depan gubuknya.

Bukannya memangsa, raksasa itu memberikan sebuah biji mentimun berwarna emas. "Tanamlah ini," geramnya. "Kau akan mendapatkan anak, tapi saat dia berumur tujuh belas tahun, kau harus menyerahkannya kembali padaku untuk kujadikan santapan."

Putus asa karena kesepian, Mbok Srini setuju. Dari mentimun emas yang tumbuh luar biasa besar, lahirlah seorang bayi perempuan yang cantik jelita, yang ia beri nama Timun Emas.

---

**Masa Remaja yang Berbayang**

Tahun-tahun berlalu, Timun Emas tumbuh menjadi gadis yang cerdas dan penuh kasih. Namun, setiap kali matahari terbenam, Mbok Srini menangis diam-diam. Ia melihat kulit putrinya yang semakin bersinar, membayangkan bahwa setiap detik yang berlalu membawanya lebih dekat ke mulut raksasa itu.

Malam sebelum ulang tahun Timun Emas yang ke-17, Mbok Srini bermimpi tentang seorang petapa di Gunung Gundul. Ia segera mengirim Timun Emas ke sana. Sang petapa memberikan empat bungkusan kecil: biji mentimun, jarum, garam, dan terasi. "Gunakan ini hanya saat maut sudah di belakangmu," pesan sang petapa.

---

**Pengejaran di Hutan Rimba**

Tepat di hari ulang tahunnya, bumi bergetar. Buto Ijo datang menagih janji. "Mbok Srini! Serahkan anak itu!" teriaknya hingga pohon-pohon tumbang. Timun Emas berlari sekencang mungkin ke dalam hutan. 

Saat raksasa itu hampir menangkapnya, ia melemparkan bungkusan pertama: **Biji Mentimun**. Seketika, hutan berubah menjadi ladang mentimun yang sangat lebat. Batang-batangnya melilit kaki raksasa itu, namun dengan kekuatan dahsyat, Buto Ijo menghancurkannya.

Ia melempar bungkusan kedua: **Jarum**. Dalam sekejap, tumbuhlah rumpun bambu yang tinggi dan runcing. Bambu-bambu itu menusuk kaki sang raksasa, membuatnya melolong kesakitan, namun ia terus merangkak maju.

Bungkusan ketiga: **Garam**. Tanah di belakang Timun Emas berubah menjadi lautan yang luas dan dalam. Raksasa itu terhambat, berenang dengan susah payah melawan ombak yang asin.

---

**Akhir dari Sang Pemangsa**

Kekuatan Timun Emas hampir habis. Nafas raksasa itu sudah terasa panas di tengkuknya. Dengan sisa tenaga terakhir, ia melemparkan bungkusan terakhir: **Terasi**.

Seketika, tanah di bawah kaki Buto Ijo berubah menjadi lautan lumpur hitam yang mendidih dan sangat lengket. Semakin raksasa itu meronta, semakin dalam ia terhisap ke dalam perut bumi. Lumpur itu seperti tangan-tangan kegelapan yang menariknya pulang ke dasar tanah. Buto Ijo akhirnya lenyap, ditelan oleh kerakusan dan janji jahatnya sendiri.

---

**Kebebasan yang Hakiki**

Hutan kembali tenang. Timun Emas kembali ke gubuknya dengan langkah gemetar namun kepala tegak. Mbok Srini memeluknya erat, menyadari bahwa takdir tidak selalu tertulis di atas batu—bahwa keberanian dan sedikit bantuan dari alam mampu memutus rantai ketakutan yang paling gelap sekalipun.

Mereka hidup bahagia tanpa lagi bayang-bayang raksasa, di bawah langit yang kini terasa jauh lebih luas bagi seorang gadis yang berhasil merebut kembali hidupnya.`,
        ]
      },

  lutung_kasarung: {
        title: 'Lutung Kasarung',
        image: 'assets/icon/Lutung Kasarung.jpg',
        content: [
          `**Purbasari: Takhta yang Terbuang**

Di Kerajaan Pasir Batang, kedamaian terusik oleh kabut kecemburuan. Prabu Tapa Agung yang mulai senja memutuskan untuk turun takhta. Namun, ia tidak memilih putri sulungnya, Purbararang, melainkan putri bungsunya yang lembut hati, Purbasari.

Purbararang yang merasa haknya dirampas, bersekutu dengan seorang penyihir kegelapan. Malam itu, saat Purbasari tertidur, sebuah kutukan disebarkan. Pagi harinya, seluruh tubuh Purbasari dipenuhi bintik hitam bernanah yang mengerikan. "Lihatlah!" seru Purbararang di depan rakyat. "Tuhan mengutuknya karena ia tidak layak memimpin kita!"

Purbasari yang malang diasingkan ke tengah hutan rimba, tempat di mana hanya ada suara daun kering dan bayangan pepohonan yang menjulang.

---

**Kehadiran Sang Penjaga Hitam**

Di hutan itu, Purbasari tidak sendirian. Seekor kera hitam berbulu lebat dan bermata tajam selalu memperhatikannya dari dahan pohon. Kera itu bukan hewan biasa; ia adalah Lutung Kasarung, sosok makhluk dari dimensi langit yang sedang menjalani hukuman di bumi.

Alih-alih takut, Purbasari merasakan ketenangan saat melihat Lutung tersebut. Lutung itu membantunya mencari buah-buahan dan menjaganya dari binatang buas. Perlahan, persahabatan tanpa kata terjalin di antara mereka.

Suatu malam, saat bulan purnama mencapai puncaknya, Lutung Kasarung bermeditasi. Ia memohon pada kekuatan alam untuk membantu sang putri. Dengan sekali entakan kaki, tanah di tengah hutan merekah, memunculkan sebuah kolam dengan air yang jernih seperti kristal. Saat Purbasari membasuh tubuhnya, keajaiban terjadi. Bintik-bintik hitam itu luruh, meninggalkan kulit yang jauh lebih bersih dan bercahaya dari sebelumnya.

---

**Ujian di Istana**

Kabar kesembuhan Purbasari sampai ke telinga Purbararang. Dengan amarah yang meluap, ia menyambangi hutan dan menantang adiknya. "Cantik saja tidak cukup untuk menjadi ratu!" tantang Purbararang. "Seorang ratu harus memiliki pendamping yang gagah. Lihat tunanganku, Indrajaya. Mana tunanganmu?"

Purbasari terdiam. Ia tidak memiliki siapa pun kecuali kera hitam di sampingnya. Dengan berat hati namun penuh keyakinan, ia menunjuk sang Lutung. "Inilah pendampingku." Tawa Purbararang pecah, menghina pilihan adiknya. Namun, saat tawa itu mencapai puncaknya, petir menyambar di langit yang cerah.

---

**Transformasi Sang Pangeran**

Lutung Kasarung berdiri tegak. Bulu hitamnya rontok dan berganti dengan jubah ksatria yang berkilau. Tubuhnya yang bungkuk berubah menjadi sosok pemuda yang sangat tampan dengan wibawa luar biasa. Ia adalah Sanghyang Guruminda.

"Kecantikan hati adalah cermin dari kelayakan seseorang untuk memimpin," suara Guruminda menggema. "Dan pengkhianatan adalah racun yang akan memakan tuannya sendiri."

Purbararang jatuh berlutut, menyadari kesalahannya. Purbasari, dengan kelembutan yang tidak pernah hilang, memaafkan kakaknya namun tetap mengambil alih kepemimpinan demi keadilan. Sejak saat itu, Pasir Batang dipimpin oleh seorang ratu yang kebijaksanaannya ditempa di dalam gelapnya hutan dan didampingi oleh seorang pangeran yang turun dari langit.`,
        ]
      },

danau_toba: {
        title: 'Danau Toba',
        image: 'assets/icon/Danau Toba.jpg',
        content: [
          `**Sumpah di Tepian Langit**

Di sebuah lembah subur di tanah Batak, hiduplah seorang pria bernama Toba. Ia adalah seorang petani yang hidup dalam kesunyian, hanya ditemani oleh gemericik air sungai dan bayangan pepohonan. Baginya, kebahagiaan hanyalah sebatas hasil panen yang cukup dan ketenangan setelah seharian bekerja.

Suatu sore, saat memancing di sungai yang jernih, kail Toba ditarik oleh kekuatan yang luar biasa. Ia berhasil mengangkat seekor ikan besar dengan sisik emas yang berkilau seperti permata di bawah cahaya senja. Namun, saat ia menyentuhnya, ikan itu berubah menjadi seorang wanita yang kecantikannya tak mampu dilukiskan dengan kata-kata.

---

**Janji yang Terikat**

Wanita itu adalah makhluk surgawi yang sedang menjalani kutukan. Sebagai rasa terima kasih karena telah membebaskannya, ia bersedia menjadi istri Toba. Namun, ada satu syarat mutlak yang tidak boleh dilanggar.

"Aku akan mengabdi padamu, Toba," ucapnya dengan suara lembut. "Namun, berjanjilah untuk tidak pernah mengungkit asal-usulku sebagai seekor ikan. Jika kau melanggarnya, petaka besar akan jatuh pada kita semua."

Toba bersumpah demi langit dan bumi. Mereka hidup bahagia dan dikaruniai seorang anak laki-laki bernama Samosir. Samosir tumbuh menjadi anak yang sangat aktif, namun ia memiliki satu sifat yang sulit diubah: ia selalu merasa lapar dan tak pernah merasa cukup.

---

**Amarah yang Meluap**

Suatu hari, sang ibu meminta putranya mengantarkan bekal nasi untuk Toba yang sedang membajak di ladang yang jauh. Di tengah jalan, rasa lapar yang hebat melilit perut Samosir. Tanpa sadar, ia memakan hampir seluruh bekal tersebut dan hanya menyisakan sedikit sisa makanan.

Saat Toba menerima bungkusan tersebut, ia mendapati isinya sudah berantakan dan tinggal sisa. Rasa lelah yang menumpuk dan lapar yang mencekik membuat kesabaran Toba runtuh. "Dasar anak tidak tahu diuntung!" bentak Toba. "Kau benar-benar anak keturunan Ikan!"

Seketika, langit yang semula biru bersih berubah menjadi kelam. Kilat menyambar-nyambar dengan suara yang memekakkan telinga. Toba tersentak, menyadari bahwa kata-katanya telah menghancurkan sumpah yang ia jaga selama bertahun-tahun.

---

**Tenggelamnya Sebuah Penyesalan**

Samosir lari ketakutan menemui ibunya. Sang ibu hanya menatap langit dengan air mata yang mengalir. "Larilah ke puncak bukit tertinggi, anakku," bisiknya dengan suara bergetar.

Tak lama setelah Samosir berlari, tanah di bawah kaki Toba merekah dengan hebat. Air menyembur keluar dari dalam bumi seolah-olah seluruh samudra tumpah ke lembah itu. Hujan turun dengan sangat deras hingga tidak ada lagi batas antara langit dan bumi.

Wanita itu lenyap, kembali menjadi sosok ikan yang hilang di balik air yang terus meninggi. Toba hanya bisa berdiri terpaku saat air menenggelamkan dirinya dan seluruh desa dalam sebuah cekungan raksasa yang tak berujung.

---

**Lahirnya Sebuah Nama**

Lembah itu kini telah berubah menjadi sebuah danau yang sangat luas, yang kita kenal sebagai **Danau Toba**. Di tengah-tengahnya, terdapat sebuah pulau besar yang merupakan puncak bukit tempat Samosir menyelamatkan diri, yang kini disebut sebagai **Pulau Samosir**.

Hingga kini, kabut yang sering menutupi Danau Toba dianggap sebagai sisa-sisa kesedihan sang ibu, dan dalamnya air danau menjadi pengingat abadi bahwa kata-kata yang diucapkan dalam kemarahan bisa menciptakan lubang penyesalan yang tak pernah bisa ditutup kembali.`,
        ]
      },

tiga_babi_dan_serigala: {
        title: 'Tiga Babi dan Serigala',
        image: 'assets/icon/Tiga Babi dan Serigala.jpg',
        content: [
          `**Pilihan dan Material**

Di sebuah lembah yang hijau, tiga babi bersaudara memutuskan untuk membangun kehidupan mereka sendiri. Mereka memiliki kepribadian yang sangat berbeda, yang tercermin dari cara mereka memandang dunia dan keamanan.

Babi pertama, yang paling santai, ingin segera menyelesaikan rumahnya agar bisa kembali bermain musik. Ia mengumpulkan **jerami** kering dari ladang. Baginya, rumah hanyalah tempat berteduh sementara. Dalam hitungan jam, pondok jeraminya berdiri tegak, meski bergoyang ditiup angin sepoi-sepoi.

Babi kedua sedikit lebih rajin. Ia menggunakan **kayu** dari hutan terdekat. Ia merasa kayu cukup kuat untuk menahan hujan dan lebih kokoh dari sekadar rumput kering. Ia memaku papan demi papan dengan cepat, lalu segera bersantai di teras rumah kayunya.

Namun, babi ketiga adalah seorang pemikir. Ia menghabiskan waktu berhari-hari untuk membakar tanah menjadi **batu bata** yang keras. Ia mencampur semen, mengukur sudut tembok dengan teliti, dan membangun pondasi yang dalam. Saudara-saudaranya menertawakannya, namun babi ketiga hanya menjawab, "Di dunia ini, kekuatan lebih penting daripada kecepatan."

---

**Datangnya Sang Badai Berbulu**

Ketenangan lembah terusik ketika seekor Serigala kelaparan muncul dari balik bayang-bayang gunung. Ia bukan sekadar pemangsa, ia adalah pengintai yang cerdik. Serigala itu mendatangi rumah jerami. "Babi kecil, biarkan aku masuk!" teriaknya. "Tidak akan!" jawab babi pertama.

Serigala itu menyeringai, menghirup napas dalam-dalam, dan melepaskan embusan napas sekuat badai. Rumah jerami itu tercerai-berai dalam sekejap. Babi pertama berlari ketakutan menuju rumah kayu saudaranya.

Tak lama, Serigala sampai di rumah kayu. Sekali lagi ia berteriak, dan sekali lagi ia ditolak. Ia kembali mengumpulkan udara di paru-parunya dan meniup lebih keras. Kayu-kayu itu berderit, paku-pakunya terlepas, dan rumah itu ambruk. Kedua babi itu lari kencang menuju rumah batu bata.

---

**Benteng Terakhir**

Di dalam rumah batu bata, babi ketiga tetap tenang. Ia mengunci pintu besi dan menyalakan perapian. Serigala tiba dengan amarah yang memuncak. Ia meniup dengan seluruh tenaganya hingga wajahnya memerah, namun tembok batu itu bahkan tidak bergetar.

Serigala yang cerdik menyadari bahwa kekuatan napasnya tidak akan menembus batu. Ia melihat ke atas dan menemukan celah: cerobong asap. Ia memanjat atap dengan perlahan, bersiap memberikan kejutan. Namun, babi ketiga sudah menduga langkah itu. Di bawah cerobong asap, ia telah menyiapkan kuali besar berisi air yang mulai mendidih. Saat Serigala meluncur turun, ia justru mendarat tepat di dalam air panas.

---

**Kesimpulan di Lembah Hijau**

Dengan raungan kesakitan, Serigala itu melompat keluar dan lari menjauh dari lembah, berjanji tidak akan pernah kembali lagi.

Dua babi pertama akhirnya menyadari bahwa hiburan tidak ada artinya tanpa keamanan. Mereka belajar bahwa sesuatu yang dibangun dengan kerja keras dan kesabaran adalah satu-satunya hal yang akan tetap berdiri saat badai datang. Sejak hari itu, lembah tersebut tidak lagi memiliki rumah jerami atau kayu, melainkan tiga rumah batu bata yang kokoh dan tak tergoyahkan.`,
        ]
      },

tiga_babi_lembah_angin: {
  title: 'Tiga Babi Kecil: Ujian di Lembah Angin',
  image: 'assets/icon/Tiga Babi.jpg',
  content: [
    `**Benih Perjanjian Kegelapan**

Di sebuah padang rumput yang luas, tiga babi bersaudara—Rumi, Bayu, dan Jaka—memutuskan untuk membangun rumah mereka sendiri-sendiri. Ibu mereka berpesan, "Bangunlah tempat yang bisa menjagamu, karena musim dingin kali ini akan membawa angin yang sangat kencang."

---

**1. Rumah Cepat Rumi**

Rumi adalah babi yang sangat mencintai seni dan musik. Baginya, waktu sangat berharga untuk menciptakan lagu, bukan untuk memikul beban berat. Ia pun mengumpulkan **jerami** dari ladang sisa panen. 

"Rumah ini ringan dan hangat," pikir Rumi. Hanya dalam waktu satu sore, rumah jeraminya selesai. Rumi segera mengambil biolanya dan bernyanyi riang, menertawakan saudara-saudaranya yang masih sibuk bekerja di bawah terik matahari.

---

**2. Rumah Kayu Bayu**

Bayu sedikit lebih serius. Ia ingin rumah yang terlihat cantik namun tidak memakan waktu terlalu lama untuk dibangun. Ia mengumpulkan **ranting dan papan kayu** dari pinggir hutan. 

Meski tangannya sempat tertusuk serpihan kayu, Bayu tetap bekerja selama dua hari hingga pondok kayunya berdiri. "Ini cukup kuat untuk menahan hujan," ucap Bayu bangga. Ia pun segera bersantai di teras rumahnya sambil meminum teh, merasa sudah cukup aman.

---

**3. Rumah Kokoh Jaka**

Berbeda dengan kedua kakaknya, Jaka adalah babi yang sangat teliti. Ia menghabiskan berminggu-minggu untuk menggali pondasi yang dalam. Ia membawa **batu bata** berat satu per satu dan mencampurnya dengan semen yang kuat. 

Rumi dan Bayu sering datang mengejeknya. "Jaka, kau terlalu khawatir! Angin tidak akan sejahat itu." Namun Jaka hanya menjawab pelan, "Aku tidak membangun untuk hari ini, aku membangun untuk hari esok."

---

**Datangnya Badai Besar**

Sesuai ramalan, langit tiba-tiba berubah menjadi abu-abu pekat. Angin mulai menderu, awalnya hanya bisikan, lalu berubah menjadi raungan raksasa yang mengerikan. Inilah Badai Besar yang dibicarakan ibu mereka.

Angin itu menerjang rumah jerami Rumi. Hanya dengan satu hembusan kuat, ikat-ikatan jerami itu terlepas dan terbang ke angkasa seperti debu. Rumi yang ketakutan lari tunggang langgang menuju rumah kayu Bayu. Tak lama, badai menghantam rumah kayu. Dinding-dinding kayu itu berderit hebat. Dalam sekejap, rumah kayu itu ambruk tertiup badai. Rumi dan Bayu berlari sekuat tenaga menuju rumah batu bata Jaka.

---

**Kedamaian di Dalam Batu**

Di dalam rumah Jaka, suasana sangat tenang. Jaka menyalakan api di perapian dan memberikan selimut hangat kepada kedua kakaknya yang menggigil. Di luar, badai mengamuk seolah ingin meratakan segalanya. Angin menghantam dinding batu bata dengan kekuatan penuh, namun rumah itu tetap berdiri tegak tanpa getaran sedikit pun.

Malam itu, Rumi dan Bayu menyadari sesuatu yang penting. Kecepatan dan kenyamanan sesaat tidak ada gunanya jika tidak mampu memberikan perlindungan saat keadaan menjadi sulit. Keesokan harinya, Rumi dan Bayu meminta Jaka mengajari mereka cara menyusun batu bata, karena mereka kini mengerti bahwa rumah sejati dibangun dengan kesabaran.

**Pesan Moral:** Pekerjaan yang dilakukan dengan sungguh-sungguh dan penuh perencanaan akan memberikan hasil yang bertahan lama, sementara sesuatu yang terburu-buru akan hancur saat ujian datang.`,
  ]
},

nyi_roro_kidul: {
  title: 'Nyi Roro Kidul',
  image: 'assets/icon/Nyi Roro Kidul.jpg',
  content: [
    `**Singgasana di Balik Ombak Selatan**

Di Kerajaan Pajajaran yang agung, hiduplah seorang putri bernama Dewi Kadita. Ia adalah perwujudan sempurna dari kecantikan dan kecerdasan, sehingga sang ayah, Prabu Siliwangi, berniat menjadikannya pewaris takhta. Namun, cahaya yang terlalu terang selalu mengundang bayangan.

Para selir dan saudara tirinya, yang terbakar oleh api cemburu, bersekutu dengan seorang dukun hitam. Mereka mengirimkan kutukan jahat yang merayap di kegelapan malam.

---

**Kejatuhan Sang Dewi**

Pagi harinya, istana gempar. Kulit Dewi Kadita yang semula sehalus sutra berubah menjadi penuh borok dan mengeluarkan aroma yang sangat menyengat. Kecantikannya sirna dalam semalam, digantikan oleh pemandangan yang membuat siapa pun memalingkan wajah karena ngeri.

Di bawah tekanan fitnah bahwa ia dikutuk oleh dewa karena dosa tersembunyi, Kadita diusir dari istana. Ia berjalan tanpa arah, menembus hutan berduri dan mendaki tebing curam, sementara kakinya berdarah dan hatinya hancur berkeping-keping.

---

**Panggilan Samudra**

Langkah kakinya akhirnya terhenti di tepian tebing karang yang curam. Di bawahnya, Samudra Hindia menderu dengan ombak yang ganas. Saat ia meratapi takdirnya, sebuah suara gaib berbisik di antara deru angin, memintanya untuk terjun ke dalam pelukan air laut yang biru pekat.

Tanpa keraguan, Kadita menjatuhkan dirinya ke dalam ombak yang meledak. Keajaiban terjadi di dalam air. Alih-alih tenggelam, sentuhan air laut yang asin justru meluruhkan seluruh kutukan di tubuhnya. Kulitnya kembali bersinar, bahkan jauh lebih cantik dari sebelumnya, dengan binar hijau zamrud yang seolah menyatu dengan warna samudra.

---

**Transformasi Menjadi Penguasa**

Namun, Kadita tidak kembali ke daratan. Ia menyadari bahwa dunianya yang lama telah mati. Di dasar samudra, roh-roh halus dan penguasa laut mengakuinya sebagai pemimpin mereka. Ia membangun istana kristal di bawah palung yang terdalam dan mengenakan jubah kebesaran berwarna hijau—warna yang kini menjadi warna terlarang bagi manusia yang berani menantang ombaknya.

Sejak saat itu, ia dikenal sebagai **Nyi Roro Kidul**, Sang Ratu Laut Selatan.

---

**Legenda dan Peringatan**

Hingga hari ini, pesisir selatan Jawa tetap menjadi tempat yang penuh misteri. Orang-orang percaya bahwa sang Ratu masih bertahta di sana, menjaga keseimbangan antara dunia manusia dan dunia gaib. Ombak besar yang tiba-tiba datang sering kali dianggap sebagai cara sang Ratu memilih "pengawal" baru untuk istananya.

Cerita ini menjadi pengingat bahwa ketulusan yang disakiti bisa berubah menjadi kekuatan yang tak tertandingi, dan bahwa di balik keindahan warna hijau samudra, tersimpan kekuatan besar yang menuntut rasa hormat.`,
  ]
},

bawang_merah_putih: {
  title: 'Bawang Merah dan Bawang Putih',
  image: 'assets/icon/Bawang Merah dan Putih.jpg',
  content: [
    `**Dua Sisi dari Satu Kelopak**

Di sebuah desa yang subur, hiduplah dua gadis yang kecantikannya menjadi buah bibir, namun hati mereka bagaikan siang dan malam. **Bawang Putih** adalah gadis dengan jiwa seputih namanya; ia rajin, sabar, dan selalu tersenyum meski beban di pundaknya berat. Sebaliknya, saudara tirinya, **Bawang Merah**, adalah gadis yang tumbuh dalam kemanjaan dan dendam.

Sejak ayahnya tiada, Bawang Putih diperlakukan layaknya pelayan oleh ibu tirinya. Ia mencuci, memasak, dan membersihkan rumah dari fajar hingga senja, sementara Bawang Merah hanya bersolek di depan cermin.

---

**Kain yang Hilang dan Nenek Misterius**

Suatu pagi, saat mencuci di sungai yang arusnya sedang deras, sehelai kain kesayangan ibu tirinya hanyut terbawa air. Ketakutan akan kemarahan ibunya, Bawang Putih menyusuri sungai hingga jauh ke hulu, ke tempat di mana pepohonan tumbuh rapat dan udara terasa dingin.

Di sana, ia menemukan sebuah gubuk kecil yang dihuni oleh seorang nenek tua. Nenek itu ternyata menemukan kain tersebut. "Aku akan memberikan kain ini padamu," ucap sang nenek, "tetapi kau harus membantuku membereskan gubuk ini selama satu minggu."

Tanpa mengeluh, Bawang Putih setuju. Ia merawat nenek itu dengan tulus. Saat waktunya pulang, sang nenek mengembalikan kain itu dan menawarkan sebuah hadiah: dua buah labu, satu besar dan satu kecil. Bawang Putih yang rendah hati memilih labu yang paling kecil.

---

**Keajaiban di Dalam Kulit Labu**

Sesampainya di rumah, ibu tirinya marah besar karena ia terlambat. Namun, saat labu kecil itu dibelah, rumah mereka tiba-tiba diterangi cahaya keemasan. Dari dalam labu itu keluar tumpukan permata, emas, dan intan yang berkilauan.

Bukannya bersyukur, ibu tiri dan Bawang Merah justru merasa iri. "Jika labu sekecil itu isinya sebanyak ini, bayangkan apa yang ada di dalam labu yang besar!" seru Bawang Merah.

---

**Keserakahan yang Menghancurkan**

Esoknya, Bawang Merah sengaja menghanyutkan kain ke sungai dan berpura-pura mencari hingga ke gubuk sang nenek. Ia juga tinggal di sana selama seminggu, namun ia terus mengeluh, bekerja asal-asalan, dan membentak sang nenek.

Saat tiba waktunya pulang, Bawang Merah langsung menyambar labu yang paling besar. Ia berlari pulang dengan tawa kemenangan. Di rumah, mereka mengunci pintu dan menutup jendela agar tidak ada tetangga yang melihat. Dengan penuh nafsu, mereka membelah labu besar itu. 

Namun, bukan emas yang keluar. Dari dalam labu, merayap keluar ribuan kalajengking, ular berbisa, dan lipan raksasa. Hewan-hewan itu mengejar mereka sebagai perwujudan dari racun yang selama ini ada di dalam hati mereka sendiri.

---

**Akhir dari Sebuah Ketamakan**

Bawang Merah dan ibunya lari ketakutan, kehilangan semua harta yang baru saja mereka impikan. Sementara itu, Bawang Putih tetap hidup dalam kesederhanaan dan kedamaian. Ia menggunakan sebagian permatanya untuk membantu penduduk desa yang kesusahan.

Legenda ini mengingatkan kita: bahwa tangan yang memberi dengan tulus akan menerima keajaiban, sementara tangan yang merampas dengan tamak hanya akan menggenggam kehancuran.`,
  ]
},

si_kancil_yang_cerdik: {
  title: 'Si Kancil yang Cerdik',
  image: 'assets/icon/Si Kancil yang Cerdik.jpg',
  content: [
    `**Langkah Kecil di Tepi Sungai**

Di jantung hutan yang rimbun, tempat sinar matahari hanya mampu mengintip melalui celah daun raksasa, hiduplah seekor kancil bertubuh mungil. Namanya sering disebut dalam bisikan penghuni hutan sebagai makhluk yang mampu lolos dari maut hanya dengan modal kata-kata.

Suatu siang, perut si Kancil berbunyi nyaring. Di seberang sungai yang arusnya menderu, ia melihat pohon apel hutan yang buahnya merona merah. Namun, ada satu masalah besar: sungai itu adalah wilayah kekuasaan para buaya yang lapar dan tak kenal ampun.

---

**Gebrakan Sang Pemikir**

Kancil mendekat ke tepian. Ia melihat sepasang mata dingin muncul dari balik permukaan air. Itu adalah pemimpin buaya, seekor predator dengan kulit sekeras batu dan deretan gigi setajam silet.

"Wahai Kancil," suara buaya itu berat dan serak. "Apakah kau menyerahkan dirimu untuk makan siang kami hari ini?"

Bukannya gemetar, Kancil justru berdiri tegak dan memasang wajah yang sangat serius. "Oh, Buaya yang perkasa! Aku datang membawa pesan penting dari Sang Raja Hutan. Beliau akan mengadakan pesta besar malam ini dan ingin menghitung berapa banyak buaya di sungai ini agar jumlah daging yang dibagikan tidak kurang."

---

**Trik Hitungan**

Mendengar kata 'daging' dan 'pesta', keserakahan buaya mulai bekerja. Mereka tidak lagi melihat Kancil sebagai camilan kecil, melainkan sebagai pembawa kabar gembira.

"Benarkah itu?" tanya pemimpin buaya penuh harap.

"Tentu saja! Tapi bagaimana aku bisa menghitung kalian jika kalian terus bersembunyi di dalam air yang keruh?" jawab Kancil tenang. "Berbarislah dari tepi sini sampai ke seberang sana. Aku akan melompat di atas punggung kalian satu per satu untuk menghitung jumlah pastinya."

Tanpa pikir panjang, pemimpin buaya memanggil seluruh kawanannya. Belasan buaya besar berbaris rapi, menciptakan jembatan sisik yang kokoh membelah sungai.

---

**Lompatan Kebebasan**

Kancil pun mulai melompat. "Satu!" teriaknya saat mendarat di kepala buaya pertama. "Dua!" ia berpindah ke punggung berikutnya. "Tiga... empat..." 

Kancil terus melompat dengan lincah, sementara para buaya tetap diam, membayangkan tumpukan daging yang dijanjikan Sang Raja. Hingga akhirnya, dengan satu lompatan besar yang terakhir, kaki kecil Kancil mendarat di rerumputan hijau di seberang sungai. Ia segera berlari menuju pohon apel yang ranum itu.

---

**Kejujuran di Balik Tawa**

Kancil berbalik dan melambai ke arah para buaya yang masih berbaris. "Terima kasih, wahai sahabat-sahabatku yang baik! Hitungannya sudah selesai. Ternyata kalian cukup banyak untuk membuat jembatan yang sangat kuat bagi aku lewat!"

"Lalu mana dagingnya?" teriak buaya-buaya itu mulai merasa curiga.

"Dagingnya? Ah, sepertinya Sang Raja masih mencarinya. Mungkin kalian harus menunggu sedikit lebih lama lagi!" sahut Kancil sambil menggigit apelnya yang manis.

Para buaya menggeram marah, menyadari bahwa mereka baru saja ditipu oleh makhluk yang beratnya bahkan tidak sebanding dengan satu kaki mereka. Namun Kancil sudah jauh menghilang, meninggalkan sebuah pelajaran abadi: bahwa kekuatan otot akan selalu kalah oleh ketajaman pikiran.`,
  ]
},

batu_menangis: {
  title: 'Batu Menangis',
  image: 'assets/icon/Batu Menangis.jpg',
  content: [
    `**Kutukan di Puncak Bukit Kesunyian**

Di sebuah lereng bukit yang jauh dari hiruk-pikuk pasar, hiduplah seorang janda tua bersama putri tunggalnya, **Darma**. Darma memiliki paras yang sangat jelita; kulitnya sehalus sutra dan rambutnya hitam legam bak sayap gagak. Namun, keindahan wajahnya tidak selaras dengan hatinya. Ia adalah gadis yang memuja dirinya sendiri dan memandang rendah ibunya yang kulitnya mulai keriput dimakan usia dan kerja keras.

---

**Perjalanan Menuju Lembah**

Suatu hari, persediaan bahan makanan di gubuk mereka habis. Sang ibu mengajak Darma turun ke desa untuk berbelanja. Darma awalnya menolak karena takut matahari merusak kulitnya, namun ia akhirnya setuju dengan satu syarat yang sangat melukai hati ibunya.

"Aku akan ikut," ucap Darma sambil mematut diri di depan cermin, "tapi Ibu harus berjalan sepuluh langkah di belakangku. Aku tidak ingin orang-orang desa mengira aku memiliki hubungan dengan wanita lusuh sepertimu."

Dengan air mata yang ditahan, sang ibu mengangguk pelan. Darma berjalan di depan dengan gaun indahnya, sementara ibunya berjalan tertatih di belakang sambil memanggul keranjang kosong.

---

**Keangkuhan di Tengah Keramaian**

Saat mereka memasuki area pasar, perhatian orang-orang tertuju pada sosok Darma yang bersinar. Beberapa pemuda mendekat dan bertanya dengan penuh kekaguman. "Wahai gadis cantik, siapakah wanita tua di belakangmu itu? Apakah dia ibumu?"

Darma mengangkat dagunya tinggi-tinggi. Dengan nada dingin ia menjawab, "Dia? Bukan, dia adalah budak yang baru kubeli untuk membawakan barang-belanjaanku."

Mendengar itu, sang ibu terdiam. Dadanya sesak. Hal ini terulang berkali-kali sepanjang jalan. Setiap kali orang bertanya, Darma selalu menjawab bahwa ibunya adalah pelayan, budak, atau orang asing yang mengikutinya.

---

**Titik Didih Sang Ibu**

Puncaknya terjadi saat mereka dalam perjalanan pulang mendaki bukit. Darma kembali membentak ibunya karena berjalan terlalu lambat. "Cepat sedikit, Pelayan! Kau membuat perjalananku menjadi tidak nyaman!"

Pada saat itulah, kesabaran sang ibu runtuh. Ia menjatuhkan keranjangnya ke tanah dan mengangkat tangannya ke langit. "Ya Tuhan yang Maha Adil," bisiknya dengan suara bergetar. "Jika kecantikan wajahnya telah menutup pintu hatinya untuk menghormati rahim yang melahirkannya, maka biarlah tubuhnya menjadi sekeras hatinya."

---

**Perubahan yang Tak Terelakkan**

Seketika, langit yang semula cerah berubah menjadi kelam. Darma tiba-tiba menjerit ketakutan saat merasakan kakinya terasa sangat berat dan dingin. Ia menunduk dan melihat kulit kakinya berubah warna menjadi abu-abu kusam dan mengeras.

"Ibu! Apa yang terjadi dengan kakiku?" teriaknya panik. Perlahan tapi pasti, rasa kaku itu merambat naik ke pinggang, lalu ke dada. Darma sadar bahwa kutukan sedang bekerja. Ia mencoba memeluk kaki ibunya, namun kakinya sudah menjadi batu yang menyatu dengan bumi.

---

**Keabadian dalam Penyesalan**

Dalam detik-detik terakhir sebelum mulutnya membatu, Darma menangis sejadi-jadinya. "Ibu, maafkan aku! Tolong hentikan ini! Aku mengaku salah, aku adalah anakmu!" Namun, doa seorang ibu yang teraniaya telah dikabulkan. 

Seluruh tubuh Darma akhirnya menjadi sebuah patung batu yang berdiri tegak di lereng bukit. Meskipun ia telah menjadi batu padat, air mata penyesalan terus mengalir dari matanya, membasahi pipi batunya hingga jatuh ke tanah. Penduduk setempat menyebutnya **Batu Menangis**, sebuah monumen bisu tentang betapa tajamnya lisan seorang anak dan betapa saktinya air mata seorang ibu.`,
  ]
},

angsa_bertelur_emas: {
  title: 'Angsa Bertelur Emas',
  image: 'assets/icon/Angsa Bertelur Emas.jpg',
  content: [
    `**Kilau yang Membutakan Mata**

Di sebuah gubuk kecil di pinggir desa, hiduplah seorang petani bernama Darma. Hidupnya penuh dengan kekurangan; setiap hari ia harus memeras keringat hanya untuk sesuap nasi. Namun, nasibnya berubah dalam satu malam ketika ia menemukan seekor angsa putih yang tersesat di kandang belakang rumahnya.

Pagi harinya, saat hendak memberi makan, Darma terbelalak. Di bawah sayap angsa itu, tergeletak sebuah telur yang sangat berat dan bersinar kuning cemerlang. Itu adalah emas murni.

---

**Perubahan Nasib**

Awalnya, Darma sangat bersyukur. Ia menjual telur itu ke kota, memperbaiki rumahnya, dan membeli pakaian yang layak. Hari demi hari, angsa itu selalu memberikan satu telur emas setiap pagi. Darma tidak lagi kelaparan, bahkan ia mulai dikenal sebagai orang terkaya di desanya.

Namun, seiring bertambahnya harta, tumbuh pula benih kegelisahan di dalam hatinya. Rasa syukur yang dulu ia miliki perlahan digantikan oleh rasa tidak sabar. "Kenapa aku harus menunggu sampai besok untuk satu telur lagi?" gumam Darma. "Di dalam perut angsa itu pasti tersimpan bongkahan emas yang sangat besar. Jika aku mengambil semuanya sekarang, aku tidak perlu lagi menunggunya."

---

**Keputusan di Ujung Pisau**

Keserakahan telah membutakan logika Darma. Ia membayangkan sebuah gunung emas yang tersembunyi di dalam tubuh hewan ajaib itu. Dengan tangan yang gemetar karena nafsu, ia mengambil sebuah pisau tajam dan membawa angsa itu ke belakang rumah.

Tanpa ragu, ia menyembelih angsa yang selama ini telah menyelamatkan hidupnya. Ia membelah perut angsa itu dengan harapan melihat kilauan yang melimpah. Namun, yang ia temukan hanyalah pemandangan yang menghancurkan hatinya. Di dalam perut angsa itu tidak ada emas; organ dalamnya persis seperti angsa biasa lainnya.

---

**Kesunyian di Pagi Hari**

Darma terduduk lemas di tanah. Ia menatap tubuh angsa yang sudah tak bernyawa di depannya. Kesadarannya terlambat datang. Ia menyadari bahwa dengan mencoba mendapatkan segalanya sekaligus, ia justru telah menghancurkan satu-satunya sumber keberuntungannya.

Keesokan paginya, matahari terbit seperti biasa, namun tidak ada lagi kilauan emas di kandangnya. Darma kembali menjadi pria yang malang, namun kali ini dengan beban penyesalan yang jauh lebih berat daripada kemiskinan.

**Pesan Moral:** Ketamakan sering kali membuat kita kehilangan apa yang sudah kita miliki. Mereka yang tidak pernah merasa cukup, pada akhirnya akan kehilangan sumber kebahagiaan yang sebenarnya sudah ada di tangan mereka.`,
  ]
},

kera_dan_kurakura: {
  title: 'Kera dan Kura-kura',
  image: 'assets/icon/Kera dan Kura-Kura.jpg',
  content: [
    `**Tunas Harapan di Pinggir Hutan**

Di sebuah hutan yang subur, hiduplah sepasang sahabat yang memiliki sifat sangat bertolak belakang: Kera yang lincah namun malas, dan Kura-kura yang lambat namun sangat penyabar.

Suatu hari, mereka menemukan sebuah pohon pisang yang hanyut di sungai. Kera yang ingin cepat menikmati hasil menggunakan akal liciknya. "Aku ambil bagian atasnya saja!" seru Kera. "Lihat, bagian atas ini sudah ada daunnya. Pasti sebentar lagi berbuah. Kau ambil saja bagian bawah yang hanya berupa batang dan akar itu."

Kura-kura hanya mengangguk setuju. Ia membawa bagian bawah pohon itu dengan susah payah, lalu menanamnya di tanah yang gembur dengan penuh kasih sayang.

---

**Hasil dari Sebuah Ketekunan**

Beberapa minggu berlalu. Pohon pisang bagian atas milik Kera segera layu dan membusuk karena tidak memiliki akar. Kera hanya bisa meratapinya sambil bermalas-malasan.

Sebaliknya, batang bawah milik Kura-kura mulai menumbuhkan tunas hijau yang segar. Setiap hari, Kura-kura menyiramnya dan memberinya pupuk. Hingga akhirnya, pohon itu tumbuh besar dan menghasilkan setandan pisang mas yang kuning ranum dan sangat harum.

---

**Pengkhianatan di Atas Pohon**

Masalah muncul saat pisang itu matang. Kura-kura yang bertubuh pendek tidak bisa memanjat pohonnya sendiri. Melihat hal itu, Kera datang dengan niat jahat. "Sahabatku, biarlah aku yang memanjat dan memetikkan pisang itu untukmu," tawar Kera.

Kura-kura mempersilakan Kera naik. Namun, begitu sampai di atas, Kera justru duduk dengan santai dan mulai memakan pisang-pisang itu satu per satu. "Hmm, manis sekali!" teriak Kera sambil membuang kulit pisangnya ke arah Kura-kura. "Kera, tolong berikan sedikit untukku! Itu kan pohonku!" seru Kura-kura sedih. Namun Kera malah tertawa dan menghabiskan semuanya.

---

**Pelajaran bagi Sang Pengkhianat**

Kura-kura merasa sangat kecewa. Dengan sisa tenaganya, ia mengumpulkan duri-duri tajam dan ranting kering, lalu menumpuknya di sekeliling pangkal pohon pisang tersebut.

Saat Kera sudah kekenyangan dan hendak turun, ia terkejut melihat tanah di bawahnya sudah penuh dengan duri. Karena perutnya yang terlalu buncit, ia kehilangan keseimbangan saat mencoba melompat. "Aduh! Sakit!" Kera terjatuh tepat di atas tumpukan duri tersebut. Ia merintih kesakitan sementara Kura-kura berjalan menjauh dengan tenang.

---

**Akhir dari Persahabatan yang Palsu**

Kera akhirnya menyadari bahwa kelicikannya tidak hanya menghancurkan persahabatannya, tetapi juga membawa celaka bagi dirinya sendiri. Ia belajar bahwa memanen hasil dari kerja keras orang lain hanya akan mendatangkan penderitaan.

Sementara itu, Kura-kura terus hidup dengan tenang, tahu bahwa meskipun langkahnya lambat, kejujuran dan ketekunan akan selalu membawanya pada hasil yang manis.

**Pesan Moral:** Jangan pernah mengkhianati kepercayaan teman demi keuntungan pribadi. Kerja keras dan kesabaran akan selalu membuahkan hasil, sedangkan kelicikan hanya akan menipu diri sendiri.`,
  ]
},
beruang_dan_lebah: {
  title: 'Beruang dan Lebah',
  image: 'assets/icon/Beruang dan Lebah.jpg',
  content: [
    `**Gema di Hutan Tua**

Di jantung hutan yang jarang terjamah manusia, hiduplah seekor beruang besar bernama Bruno. Tubuhnya sekuat batang pohon jati, namun ia memiliki satu kelemahan yang sering kali menguasai akal sehatnya: rasa lapar yang tidak sabaran dan amarah yang meledak-ledak.

Suatu sore yang terik, Bruno mencium bau manis yang sangat menyengat. Ia mengikuti aroma itu hingga sampai ke sebuah pohon tumbang yang di dalamnya terdapat sarang lebah yang sangat besar.

---

**Keangkuhan Sang Penguasa Hutan**

Bruno mendekat dengan liur yang menetes. Ia melihat beberapa ekor lebah pekerja sedang sibuk masuk dan keluar dari lubang kayu. Tanpa sopan santun, Bruno mulai mengendus-endus kasar, membuat seluruh koloni di dalam sarang merasa terancam.

Seekor lebah kecil terbang keluar dan hinggap di hidung Bruno. "Tuan Beruang," ucap lebah itu, "kami bekerja keras mengumpulkan madu ini. Jika kau ingin sedikit, tunggulah sampai kami selesai, jangan rusak rumah kami." Bukannya mendengarkan, Bruno justru merasa terhina. Dengan sekali kibasan cakar, ia mencoba menghancurkan lebah itu, namun si lebah berhasil menghindar dan justru menyengat ujung hidungnya.

---

**Amarah yang Membutakan**

Rasa sakit yang tajam seperti tusukan jarum api menjalar di wajah Bruno. Seketika, ia kehilangan kendali. Alih-alih pergi, Bruno justru meraung keras dan menyerang sarang itu dengan membabi buta.

Ia mencakar dan menghancurkan kayu pohon tumbang itu menjadi serpihan. Ia ingin membalas dendam pada satu lebah tadi dengan menghancurkan seluruh generasinya. Namun, ia lupa satu hal: di dalam sarang itu ada ribuan lebah yang siap mati demi ratu mereka.

---

**Badai Sayap dan Jarum**

Dalam hitungan detik, langit di sekitar Bruno berubah menjadi hitam. Ribuan lebah keluar seperti awan badai yang mendidih. Bunyi dengungannya begitu keras hingga menulikan telinga.

Bruno mencoba melawan, namun cakarnya yang besar tidak mampu menangkap ribuan musuh kecil itu. Sengatan demi sengatan mendarat di telinga, kelopak mata, dan seluruh tubuhnya. Beruang yang tadinya perkasa, kini meraung kesakitan dan berlari tanpa arah. Satu-satunya cara untuk selamat adalah dengan melompat ke dalam sungai yang dingin.

---

**Pelajaran di Bawah Air**

Sambil menahan napas di dalam air, Bruno akhirnya menyadari kesalahannya. Hanya karena satu sengatan kecil, ia telah memancing kemarahan seluruh pasukan. Ia kehilangan madu yang ia inginkan, dan kini justru mendapatkan tubuh yang bengkak.

Ia belajar bahwa membalas satu luka kecil dengan amarah yang besar hanya akan mengundang luka yang jauh lebih dalam. Sejak hari itu, Bruno tidak pernah lagi mengusik rumah siapa pun di hutan, karena ia tahu bahwa yang paling kecil sekalipun bisa menjadi yang paling mematikan jika terusik kedamaiannya.`,
  ]
},
singa_dan_tikus: {
  title: 'Singa dan Tikus',
  image: 'assets/icon/Singa dan Tikus.jpg',
  content: [
    `**Hutang Nyawa di Rimba Raya**

Di bawah naungan pohon raksasa yang menaungi hutan belantara, hiduplah seorang raja tanpa mahkota namun dengan wibawa yang menggetarkan bumi. Ia adalah **Leo**, sang singa penguasa. Suatu siang, setelah lelah berburu, Leo tertidur lelap dengan sangat tenang.

Tanpa sengaja, seekor tikus kecil bernama **Miko** yang sedang mencari biji-bijian tersesat ke atas tubuh sang raja. Miko berlari melewati hidung besar Leo, membuat sang singa terbangun karena merasa gatal.

---

**Ampunan Sang Penguasa**

Dengan satu gerakan kilat, cakar besar Leo menangkap ekor Miko. Leo mengaum rendah, "Beraninya kau mengusik tidurku, makhluk kecil? Kau tidak lebih besar dari gigiku, dan sekarang kau akan menjadi camilan penutupku!"

Miko gemetar hebat, namun ia memberanikan diri untuk bicara. "Ampun, Baginda Raja! Jika Anda melepaskan saya, saya berjanji suatu hari nanti saya akan membalas budi baik Anda. Nyawa saya terlalu kecil untuk mengenyangkan perut Anda yang mulia." Leo tertawa terbahak-bahak mendengar hal itu. Karena suasana hatinya sedang membaik, Leo melepaskan cengkeramannya. "Pergilah sebelum aku berubah pikiran."

---

**Jaring yang Tak Terlihat**

Beberapa minggu kemudian, para pemburu memasang jaring tali tambang yang sangat kuat di jalur patroli Leo. Saat sedang berjalan, Leo terjerat. Semakin ia meronta, semakin kuat tali itu melilit tubuhnya yang berotot. 

Sang raja hutan yang perkasa kini tak berdaya. Ia hanya bisa mengaum dalam keputusasaan, menunggu fajar tiba saat para pemburu akan datang menjemputnya.

---

**Pahlawan dari Lubang Tanah**

Miko mengenali suara auman itu sebagai jeritan minta tolong. Tanpa ragu, tikus kecil itu berlari menuju arah suara. Ia menemukan Leo yang sudah lemas terbungkus jaring. "Jangan takut, Baginda! Saya datang untuk menepati janji saya," bisik Miko.

Dengan giginya yang kecil namun setajam silet, Miko mulai menggerogoti tali tambang yang tebal itu satu per satu. Ia bekerja tanpa henti sepanjang malam. Sebelum matahari terbit, tali utama berhasil putus, dan Leo pun bebas.

---

**Persahabatan Dua Dunia**

Leo berdiri di depan Miko dan menundukkan kepalanya yang besar sebagai tanda hormat. Ia menyadari betapa kelirunya ia selama ini karena telah meremehkan Miko.

"Maafkan kesombonganku, Miko," ucap Leo dengan tulus. "Aku belajar hari ini bahwa kekuatan tidak selalu diukur dari ukuran tubuh, dan kebaikan yang paling kecil sekalipun bisa menyelamatkan nyawa yang paling besar." Sejak hari itu, sang raja hutan dan tikus kecil itu menjadi sahabat karib yang tak terpisahkan.

**Pesan Moral:** Jangan pernah meremehkan orang lain hanya karena penampilan atau ukuran mereka. Kebaikan yang kita tanam hari ini akan kembali kepada kita di saat yang paling tidak terduga.`,
  ]
},
kancil_dan_siput: {
  title: 'Kancil dan Siput',
  image: 'assets/icon/Kancil dan Siput.jpg',
  content: [
    `**Adu Cepat di Tepian Rawa**

Di sebuah hutan yang teduh, Kancil sedang berjalan dengan langkah angkuh. Ia baru saja lolos dari kejaran harimau dan merasa bahwa dirinya adalah makhluk tercepat sekaligus tercerdas di kolong langit. Siapa pun yang ia temui di jalan, selalu ia tantang untuk beradu lari, hanya demi memuaskan egonya.

Hingga suatu pagi, ia sampai di tepian rawa dan melihat Siput yang sedang merayap pelan di atas daun talas. "Hei, Siput pelan!" ejek Kancil sambil tertawa. "Bagaimana kalau kita lomba lari besok pagi? Aku ingin melihat apakah cangkangmu itu akan copot karena mencoba mengejarku."

Siput, dengan ketenangan yang luar biasa, mendongak. "Baiklah, Kancil. Aku terima tantanganmu. Mari kita berlomba di sepanjang tepian rawa ini besok saat matahari terbit."

---

**Strategi di Balik Lumpur**

Setelah Kancil pergi dengan tawa kemenangan, Siput tidak panik. Ia segera memanggil seluruh keluarga dan teman-temannya yang jumlahnya ratusan di sepanjang rawa.

"Saudara-saudaraku," ucap Siput. "Besok Kancil ingin pamer kecepatan. Kita harus bekerja sama. Berbarislah kalian di balik setiap akar pohon dan bongkahan batu di sepanjang jalur lomba. Setiap kali Kancil memanggil namaku, siput yang berada paling depan darinya harus menjawab 'Aku di sini!'"

Semua siput setuju. Mereka mengerti bahwa ini bukan hanya soal lomba lari, tapi soal harga diri penghuni rawa.

---

**Lomba yang Melelahkan**

Keesokan harinya, Kancil datang dengan gaya seorang juara. "Siap kalah, Siput?" aba-aba dimulai, dan Kancil melesat seperti anak panah. Setelah berlari cukup jauh, ia berhenti sejenak dan menoleh ke belakang sambil berteriak sombong, "Siput! Di mana kau?"

Tiba-tiba, dari balik sebuah akar pohon di depan Kancil, terdengar suara pelan, "Aku di sini, Kancil. Kenapa kau lambat sekali?"

Kancil terkejut. Ia segera memacu kakinya lebih kencang lagi. Setelah berlari lebih jauh, ia kembali memanggil, "Siput! Masih di belakang, kan?" Lagi-lagi, dari balik batu di depan jalurnya, suara itu terdengar lagi, "Aku di sini, Kancil. Aku sudah menunggumu dari tadi."

---

**Tumbangnya Sang Pelari**

Kancil mulai panik. Ia tidak mengerti bagaimana makhluk selambat siput bisa selalu berada di depannya. Ia terus berlari hingga napasnya tersengal-sengal dan kakinya terasa lemas. Namun, setiap kali ia memanggil, jawaban selalu muncul dari arah depan. 

Hingga akhirnya, beberapa meter sebelum garis finis, Kancil jatuh tersungkur karena kelelahan yang luar biasa. Paru-parunya terasa terbakar, dan ia tidak sanggup lagi berdiri. Siput yang berada di garis finis hanya tersenyum kecil. "Kau tampak lelah, Kancil. Apakah kau butuh waktu seribu tahun lagi untuk sampai ke sini?"

---

**Pelajaran di Bawah Matahari**

Kancil menundukkan kepalanya, merasa sangat malu. Ia menyadari bahwa selama ini ia terlalu meremehkan orang lain hanya karena ia merasa memiliki kelebihan fisik. "Aku menyerah, Siput," bisik Kancil. "Kau memang lebih hebat dariku."

Kancil tidak pernah tahu tentang ratusan siput yang membantunya di sepanjang jalan. Namun, ia pulang dengan sebuah pelajaran berharga: Bahwa kesombongan akan selalu menemukan tandingannya, dan kecerdikan sejati bukan digunakan untuk merendahkan sesama, melainkan untuk mengatasi tantangan yang mustahil.

**Pesan Moral:** Jangan pernah memandang rendah orang lain hanya berdasarkan penampilan luarnya. Kekuatan besar sering kali kalah oleh kerja sama yang solid dan strategi yang matang.`,
  ]
},
pinokio: {
  title: 'Pinokio',
  image: 'assets/icon/Pinokio.jpg',
  content: [
    `**Detak Jantung dari Kayu Pinus**

Di sebuah bengkel kayu yang beraroma serutan kayu dan oli, hidup sepasang tangan tua milik Geppetto. Ia adalah seorang pemahat yang kesepian, yang menghabiskan malam-malamnya berbicara pada benda mati. Suatu malam, dari sepotong kayu pinus yang tersisa, ia mengukir sebuah boneka laki-laki.

"Aku akan memanggilmu Pinokio," bisiknya. "Andai saja kau punya detak jantung, aku takkan pernah merasa sendiri lagi." Keajaiban datang dalam bentuk cahaya biru yang lembut. Seorang peri muncul dan meniupkan napas kehidupan ke dalam kayu itu. Namun, sang peri berpesan: "Kau bisa menjadi anak laki-laki sejati, asalkan kau belajar tentang keberanian, kejujuran, dan tidak mementingkan diri sendiri."

---

**Dunia yang Penuh Warna dan Tipu Daya**

Geppetto sangat bahagia. Ia bahkan menjual satu-satunya mantel hangatnya untuk membelikan Pinokio buku sekolah. Namun, dunia di luar bengkel kayu itu jauh lebih rumit daripada yang Pinokio bayangkan.

Dalam perjalanannya menuju sekolah, Pinokio bertemu dengan seekor rubah licik dan kucing yang berpura-pura buta. Mereka menawarkan janji tentang "Pulau Kesenangan" di mana anak-anak bisa bermain selamanya tanpa harus belajar. Setiap kali Pinokio mencoba berbohong untuk menutupi rasa bersalahnya, sesuatu yang aneh terjadi. Hidung kayunya mulai memanjang, tumbuh seperti dahan pohon yang baru bersemi. Setiap kebohongan adalah beban yang harus ia pikul di wajahnya sendiri.

---

**Pelajaran di Perut Samudra**

Kesalahan demi kesalahan membawa Pinokio jauh dari rumah. Ia terjebak dalam pertunjukan sirkus hingga akhirnya ia terombang-ambing di laut lepas. Di sana, ia ditelan oleh seekor paus raksasa yang mulutnya selebar gua.

Di dalam perut paus yang gelap, Pinokio menemukan sebuah kejutan yang menghancurkan hatinya. Di sana, duduk lemas di atas perahu kayu yang hancur, adalah Geppetto. Orang tua itu telah mengarungi lautan demi mencari putranya yang hilang. Melihat ayahnya yang lemah, sesuatu dalam diri Pinokio berubah. Dengan kecerdikannya, ia membakar sisa-sisa kayu di perut paus untuk menciptakan asap tebal, memaksa sang raksasa itu bersin dan melontarkan mereka kembali ke laut.

---

**Lahirnya Manusia Sejati**

Pinokio berenang sekuat tenaga sambil memapah Geppetto yang sudah tidak berdaya. Ia melawan arus hingga akhirnya mereka terdampar di pantai. Pinokio jatuh pingsan karena kelelahan, seluruh tubuh kayunya retak karena benturan karang.

Saat ia terbangun, ia tidak lagi merasakan kulit yang keras dan kaku. Ia merasakan hangatnya darah yang mengalir dan detak jantung yang nyata di balik dadanya. Sang peri kembali muncul dan berbisik, "Hari ini kau bukan lagi boneka yang digerakkan oleh benang takdir. Kau telah membuktikan bahwa kemanusiaan adalah tentang seberapa besar pengorbanan yang mampu kauberikan untuk orang yang kaucintai." Pinokio pun memeluk Geppetto sebagai seorang putra dengan pelukan yang paling hangat.

**Pesan Moral:** Integritas dan kejujuran adalah hal yang membentuk karakter kita. Menjadi "nyata" berarti memiliki keberanian untuk bertanggung jawab atas pilihan yang kita ambil.`,
  ]
},
joko_kendil: {
  title: 'Joko Kendil',
  image: 'assets/icon/Joko Kendil.jpg',
  content: [
    `**Takdir di Balik Tanah Liat**

Di sebuah desa yang tenang di kaki gunung, hiduplah seorang wanita tua yang menghabiskan hari-harinya dengan doa. Ia akhirnya dikaruniai seorang putra, namun bayi itu lahir dengan fisik yang tidak biasa; tubuhnya bulat dan pendek, tampak persis seperti **kendil** (periuk nasi dari tanah liat). Karena itulah, ia diberi nama Joko Kendil.

Meski penampilannya sering menjadi bahan bisikan, Joko Kendil tumbuh dengan jiwa yang seluas samudra. Ia adalah pemuda yang sangat cerdas, rajin membantu ibunya, dan memiliki tutur kata yang sangat bijaksana.

---

**Panggilan dari Balik Gerbang Istana**

Suatu malam, Joko Kendil berkata kepada ibunya, "Ibu, sampaikanlah niatku kepada Raja. Aku ingin meminang salah satu dari ketiga putrinya." Ibunya terperanjat, "Anakku, sadarlah. Ibu takut Raja akan tersinggung."

Namun, Joko Kendil meyakinkan ibunya dengan ketenangan yang luar biasa. "Kecantikan adalah kulit, Ibu, tapi martabat ada pada janji. Biarlah takdir yang menuntun langkah kita."

---

**Ujian Sang Raja**

Raja memanggil ketiga putrinya: Dewi Melati, Dewi Mawar, dan si bungsu Dewi Sedap Malam. Dua putri tertua langsung tertawa menghina saat melihat Joko Kendil. "Bagaimana mungkin aku menikah dengan tempat nasi?" ejek mereka.

Namun, Dewi Sedap Malam melihat sesuatu yang berbeda di mata Joko Kendil. "Ayah," ucapnya lembut, "aku menerima pinangan ini. Sebab sebuah wadah tidak menentukan rasa dari apa yang ada di dalamnya."

---

**Rahasia di Malam Pesta**

Suatu malam saat kerajaan mengadakan pesta ketangkasan, seorang ksatria tampan dengan kuda putih muncul dan memenangkan semua perlombaan. Dewi Melati dan Dewi Mawar mengejek adiknya, "Lihatlah, Sedap Malam, suamimu yang bulat itu pasti sedang tidur, sementara pria gagah ini menguasai dunia!"

Dewi Sedap Malam hanya diam. Ia kembali ke kamarnya dan mendapati sebuah kendil kosong yang tergeletak di lantai, sementara suaminya tidak ada. Karena curiga, ia mengambil kendil itu dan membantingnya hingga hancur menjadi kepingan tanah.

---

**Pecahnya Kutukan**

Seketika, ksatria tampan tadi muncul di hadapan Dewi Sedap Malam. Ternyata, Joko Kendil adalah seorang pangeran yang sedang menjalani hukuman. Kutukannya hanya bisa luruh jika ada seorang wanita yang tulus mencintainya tanpa peduli pada bentuk fisiknya.

Sejak saat itu, Joko Kendil hidup dengan wujud aslinya yang gagah. Dewi Melati dan Dewi Mawar tertunduk malu karena telah menilai seseorang hanya dari bungkusnya, sementara Dewi Sedap Malam dan Joko Kendil memimpin kerajaan dengan penuh kebijaksanaan.`,
  ]
},
rawa_pening: {
  title: 'Rawa Pening',
  image: 'assets/icon/Rawa Pening.jpg',
  content: [
    `**Lidi dan Air Mata: Legenda Baru Klinthing**

Di sebuah lembah di bawah naungan Gunung Merbabu, terdapat sebuah desa bernama Pathok. Penduduknya hidup dalam kelimpahan, namun kekayaan telah membutakan mata hati mereka. Mereka tumbuh menjadi orang-orang yang hanya memuja kemegahan dan membenci kemiskinan.

Suatu hari, muncul seorang anak laki-laki kecil bernama **Baru Klinthing**. Tubuhnya kurus kering, pakaiannya compang-camping, dan kulitnya penuh dengan luka—sisa dari pertapaan panjangnya sebagai naga yang sedang mencari jati diri manusia.

---

**Pesta yang Dingin**

Baru Klinthing tiba di desa Pathok saat warga sedang merayakan pesta panen besar-besaran. Dengan perut yang sangat lapar, anak itu mendekat. "Tuan, bolehkah saya meminta sedikit sisa makanan?" pintanya dengan suara parau.

Bukannya makanan yang didapat, ia justru dihujat. "Pergi kau, pengemis kotor!" teriak seorang warga sambil mendorongnya. Tidak ada satu pun warga desa yang sudi membantu, hingga ia sampai di sebuah gubuk reyot milik **Nyai Latung**. Meski miskin, janda tua itu menyambutnya dengan hangat dan memberikan satu-satunya piring nasi yang ia miliki.

---

**Tantangan di Tengah Alun-Alun**

Sebelum pergi, Baru Klinthing berbisik kepada Nyai Latung, "Nenek, jika kau mendengar suara gemuruh yang hebat, segera siapkan lesung dan naiklah ke atasnya."

Baru Klinthing kembali ke tengah pesta. Ia menancapkan sebatang **lidi** kecil di tanah. "Kalian semua merasa kuat karena kekayaan kalian," teriaknya lantang. "Siapa pun yang bisa mencabut lidi ini, aku akan pergi." Para pria kekar tertawa remeh, namun satu per satu mereka gagal. Lidi itu seolah menyatu dengan jantung bumi.

---

**Amukan dari Dalam Bumi**

Baru Klinthing mendekat dan mencabut lidi itu hanya dengan satu jari. Seketika, dari lubang bekas lidi tersebut, muncul semburan air yang sangat deras. Bumi bergetar hebat. Aliran air itu tak terbendung seolah-olah samudra di bawah tanah telah pecah.

Dalam sekejap, musik pesta berubah menjadi jeritan ketakutan. Desa Pathok yang sombong itu perlahan-lahan tenggelam, menghilang ditelan banjir bandang yang muncul dari kesombongan mereka sendiri.

---

**Lahirnya Telaga Bening**

Hanya Nyai Latung yang selamat, duduk di atas lesung kayunya yang mengapung seperti perahu. Lembah yang tadinya kering kini telah berubah menjadi sebuah danau luas yang tenang namun sangat dalam.

Danau itu kini dikenal sebagai **Rawa Pening**—tempat di mana air yang bening menjadi cermin bagi siapa pun yang melihatnya. Legenda ini tetap hidup sebagai peringatan: bahwa setinggi apa pun kedudukan kita, satu lidi kecil bisa menghancurkan segalanya jika hati kita telah membatu dan lupa akan rasa kemanusiaan.

**Pesan Moral:** Kemanusiaan dan kebaikan hati jauh lebih berharga daripada kekayaan materi. Kesombongan hanya akan menuntun pada kehancuran yang tak terduga.`,
  ]
},

sangkuriang: {
  title: 'Sangkuriang',
  image: 'assets/icon/Sangkuriang.jpg',
  content: [
    `**Benang Takdir yang Terputus**

Di pedalaman hutan Jawa Barat yang rimbun, hiduplah seorang wanita dengan kecantikan abadi bernama **Dayang Sumbi**. Ia adalah putri raja yang memilih mengasingkan diri bersama seekor anjing setia bernama **Tumang**. Namun, Tumang bukan anjing biasa; ia adalah dewa yang dikutuk. Dari mereka, lahirlah seorang pemuda gagah bernama Sangkuriang.

Sangkuriang tumbuh menjadi pemburu yang hebat, namun ia tidak pernah tahu bahwa anjing yang selalu menemaninya adalah ayahnya sendiri.

---

**Kesalahan di Balik Busur Panah**

Suatu hari, setelah seharian berburu tanpa hasil, Sangkuriang merasa putus asa. Dalam amarah yang buta, ia mengarahkan panahnya ke arah Tumang. Ia membawa pulang hati anjing setia itu dan memberikannya kepada Dayang Sumbi.

Saat mengetahui kebenarannya, kemarahan Dayang Sumbi meledak. Ia memukul kepala Sangkuriang dengan sendok nasi hingga meninggalkan bekas luka yang dalam, lalu mengusir putranya. Sangkuriang pergi dengan luka di kepala dan dendam di hati, melupakan jati dirinya dalam pengembaraan bertahun-tahun.

---

**Pertemuan yang Terlarang**

Waktu berlalu seperti arus sungai. Sangkuriang kembali sebagai pria dewasa yang sakti mandraguna. Ia jatuh cinta pada seorang wanita cantik tanpa menyadari bahwa itu adalah ibunya sendiri, yang awet muda karena meminum sari alam.

Dayang Sumbi awalnya terpikat, namun saat ia merapikan rambut Sangkuriang, ia melihat bekas luka lama di kepalanya. Seketika, darahnya terasa membeku. Ia menyadari bahwa pria yang ingin menikahinya adalah putranya sendiri.

---

**Tugas yang Mustahil**

Untuk membatalkan pernikahan, Dayang Sumbi mengajukan dua syarat yang harus selesai dalam satu malam: membendung sungai Citarum untuk membuat danau, dan membangun sebuah perahu raksasa.

Sangkuriang setuju. Dengan kekuatannya, ia memanggil ribuan jin. Hutan bergetar. Gunung-gunung dipindahkan dan pohon-pohon raksasa ditumbangkan. Menjelang tengah malam, pekerjaan itu hampir selesai. Dayang Sumbi yang cemas segera menggelar kain sutra merah di ufuk timur dan memerintahkan warga memukul lesung agar ayam berkokok lebih awal.

---

**Amukan dan Terbentuknya Gunung**

Para jin yang mengira fajar telah tiba langsung lari ketakutan kembali ke alam gaib. Sangkuriang menyadari bahwa ia telah dicurangi. Amarahnya memuncak; dengan satu tendangan dahsyat, ia melontarkan perahu raksasa itu hingga jatuh tertelungkup.

Perahu itu mendarat dan perlahan membatu, menjadi gunung yang kini kita kenal sebagai **Gunung Tangkuban Perahu**. Sangkuriang terus mengejar Dayang Sumbi hingga akhirnya sang ibu menghilang di balik kabut abadi, meninggalkan Sangkuriang dalam penyesalan yang membatu bersama waktu.`,
  ]
},

jaka_tarub: {
  title: 'Jaka Tarub',
  image: 'assets/icon/Jaka Tarub.jpg',
  content: [
    `**Selendang yang Tercuri**

Di sebuah desa yang berbatasan langsung dengan hutan purba, hiduplah seorang pemuda bernama **Jaka Tarub**. Ia adalah pemburu yang mahir, namun jiwanya sering kali merasa hampa di tengah kesunyian rimba.

Suatu sore, saat ia sedang mengintai buruan di dekat Telaga Bidadari, ia melihat tujuh bidadari turun dari langit untuk mandi. Di tepian, tergeletak tujuh selendang sutra yang menjadi kunci bagi mereka untuk kembali ke surga.

---

**Pencurian di Balik Kabut**

Terpesona oleh kecantikan salah satu bidadari, Jaka Tarub mengambil salah satu selendang secara diam-diam dan menyembunyikannya di dalam lumbung padi miliknya. Saat matahari terbenam, enam bidadari terbang kembali ke langit, namun bidadari terkecil bernama **Nawang Wulan** tertinggal karena kehilangan selendangnya. Di saat itulah, Jaka Tarub muncul seolah-olah sebagai penyelamat dan menawarkan tempat tinggal bagi Nawang Wulan.

---

**Kehidupan di Atas Rahasia**

Waktu berlalu dan mereka akhirnya menikah. Nawang Wulan memiliki kesaktian luar biasa; ia mampu memasak satu bakul penuh nasi hanya dengan sebutir biji padi, asalkan tidak ada yang membuka tutup kukusan saat ia memasak. Berkat itu, lumbung padi mereka tidak pernah berkurang.

Namun, rasa penasaran Jaka Tarub merusak segalanya. Suatu hari, ia melanggar janji dan membuka tutup kukusan tersebut. Seketika, kesaktian Nawang Wulan lenyap. Sejak saat itu, ia harus menumbuk padi secara manual setiap hari.

---

**Kebenaran di Dasar Lumbung**

Karena padi di lumbung terus diambil, tumpukannya semakin menyusut. Hingga suatu pagi, jemari Nawang Wulan menyentuh sesuatu yang lembut di dasar lumbung yang mulai kosong. Itu adalah selendang sutranya yang selama ini disembunyikan oleh Jaka Tarub.

Rasa kecewa Nawang Wulan jauh lebih besar daripada amarahnya. "Kau telah mencuri sayapku, Jaka Tarub," ucapnya hampa. "Dan dengan itu, kau juga telah menghancurkan kepercayaan yang menjadi fondasi rumah ini."

---

**Perpisahan di Langit Senja**

Nawang Wulan mengenakan kembali selendangnya. Kekuatannya kembali, dan tubuhnya perlahan terangkat dari bumi. Jaka Tarub bersujud memohon ampun, namun takdir telah diputuskan. 

"Aku akan kembali ke tempatku yang seharusnya," kata Nawang Wulan dari ketinggian. Ia pun terbang menembus awan, kembali ke angkasa. Jaka Tarub hanya bisa berdiri di depan lumbungnya yang kosong, menyadari bahwa kebahagiaan yang dibangun di atas kebohongan akan menghilang begitu kebenaran menampakkan dirinya.

**Pesan Moral:** Cinta sejati tidak bisa dipaksakan melalui tipu daya. Kepercayaan yang sekali retak takkan pernah bisa utuh kembali seperti semula.`,
  ]
},

tikus_desa_kota: {
  title: 'Tikus Desa dan Tikus Kota',
  image: 'assets/icon/Tikus Kota dan Desa.jpg',
  content: [
    `**Dua Dunia di Bawah Langit yang Sama**

Di sebuah lubang kecil di bawah akar pohon gandum, hiduplah seokor tikus bernama **Gandum**. Hidupnya sangat sederhana; ia makan biji-bijian liar dan tidur beralaskan jerami kering. Meski jauh dari kemewahan, ia memiliki satu hal yang paling berharga: ketenangan.

Suatu hari, sepupunya yang tinggal di kota, **Baron**, datang berkunjung. Baron tampak jijik melihat makanan yang disuguhkan Gandum. "Bagaimana kau bisa hidup di tempat yang membosankan ini? Datanglah ke kota bersamaku. Di sana, hidup adalah tentang pesta dan makanan mewah," ajak Baron. Terbujuk oleh janji itu, Gandum pun ikut berangkat ke kota.

---

**Pesta di Atas Meja Mahoni**

Saat malam tiba, mereka menyelinap ke dalam ruang makan megah di sebuah rumah bangsawan. Mata Gandum terbelalak melihat sisa-sisa pesta manusia: keju aromatik, daging panggang, sosis, hingga kue manis berlumuran madu. "Inilah hidup yang sesungguhnya!" seru Baron sombong.

Gandum baru saja hendak menggigit potongan keju terbaik, ketika tiba-tiba... **BRAK!** Pintu terbuka keras. Seorang pelayan masuk diikuti seekor kucing besar yang matanya bersinar kuning. Kedua tikus itu lari tunggang langgang dan bersembunyi di celah dinding yang sempit dan menyesakkan.

---

**Harga dari Sebuah Kemewahan**

Gandum menggigil ketakutan. Saat suasana mulai tenang, Baron mengajaknya keluar lagi. "Ayo, kucing itu sudah pergi. Keju itu masih menunggumu!" Namun, Gandum menggelengkan kepalanya. Ia baru saja melihat kematian di depan matanya hanya demi sepotong keju.

"Tidak, Baron," bisik Gandum. "Kau boleh memiliki semua makanan mewah ini. Namun bagiku, kemewahan ini dibayar dengan harga yang terlalu mahal, yaitu rasa takut yang tak pernah berhenti."

---

**Kembali ke Pelukan Alam**

Tanpa menunggu fajar, Gandum berlari meninggalkan kebisingan kota. Ia kembali ke lubang kecilnya di bawah akar pohon gandum. Sore itu, ia duduk mengunyah biji gandum yang keras dan tawar. 

Namun, ia bisa mendengar suara burung berkicau dan yang paling penting, ia bisa memejamkan mata dengan tenang tanpa takut ada cakar kucing yang menyerangnya. Ia menyadari satu hal: Lebih baik makan sederhana dalam kedamaian, daripada pesta pora dalam ketakutan.

**Pesan Moral:** Kedamaian hati dan rasa aman jauh lebih berharga daripada kemewahan yang penuh dengan risiko dan kecemasan.`,
  ]
},
chaki_pembawa_cahaya: {
  title: 'Chaki Sang Pembawa Cahaya',
  image: 'assets/icon/Chaki Sang Pembawa Cahaya.jpg',
  content: [
    `**Chaki dan Rangkaian Nasib Kurang Beruntung**

Chaki adalah seekor makhluk berbulu biru pudar yang tinggal di pinggiran Hutan Kenangan. Di dunia di mana setiap makhluk memiliki keahlian istimewa, Chaki merasa dirinya adalah makhluk paling malang. Ia tidak bisa terbang, tidak bisa berlari cepat, dan suaranya hanya berupa cicitan kecil yang sering kali tertelan oleh suara angin.

Kemalangan seolah menjadi bayangan Chaki. Suatu pagi, saat ia menemukan pohon buah pir madu yang langka, sebuah dahan jatuh tepat di atas kepalanya sebelum ia sempat menggigit buahnya. "Kenapa dunia seolah tidak menginginkanku?" gumam Chaki sambil membiarkan air hujan membasahi telinganya.

---

**Pertemuan di Lembah Sunyi**

Karena merasa tidak berguna, Chaki pergi ke Lembah Sunyi. Di sana, ia bertemu dengan seekor kura-kura tua bernama **Mora** yang tempurungnya sudah retak. "Kau tampak sangat sedih, Kecil," sapa Mora selembut lumut.

"Aku adalah Chaki yang malang, Kek," jawabnya. "Setiap hal baik yang kudekati selalu berubah menjadi sial." Mora tersenyum bijak. "Sial atau beruntung itu seperti sisi koin, Chaki. Tergantung bagaimana kau meletakkannya di atas meja."

---

**Keajaiban yang Tak Terduga**

Tiba-tiba, hutan diguncang gempa kecil yang menyebabkan tanah di bawah Mora amblas. Mora terperosok ke dalam lubang gelap yang sempit dan mulai kesulitan bernapas. Chaki panik. Ia tidak cukup kuat untuk menarik Mora, dan makhluk lain terlalu besar untuk masuk ke lubang itu.

Di sinilah "kemalangan" Chaki berubah menjadi kunci. Karena tubuhnya yang kecil dan tangannya yang ramping—yang selama ini ia anggap sebagai kelemahan—Chaki adalah satu-satunya yang bisa menyelinap masuk ke celah sempit di samping tempurung Mora.

---

**Kekuatan di Balik Kelemahan**

Dengan ketelatenan yang luar biasa, Chaki menggali tanah sedikit demi sedikit menggunakan kuku-kuku kecilnya. Ia memindahkan kerikil yang mengganjal leher Mora. Setelah berjam-jam bekerja dalam gelap, Chaki berhasil melonggarkan tanah sehingga Mora bisa merangkak keluar dengan selamat.

Malam itu, Mora menatap Chaki dengan penuh syukur. "Tadi kau bilang kau makhluk paling malang. Tapi bagiku, kau adalah keberuntungan terbesar yang kutemui dalam seratus tahun terakhir."

---

**Lahirnya Chaki Sang Pembawa Cahaya**

Chaki terdiam. Ia baru menyadari bahwa tubuh kecilnya justru menjadi penyelamat nyawa. Kemalangan-kemalangan kecil yang ia alami selama ini telah melatihnya menjadi sosok yang tangguh dan penuh empati.

Ia mengganti namanya menjadi **Chaki Sang Pembawa Cahaya**. Ia kini tahu bahwa tidak ada makhluk yang benar-benar malang selama ia memiliki hati yang mau menolong. Terkadang, kekurangan kita adalah kelebihan yang sedang menunggu waktu yang tepat untuk bersinar.

**Pesan Moral:** Jangan pernah menilai nilai dirimu berdasarkan standar orang lain. Apa yang kau anggap sebagai kelemahan mungkin adalah kekuatan unik yang akan menyelamatkan seseorang di masa depan.`,
  ]
},
putri_tidur_orisinal: {
  title: 'Putri Tidur dan Benang Takdir',
  image: 'assets/icon/Putri Tidur.jpg',
  content: [
    `**Kelahiran Sang Cahaya Negeri**

Di sebuah kerajaan yang dikelilingi pegunungan salju, lahirlah seorang putri bernama Adara. Kecantikannya konon seperti fajar yang baru menyingsing. Raja dan Ratu mengundang seluruh tetua bijak dari penjuru negeri untuk memberikan doa, kecuali satu orang: seorang penyihir pengembara yang merasa terhina karena tidak dihormati.

Datang tanpa diundang, sang penyihir meniupkan kabut hitam dan berucap, "Sebelum matahari terbenam di usia keenam belasnya, jemari putri ini akan tertusuk duri mawar hitam, dan ia akan tertidur dalam keheningan abadi."

---

**Mawar Tanpa Duri**

Ketakutan akan kutukan itu, Raja memerintahkan agar seluruh tanaman mawar di kerajaan dicabut dan dibakar. Negeri itu menjadi negeri tanpa bunga mawar selama belasan tahun. Adara tumbuh menjadi gadis yang ceria, namun ia selalu merasa ada sesuatu yang hilang dari taman istananya yang gersang.

Pada hari ulang tahunnya yang ke-16, seorang wanita tua misterius muncul di gerbang belakang istana membawa sebuah kotak kayu. Karena rasa penasaran yang besar, Adara mendekat. Di dalam kotak itu, tumbuh sebuah mawar hitam yang sangat indah, jenis bunga yang belum pernah ia lihat seumur hidupnya.

---

**Keheningan yang Menular**

Saat Adara menyentuh kelopak mawar itu, sebuah duri kecil yang tersembunyi menusuk ujung jarinya. Seketika, seluruh kerajaan membeku. Pelayan yang sedang menuang air, prajurit yang sedang berjaga, hingga burung yang sedang terbang, semuanya berhenti dan jatuh dalam tidur yang dalam.

Hutan berduri tumbuh dengan sangat cepat, membentengi istana dari dunia luar. Selama seratus tahun, istana itu hanya menjadi legenda, sebuah tempat yang tertelan oleh waktu dan semak belukar yang tak tertembus.

---

**Perjalanan Menembus Belukar**

Seorang pemuda pengembara bernama Elian, yang bukan seorang pangeran melainkan seorang pemahat kayu yang jujur, mendengar legenda tersebut. Ia tidak mencari harta, melainkan merasa terpanggil oleh mimpi-mimpi aneh tentang seorang putri yang terjebak dalam sepi.

Dengan kapak tua dan ketulusan hati, Elian membelah hutan berduri itu. Anehnya, duri-duri yang tajam itu seolah merunduk dan memberi jalan saat merasakan niat tulus Elian. Setelah berhari-hari berjuang, ia sampai di kamar tertinggi dan melihat Adara yang tampak seperti sedang bermimpi indah.

---

**Terbangunnya Sang Harapan**

Elian tidak mencium sang putri, melainkan ia membisikkan sebuah janji untuk menjaga kerajaan itu dan menanam kembali bunga-bunga yang indah. Kehangatan dari janji yang tulus itu ternyata adalah penawar kutukan. Adara membuka matanya, dan seketika itu juga, warna kembali menyelimuti kerajaan.

Kutukan itu patah bukan karena kekuatan sihir yang lebih besar, melainkan karena keberanian seseorang yang datang bukan untuk menguasai, tapi untuk memberi. Adara dan Elian pun membangun kembali negeri itu menjadi tempat di mana mawar bisa tumbuh tanpa harus ditakuti lagi.

**Pesan Moral:** Ketakutan yang berlebihan seringkali justru mendekatkan kita pada apa yang kita takuti. Keberanian dan ketulusan adalah kunci untuk membuka pintu yang paling gelap sekalipun.`,
  ]
},
kancil_dan_buaya_orisinal: {
  title: 'Kancil dan Jembatan Rahasia',
  image: 'assets/icon/Kancil dan Buaya.jpg',
  content: [
    `**Hasrat di Seberang Sungai**

Si Kancil sedang berdiri di tepi sungai yang arusnya sangat deras. Di seberang sana, pohon apel hutan sedang berbuah lebat, warnanya merah menggoda di antara dedaunan hijau. Perut Kancil keroncongan, namun ia tahu sungai itu adalah wilayah kekuasaan kawanan buaya yang lapar.

"Bagaimana cara menyeberang tanpa menjadi santapan siang?" pikir Kancil sambil mengelus dagunya yang kecil. Ia melihat seekor buaya besar bernama **Baya** muncul ke permukaan dengan mata yang mengintai tajam.

---

**Muslihat Sang Cerdik**

Kancil tidak lari, ia justru melompat kegirangan. "Baya! Kabar gembira! Raja Hutan mengadakan pesta besar dan aku diutus untuk menghitung jumlah kalian agar semua kebagian daging segar!" seru Kancil dengan nada sangat yakin.

Baya yang rakus segera terpancing. "Daging segar? Benarkah? Tapi kami banyak sekali, Kancil," jawab Baya sambil memanggil teman-temannya. Dalam sekejap, puluhan buaya sudah berkumpul, memenuhi permukaan sungai yang tadinya sepi.

---

**Menghitung Barisan Gigi**

"Agar hitunganku akurat dan tidak ada yang terlewat, kalian harus berbaris rapi dari tepi sini sampai ke tepi seberang," perintah Kancil. Karena membayangkan pesta daging, para buaya itu patuh dan membentuk jembatan alami di atas air.

Kancil pun mulai melompat. "Satu! Dua! Tiga!" teriaknya setiap kali mendarat di atas punggung buaya yang keras. Ia terus melompat dengan lincah, berpura-pura sibuk menghitung padahal hatinya tertawa karena rencana ini berjalan sangat mulus.

---

**Kebenaran di Tepian**

Begitu sampai di daratan seberang, Kancil langsung melompat tinggi ke tanah yang aman. Ia berbalik dan membungkuk hormat kepada kawanan buaya yang masih berbaris rapi menanti kabar tentang pesta daging.

"Terima kasih, teman-teman! Kalian telah menjadi jembatan terbaik yang pernah ada," ucap Kancil sambil nyengir. "Mengenai daging segar itu... sepertinya kalian harus puas dengan kebaikan hati kalian sendiri hari ini, karena pestanya hanya ada di dalam perutku yang sebentar lagi akan kenyang dengan apel!"

---

**Pelajaran bagi Si Rakus**

Baya dan kawan-kawannya sangat marah dan mencoba mengejar, namun Kancil sudah jauh berlari masuk ke dalam rimbunnya pohon apel. Para buaya hanya bisa menggigit air karena telah tertipu oleh keserakahan mereka sendiri.

Kancil pun menikmati apelnya dengan tenang. Ia belajar bahwa ukuran tubuh bukanlah segalanya; pikiran yang tenang dan kecerdikan seringkali bisa menyelamatkan kita dari situasi yang paling berbahaya sekalipun.

**Pesan Moral:** Kecerdikan bisa mengalahkan kekuatan fisik yang besar. Namun, janganlah menggunakan kecerdikan untuk merugikan orang lain secara jahat, dan janganlah menjadi rakus hingga mudah tertipu oleh janji manis.`,
  ]
},
anak_gembala_dan_alarm_palsu: {
  title: 'Anak Gembala dan Alarm Palsu',
  image: 'assets/icon/Anak Gembala.jpg',
  content: [
    `**Kebosanan di Bukit Sunyi**

Di sebuah desa di kaki gunung, ada seorang anak laki-laki bernama Tiko yang tugasnya menggembalakan domba-domba milik warga. Setiap hari ia duduk di padang rumput yang tenang. Saking tenangnya, Tiko merasa sangat bosan. "Hidup ini terlalu datar," pikirnya sambil memainkan tongkat kayu.

Ia pun terpikir sebuah ide nakal untuk memecah kesunyian. Ia berdiri di atas batu besar dan berteriak sekuat tenaga ke arah desa, "Serigala! Serigala! Ada serigala menyerang domba!"

---

**Lelucon yang Berhasil**

Mendengar teriakan itu, para warga desa berhenti bekerja. Mereka mengambil cangkul, parang, dan kayu, lalu berlari sekuat tenaga ke atas bukit untuk menolong Tiko. Namun, sesampainya di sana, mereka hanya melihat domba-domba yang sedang makan dengan tenang dan Tiko yang tertawa terbahak-bahak.

"Kalian lucu sekali! Tidak ada serigala di sini, aku hanya ingin melihat kalian berlari," ujar Tiko sambil memegangi perutnya. Para warga pulang dengan wajah masam dan rasa kesal yang tertahan.

---

**Kebohongan Kedua**

Beberapa hari kemudian, Tiko merasa bosan lagi. Ia mengulangi trik yang sama. "Tolong! Serigala benar-benar datang kali ini!" teriaknya dengan nada yang sangat meyakinkan. Warga desa sempat ragu, tapi rasa peduli mereka lebih besar. Mereka kembali mendaki bukit dengan napas terengah-engah.

Lagi-lagi, mereka hanya menemukan Tiko yang tertawa sinis. "Kalian tertipu lagi!" ejeknya. Kali ini, para warga tidak bicara sepatah kata pun. Mereka pulang dengan rasa kecewa yang mendalam terhadap kejujuran Tiko.

---

**Mimpi Buruk yang Menjadi Nyata**

Sore harinya, saat matahari mulai meredup, tiba-tiba dari balik semak-semak muncul bayangan gelap dengan mata merah menyala. Serigala sungguhan benar-benar datang! Serigala itu mulai mengejar domba-domba dengan ganas.

Tiko yang ketakutan setengah mati memanjat pohon dan berteriak histeris, "Tolong! Serigala! Kali ini sungguhan! Tolong saya!" Di desa, orang-orang mendengar teriakan itu, tapi mereka saling berpandangan dan berkata, "Ah, itu pasti si Tiko lagi. Dia pikir dia bisa menipu kita untuk ketiga kalinya."

---

**Harga Sebuah Kepercayaan**

Tidak ada satu pun warga yang datang. Tiko hanya bisa menangis melihat domba-dombanya kocar-kacir dan sebagian hilang dimangsa. Ketika malam tiba dan Tiko tidak pulang, barulah warga menyusul ke bukit dan menemukan Tiko yang lemas di atas pohon.

Tiko belajar dengan cara yang sangat pahit. Kepercayaan itu seperti kaca; sekali kita retakkan dengan kebohongan, sulit untuk membuatnya utuh kembali. Sejak hari itu, Tiko tidak pernah lagi berbohong, karena ia tahu bahwa kata-kata seorang pembohong tidak akan didengar, bahkan saat ia sedang mengatakan kebenaran.

**Pesan Moral:** Jangan pernah mempermainkan kepercayaan orang lain dengan kebohongan. Sekali kamu dikenal sebagai pembohong, orang tidak akan mempercayaimu lagi meskipun kamu sedang berada dalam kesulitan yang nyata.`,
  ]
},
gagak_dan_sebuah_kendi: {
  title: 'Gagak dan Sebuah Kendi',
  image: 'assets/icon/Gagak dan Sebuah Kendi.jpg',
  content: [
    `**Perjalanan di Tengah Kemarau**

Matahari bersinar sangat terik di atas padang rumput yang gersang. Seekor burung gagak dengan bulu hitam legam terbang dengan napas yang tersengal-sengal. Ia sudah menempuh jarak berkilo-kilometer hanya untuk mencari setetes air. Kerongkongannya terasa seperti terbakar, dan pandangannya mulai kabur karena dehidrasi.

Tepat saat ia hampir kehilangan harapan, ia melihat sebuah benda berbentuk bulat di bawah bayangan pohon besar. Ia segera menukik turun dan mendarat di samping sebuah kendi tanah liat tua.

---

**Harapan yang Tertunda**

Gagak itu melongok ke dalam kendi. Matanya berbinar melihat ada genangan air di sana. Namun, kegembiraannya sirna seketika saat ia mencoba memasukkan paruhnya. Air itu berada jauh di dasar kendi, sementara leher kendi itu terlalu sempit bagi tubuhnya yang besar.

Ia mencoba mendorong kendi itu agar miring dan airnya tumpah, namun kendi itu terbuat dari tanah liat yang tebal dan berisi air, sehingga terlalu berat untuk digeser oleh seekor burung kecil. "Apakah aku hanya akan menonton air ini sampai aku mati lemas?" gumamnya putus asa.

---

**Aksi Kecil yang Berarti**

Gagak itu tidak membiarkan rasa putus asa menguasai dirinya. Ia mulai berpikir keras. Ia melihat ke sekeliling dan menemukan banyak batu kerikil kecil yang berserakan. Sebuah ide cemerlang muncul di benaknya. Ia mengambil satu kerikil dengan paruhnya dan menjatuhkannya ke dalam kendi.

*Cemplung!* Suara itu memberinya semangat. Ia mengambil batu lagi, dan lagi. Ia bekerja tanpa lelah, bolak-balik mengambil kerikil dari tanah dan menjatuhkannya ke dalam kendi satu per satu dengan penuh kesabaran.

---

**Keajaiban Logika**

Perlahan-lahan, ruang di dasar kendi mulai terisi oleh batu-batu tersebut. Seiring dengan bertambahnya jumlah kerikil, permukaan air di dalam kendi pun mulai terangkat naik. Gagak itu terus bekerja meski sayapnya mulai pegal dan matahari semakin menyengat.

Akhirnya, setelah ratusan kerikil dimasukkan, air itu naik hingga mencapai bibir kendi. Dengan rasa syukur yang luar biasa, sang gagak akhirnya bisa mencelupkan paruhnya dan meminum air yang segar itu hingga dahaganya hilang sama sekali.

---

**Hikmah dari Kerja Keras**

Gagak itu terbang kembali ke langit dengan energi baru. Ia membuktikan bahwa kecerdasan dan ketekunan jauh lebih kuat daripada sekadar kekuatan fisik. Masalah yang terlihat besar seringkali bisa diselesaikan dengan tindakan-tindakan kecil yang dilakukan secara konsisten.

**Pesan Moral:** Jangan pernah menyerah dalam situasi sesulit apa pun. Akal sehat dan kesabaran adalah kunci untuk mengubah tantangan menjadi sebuah kesuksesan. Sesuatu yang terlihat mustahil bisa menjadi mungkin jika kita mau berusaha sedikit demi sedikit.`,
  ]
},
keong_mas: {
  title: 'Keong Mas',
  category: 'Cerita Rakyat',
  image: 'assets/icon/Keong Mas.jpg',
  content: [
    `**Iri Hati yang Menjadi Gelap**

Di Kerajaan Daha, hiduplah dua orang putri yang sangat cantik, Candra Kirana dan Dewi Galuh. Candra Kirana telah bertunangan dengan Pangeran tampan bernama Raden Inu Kertapati. Namun, kebahagiaan itu menyulut api cemburu di hati Dewi Galuh. Ia merasa dialah yang lebih pantas bersanding dengan sang Pangeran.

Dewi Galuh kemudian menemui seorang penyihir jahat. Dengan mantra yang mengerikan, ia mengutuk Candra Kirana menjadi seekor keong berwarna emas dan membuangnya ke laut yang luas. "Kutukan ini hanya akan hilang jika kau menemukan cinta sejatimu dalam kondisi yang tak terduga!" teriak penyihir itu.

---

**Jaring Sang Nenek Tua**

Di sebuah desa nelayan yang sunyi, seorang nenek tua sedang menebar jaringnya di tepi pantai. Alih-alih mendapatkan ikan, jaringnya justru menangkap seekor keong besar berwarna emas yang sangat indah. Terpukau oleh kecantikannya, si nenek membawa keong itu pulang dan meletakkannya di dalam sebuah tempayan air.

Keesokan harinya, keajaiban terjadi. Saat nenek itu pulang dari melaut dengan tangan kosong, ia terkejut melihat meja makannya sudah penuh dengan hidangan yang sangat lezat. Rumahnya yang tadinya berantakan pun kini bersih berkilau.

---

**Rahasia di Balik Tempayan**

Kejadian aneh itu berulang setiap hari. Karena penasaran, suatu pagi sang nenek berpura-pura pergi melaut namun diam-diam ia kembali dan mengintip lewat celah dinding rumahnya. Matanya terbelalak saat melihat keong emas di dalam tempayan itu berubah menjadi seorang gadis cantik yang luar biasa.

Gadis itu dengan lincah memasak dan merapikan rumah. Sang nenek pun masuk dan menyapanya dengan lembut. Candra Kirana yang kaget akhirnya menceritakan segala nasib malang yang menimpanya. Sang nenek merasa iba dan mengizinkan sang putri untuk tinggal bersamanya sebagai anak sendiri.

---

**Pertemuan yang Menghapus Kutukan**

Sementara itu, Raden Inu Kertapati tidak tinggal diam. Ia berkelana mencari tunangannya dengan menyamar menjadi rakyat jelata. Perjalanannya membawanya ke desa nelayan tersebut. Karena kehausan, ia mampir ke sebuah gubuk kecil untuk meminta minum.

Di sanalah mata mereka bertemu. Raden Inu mengenali tatapan lembut Candra Kirana, dan sang putri pun terharu melihat kesetiaan tunangannya. Seketika itu juga, aura emas menyelimuti tubuh Candra Kirana dan kutukan penyihir jahat itu luntur untuk selamanya.

---

**Kembalinya Cahaya Kerajaan**

Candra Kirana memboyong nenek tua yang baik hati itu ke istana sebagai bentuk rasa terima kasihnya. Dewi Galuh yang ketakutan karena kejahatannya terbongkar akhirnya melarikan diri ke hutan. Kerajaan Daha pun kembali dipenuhi kebahagiaan.

**Pesan Moral:** Kebaikan hati dan kesetiaan akan selalu menemukan jalannya untuk menang. Sebaliknya, iri hati dan perbuatan jahat hanya akan membawa kesengsaraan bagi diri sendiri di akhir cerita.`,
  ]
},
semut_dan_belalang: {
  title: 'Semut dan Belalang',
  image: 'assets/icon/Semut dan Belalang.jpg',
  content: [
    `**Musim Panas yang Berisik**

Di sebuah ladang yang luas, seekor Belalang sedang asyik bersantai sambil memainkan biolanya. Ia bernyanyi dan menari menikmati hangatnya sinar matahari. Di hadapannya, barisan Semut lewat dengan susah payah, memikul biji-biji jagung yang berat menuju sarang mereka.

"Hai Semut-semut kecil! Kenapa kalian bekerja begitu keras di hari seindah ini?" seru Belalang sambil tertawa. "Marilah sini, bernyanyi bersamaku!" Salah satu semut berhenti sejenak dan menjawab, "Kami sedang menyimpan makanan untuk musim dingin nanti. Sebaiknya kau juga melakukan hal yang sama."

---

**Nasihat yang Diabaikan**

Belalang hanya mencibir. "Musim dingin masih lama sekali, Kawan! Lihatlah, makanan ada di mana-mana sekarang. Kenapa harus repot memikirkan hari esok?" Belalang kembali asyik dengan musiknya, sementara para Semut terus bekerja tanpa henti, mengumpulkan butir demi butir persediaan di bawah tanah.

Hari-hari berganti, dan Semut tetap konsisten. Mereka mengabaikan ejekan Belalang yang setiap hari hanya tidur dan bermain. Bagi Semut, waktu adalah kesempatan yang tak boleh dibuang sebelum langit berubah menjadi abu-abu.

---

**Datangnya Musim Dingin yang Beku**

Ketika musim dingin tiba, padang rumput yang hijau berubah menjadi hamparan salju yang putih dan membeku. Semua tanaman mati, dan tidak ada lagi sisa biji-bijian di permukaan tanah. Belalang yang tidak punya rumah dan simpanan makanan mulai merasa kedinginan dan kelaparan yang hebat.

Ia mencoba mencari makanan di balik salju, namun hasilnya nihil. Tubuhnya yang tadinya gagah kini gemetar lemah. Ia teringat pada para Semut yang dulu ia ejek.

---

**Ketukan di Pintu Bawah Tanah**

Dengan sisa tenaganya, Belalang berjalan menuju lubang sarang Semut. Dari luar, ia bisa mencium aroma jagung kering yang harum dan melihat para Semut sedang bersantai dengan hangat di dalam sana. "Tolong aku, Semut... aku lapar sekali," rintih Belalang dari balik pintu.

Para Semut awalnya terdiam, namun karena sifat mereka yang baik, mereka memberikan sedikit makanan kepada Belalang. "Dulu kau menertawakan kami saat kami bekerja keras," kata pemimpin Semut. "Sekarang kau tahu bahwa waktu yang kau buang tidak akan pernah bisa kembali."

---

**Penyesalan di Balik Salju**

Belalang makan dengan rasa malu yang mendalam. Ia menyadari bahwa bersenang-senang memang perlu, tapi mempersiapkan masa depan jauh lebih utama. Musim dingin itu menjadi pelajaran yang tak terlupakan baginya: bahwa siapa yang menanam di musim panas, dialah yang akan memanen di musim dingin.

**Pesan Moral:** Ada waktu untuk bermain, dan ada waktu untuk bekerja keras. Jangan biarkan kesenangan hari ini membuatmu lupa mempersiapkan diri untuk hari esok yang mungkin sulit. Kedisiplinan adalah kunci bertahan hidup.`,
  ]
},
serigala_berbulu_domba: {
  title: 'Serigala Berbulu Domba',
  image: 'assets/icon/Serigala Berbulu Domba.jpg',
  content: [
    `**Niat Tersembunyi di Balik Semak**

Seekor serigala yang sudah tua mulai kesulitan berburu. Ia tidak lagi secepat dulu untuk mengejar domba-domba yang lincah. "Aku harus menggunakan otakku, bukan kakiku," pikirnya saat mengintai sebuah peternakan dari balik semak-semak. 

Tiba-tiba, ia menemukan selembar kulit domba yang masih utuh tergeletak di tanah, sisa dari hasil buruan manusia. Sebuah ide licik muncul di kepalanya. Ia memakai kulit itu ke atas punggungnya dan menyembunyikan taring serta cakarnya yang tajam.

---

**Penyamaran yang Sempurna**

Dengan kulit domba itu, sang serigala berjalan perlahan masuk ke tengah padang rumput. Hebatnya, tidak ada satu pun domba yang merasa terancam. Bahkan, anak-anak domba mulai mendekatinya, mengira ia adalah salah satu dari keluarga mereka yang baru kembali.

Sang serigala tersenyum di balik bulu putih itu. Ia mengikuti kawanan domba masuk ke dalam kandang saat malam tiba. Ia berencana untuk menunggu sampai peternak tidur lelap, lalu ia akan memangsa domba yang paling gemuk tanpa ada yang curiga.

---

**Takdir yang Tak Terduga**

Namun, malam itu sang peternak sedang merasa sangat lapar. Ia memutuskan untuk menyembelih seekor domba untuk dijadikan hidangan makan malam keluarganya. Ia masuk ke dalam kandang yang gelap dengan hanya membawa sebilah pisau tajam.

Tanpa memeriksa satu per satu, sang peternak mencari domba yang badannya paling besar. Tangannya meraba-raba di tengah kegelapan dan memegang tubuh sang serigala yang tertutup kulit domba. Karena merasa tubuh itu paling besar dan berat, sang peternak langsung menariknya keluar.

---

**Terbongkarnya Kedok**

Baru saat itulah, sang serigala menyadari bahwa penyamarannya justru menjadi jerat bagi dirinya sendiri. Sebelum ia sempat melepas kulit domba itu atau menyerang, sang peternak sudah menyadari bahwa yang ia tangkap bukanlah domba, melainkan musuh yang selama ini mengintai ternaknya.

Sang serigala akhirnya tertangkap karena tipu muslihatnya sendiri. Ia yang awalnya ingin memangsa, justru berakhir menjadi pihak yang celaka karena ia memilih untuk berpura-pura menjadi sesuatu yang bukan dirinya.

---

**Jangan Menilai dari Luar**

Kisah ini menyebar ke seluruh desa sebagai pengingat. Kita harus selalu waspada karena kejahatan sering kali memakai topeng kebaikan. Namun bagi si penipu, kepalsuan tidak akan pernah bertahan lama karena kebenaran akan selalu menemukan jalan untuk muncul ke permukaan.

**Pesan Moral:** Jangan mudah menilai sesuatu hanya dari penampilan luarnya. Sesuatu yang terlihat lembut dan baik di luar, belum tentu memiliki niat yang tulus di dalam. Selain itu, menjadi diri sendiri jauh lebih aman daripada hidup dalam kepalsuan.`,
  ]
},
'penebang_kayu_dan_kapak_emas': { // Sebelumnya 'Penebang Kayu dan Kapak Emas'
    title: 'Penebang Kayu dan Kapak Emas',
    image: 'assets/icon/Kapak Emas.jpg',
    content: [
    `**Kapak Tua di Pinggir Sungai**

Di sebuah desa terpencil, hiduplah seorang penebang kayu miskin bernama Jaka. Satu-satunya harta yang ia miliki untuk menyambung hidup adalah sebuah kapak besi tua yang sudah berkarat. Suatu hari, saat ia sedang menebang pohon di dekat sungai yang arusnya sangat deras, tangan Jaka licin karena keringat.

*Byur!* Kapak kesayangannya terlepas dan jatuh ke dalam air yang dalam. Jaka terduduk di tepi sungai dengan perasaan hancur. "Tanpa kapak itu, aku tidak bisa bekerja. Bagaimana aku bisa memberi makan keluargaku?" tangisnya sedih.

---

**Keajaiban dari Dalam Air**

Tiba-tiba, air sungai berbuih dan muncul sesosok kakek tua berwajah bijak yang dikenal sebagai Penjaga Sungai. "Kenapa kau menangis, Anak Muda?" tanya sang kakek. Setelah mendengar cerita Jaka, sang kakek menyelam ke dasar sungai yang gelap.

Tak lama kemudian, sang kakek muncul membawa sebuah kapak yang berkilauan. Kapak itu terbuat dari emas murni. "Apakah ini kapakmu?" tanya kakek itu. Jaka melihatnya dengan kagum, namun ia menggeleng. "Bukan, Kek. Itu bukan milikku. Kapakku hanya besi tua."

---

**Ujian Kejujuran Kedua**

Sang kakek tersenyum lalu menyelam kembali. Kali ini, ia muncul dengan kapak yang terbuat dari perak yang mengkilap. "Kalau yang ini, apakah ini milikmu?" Jaka kembali menatap kapak mewah itu, namun hatinya tetap teguh. "Bukan, Kek. Itu juga bukan milikku."

Untuk ketiga kalinya, sang kakek menyelam dan muncul membawa kapak besi yang sudah berkarat dengan gagang kayu yang usang. Mata Jaka berbinar, "Ya! Itulah kapakku, Kek! Terima kasih banyak!" seru Jaka dengan penuh kegembiraan.

---

**Hadiah bagi Sang Jujur**

Sang kakek menatap Jaka dengan penuh rasa hormat. "Kau adalah orang yang sangat jujur, Jaka. Kau tidak tergoda oleh emas maupun perak meskipun kau sangat membutuhkannya. Sebagai hadiah atas kejujuranmu, ambillah ketiga kapak ini untukmu."

Jaka pulang dengan perasaan tidak percaya. Kejujurannya hari itu tidak hanya mengembalikan alat kerjanya, tetapi juga mengubah nasib hidupnya selamanya. Ia kini memiliki modal untuk membangun kehidupan yang lebih baik tanpa harus menipu siapa pun.

---

**Nasib Si Tetangga Serakah**

Seorang tetangga yang iri mendengar cerita Jaka. Ia sengaja pergi ke sungai dan menjatuhkan kapak besinya ke dalam air. Benar saja, sang kakek muncul membawa kapak emas. Dengan cepat si tetangga berteriak, "Ya! Itu milikku!"

Sang kakek kecewa melihat ketamakan itu. Ia menghilang ke dalam air bersama kapak emasnya, dan tidak pernah kembali lagi. Si tetangga serakah itu tidak hanya gagal mendapatkan emas, tetapi ia juga kehilangan kapak besinya sendiri karena kebohongannya.

**Pesan Moral:** Kejujuran mungkin tidak selalu memberikan keuntungan secara instan, namun ia akan mendatangkan berkah dan ketenangan di masa depan. Sebaliknya, keserakahan dan kebohongan hanya akan menjauhkan kita dari keberuntungan yang sebenarnya.`,
  ]
},
aladin_dan_lampu_ajaib: {
  title: 'Aladin dan Lampu Ajaib',
  image: 'assets/icon/Aladin.jpg',
  content: [
    `**Pemuda dari Kota Padang Pasir**

Di sebuah kota yang sibuk di tengah gurun, hiduplah seorang pemuda yatim piatu bernama Aladin. Ia hidup sederhana dan sering kali harus mengandalkan kecerdikannya untuk bertahan hidup. Suatu hari, seorang pria misterius yang mengaku sebagai pamannya datang dan mengajaknya pergi ke sebuah gua tersembunyi di padang pasir yang jauh.

"Aladin, masuklah ke dalam gua ini dan ambilkan aku sebuah lampu minyak tua. Jangan sentuh harta lainnya, hanya lampu itu," perintah pria yang sebenarnya adalah seorang penyihir jahat.

---

**Terjebak di Perut Bumi**

Aladin masuk ke dalam gua dan terpana melihat tumpukan emas serta permata. Namun, ia ingat pesan pria itu. Ia menemukan sebuah lampu tembaga yang kusam dan berdebu di sudut ruangan. Begitu ia memegang lampu itu, sang penyihir tiba-tiba menutup pintu gua karena Aladin menolak menyerahkan lampu sebelum ia keluar.

Dalam kegelapan yang sunyi, Aladin merasa putus asa. Secara tidak sengaja, ia menggosok lampu kusam itu untuk membersihkan debunya. Tiba-tiba, asap biru mengepul keluar dan muncul sosok raksasa yang besar. "Aku adalah Jin penjaga lampu. Apa perintahmu, Tuanku?"

---

**Cinta dan Istana Pasir**

Dengan bantuan Jin, Aladin berhasil keluar dari gua dan kembali ke kota dengan kekayaan yang melimpah. Namun, hatinya tetap sederhana. Ia jatuh cinta pada Putri Yasmin, putri Sultan yang sangat bijak. Aladin menggunakan kekuatan Jin untuk membangun sebuah istana megah demi memenangkan hati Sultan.

Sayangnya, kemewahan itu mengundang kembali sang penyihir jahat. Dengan tipu muslihat "menukar lampu lama dengan yang baru", penyihir itu berhasil merebut lampu ajaib dan memindahkan seluruh istana beserta Putri Yasmin ke sebuah tempat yang jauh di ujung dunia.

---

**Kekuatan Tanpa Keajaiban**

Tanpa bantuan Jin, Aladin harus mengandalkan keberaniannya sendiri. Ia menempuh perjalanan jauh melintasi badai pasir tanpa alas kaki. Ia berhasil menyelinap ke dalam istana yang dicuri dan menghadapi sang penyihir. 

Dengan kecerdikan Aladin dan keberanian Yasmin, mereka berhasil menjebak penyihir itu hingga ia terjatuh ke dalam jurang yang dalam. Aladin kembali memegang lampunya, namun kali ini ia menyadari sesuatu yang lebih penting daripada sekadar permintaan ajaib.

---

**Kebebasan yang Tak Ternilai**

Sebagai permintaan terakhirnya, Aladin tidak meminta emas atau kekuasaan abadi. Ia justru meminta agar Jin dibebaskan dari belenggu lampu selamanya. Jin yang terharu akhirnya menjadi bebas, dan Aladin membuktikan bahwa ia layak menjadi seorang pangeran bukan karena harta, melainkan karena kejujuran dan kebaikan hatinya.

Aladin dan Yasmin hidup bahagia, memimpin kerajaan dengan bijaksana tanpa harus bergantung pada keajaiban, melainkan pada kerja keras dan rasa kasih sayang kepada rakyatnya.

**Pesan Moral:** Kekayaan yang didapat secara instan tidak akan berarti tanpa karakter yang kuat. Keberanian dan ketulusan hati jauh lebih sakti daripada sihir mana pun di dunia ini.`,
  ]
},
jack_dan_pohon_kacang_ajaib: {
  title: 'Jack dan Pohon Kacang Ajaib',
  image: 'assets/icon/Jack dan Pohon Kacang.jpg',
  content: [
    `**Pertukaran yang Aneh**

Jack adalah seorang pemuda yang tinggal berdua dengan ibunya dalam kemiskinan. Harta terakhir yang mereka miliki hanyalah seekor sapi tua yang sudah tidak menghasilkan susu. Dengan berat hati, sang ibu meminta Jack menjual sapi itu ke pasar. Di tengah jalan, Jack bertemu dengan seorang kakek misterius yang menawarkan lima butir kacang untuk ditukar dengan sapinya.

"Kacang ini bukan kacang biasa, Jack. Ini adalah kacang ajaib," bisik kakek itu. Jack yang lugu setuju. Namun, sesampainya di rumah, sang ibu marah besar dan membuang kacang-kacang itu ke luar jendela sambil menangis karena merasa mereka telah tertipu.

---

**Tangga Menuju Langit**

Keesokan paginya, pemandangan luar biasa menyambut Jack. Dari tempat kacang itu dibuang, tumbuh pohon raksasa yang batangnya menjulang tinggi menembus awan. Karena penasaran, Jack memanjat pohon itu. Ia terus memanjat hingga sampai di sebuah negeri di atas awan yang dihuni oleh seorang raksasa yang kejam.

Di dalam istana raksasa itu, Jack melihat harta karun yang luar biasa: seekor angsa yang bertelur emas dan sebuah harpa ajaib yang bisa bernyanyi sendiri. Jack menyadari bahwa harta itu sebenarnya adalah milik ayahnya yang dulu dicuri oleh sang raksasa.

---

**Kejar-kejaran di Atas Awan**

Dengan hati-hati, Jack mengambil angsa bertelur emas itu. Namun, saat ia mencoba membawa harpa ajaib, harpa itu berteriak, "Tuanku! Ada pencuri!" Raksasa itu terbangun dan menghentakkan kakinya hingga awan bergetar. "Fee-fi-fo-fum! Aku mencium bau manusia!" geram sang raksasa.

Jack berlari secepat kilat menuju pohon kacang. Raksasa itu mengejarnya dengan langkah yang membuat bumi berguncang. Jack merosot turun melalui batang pohon yang licin, sementara sang raksasa mulai ikut turun tepat di atasnya.

---

**Keputusan yang Cepat**

Begitu kaki Jack menyentuh tanah, ia berteriak, "Ibu! Ambilkan kapak!" Dengan saku penuh keberanian, Jack menebang batang pohon kacang itu sekuat tenaga. *Krak!* Pohon raksasa itu tumbang, dan sang raksasa pun jatuh terhempas, menghilang selamanya.

Pohon itu pun lenyap, meninggalkan Jack dan ibunya dengan angsa yang kini memberikan mereka kecukupan. Jack bukan lagi pemuda yang ceroboh; ia telah belajar bahwa keberanian yang dibarengi dengan tindakan cepat bisa mengubah nasib yang paling buruk sekalipun.

---

**Pelajaran dari Langit**

Jack menggunakan kekayaannya untuk membantu orang-orang di desanya. Ia tidak pernah lupa bahwa keajaiban terkadang datang dalam bentuk yang paling tidak terduga—seperti lima butir kacang—dan hanya mereka yang berani memanjatlah yang akan melihat apa yang ada di balik awan.

**Pesan Moral:** Jangan takut untuk mengambil risiko yang masuk akal, tetapi tetaplah waspada. Keberanian dan kecerdikan dalam menghadapi masalah besar adalah kunci untuk meraih kesuksesan dan mengembalikan apa yang menjadi hakmu.`,
  ]
},
asal_usul_selat_bali: {
  title: 'Asal Usul Selat Bali',
  image: 'assets/icon/Asal Usul Selat Bali.jpg',
  content: [
    `**Sidi Mantra dan Putra yang Manja**

Dahulu kala di Kerajaan Daha, hiduplah seorang brahmana sakti bernama Sidi Mantra. Ia memiliki seorang putra bernama Manik Angkeran. Sayangnya, Manik Angkeran memiliki kebiasaan buruk, yaitu gemar berjudi hingga terlilit hutang yang sangat besar. Karena tidak mampu membayar, ia berkali-kali meminta bantuan ayahnya.

Sidi Mantra, yang sangat menyayangi putranya, berdoa kepada dewa untuk mendapatkan petunjuk. Ia kemudian diperintahkan untuk pergi ke Gunung Agung dan menemui Naga Besukih, sang penjaga harta karun di perut bumi.

---

**Pertemuan dengan Naga Besukih**

Dengan bunyi genta yang sakti, Sidi Mantra memanggil Naga Besukih. Sang Naga yang baik hati bersedia memberikan sedikit sisik emas dan permata dari tubuhnya untuk melunasi hutang Manik Angkeran. "Gunakan ini dengan bijak, dan jangan biarkan putramu kembali ke jalan yang salah," pesan sang Naga.

Namun, tabiat Manik Angkeran tidak berubah. Setelah harta itu habis untuk berjudi, ia kembali terlilit hutang. Karena ayahnya menolak membantu lagi, Manik Angkeran mencuri genta sakti ayahnya dan pergi ke Gunung Agung sendirian.

---

**Pengkhianatan yang Berujung Maut**

Naga Besukih muncul setelah mendengar bunyi genta. Namun, saat sang Naga berbalik untuk mengambilkan emas, Manik Angkeran yang serakah justru memotong ujung ekor Naga Besukih yang bertabur permata. Manik kemudian lari ketakutan.

Naga Besukih yang terluka sangat marah. Dengan kesaktiannya, ia menjilat bekas jejak kaki Manik Angkeran hingga pemuda itu terbakar menjadi abu. Sidi Mantra yang mengetahui hal itu memohon ampun kepada Naga Besukih agar putranya dihidupkan kembali. Sang Naga setuju, asalkan ekornya dikembalikan seperti semula.

---

**Garis Pemisah yang Abadi**

Sidi Mantra berhasil menyambung kembali ekor Naga Besukih, dan Manik Angkeran pun hidup kembali. Namun, Sidi Mantra sadar bahwa ia dan putranya tidak bisa lagi tinggal bersama. Mereka harus memulai hidup baru secara terpisah agar Manik bisa belajar bertanggung jawab.

Sidi Mantra berdiri di semenanjung sempit yang menghubungkan pulau itu. Ia menancapkan tongkat saktinya ke tanah dan membuat garis yang membelah bumi. Seketika, air laut meluap masuk ke garis tersebut, memisahkan daratan menjadi dua bagian yang berbeda.

---

**Terbentuknya Selat Bali**

Daratan yang besar tetap menjadi Pulau Jawa, sedangkan daratan kecil di seberangnya menjadi Pulau Bali. Garis air yang membelah kedua pulau itulah yang kini dikenal sebagai Selat Bali. Sidi Mantra berharap, pemisahan ini menjadi pengingat bagi setiap orang untuk selalu menepati janji dan menjauhi keserakahan.

**Pesan Moral:** Kasih sayang orang tua ada batasnya, dan setiap kesalahan pasti ada konsekuensinya. Jangan biarkan keserakahan menghancurkan kepercayaan orang lain, karena kepercayaan yang rusak sering kali menciptakan jarak yang tidak bisa lagi diseberangi.`,
  ]
},
batu_gantung: {
  title: 'Batu Gantung',
  image: 'assets/icon/Batu Gantung.jpg',
  content: [
    `**Janji di Tepian Danau**

Di sebuah desa di pinggiran Danau Toba, hiduplah seorang gadis cantik jelita bernama Seruni. Ia adalah sosok yang patuh dan penyayang. Seruni menjalin hubungan kasih dengan seorang pemuda desa yang sederhana. Mereka telah berjanji untuk sehidup semati dan membangun masa depan bersama.

Namun, harapan itu hancur ketika ayahnya menjodohkan Seruni dengan pemuda lain yang merupakan putra dari kerabat jauh mereka. Seruni merasa dunianya runtuh. Ia tidak ingin mengkhianati cintanya, namun ia juga tidak sanggup membantah kehendak orang tuanya.

---

**Putus Asa di Tebing Sunyi**

Dengan hati yang hancur, Seruni berlari menuju tebing tinggi di pinggiran Danau Toba. Ditemani anjing kesayangannya yang setia, Toki, ia menangis meratapi nasibnya. "Lebih baik aku mati daripada harus hidup tanpa cinta," bisiknya di tengah isak tangis.

Tanpa sengaja, Seruni terperosok ke dalam sebuah lubang batu yang sangat dalam dan sempit. Tubuhnya terjepit di antara dinding batu yang dingin, membuatnya tidak bisa bergerak sedikit pun. Ia merasa lubang itu seolah-olah semakin menghimpitnya.

---

**Kalimat yang Menjadi Kutukan**

Dalam keadaan panik dan putus asa, Seruni berteriak berkali-kali, "Parapat! Parapat batu!" yang artinya "Merapatlah batu!". Ia seolah-olah meminta batu-batu itu untuk mengakhiri hidupnya lebih cepat. Toki, anjingnya, berlari kembali ke desa untuk meminta bantuan warga.

Tak lama kemudian, orang tua Seruni dan warga desa datang membawa obor. Mereka mendengar suara Seruni dari dalam lubang, namun celah itu terlalu sempit dan berbahaya untuk dimasuki. Tiba-tiba, terjadi guncangan hebat di tebing tersebut.

---

**Keajaiban yang Tragis**

Dinding tebing itu bergetar dan perlahan-lahan merapat, menelan sosok Seruni ke dalam perut bumi. Sesaat setelah guncangan berhenti, warga melihat sebuah keajaiban yang menyedihkan. Di dinding tebing yang curam, muncul sebuah batu besar yang menggantung, menyerupai sosok seorang gadis yang sedang merunduk sedih.

Warga meyakini bahwa batu tersebut adalah penjelmaan Seruni yang terjepit selamanya. Sejak saat itu, tempat di mana Seruni menghilang dikenal dengan nama Parapat, dan batu yang menggantung itu disebut sebagai Batu Gantung.

---

**Pesan dari Tebing Toba**

Legenda ini menjadi pengingat bagi masyarakat sekitar tentang betapa dalamnya rasa sakit akibat paksaan dalam cinta. Batu Gantung tetap berdiri kokoh di sana, menatap indahnya Danau Toba, sebagai simbol kesetiaan dan duka yang membeku oleh waktu.

**Pesan Moral:** Komunikasi dalam keluarga sangatlah penting. Jangan memaksakan kehendak yang bisa merusak kebahagiaan orang lain, karena penyesalan selalu datang terlambat setelah segalanya tak bisa kembali lagi.`,
  ]
},
kelinci_dan_kura_kura: {
  title: 'Kelinci dan Kura-kura',
  image: 'assets/icon/Kelinci dan Kura-kura.jpg',
  content: [
    `**Kesombongan di Garis Start**

Di sebuah hutan hijau, hidup seekor Kelinci yang merasa dirinya adalah makhluk tercepat di dunia. Ia sering mengejek hewan lain yang gerakannya lambat, terutama Kura-kura. "Hei, Kura-kura! Dengan langkahmu yang seperti itu, mungkin kau baru akan sampai di ujung jalan saat musim berganti!" ejek Kelinci sambil tertawa sombong.

Kura-kura yang tenang tidak marah. Ia justru menatap Kelinci dan berkata, "Bagaimana kalau kita buktikan dalam sebuah balapan? Siapa yang sampai lebih dulu di bukit seberang, dialah yang menang." Kelinci tertawa terpingkal-pingkal, merasa tantangan itu adalah sebuah lelucon.

---

**Melesat dan Berhenti**

Balapan dimulai. Dalam hitungan detik, Kelinci sudah melesat jauh meninggalkan kepulan debu. Ia menoleh ke belakang dan melihat Kura-kura bahkan belum melewati garis start dengan sempurna. "Sangat membosankan," gumam Kelinci.

Karena merasa sudah pasti menang, Kelinci memutuskan untuk beristirahat di bawah pohon rindang yang sejuk tepat di tengah jalur balap. "Aku bisa tidur siang sebentar, bangun, lalu masih punya banyak waktu untuk menang," pikirnya. Kelinci pun tertidur sangat lelap, terbuai oleh angin sepoi-sepoi.

---

**Langkah Kecil yang Tak Pernah Berhenti**

Sementara itu, Kura-kura terus berjalan. Ia tidak berhenti untuk minum, tidak berhenti untuk mengeluh, dan tidak berhenti untuk melihat seberapa jauh lawannya. Langkahnya kecil dan lambat, tetapi konsisten. Setiap inci tanah ia lalui dengan penuh tekad.

Satu jam berlalu, Kura-kura melewati Kelinci yang sedang mendengkur keras. Ia tetap diam dan tidak mencoba membangunkan lawannya. Ia fokus pada satu tujuan: garis finis di puncak bukit. Kura-kura membuktikan bahwa kecepatan tanpa arah tidak ada artinya dibandingkan konsistensi yang terjaga.

---

**Kejutan di Garis Finis**

Matahari mulai terbenam saat Kelinci terbangun dengan kaget. Ia segera melesat secepat kilat menuju puncak bukit. Namun, pemandangan di sana membuatnya mematung. Kura-kura sudah berdiri di sana, disambut oleh sorak-sorai hewan hutan lainnya.

Kelinci tertunduk malu. Kaki-kakinya yang kuat terasa lemas. Ia kalah bukan karena ia tidak cepat, tetapi karena ia mengabaikan proses dan meremehkan lawan. "Aku belajar satu hal hari ini," bisik Kelinci pelan.

---

**Kemenangan Sang Konsisten**

Kura-kura tersenyum bijak. "Kecepatan adalah anugerah, Kelinci. Tapi konsistensi adalah karakter. Siapa pun bisa berlari cepat di awal, tapi hanya mereka yang bertahan sampai akhirlah yang akan memenangkan pertandingan."

Sejak hari itu, Kelinci tidak lagi sombong. Ia belajar bahwa bakat besar tanpa disiplin akan selalu kalah oleh kerja keras yang dilakukan setiap hari tanpa henti.

**Pesan Moral:** Jangan pernah meremehkan orang lain hanya karena mereka terlihat lambat. Konsistensi dan ketekunan (slow and steady) akan selalu memenangkan perlombaan dibandingkan kesombongan yang penuh kelalaian.`,
  ]
},
rapunzel: {
  title: 'Rapunzel',
  image: 'assets/icon/Rapunzel.jpg',
  content: [
    `**Gadis di Menara Tinggi**

Di sebuah menara terpencil yang tidak mempunyai pintu mahupun tangga, tinggallah seorang gadis bernama Rapunzel. Dia memiliki rambut emas yang sangat panjang dan berkilau, yang kononnya mempunyai keajaiban. Rapunzel dikurung di sana sejak kecil oleh seorang penyihir bernama Gothel, yang mendakwa dirinya sebagai ibu Rapunzel demi memiliki keajaiban rambut tersebut.

Setiap kali Gothel ingin masuk, dia akan berdiri di bawah menara dan berseru, "Rapunzel, turunkan rambutmu!" Rapunzel kemudian akan melilitkan rambutnya pada cangkuk tingkap dan membiarkannya menjuntai ke bawah sebagai tali untuk Gothel memanjat.

---

**Nyanyian Kerinduan**

Rapunzel menghabiskan hari-harinya dengan melukis dan menyanyi. Suaranya yang merdu bergema di seluruh hutan, menceritakan tentang keinginannya untuk melihat dunia luar. Dia sering melihat cahaya tanglung yang terbang di langit setiap kali hari lahirnya tiba, dan dia tertanya-tanya apakah maksud di sebalik cahaya tersebut.

Suatu hari, seorang putera raja yang sedang memburu di hutan terdengar nyanyian Rapunzel. Terpesona dengan kemerduan suara itu, sang putera memerhatikan cara Gothel masuk ke menara. Setelah Gothel pergi, putera itu mencuba nasibnya dan memanggil Rapunzel dengan cara yang sama.

---

**Rancangan untuk Bebas**

Rapunzel pada mulanya takut, namun kebaikan hati sang putera membuatkan dia merasa selamat. Mereka mula bertemu secara rahsia setiap petang. Putera itu menceritakan tentang keindahan dunia, tentang pasar yang sibuk, dan tentang istana yang megah. Rapunzel sedar bahawa menara itu bukanlah rumah, melainkan sebuah penjara.

Mereka merancang untuk melarikan diri. Sang putera membawa seutas demi seutas benang sutera setiap kali dia berkunjung, supaya Rapunzel dapat menenun sebuah tangga untuk turun. Namun, Gothel akhirnya mendapat tahu tentang rahsia itu dan dengan marahnya dia memotong rambut panjang Rapunzel serta membuang gadis itu ke padang pasir yang gersang.

---

**Cahaya yang Membimbing Pulang**

Putera raja yang cuba menyelamatkan Rapunzel telah tercedera dan menjadi buta akibat sihir Gothel. Dia berkelana bertahun-tahun dalam kegelapan, hanya dipandu oleh ingatannya terhadap suara nyanyian Rapunzel. Di sisi lain, Rapunzel belajar untuk bertahan hidup sendirian, namun dia tidak pernah berhenti menyanyi dengan harapan suaranya akan didengari.

Akhirnya, takdir mempertemukan mereka semula. Tangisan kegembiraan Rapunzel yang jatuh ke mata sang putera secara ajaib telah memulihkan penglihatan putera itu. Keajaiban sebenar bukanlah pada rambut emas Rapunzel, melainkan pada ketulusan cinta dan harapan yang mereka miliki.

---

**Kebebasan yang Sebenar**

Rapunzel akhirnya kembali ke kerajaan asalnya dan mendapati bahawa dialah puteri yang hilang selama ini. Dia kini bebas untuk berjalan di bawah cahaya matahari dan melihat dunia dengan matanya sendiri. Gothel pula hilang ditelan kegelapan menaranya sendiri, kerana dia tidak faham bahawa burung yang cantik tidak akan pernah boleh dipaksa untuk tinggal di dalam sangkar.

**Pesan Moral:** Kebebasan adalah hak setiap insan. Jangan biarkan ketakutan atau kawalan orang lain memadamkan cahaya impianmu. Keberanian untuk mencari kebenaran akan sentiasa membawa kita kembali ke tempat yang sepatutnya kita berada.`,
  ]
},
itik_buruk_rupa: {
  title: 'Itik Buruk Rupa',
  image: 'assets/icon/Itik Buruk Rupa.jpg',
  content: [
    `**Telur yang Berbeda**

Di sebuah peternakan yang tenang, seekor ibu itik sedang mengerami telur-telurnya. Satu per satu telur itu menetas, memunculkan anak-anak itik yang kuning dan mungil. Namun, ada satu telur yang paling besar dan berwarna abu-abu yang tak kunjung pecah. Ketika akhirnya menetas, keluarlah seekor anak itik yang tubuhnya besar, berbulu abu-abu kusam, dan tampak sangat berbeda dari saudara-saudaranya.

"Duh, kenapa anak ini besar sekali dan rupa-rupanya sangat buruk?" bisik hewan-hewan lain di peternakan. Sejak hari itu, si itik abu-abu selalu diejek dan dikucilkan. Ia tidak hanya dianggap aneh oleh hewan lain, bahkan saudara-saudaranya sendiri sering mematuknya.

---

**Perjalanan Mencari Tempat**

Karena tidak tahan dengan hinaan yang ia terima setiap hari, si itik buruk rupa memutuskan untuk pergi dari peternakan. Ia berkelana sendirian melewati sungai, semak berduri, hingga hutan yang dingin. Ke mana pun ia pergi, ia selalu merasa ditolak. Burung-burung liar menertawakannya, dan hewan lain merasa ia terlalu aneh untuk dijadikan teman.

Musim dingin tiba, dan hidup menjadi semakin sulit. Si itik hampir mati kedinginan di tengah danau yang membeku. Ia merasa sangat sedih dan bertanya-tanya, "Kenapa alam menciptakan aku begitu berbeda jika hanya untuk menderita?"

---

**Bayangan di Atas Air**

Musim semi akhirnya tiba, es mulai mencair dan bunga-bunga mekar. Si itik, yang kini sudah tumbuh lebih besar, melihat sekelompok burung putih yang sangat cantik dan anggun sedang berenang di danau. Burung-burung itu adalah angsa. Si itik merasa sangat kagum, namun ia merasa terlalu malu untuk mendekat.

"Mereka pasti akan mematukku karena aku sangat buruk rupa," pikirnya. Namun, salah satu angsa itu justru berenang mendekat dan mengajaknya bermain. Dengan perasaan takut, si itik menundukkan kepalanya ke arah air dan melihat bayangannya sendiri untuk pertama kalinya setelah sekian lama.

---

**Transformasi yang Mengejutkan**

Ia terkejut melihat apa yang ada di permukaan air. Bayangan yang terpantul bukan lagi seekor itik abu-abu yang besar dan aneh, melainkan seekor burung putih yang anggun dengan leher yang panjang dan megah. Ternyata, selama ini ia bukanlah seekor itik, melainkan seekor angsa yang tersesat di sarang itik.

Anak-anak yang sedang bermain di tepi danau berteriak kegirangan, "Lihat! Ada angsa baru! Dia yang paling cantik di antara semuanya!" Si itik buruk rupa—yang kini menjadi angsa—merasa hatinya dipenuhi oleh kebahagiaan yang belum pernah ia rasakan sebelumnya.

---

**Penerimaan dan Kebahagiaan**

Ia tidak lagi merasa sedih atau rendah diri. Segala penderitaan dan kesepian yang ia alami selama ini telah menempanya menjadi sosok yang tangguh dan penuh rasa syukur. Ia mengepakkan sayapnya yang kuat dan terbang bersama kawanannya yang baru menuju masa depan yang cerah.

**Pesan Moral:** Jangan berkecil hati jika kamu merasa berbeda atau tidak cocok dengan lingkunganmu saat ini. Terkadang, kamu merasa menjadi "itik buruk rupa" hanya karena kamu berada di tempat yang salah. Setiap orang memiliki waktu dan tempatnya sendiri untuk bersinar menjadi sosok yang indah.`,
  ]
},
gadis_penjual_korek_api: {
  title: 'Gadis Penjual Korek Api',
  image: 'assets/icon/Gadis Penjual Korek Api.jpg',
  content: [
    `**Malam Tahun Baru yang Membeku**

Salju turun dengan lebat menyelimuti jalanan kota pada malam terakhir di penghujung tahun. Di tengah kegelapan dan udara yang menusuk tulang, seorang gadis kecil berjalan tanpa alas kaki. Kakinya yang mungil telah membiru karena kedinginan. Di dalam saku celemeknya yang lusuh, terdapat banyak kotak korek api yang sedari pagi belum satu pun laku terjual.

Orang-orang berlalu lalang dengan terburu-buru, mengejar kehangatan rumah mereka masing-masing. Tak ada satu pun yang menoleh atau peduli pada sapaan gemetar si gadis kecil yang menawarkan korek apinya.

---

**Cahaya Kecil dan Keajaiban**

Karena tak sanggup lagi menahan dingin dan takut pulang dengan tangan kosong, gadis itu duduk meringkuk di sudut antara dua bangunan. Tangannya yang kaku mencoba memantik sebatang korek api. *Sret!* Nyala api kecil muncul, memberikan kehangatan yang luar biasa bagi jemarinya.

Dalam nyala api itu, ia seolah-olah melihat sebuah kompor besi besar yang hangat. Namun, saat api itu padam, kompor itu lenyap. Ia memantik batang kedua, dan tiba-tiba dinding bangunan di hadapannya menjadi transparan. Ia melihat meja makan yang penuh dengan hidangan lezat dan kalkun panggang yang harum. Namun, saat korek api padam, hanya ada tembok dingin yang tersisa.

---

**Pertemuan dalam Kehangatan**

Gadis itu memantik batang korek api lagi. Kali ini, ia melihat sebuah pohon natal yang sangat besar dan indah, jauh lebih megah dari yang pernah ia lihat lewat jendela orang kaya. Ribuan lilin bercahaya tampak seperti bintang-bintang di langit.

Saat sebatang bintang jatuh, ia teringat pesan neneknya yang sudah tiada, "Jika ada bintang jatuh, maka ada jiwa yang sedang menuju Tuhan." Gadis itu segera menyalakan sisa seluruh korek apinya agar ia bisa terus melihat bayangan neneknya. Sang nenek tampak begitu bercahaya dan lembut. Nenek itu tersenyum dan merangkul gadis kecil itu dalam pelukan yang paling hangat.

---

**Kebebasan dari Dingin dan Lapar**

Neneknya membawa gadis itu terbang tinggi, menuju tempat yang tidak ada lagi rasa dingin, lapar, maupun kesedihan. Di pagi hari yang cerah pada awal tahun baru, orang-orang menemukan gadis kecil itu duduk bersandar di tembok dengan sisa-sisa batang korek api yang terbakar di sekelilingnya.

Wajahnya tampak tenang dengan senyuman kecil yang menghiasi bibirnya. Orang-orang berkata dengan iba, "Dia pasti mencoba menghangatkan dirinya." Namun, tidak ada yang tahu keajaiban indah apa yang telah ia lihat dan betapa bahagianya ia sekarang di pelukan neneknya.

**Pesan Moral:** Kisah ini mengajarkan kita untuk lebih peduli dan berbagi kasih sayang kepada mereka yang kurang beruntung. Di balik kemewahan yang kita miliki, seringkali ada jiwa-jiwa yang hanya membutuhkan sedikit perhatian dan kehangatan dari sesamanya.`,
  ]
},
sura_dan_baya: {
  title: 'Sura dan Baya',
  image: 'assets/icon/Sura dan Baya.jpg',
  content: [
    `**Penguasa Air yang Tak Pernah Akur**

Dahulu kala di lautan luas, hiduplah seekor hiu perkasa bernama Sura dan seekor buaya ganas bernama Baya. Keduanya adalah pemburu yang luar biasa dan tidak ada satu pun hewan lain yang berani menantang mereka. Namun, karena keduanya sama-sama kuat dan angkuh, mereka sering kali berkelahi hanya karena memperebutkan wilayah berburu atau seekor mangsa kecil.

Pertarungan mereka selalu berlangsung sengit dan berhari-hari, namun tidak pernah ada yang menang atau kalah. Keduanya selalu berakhir dengan luka-luka dan kelelahan yang luar biasa tanpa ada hasil yang pasti.

---

**Perjanjian Garis Air**

Karena bosan terus bertarung, Sura akhirnya mengusulkan sebuah kesepakatan. "Baya, kita tidak akan pernah selesai jika begini terus. Mari kita bagi wilayah kekuasaan kita. Aku akan berkuasa penuh di dalam air laut, dan kau akan berkuasa penuh di daratan dan air tawar seperti sungai."

Baya setuju. "Baiklah, batasnya adalah muara sungai, tempat air laut dan air tawar bertemu." Selama beberapa waktu, suasana menjadi tenang. Sura tetap di laut, dan Baya tetap di sungai serta daratan. Hutan dan pesisir pun menjadi damai tanpa adanya guncangan dari pertarungan mereka.

---

**Pelanggaran yang Menyakitkan**

Suatu hari, persediaan makanan di lautan mulai berkurang. Sura yang lapar mulai menyelinap masuk ke muara sungai secara sembunyi-sembunyi untuk mencari mangsa. Awalnya ia berhasil, namun lama-kelamaan Baya menyadari ada yang tidak beres karena jumlah ikan di sungainya berkurang drastis.

Baya memergoki Sura yang sedang berburu di daerah aliran sungai. "Sura! Kau telah melanggar janji kita! Ini adalah wilayahku!" teriak Baya marah. Sura berdalih bahwa sungai adalah air, dan ia adalah penguasa air. Baya tidak terima karena sungai jelas berada di daratan, bukan di laut lepas.

---

**Pertempuran di Muara**

Perkelahian yang jauh lebih dahsyat dari sebelumnya pun meletus. Air sungai yang tenang berubah menjadi merah karena darah mereka. Sura menggigit ekor Baya di sebelah kanan, sementara Baya membalas dengan menggigit ekor Sura hingga nyaris putus. Sura yang kesakitan akhirnya menyerah dan lari kembali ke laut lepas.

Baya merasa puas karena berhasil mempertahankan wilayahnya, meskipun ia harus menanggung luka permanen di ekornya. Sejak saat itu, Sura tidak pernah lagi berani mendekati wilayah daratan, dan Baya tetap menjadi penguasa tunggal di muara dan sungai.

---

**Abadi Menjadi Nama Kota**

Masyarakat yang menyaksikan keberanian dan kekuatan kedua hewan tersebut mulai menyebut daerah perkelahian itu dengan nama **Surabaya**, yang berasal dari kata *Sura* (ikan hiu) dan *Baya* (buaya). Pertarungan ini pun abadi sebagai lambang kegigihan dalam mempertahankan wilayah dan kehormatan.

**Pesan Moral:** Kesepakatan dan janji haruslah dihormati agar tidak terjadi perselisihan. Namun, kisah ini juga mengajarkan tentang keberanian dalam mempertahankan apa yang menjadi hak milik kita dari gangguan orang lain.`,
  ]
},
kancil_dan_harimau: {
  title: 'Kancil dan Harimau',
  image: 'assets/icon/Kancil dan Harimau.jpg',
  content: [
    `**Napas di Ujung Tanduk**

Suatu siang yang terik, Kancil sedang asyik beristirahat di bawah pohon rindang. Namun, ketenangannya buyar saat semak-semak di depannya berdesir hebat. Muncul seekor Harimau besar dengan taring yang berkilat, siap menerkam. "Ah, makan siangku datang tepat waktu!" raung Harimau dengan suara yang menggetarkan hutan.

Kancil gemetar, tapi otaknya berputar lebih cepat dari jantungnya. Ia melihat sebuah sarang lebah besar yang tergantung rendah di dahan pohon sebelah. "Tunggu, Harimau perkasa!" seru Kancil dengan nada yang dibuat setenang mungkin.

---

**Tugas Suci Sang Kancil**

Harimau berhenti sejenak, bingung melihat mangsanya justru tampak berwibawa. "Apa lagi, Kancil? Kau tidak bisa lari!" gertaknya. Kancil menunjuk sarang lebah itu dengan penuh hormat. "Aku tidak sedang lari. Aku sedang menjalankan tugas negara. Aku diperintahkan oleh Raja Hutan untuk menjaga Gong sakti miliknya."

"Gong Raja?" tanya Harimau penasaran. Kancil mengangguk mantap. "Benar. Ini bukan sembarang gong. Jika dipukul, suaranya sangat merdu hingga siapa pun yang mendengarnya akan merasa seperti di surga. Hanya orang-orang terpilih yang boleh memukulnya."

---

**Tipu Daya di Balik Dahan**

Harimau yang sombong merasa dirinya adalah makhluk paling hebat di hutan. "Aku adalah penguasa di sini! Aku berhak memukul gong itu!" seru Harimau. Kancil berpura-pura ragu. "Wah, jangan, Harimau. Raja bisa marah besar padaku. Kecuali... jika kau membiarkanku pergi jauh dulu agar aku tidak ikut disalahkan."

Harimau setuju. Ia membiarkan Kancil lari menjauh. Setelah merasa jaraknya sudah aman, Kancil berteriak dari kejauhan, "Silakan, Harimau! Pukul gongnya sekuat tenaga agar suaranya terdengar ke seluruh dunia!"

---

**Simfoni Sengatan**

Tanpa pikir panjang, Harimau mengambil sebuah dahan kayu dan *DUARR!* ia memukul sarang lebah itu dengan keras. Bukannya suara merdu yang keluar, melainkan ribuan lebah yang sangat marah keluar dari sarangnya. "Bzzz! Bzzz!" lebah-lebah itu menyerbu Harimau tanpa ampun.

Harimau melolong kesakitan. Ia lari kocar-kacir menuju sungai terdekat untuk menenggelamkan diri agar terhindar dari sengatan. "Kancilll! Awas kau yaaa!" teriak Harimau dari dalam air dengan muka yang sudah bengkak-bengkak.

---

**Kemenangan Sang Cerdik**

Kancil yang sudah berada di sisi lain hutan hanya tertawa kecil sambil mengunyah rumput segar. Ia kembali berhasil selamat dari maut bukan dengan kekuatan otot, melainkan dengan ketenangan dan kecerdikan memanfaatkan situasi.

**Pesan Moral:** Jangan mudah tergiur oleh penampilan atau janji manis yang tidak masuk akal, terutama dari orang yang sedang terdesak. Kesombongan dan rasa ingin tahu yang berlebihan tanpa dipikirkan matang-matang seringkali membawa kita ke dalam masalah besar.`,
  ]
},
putri_salju__dan_tujuh_kurcaci: {
  title: 'Putri Salju dan Tujuh Kurcaci',
  image: 'assets/icon/Putri Salju dan Tujuh Kurcaci.jpg',
  content: [
    `**Pelarian ke Hutan Hijau**

Di sebuah kerajaan yang jauh, hiduplah seorang putri bernama Putri Salju yang memiliki hati seputih salju. Namun, kecantikannya membuat sang Ratu Jahat iri hati. Sang Ratu memerintahkan seorang pemburu untuk membawa Putri Salju ke hutan. Karena tak tega, si pemburu justru melepaskannya. "Larilah jauh ke dalam hutan, Tuan Putri!" serunya.

Putri Salju berjalan di antara pepohonan rindang ditemani burung-burung dan tupai yang ramah. Hingga akhirnya, ia menemukan sebuah rumah mungil yang sangat unik di tengah lebatnya hutan.

---

**Pertemuan dengan Tujuh Sahabat**

Saat pemilik rumah pulang, Putri Salju terkejut melihat tujuh pria kecil yang lucu—para kurcaci! Ada yang pintar membaca peta, ada yang selalu rapi membawa koper, ada yang pemarah, dan ada yang sangat sensitif hingga mudah menangis. Meski awalnya kaget, para kurcaci itu dengan senang hati menerima Putri Salju tinggal bersama mereka.

"Kau bisa tinggal di sini, asalkan kau mau membantu kami merapikan rumah," kata kurcaci tertua sambil tersenyum. Putri Salju pun merasa menemukan keluarga baru yang sangat menyayanginya.

---

**Tipu Daya Sang Ratu**

Keberadaan Putri Salju tercium oleh cermin ajaib milik Ratu Jahat. Dengan menyamar menjadi seorang nenek tua penjual buah, sang Ratu mendatangi rumah kurcaci saat mereka sedang pergi bekerja di pertambangan. Ia menawarkan sebuah apel merah yang sangat ranum namun mengandung ramuan tidur abadi.

Tanpa curiga, Putri Salju menggigit apel itu dan seketika ia jatuh pingsan tak sadarkan diri. Ketika para kurcaci pulang, mereka sangat sedih. Mereka menjaga Putri Salju siang dan malam di dalam sebuah peti kaca yang indah di tengah hutan.

---

**Keajaiban Kasih Sayang**

Suatu hari, seorang Pangeran yang sedang berkelana melewati hutan tersebut. Melihat kecantikan dan ketulusan hati Putri Salju yang terpancar meski ia sedang tertidur, sang Pangeran merasa iba. Saat peti itu dipindahkan, potongan apel beracun di tenggorokan Putri Salju terlepas.

Putri Salju terbangun dan membuka matanya. Sorak-sorai tujuh kurcaci bergema di seluruh hutan! Kejahatan Ratu pun berakhir karena kekuatan cinta dan persahabatan yang tulus dari orang-orang di sekitar Putri Salju.

---

**Kebahagiaan di Istana dan Hutan**

Putri Salju akhirnya kembali ke istana bersama sang Pangeran, namun ia tidak pernah melupakan tujuh sahabat kecilnya. Para kurcaci sering diundang ke istana, dan mereka tetap menjadi penjaga hutan yang paling ceria dan setia selamanya.

**Pesan Moral:** Kecantikan yang sejati berasal dari kebaikan hati. Iri hati hanya akan membawa kehancuran bagi diri sendiri, sementara ketulusan dan persahabatan akan selalu menemukan jalan menuju kebahagiaan.`,
  ]
},
legenda_tangkuban_perahu: {
  title: 'Legenda Tangkuban Perahu',
  image: 'assets/icon/Legenda Tangkuban Perahu.jpeg',
  content: [
    `**Rahasia Kecantikan Abadi**

Dahulu kala di Jawa Barat, hiduplah seorang putri raja yang sangat cantik bernama Dayang Sumbi. Ia memiliki seorang putra bernama Sangkuriang yang sangat gemar berburu. Suatu hari, karena kemarahannya, Sangkuriang tanpa sengaja mengusir Tumang, anjing kesayangan istana yang sebenarnya adalah ayah kandungnya yang dikutuk.

Mengetahui hal itu, Dayang Sumbi sangat marah dan memukul dahi Sangkuriang hingga meninggalkan bekas luka. Sangkuriang pun pergi mengembara meninggalkan istana dengan hati yang hancur. Bertahun-tahun berlalu, Dayang Sumbi tetap terlihat muda dan cantik karena ia memakan ramuan rahasia dari para dewa.

---

**Pertemuan yang Tak Disengaja**

Setelah bertahun-tahun berkelana, Sangkuriang tumbuh menjadi pemuda yang gagah dan sakti. Suatu hari, ia kembali ke tanah kelahirannya dan bertemu dengan seorang wanita yang kecantikannya luar biasa. Tanpa menyadari bahwa wanita itu adalah ibunya, Sangkuriang jatuh cinta dan berniat untuk melamarnya.

Begitu pun dengan Dayang Sumbi yang terpesona dengan kegagahan pemuda itu. Namun, saat Sangkuriang mendekat, Dayang Sumbi terkejut melihat bekas luka di dahi pemuda tersebut. Ia segera menyadari bahwa pemuda sakti ini adalah putranya yang telah lama hilang.

---

**Syarat yang Mustahil**

Dayang Sumbi mencoba menjelaskan kebenaran tersebut, namun Sangkuriang yang sudah dibutakan oleh cinta menolak untuk percaya. Untuk membatalkan pernikahan tanpa menyakiti hati Sangkuriang, Dayang Sumbi mengajukan dua syarat yang mustahil: membendung sungai Citarum dan membuat perahu besar untuk menyeberanginya, semuanya harus selesai sebelum fajar menyingsing.

Sangkuriang menyanggupi syarat itu. Dengan kekuatan gaibnya, ia memanggil ribuan jin untuk membantunya. Dalam waktu singkat, bendungan hampir selesai dan perahu besar pun sudah mulai terbentuk.

---

**Fajar yang Dipaksakan**

Melihat pekerjaan Sangkuriang hampir selesai, Dayang Sumbi panik. Ia berdoa kepada para dewa dan membentangkan kain sutra merah di ufuk timur agar terlihat seperti fajar. Ia juga memerintahkan warga untuk menumbuk padi agar ayam jantan berkokok lebih awal.

Para jin yang mengira hari sudah pagi pun ketakutan dan lari menghilang, meninggalkan pekerjaan yang belum selesai. Sangkuriang sangat marah karena merasa telah dicurangi. Ia menjebol bendungan yang telah dibuatnya hingga menyebabkan banjir besar.

---

**Terbentuknya Gunung Perahu**

Dalam amarahnya, Sangkuriang menendang perahu besar yang hampir jadi itu sekuat tenaga. Perahu itu terbang melayang dan jatuh tertelungkup di kejauhan. Secara ajaib, perahu itu berubah menjadi sebuah gunung yang besar.

Masyarakat kemudian menamakan gunung tersebut **Tangkuban Perahu**, yang berarti perahu yang tertelungkup. Hingga kini, gunung tersebut berdiri kokoh sebagai pengingat akan legenda cinta yang terlarang dan amarah seorang pemuda yang luar biasa sakti.

**Pesan Moral:** Kendalikan amarahmu karena kemarahan yang tidak terkontrol hanya akan membawa kehancuran. Selain itu, kejujuran dan rasa hormat kepada orang tua adalah hal yang paling utama dalam hidup.`,
  ]
},
roro_jonggrang: {
  title: 'Roro Jonggrang',
  image: 'assets/icon/Roro Jonggrang.jpeg',
  content: [
    `**Kekalahan Kerajaan Baka**

Dahulu kala, terjadi perang besar antara Kerajaan Pengging dan Kerajaan Baka. Kerajaan Pengging yang dipimpin oleh pemuda sakti bernama Bandung Bondowoso akhirnya memenangkan pertempuran. Raja Baka gugur dalam perang tersebut, meninggalkan seorang putri yang sangat cantik jelita bernama Roro Jonggrang.

Bandung Bondowoso yang terpesona oleh kecantikan Roro Jonggrang berniat untuk memperisterinya. Namun, Roro Jonggrang merasa bimbang karena Bandung adalah orang yang telah membunuh ayahnya. Ia pun mencari cara untuk menolak lamaran tersebut secara halus.

---

**Seribu Candi dalam Satu Malam**

Roro Jonggrang mengajukan syarat yang sangat berat: "Aku bersedia menjadi permaisurimu, asalkan kau mampu membangun seribu candi dalam waktu satu malam sebelum fajar menyingsing." Bandung Bondowoso yang angkuh menyanggupi syarat itu.

Dengan kesaktiannya, Bandung memanggil ribuan jin dari kegelapan bumi. Dalam waktu singkat, batu-batu besar tersusun rapi menjadi bangunan candi yang megah. Satu per satu candi berdiri, dan saat malam hampir berakhir, candi ke-999 telah selesai dibangun.

---

**Muslihat Cahaya di Ufuk Timur**

Melihat pekerjaan Bandung Bondowoso hampir selesai, Roro Jonggrang panik. Ia segera mengumpulkan para dayang dan warga desa. Ia memerintahkan mereka untuk membakar jerami di sisi timur dan memukul lesung padi dengan keras. Suasana menjadi terang benderang seperti pagi hari, dan ayam jantan pun mulai berkokok bersahutan.

Para jin yang mengira fajar telah tiba langsung ketakutan dan lari kembali ke alam gaib. Mereka meninggalkan pekerjaan yang tinggal sedikit lagi selesai. Bandung Bondowoso sangat terkejut karena usahanya gagal di detik terakhir.

---

**Kutukan Menjadi Batu**

Bandung Bondowoso akhirnya mengetahui bahwa fajar itu adalah tipu muslihat Roro Jonggrang. Amarahnya meledak tak terkendali. "Kau telah mencurangiku, Jonggrang! Jika candi ini kurang satu, maka kau sendiri yang akan melengkapinya!" teriak Bandung dengan suara menggelegar.

Seketika itu juga, tubuh Roro Jonggrang berubah menjadi batu. Ia menjadi arca yang paling indah untuk melengkapi candi ke-1000. Hingga kini, kompleks candi tersebut dikenal sebagai Candi Prambanan, dan arca Roro Jonggrang masih bisa ditemukan di dalamnya.

---

**Keajaiban yang Tersisa**

Legenda ini tetap hidup sebagai bagian dari sejarah Candi Prambanan. Masyarakat percaya bahwa kerja keras yang didasari niat buruk dan pemaksaan tidak akan pernah membuahkan kebahagiaan, sementara kecerdikan terkadang harus dibayar dengan harga yang sangat mahal.

**Pesan Moral:** Jangan pernah memaksakan kehendakmu kepada orang lain, karena cinta tidak bisa dipaksakan dengan kekuasaan. Selain itu, kejujuran adalah dasar dari segala hubungan yang baik; tipu muslihat hanya akan membawa malapetaka pada akhirnya.`,
  ]
},
gajah_baik_hati: {
  title: 'Gajah yang Baik Hati',
  image: 'assets/icon/Gajah yang Baik Hati.jpeg',
  content: [
    `**Raksasa yang Lembut**

Di sebuah hutan yang lebat dan asri, hiduplah seekor gajah bertubuh besar bernama Gani. Meskipun tubuhnya paling besar di antara hewan lainnya, Gani memiliki hati yang sangat lembut. Ia tidak pernah menggunakan kekuatannya untuk menakuti hewan lain, justru ia selalu siap membantu siapa saja yang sedang dalam kesulitan.

Setiap pagi, Gani berjalan menyusuri hutan sambil menyapa teman-temannya. Ada kelinci yang lincah, kura-kura yang tenang, hingga burung nuri yang berwarna-warni. Kehadiran Gani selalu membawa rasa aman bagi penghuni hutan lainnya.

---

**Pertolongan di Musim Kemarau**

Suatu ketika, musim kemarau panjang melanda hutan. Sumber air mulai mengering dan pepohonan banyak yang layu. Hewan-hewan kecil mulai merasa kehausan dan kesulitan mencari makan. Kelinci dan kura-kura tampak lemas di pinggir sungai yang airnya tinggal sedikit.

Melihat teman-temannya menderita, Gani tidak tinggal diam. Ia menggunakan belalainya yang panjang dan kuat untuk menggali tanah di dasar sungai yang kering. Dengan tekun, Gani terus menggali hingga akhirnya air jernih keluar dari dalam tanah. Semua hewan bersorak gembira dan segera meminum air tersebut.

---

**Menyelamatkan Teman Kecil**

Tak hanya itu, Gani juga sering membantu hewan-hewan yang terjebak. Suatu hari, seekor landak kecil terjepit di antara akar pohon yang besar. Ia tidak bisa bergerak dan mulai ketakutan. Gani yang lewat segera menghampiri dan dengan sangat hati-hati mengangkat akar pohon itu menggunakan kekuatannya.

"Terima kasih, Gani! Kau benar-benar penyelamat kami," cicit si landak dengan penuh syukur. Gani hanya tersenyum lebar, merasa bahagia bisa berguna bagi sesama penghuni hutan.

---

**Persahabatan Tanpa Batas**

Kebahagiaan di hutan itu tetap terjaga karena adanya rasa saling menghargai. Meskipun Gani bisa saja memetik buah di pohon yang paling tinggi untuk dirinya sendiri, ia justru sering menjatuhkan buah-buah matang agar bisa dimakan oleh kura-kura, siput, dan hewan melata lainnya yang tidak bisa memanjat.

Gani mengajarkan kepada seluruh hutan bahwa kekuatan sejati bukan digunakan untuk menguasai, melainkan untuk melindungi yang lemah dan berbagi kepada sesama.

---

**Pesan dari Hutan Hijau**

Hingga kini, kisah Gani si gajah baik hati selalu diceritakan oleh para monyet kepada anak-anak mereka di atas pohon. Hutan itu menjadi tempat paling damai di dunia karena mereka memiliki sosok pemimpin yang besar tubuhnya, namun jauh lebih besar lagi hatinya.

**Pesan Moral:** Jadilah pribadi yang baik hati dan suka menolong tanpa memandang perbedaan. Kekuatan atau kelebihan yang kita miliki akan jauh lebih bermakna jika digunakan untuk membantu dan membawa kebahagiaan bagi orang-orang di sekitar kita.`,
  ]
},
mimpi_terbang_si_lala: {
  title: 'Mimpi Terbang Si Lala',
  image: 'assets/icon/Mimpi Terbang Si Lala Kupu-Kupu.jpeg',
  content: [
    `**Ulat Kecil yang Bermimpi**

Di sebuah taman bunga yang luas, hiduplah seekor ulat bulu kecil bernama Lala. Lala menghabiskan hari-harinya dengan merayap perlahan di dahan pohon dan memakan dedaunan hijau. Namun, setiap kali melihat burung atau serangga lain terbang di langit, Lala selalu berhenti sejenak dan bermimpi. "Suatu hari nanti, aku juga ingin melihat dunia dari ketinggian," bisiknya penuh harap.

Teman-teman serangga lainnya sering kali menggoda Lala. Mereka menganggap mimpi Lala terlalu besar untuk seekor ulat yang lambat. Namun, Lala tidak menyerah, ia percaya bahwa setiap makhluk memiliki waktunya sendiri untuk bersinar.

---

**Keajaiban dalam Kepompong**

Waktunya pun tiba bagi Lala untuk beristirahat. Ia membangun sebuah rumah kecil yang kokoh bernama kepompong di bawah dahan yang aman. Di dalam kegelapan itu, Lala tidak merasa takut. Ia justru merasa tenang karena ia tahu bahwa di dalam sana, tubuhnya sedang dipersiapkan untuk sebuah keajaiban besar.

Hari demi hari berlalu dalam kesunyian. Lala belajar tentang kesabaran. Ia mengerti bahwa hal-hal indah tidak bisa datang secara instan; butuh perjuangan dan keteguhan hati untuk mencapai sebuah perubahan yang luar biasa.

---

**Sayap Pelangi yang Mekar**

Suatu pagi yang cerah, kepompong itu mulai retak. Dengan perlahan dan penuh perjuangan, Lala keluar dari rumah kecilnya. Betapa terkejutnya Lala saat merasakan ada sesuatu yang ringan dan lebar di punggungnya. Ketika ia membentangkannya, sepasang sayap cantik berwarna ungu dan kuning yang dihiasi pola indah pun terbuka lebar.

Lala mencoba menggerakkan sayapnya. Awalnya terasa kaku, namun dengan satu kepakan kuat, Lala berhasil terangkat dari dahan. Ia terbang! Lala melayang di udara, melewati padang bunga yang berwarna-warni dan melihat pelangi yang indah di kejauhan.

---

**Terbang Menjemput Bahagia**

Teman-temannya di bawah sana, si Kumbang dan teman-teman serangga lainnya, bersorak kegirangan melihat Lala. "Lihat! Lala benar-benar bisa terbang!" teriak mereka dengan kagum. Lala terbang rendah menyapa mereka, menyebarkan serbuk-serbuk cahaya kebahagiaan dari sayapnya yang berkilau.

Lala kini mengerti bahwa masa-masa sulit saat ia menjadi ulat adalah bagian dari perjalanan hebatnya. Mimpi besarnya bukan lagi sekadar khayalan, melainkan kenyataan yang kini ia jalani dengan penuh rasa syukur.

---

**Pesan dari Langit Biru**

Lala terus terbang mengelilingi taman, menghisap madu bunga dan membagikan semangat kepada teman-temannya yang masih berjuang di tanah. Ia menjadi simbol bahwa tidak ada mimpi yang terlalu tinggi jika kita berani untuk bersabar dan percaya pada proses pertumbuhan diri sendiri.

**Pesan Moral:** Perubahan besar membutuhkan kesabaran dan kerja keras. Jangan pernah menyerah pada mimpimu meskipun orang lain meragukannya. Ingatlah bahwa setiap perjuangan yang sulit akan membuahkan hasil yang indah pada waktunya, layaknya ulat yang berubah menjadi kupu-kupu yang mempesona.`,
  ]
},
legenda_pulau_kapal: {
  title: 'Legenda Pulau Kapal',
  image: 'assets/icon/Legenda Pulau Kapal.jpeg',
  content: [
    `**Kisah Si Kaya yang Sombong**

Dahulu kala di pesisir Kepulauan Bangka Belitung, hiduplah seorang pemuda miskin namun ambisius. Ia memutuskan untuk pergi merantau demi mengubah nasib keluarganya. Setelah bertahun-tahun bekerja keras di negeri seberang, ia berhasil menjadi saudagar kaya raya yang memiliki kapal-kapal besar dengan layar yang megah dan awak kapal yang banyak.

Ia pun memutuskan untuk kembali ke kampung halamannya. Berita tentang kedatangan saudagar kaya ini segera menyebar ke seluruh penjuru desa, termasuk ke telinga ibunya yang sudah tua dan renta.

---

**Pertemuan di Dermaga**

Dengan penuh kerinduan, sang ibu bergegas menuju dermaga. Ia membawa makanan kesukaan putranya, berharap bisa memeluk anak yang selama ini ia doakan siang dan malam. Namun, saat kapal megah itu bersandar, pemuda itu justru merasa malu melihat penampilan ibunya yang berpakaian lusuh dan kusam di depan istri dan anak buahnya yang terpandang.

"Siapa wanita tua ini? Dia bukan ibuku! Ibuku tidak mungkin semiskin ini!" teriak saudagar itu dengan angkuh. Ia memerintahkan anak buahnya untuk mengusir wanita tua itu dari kapalnya.

---

**Sumpah Sang Ibu**

Hati sang ibu hancur berkeping-keping. Ia tidak menyangka putra yang ia besarkan dengan penuh kasih sayang tega tidak mengakuinya hanya karena harta. Sambil berurai air mata, ia menengadahkan tangan ke langit dan berdoa, "Ya Tuhan, jika benar dia adalah anakku, tunjukkanlah kuasa-Mu atas kesombongannya!"

Seketika itu juga, langit yang tadinya cerah berubah menjadi gelap gulita. Angin kencang bertiup dan ombak besar menghantam kapal megah milik saudagar tersebut. Petir menyambar tiang kapal hingga terbakar hebat.

---

**Menjadi Batu di Tengah Laut**

Kapal itu terombang-ambing di tengah badai dahsyat hingga akhirnya terhempas ke batu karang dan hancur. Secara ajaib, kapal megah beserta isinya perlahan-lahan mengeras dan berubah menjadi sebuah pulau batu yang bentuknya menyerupai kapal yang sedang karam.

Saudagar yang sombong itu pun tidak sempat menyelamatkan diri. Ia terkubur bersama keangkuhannya di dalam pulau batu tersebut sebagai peringatan bagi siapa pun agar tidak pernah melupakan asal-usulnya, terutama orang tua yang telah berjasa dalam hidupnya.

---

**Abadi sebagai Pulau Kapal**

Kini, pulau tersebut dikenal sebagai Pulau Kapal di Bangka Belitung. Penduduk setempat sering menceritakan legenda ini kepada anak cucu mereka untuk mengajarkan tentang arti kerendahan hati dan pentingnya berbakti kepada orang tua, karena restu orang tua adalah kunci keberkahan hidup.

**Pesan Moral:** Harta dan jabatan tidak ada artinya jika kita melupakan kasih sayang orang tua. Kesombongan hanya akan membawa kita pada kehancuran, sementara rasa syukur dan bakti akan membawa ketenangan dan kehormatan yang sejati.`,
  ]
},
putri_hijau: {
  title: 'Putri Hijau',
  image: 'assets/icon/Putri Hijau.jpeg',
  content: [
    `**Cahaya Hijau dari Timur**

Dahulu kala di Kerajaan Deli, Sumatera Utara, hiduplah seorang putri yang kecantikannya luar biasa bernama Putri Hijau. Keunikan sang putri adalah tubuhnya yang bisa mengeluarkan cahaya berwarna hijau yang berkilauan, terutama saat malam bulan purnama. Ia tinggal bersama dua saudaranya, Mambang Yazid dan Mambang Khayali yang memiliki kesaktian luar biasa.

Berita tentang kecantikan dan cahaya ajaib Putri Hijau terdengar hingga ke telinga Raja Aceh. Sang Raja yang terpesona berniat untuk melamar sang putri, namun lamaran tersebut ditolak dengan halus oleh saudara-saudara sang putri demi menjaga kedamaian.

---

**Pertempuran di Benteng Putri Hijau**

Penolakan tersebut menyulut kemarahan Raja Aceh. Ia mengirimkan armada perang yang sangat besar untuk menyerang Kerajaan Deli. Pertempuran sengit terjadi di sekitar benteng. Mambang Khayali yang sakti mengubah dirinya menjadi sebuah meriam yang terus menembaki pasukan musuh hingga larasnya pecah menjadi dua bagian (yang kini dikenal sebagai Meriam Puntung).

Meskipun telah berjuang habis-habisan, pasukan Kerajaan Deli akhirnya mulai terdesak. Mambang Yazid menyadari bahwa kekalahan sudah di depan mata, ia pun memberikan pesan terakhir kepada Putri Hijau agar ia selalu membawa sirih dan pinang dalam perjalanannya nanti.

---

**Penculikan dan Rahasia Laut**

Putri Hijau akhirnya ditangkap dan dibawa ke dalam kapal megah milik Raja Aceh untuk dibawa ke istananya. Selama di kapal, Putri Hijau terus bersedih. Sesuai pesan saudaranya, ia meminta izin untuk melakukan ritual terakhir di atas geladak kapal sebelum sampai di Aceh. Ia melemparkan sirih dan pinang ke dalam laut lepas sebagai tanda penghormatan.

Tiba-tiba, langit berubah menjadi gelap dan laut bergejolak hebat. Dari dalam kedalaman samudra, muncul seekor naga raksasa yang sangat besar dan mengerikan. Naga itu ternyata adalah jelmaan dari salah satu saudaranya yang datang untuk menyelamatkan sang putri.

---

**Menuju Istana Dasar Laut**

Naga raksasa itu menyerang kapal Raja Aceh dengan kekuatan dahsyat hingga kapal tersebut berguncang hebat. Sebelum pasukan Raja Aceh sempat bereaksi, naga itu menyambar Putri Hijau dan membawanya masuk ke dalam mulutnya yang besar untuk dilindungi.

Naga itu kemudian menyelam ke dasar laut, membawa Putri Hijau menjauh dari kejaran manusia. Mereka menghilang di balik ombak besar, menuju istana bawah laut yang abadi di mana tidak ada lagi perang atau paksaan yang bisa menyentuh mereka.

---

**Legenda yang Tetap Hidup**

Hingga kini, masyarakat Sumatera Utara masih sering menceritakan legenda ini. Cahaya hijau yang terkadang terlihat di ufuk laut dipercaya sebagai sapaan dari sang putri. Kisah ini menjadi simbol tentang keteguhan hati dan perlindungan persaudaraan yang tak akan pernah putus oleh maut sekalipun.

**Pesan Moral:** Keindahan sejati tidak bisa dipaksakan untuk dimiliki. Selain itu, kasih sayang antar saudara adalah kekuatan terbesar yang bisa melindungi kita di masa-masa tersulit sekalipun. Hormatilah janji dan selalu ingatlah pesan dari orang-orang yang menyayangimu.`,
  ]
},
persahabatan_kerbau_dan_burung_jalak: {
  title: 'Persahabatan Kerbau dan Burung Jalak',
  image: 'assets/icon/Persahabatan Kerbau dan Burung Jalak.jpeg',
  content: [
    `**Gatal yang Tak Tertahankan**

Di sebuah padang rumput yang hijau di dekat kompleks candi yang megah, hiduplah seekor Kerbau bertubuh besar. Meskipun hidupnya tenang dan perutnya selalu kenyang dengan rumput segar, Kerbau memiliki satu masalah besar: tubuhnya sangat gatal. Banyak kutu yang bersembunyi di balik kulitnya yang tebal, dan ia tidak bisa menjangkau punggungnya sendiri untuk menggaruk.

Kerbau sering kali menggosokkan tubuhnya ke batang pohon atau berguling di lumpur, namun rasa gatal itu tetap tidak mau hilang. "Duh, andai saja ada yang bisa membantuku," keluh Kerbau dengan wajah lesu.

---

**Kedatangan Sang Penolong**

Suatu hari, seekor Burung Jalak yang lincah hinggap di dahan pohon dekat tempat Kerbau beristirahat. Ia melihat Kerbau yang tampak gelisah. "Halo Kerbau, kenapa kau tampak tidak tenang?" tanya Jalak dengan suara ceria.

Setelah mendengar keluh kesah Kerbau, Jalak menawarkan bantuan. "Aku bisa membantumu menghilangkan rasa gatal itu. Di punggungmu banyak sekali kutu, dan kebetulan aku sedang sangat lapar. Apakah kau mengizinkanku memakan kutu-kutu itu?" tanya Jalak. Kerbau tentu saja setuju dengan sangat senang hati.

---

**Simbiosis yang Indah**

Jalak pun mulai melompat ke atas punggung Kerbau. Dengan paruhnya yang tajam dan cekatan, ia mematuk satu per satu kutu yang mengganggu. Kerbau memejamkan matanya, merasakan sensasi lega yang luar biasa. Setiap patukan Jalak adalah kebahagiaan bagi Kerbau, dan setiap kutu yang dimakan adalah kenikmatan bagi Jalak.

Mereka pun berbincang banyak hal. Jalak bercerita tentang keindahan pemandangan dari atas langit, sementara Kerbau bercerita tentang kesabaran para petani yang membajak sawah. Tak terasa, seluruh punggung Kerbau kini sudah bersih dari kutu.

---

**Persahabatan Sejati**

"Terima kasih banyak, Jalak! Aku belum pernah merasa selega ini sebelumnya," ucap Kerbau dengan senyum lebar. Jalak pun menjawab, "Terima kasih kembali, Kerbau. Kau memberiku makanan yang sangat enak hari ini. Sekarang aku tidak perlu mencari makan jauh-jauh lagi."

Sejak saat itu, di mana pun Kerbau berada, di situ pula Jalak setia menemani. Mereka menjadi pasangan sahabat yang paling terkenal di seluruh desa. Pemandangan Burung Jalak yang berdiri gagah di atas punggung Kerbau sambil menikmati matahari terbenam menjadi pemandangan yang paling damai di sana.

---

**Pesan dari Tepi Sawah**

Persahabatan mereka mengajarkan kita bahwa setiap makhluk hidup di dunia ini diciptakan untuk saling melengkapi. Kekurangan kita mungkin adalah ladang berkah bagi orang lain, dan kelebihan kita bisa menjadi penyelamat bagi sesama jika kita mau bekerja sama.

**Pesan Moral:** Hubungan yang paling indah adalah hubungan yang saling menguntungkan (simbiosis mutualisme). Jangan ragu untuk meminta bantuan jika butuh, dan jangan pelit untuk menolong jika mampu. Perbedaan ukuran tubuh atau kemampuan bukan penghalang untuk menjalin persahabatan yang tulus.`,
  ]
},
anak_ayam_yang_cerdik: {
  title: 'Anak Ayam yang Cerdik',
  image: 'assets/icon/Anak Ayam yang Cerdik.jpeg',
  content: [
    `**Jebakan di Tengah Hutan**

Suatu hari, seekor Anak Ayam yang ceria sedang berjalan-jalan mencari makan. Tanpa ia sadari, dua ekor rubah licik sedang mengawasinya dari balik pohon. Mereka telah memasang jebakan berupa sebuah tudung saji kayu yang di bawahnya terdapat tumpukan jagung lezat.

"Aku tidak akan menyeberang dengan mudah! Aku punya akal," ucap Anak Ayam saat melihat tumpukan jagung tersebut. Ia merasa ada sesuatu yang tidak beres dengan makanan yang muncul tiba-tiba di tengah jalan.

---

**Memutarbalikkan Keadaan**

Bukannya langsung memakan jagung itu, Anak Ayam justru memanggil teman-temannya dengan suara gaduh seolah-olah ada bahaya besar. Hal ini membuat kedua rubah itu panik dan keluar dari persembunyiannya. Karena terburu-buru, salah satu rubah justru tersandung dan masuk ke dalam jebakannya sendiri.

Anak Ayam pun pergi dengan tenang sambil tersenyum. Ia berhasil menghindari bahaya karena ia selalu waspada dan tidak mudah tergiur oleh sesuatu yang kelihatan terlalu mudah.

**Pesan Moral:** Jangan mudah tergiur oleh keuntungan instan. Selalu gunakan akal sehat dan kewaspadaan agar terhindar dari niat buruk orang lain.`,
  ]
},
'kancil_dan_sabuk_raja': { // Sebelumnya 'Kancil dan Sabuk Raja'
    title: 'Kancil dan Sabuk Raja',
    image: 'assets/icon/Kancil dan Sabuk Raja.jpeg',
    content: [
    `**Ancaman di Jalan Setapak**

Di sebuah hutan yang hijau dan asri, kedamaian terusik oleh kemunculan seekor Ular Raksasa yang haus mangsa. Ular itu menghadang jalan setapak utama, membuat siapa pun takut untuk melintas. Pada saat yang sama, Sang Raja bersama seorang pengawal setianya sedang melakukan perjalanan menuju perbatasan. Mereka terkejut dan gemetar saat melihat ular besar itu mendesis di hadapan mereka. Sang Raja yang membawa sebuah sabuk emas pemberian leluhur hanya bisa terdiam melihat keganasan makhluk tersebut.

Tiba-tiba, muncul Kancil dari balik semak-semak. Dengan langkah yang tenang dan wajah penuh percaya diri, Kancil mendekat. Ia melihat kegelisahan Sang Raja dan langsung memutar otak untuk mencari jalan keluar. Kancil tahu bahwa melawan ular tersebut dengan tenaga adalah hal yang sia-sia, maka ia memutuskan untuk menggunakan kecerdikannya.

---

**Siasat Sabuk Emas**

"Tunggu dulu, wahai Penguasa Sisik yang hebat!" teriak Kancil memecah ketegangan. Ular itu menoleh dengan tatapan tajam. Kancil segera melanjutkan bicaranya, "Apakah kau tidak tahu siapa yang ada di hadapanmu? Raja ini sedang membawa 'Sabuk Kekuatan Jagat'. Hanya mereka yang memiliki tubuh paling perkasa yang mampu mengenakannya tanpa merasa sesak."

Mendengar kata "paling perkasa", kesombongan Sang Ular pun muncul. Ia merasa dialah makhluk terkuat di hutan itu. "Berikan sabuk itu padaku! Aku akan membuktikan bahwa akulah yang paling pantas memakainya!" desis sang Ular dengan angkuh. Atas isyarat dari Kancil, Sang Raja yang mulai paham akan rencana tersebut segera memberikan sabuk emasnya kepada sang Ular.

---

**Kemenangan Sang Cerdik**

Dengan penuh keserakahan, sang Ular melilitkan sabuk emas itu ke tubuhnya yang besar. Ia melilitnya dengan sangat kencang agar terlihat gagah. Namun, malang bagi sang Ular, sabuk emas itu memiliki kunci pengait otomatis yang sangat kuat. Begitu ia melilitnya terlalu erat, sabuk itu mengunci posisi tubuhnya hingga ia tidak bisa lagi bergerak maupun menyerang. Sang Ular kini terperangkap oleh kesombongannya sendiri, melingkar tak berdaya di tanah.

Sang Raja dan pengawalnya bersorak gembira melihat musuh mereka telah terkunci. Sang Raja sangat kagum dengan kecerdikan Kancil yang mampu menyelesaikan ancaman besar tanpa ada satu pun tetes darah yang tumpah. Sebagai rasa syukur, Raja memberkati hutan tersebut agar selalu aman dan menjamin Kancil hidup tenang di sana. Kancil pun berjalan pergi dengan santai, meninggalkan sang Ular yang sibuk meronta-ronta mencoba melepaskan sabuk emasnya.

**Pesan Moral:** Kecerdikan seringkali lebih kuat daripada kekuatan fisik yang besar. Jangan biarkan kesombongan membutakan logikamu, karena musuh terbesar seringkali adalah rasa bangga yang berlebihan pada diri sendiri.`
  ]
},
'semut_dan_kepompong': { // Sebelumnya 'Semut dan Kepompong'
    title: 'Semut dan Kepompong',
    image: 'assets/icon/Semut dan Kepompong.jpeg',
    content: [
    `**Pertemuan di Dahan Pohon**

Di sebuah taman yang penuh dengan bunga berwarna-warni, hiduplah seekor semut kecil yang sangat rajin. Setiap hari, ia bekerja keras mengumpulkan makanan untuk koloninya. Suatu pagi, saat sedang mendaki sebuah dahan pohon, langkah sang semut terhenti. Di hadapannya, tergantung sebuah kepompong hijau yang besar dan diam membisu. Kepompong itu tampak rapuh dan tidak bisa bergerak sama sekali.

Sang semut, dengan sifatnya yang sedikit sombong kala itu, memperhatikan kepompong tersebut. "Kasihan sekali kau, makhluk kecil," ejek sang semut. "Kau hanya bisa diam di sana, terbungkus rapat dan tidak bisa pergi ke mana-mana. Lihatlah aku, aku bisa berlari, memanjat, dan melihat dunia sesukaku. Hidupmu pasti sangat membosankan!" Namun, kepompong itu tetap diam, tidak membalas sepatah kata pun.

---

**Ujian Kesabaran**

Hari berganti hari, sang semut tetap sibuk dengan rutinitasnya. Setiap kali melewati dahan itu, ia selalu menyempatkan diri untuk melihat kepompong yang masih saja membisu. Namun, kepompong itu sebenarnya sedang menjalani sebuah proses yang luar biasa di dalamnya. Ia sedang bersabar, menunggu waktu yang tepat untuk berubah. Pesan yang selalu ia pegang dalam diam adalah: "Aku akan menunggu dengan sabar... waktuku akan tiba."

Sang semut mulai merasa heran mengapa makhluk di dalam kepompong itu begitu tenang meskipun terus diejek. Hingga pada suatu sore yang cerah, keajaiban terjadi. Kulit kepompong yang hijau dan keras itu mulai retak. Sang semut berhenti bekerja dan memperhatikan dengan seksama. Sesuatu yang indah mulai muncul dari dalam bungkusan yang selama ini dianggap remeh oleh sang semut.

---

**Keajaiban yang Terungkap**

Perlahan tapi pasti, sepasang sayap yang lebar dan indah dengan corak jingga yang mempesona mulai membentang. Kepompong yang dulu diam kini telah berubah menjadi seekor kupu-kupu yang sangat cantik. Kupu-kupu itu mengepakkan sayapnya dengan anggun, terbang mengitari sang semut yang terpaku karena kagum. "Lihatlah sekarang, teman kecilku," ujar sang kupu-kupu sambil tersenyum. "Inilah hasil dari kesabaran yang aku jalani."

Sang semut merasa sangat malu atas kesombongannya di masa lalu. Ia menyadari bahwa setiap makhluk memiliki waktu dan prosesnya masing-masing untuk bersinar. Kupu-kupu itu terbang tinggi di atas taman bunga, meninggalkan sang semut yang kini belajar untuk lebih menghargai orang lain. Sejak saat itu, sang semut tidak pernah lagi merendahkan makhluk lain, karena ia tahu bahwa di balik kesabaran, selalu ada keindahan yang menanti.

**Pesan Moral:** Jangan pernah meremehkan orang lain hanya karena mereka tampak diam atau lambat. Setiap orang memiliki waktunya sendiri untuk berkembang. Kesabaran adalah kunci untuk mencapai hasil yang luar biasa dan indah pada akhirnya.`
  ]
},
'Sabai Nan Aluih': {
  title: 'Sabai Nan Aluih',
  image: 'assets/icon/Sabai Nan Aluih.jpeg',
  content: [
    `**Gadis Rupawan nan Teguh Hati**

Di sebuah nagari di Ranah Minang, hiduplah seorang gadis cantik jelita bernama Sabai Nan Aluih. Ia adalah putri dari seorang bangsawan yang baik hati bernama Rajo Babanding. Sabai tidak hanya dikenal karena kecantikannya yang luar biasa dan budi pekertinya yang halus, tetapi juga karena keteguhan hatinya dalam menjaga kehormatan keluarga. Ia hidup bahagia di rumah gadangnya hingga suatu hari, ketenangan itu terusik oleh ambisi seorang penguasa zalim bernama Rajo Nan Panjang.

Rajo Nan Panjang yang kasar dan sombong berniat ingin mempersunting Sabai secara paksa. Namun, Rajo Babanding dengan tegas menolak lamaran tersebut karena ia tahu watak buruk sang penguasa itu. Penolakan ini memicu amarah Rajo Nan Panjang yang kemudian menantang Rajo Babanding untuk berduel di Padang Panitihan. Meskipun usianya sudah tua, demi membela kehormatan putrinya, Rajo Babanding berangkat memenuhi tantangan tersebut dengan gagah berani.

---

**Tragedi di Padang Panitihan**

Pertarungan sengit terjadi di tengah padang yang luas. Sayangnya, Rajo Nan Panjang berbuat curang dengan memerintahkan anak buahnya untuk menyerang dari belakang. Rajo Babanding pun terjatuh dan terluka parah. Kabar mengenai tumbangnya sang ayah sampai ke telinga Sabai Nan Aluih. Dengan hati yang hancur namun membara oleh amarah, Sabai segera berlari menuju lokasi pertarungan. Sesampainya di sana, ia melihat ayahnya terbaring tak berdaya di tanah, sementara Rajo Nan Panjang berdiri di sana dengan tawa sombongnya.

Melihat Sabai datang, Rajo Nan Panjang justru mengejeknya. "Lihatlah ayahmu yang lemah ini, Sabai! Sekarang tidak ada lagi yang bisa melindungimu. Ikutlah denganku!" serunya dengan angkuh. Namun, ia tidak menyadari bahwa di balik wajah lembut Sabai, tersimpan keberanian seorang ksatria. Sabai Nan Aluih tidak menangis meratapi nasib; ia justru mencabut keris pusaka dari pinggang ayahnya dan menantang balik sang pembunuh tersebut.

---

**Pembalasan demi Kehormatan**

Dengan gerakan yang gesit dan penuh tekad, Sabai menghadapi Rajo Nan Panjang. Sang penguasa zalim itu awalnya meremehkan Sabai karena ia hanyalah seorang perempuan. Namun, kemarahan dan keadilan memberikan kekuatan luar biasa pada tangan Sabai. Dalam sebuah gerakan kilat, Sabai berhasil mengalahkan Rajo Nan Panjang dan anak buahnya yang ketakutan melihat keberanian sang gadis. Keadilan akhirnya ditegakkan di tanah Minang oleh tangan seorang putri yang halus budinya.

Masyarakat yang menyaksikan kejadian itu bersorak memuji keberanian Sabai Nan Aluih. Sejak saat itu, nama Sabai Nan Aluih dikenang sebagai simbol keberanian perempuan Minangkabau yang sanggup berdiri tegak membela kebenaran dan kehormatan keluarga. Ia membuktikan bahwa kelembutan seorang perempuan tidak berarti kelemahan, dan ketika kehormatan diusik, ia bisa menjadi pembela yang paling tangguh.

**Pesan Moral:** Jangan pernah meremehkan seseorang berdasarkan penampilan atau jenis kelaminnya. Keberanian sejati muncul dari hati yang tulus untuk membela kebenaran, dan setiap kejahatan pasti akan kalah oleh keteguhan prinsip serta keadilan.`
  ]
},
'Legenda Pesut Mahakam': {
  title: 'Legenda Pesut Mahakam',
  image: 'assets/icon/Legenda Pesut Mahakam.jpeg',
  content: [
    `**Kehidupan di Tepi Sungai Mahakam**

Di sebuah desa yang tenang di tepian Sungai Mahakam, Kalimantan Timur, hiduplah sepasang kakak beradik yang sangat rukun. Mereka tinggal bersama ayah mereka setelah ibu mereka meninggal dunia. Kakak beradik ini dikenal sangat patuh dan rajin membantu ayahnya bekerja di ladang dan mengurus ternak, termasuk seekor kerbau kesayangan mereka. Kehidupan mereka awalnya sangat bahagia dan penuh canda tawa di pondok kayu yang sederhana namun nyaman.

Namun, segalanya berubah ketika sang ayah memutuskan untuk menikah lagi. Ibu tiri yang baru saja datang ternyata memiliki sifat yang sangat berbeda dari mendiang ibu mereka. Di depan sang ayah, ia tampak sangat menyayangi kedua anak tersebut, tetapi di belakangnya, ia sering memperlakukan mereka dengan kasar dan memberikan pekerjaan yang sangat berat tanpa henti. Meskipun begitu, sang kakak tetap bersabar dan selalu menghibur adiknya agar tetap kuat menjalani hari-hari yang sulit.

---

**Muslihat Sang Ibu Tiri**

Suatu hari, sang ayah pergi ke hutan untuk waktu yang cukup lama. Sang ibu tiri memanfaatkan kesempatan ini untuk menyingkirkan kedua anak itu. Ia memberikan sebuah tugas yang mustahil: mereka harus mengumpulkan kayu bakar dalam jumlah yang sangat banyak, dan jika tidak berhasil, mereka tidak diizinkan untuk pulang ke rumah. Kedua anak itu pun bekerja keras di bawah terik matahari hingga kelelahan dan merasa sangat haus.

Dalam kondisi yang sangat lapar dan haus, mereka menemukan sebuah periuk besar berisi bubur panas di dapur pondok mereka saat ibu tiri sedang tertidur. Karena sudah tidak tahan lagi, mereka memakan bubur itu dengan lahap. Namun, keajaiban aneh terjadi. Suhu tubuh mereka tiba-tiba menjadi sangat panas hingga mereka tidak tahan lagi berada di dalam rumah. Dengan sisa tenaga yang ada, mereka berlari menuju tepian Sungai Mahakam untuk mendinginkan diri, diikuti oleh kerbau kesayangan mereka yang tampak cemas.

---

**Perubahan di Air Sungai**

Saking panasnya suhu tubuh mereka, kedua anak itu akhirnya melompat ke dalam air sungai yang dalam. Sang ayah yang baru saja pulang dari hutan terkejut melihat kerbaunya mengejar sesuatu ke arah sungai. Ia berlari menyusul dan mendapati dua ekor makhluk aneh muncul dari permukaan air. Makhluk itu menyerupai lumba-lumba tetapi dengan bentuk kepala yang berbeda, mereka menyemburkan air dari kepalanya dan tampak berenang dengan lincah.

Sang ayah tersadar bahwa kedua makhluk itu adalah anak-anaknya yang telah berubah wujud menjadi ikan Pesut. Mereka tampak bahagia di dalam air, seolah terbebas dari penderitaan yang selama ini mereka rasakan di daratan. Hingga kini, masyarakat Kalimantan Timur percaya bahwa ikan Pesut yang sering muncul di Sungai Mahakam adalah penjelmaan dari kakak beradik tersebut. Pesut Mahakam pun menjadi simbol kelincahan dan pengingat akan pentingnya kasih sayang dalam keluarga.

**Pesan Moral:** Kesabaran dan ketulusan hati akan selalu menemukan jalan keluarnya sendiri. Cerita ini juga mengingatkan para orang tua untuk selalu menjaga dan menyayangi anak-anaknya dengan adil, karena tindakan yang buruk dapat membawa penyesalan yang tidak bisa diperbaiki di kemudian hari.`
  ]
},
'The Pied Piper of Hamelin': {
  title: 'The Pied Piper of Hamelin',
  image: 'assets/icon/The Pied Piper of Hamelin.jpeg',
  content: [
    `**Wabah di Kota Hamelin**

Dahulu kala, sebuah kota indah bernama Hamelin di Jerman sedang mengalami masalah besar. Kota itu diserbu oleh ribuan tikus. Tikus-tikus itu ada di mana-mana—di dapur, di tempat tidur, bahkan di dalam sepatu penduduk. Tikus-tikus tersebut memakan persediaan gandum dan mengganggu ketenangan kota. Para penduduk merasa putus asa dan menuntut Walikota untuk segera menemukan solusi agar kota mereka kembali bersih dan nyaman seperti sediakala.

Suatu hari, muncul seorang pemuda asing yang mengenakan pakaian berwarna-warni dengan topi berbulu kuning. Ia membawa sebuah seruling emas yang tampak sakti. Pemuda itu mengklaim bahwa ia memiliki kemampuan untuk melenyapkan semua tikus di kota tersebut dengan musiknya. "Berikan aku sekantung emas, maka aku akan membersihkan kota ini dari tikus dalam sekejap," janjinya. Sang Walikota yang sudah buntu pun menyetujui perjanjian tersebut.

---

**Alunan Seruling Ajaib**

Si Peniup Seruling mulai memainkan nadanya yang sangat indah dan menghipnotis. Begitu musik terdengar, keajaiban pun terjadi. Dari segala sudut kota, ribuan tikus berlarian keluar mengikuti langkah si pemuda. Mereka seolah terpesona oleh melodi yang dimainkan. Penduduk kota, termasuk anak-anak kecil, keluar dari rumah untuk menyaksikan pemandangan luar biasa itu dengan wajah penuh kekaguman.

Peniup seruling itu berjalan menuju sungai besar di pinggir kota sambil terus memainkan alat musiknya. Tikus-tikus itu mengikuti tanpa ragu dan akhirnya semuanya terjun ke sungai hingga tidak ada satu pun tikus yang tersisa di Hamelin. Kota itu akhirnya bersih dan rakyat pun bersorak gembira. Namun, saat si pemuda datang menagih janjinya, sang Walikota justru mengingkari kesepakatan dan menolak membayar emas yang telah dijanjikan dengan alasan tugas itu terlalu mudah.

---

**Pelajaran dari Sebuah Janji**

Merasa dikhianati dan kecewa, si Peniup Seruling tidak marah dengan berteriak. Ia hanya tersenyum tipis dan kembali meniup serulingnya. Kali ini, nadanya berbeda—jauh lebih manis dan ceria. Mendengar alunan itu, semua anak-anak di kota Hamelin keluar dari rumah mereka dengan wajah ceria dan mulai menari mengikuti si pemuda, persis seperti yang dilakukan tikus-tikus sebelumnya. Orang tua mereka hanya bisa terpaku, tidak mampu mencegah anak-anak mereka yang terpikat oleh musik sakti tersebut.

Peniup Seruling itu membawa anak-anak itu berjalan jauh meninggalkan kota menuju sebuah gunung yang indah. Sejak saat itu, suasana kota Hamelin menjadi sunyi tanpa tawa anak-anak. Penduduk kota akhirnya menyadari kesalahan besar mereka karena telah meremehkan sebuah janji. Mereka belajar dengan cara yang sangat pahit bahwa integritas dan kejujuran adalah hal yang paling berharga, dan mengingkari janji hanya akan membawa kehilangan yang jauh lebih besar.

**Pesan Moral:** Tepati selalu janjimu, sekecil apa pun itu. Kejujuran adalah dasar dari kepercayaan, dan mengingkari sebuah kesepakatan tidak hanya merugikan orang lain, tetapi juga dapat membawa konsekuensi buruk bagi diri kita sendiri di masa depan.`
  ]
},
'La Dana dan Kerbaunya': {
  title: 'La Dana dan Kerbaunya',
  image: 'assets/icon/La Dana dan Kerbaunya.jpeg',
  content: [
    `**Pemuda Cerdik dari Tana Toraja**

Di sebuah desa yang indah di Tana Toraja, Sulawesi Selatan, hiduplah seorang pemuda bernama La Dana. Ia dikenal oleh seluruh penduduk desa sebagai orang yang sangat cerdik dan pandai berbicara. Suatu hari, La Dana bersama seorang temannya diundang ke sebuah pesta adat. Sebagai bagian dari tradisi, mereka dihadiahi seekor kerbau yang sangat besar dan gemuk. Namun, kerbau itu hanya satu, sedangkan mereka berdua. Teman La Dana ingin menyembelih kerbau itu segera untuk dibagi dua, tetapi La Dana yang menyayangi hewan memiliki ide lain.

La Dana membujuk temannya agar kerbau itu dipelihara saja terlebih dahulu supaya semakin besar. "Bagaimana kalau kita bagi tugas saja? Aku akan merawat bagian kepalanya, dan kau merawat bagian badannya," ujar La Dana dengan wajah serius. Temannya yang kurang teliti menyetujui usulan itu tanpa sadar bahwa ia telah masuk ke dalam muslihat cerdik La Dana. Temannya pun sibuk mencarikan rumput untuk memberi makan sang kerbau, sementara La Dana hanya perlu mengelus kepala kerbau itu sesekali.

---

**Muslihat Sang Pemuda**

Hari demi hari berlalu, kerbau itu tumbuh menjadi hewan yang sangat perkasa dengan tanduk yang indah dan ukiran khas di tubuhnya. Teman La Dana mulai merasa lelah karena harus terus bekerja sendirian mengurus badan kerbau tersebut. Ia pun meminta agar kerbau itu segera disembelih saja. Namun, La Dana kembali menggunakan akalnya. "Jika kau menyembelih bagian badanmu, maka bagian kepalaku akan mati. Aku tidak setuju bagianku dirusak!" ucap La Dana.

Suatu hari, ada sebuah perlombaan besar di desa. La Dana mengusulkan untuk membawa kerbau itu ke arena perlombaan. Dengan hiasan emas dan kain adat yang megah, kerbau milik La Dana dan temannya menjadi pusat perhatian. Penduduk desa berkumpul di depan rumah adat Tongkonan untuk melihat kegagahan hewan tersebut. La Dana dengan bangga memukul gong kecil sebagai tanda dimulainya pertunjukan, sementara sang kerbau tampak tenang dan patuh di bawah kendalinya.

---

**Pelajaran bagi Si Rakus**

Melihat kerbau itu menjadi sangat berharga dan terkenal, teman La Dana akhirnya menyadari bahwa ia tidak akan pernah bisa menang berdebat dengan La Dana. La Dana pun akhirnya setuju untuk membeli bagian milik temannya dengan harga yang adil, sehingga kerbau itu tetap hidup dan menjadi teman setianya. La Dana membuktikan bahwa dengan kecerdikan dan ketenangan, kita bisa menyelamatkan sesuatu yang berharga tanpa perlu menghancurkannya.

Kisah La Dana dan kerbaunya ini menjadi legenda yang diceritakan secara turun-temurun di Sulawesi Selatan. Masyarakat setempat menghargai kecerdikan La Dana, namun juga menjadikannya pengingat agar kita selalu berhati-hati dalam membuat perjanjian. La Dana dan kerbaunya yang gagah pun hidup bahagia, berkeliling dari satu desa ke desa lain, membawa pesan bahwa akal pikiran yang tajam adalah harta yang paling berharga.

**Pesan Moral:** Gunakan kecerdikanmu untuk kebaikan dan jangan mudah tergiur oleh keuntungan sesaat. Berpikir kritis sebelum menyetujui sesuatu sangatlah penting agar kita tidak menyesal di kemudian hari karena kurang teliti dalam memahami keadaan.`
  ]
},
'Thumbelina': {
  title: 'Thumbelina',
  image: 'assets/icon/Thumbelina.jpeg',
  content: [
    `**Gadis Kecil dari Kelopak Bunga**

Dahulu kala, ada seorang wanita yang sangat mendambakan seorang anak. Keajaiban pun terjadi ketika sebuah biji bunga yang ia tanam tumbuh menjadi bunga tulip yang sangat indah. Saat kelopak bunga itu terbuka, di dalamnya duduklah seorang gadis kecil yang sangat cantik, yang besarnya tidak lebih dari ibu jari manusia. Karena ukurannya yang mungil, wanita itu menamainya Thumbelina. Ia tidur di dalam cangkang kenari yang halus dan bermain di antara kelopak bunga yang harum setiap harinya.

Kehidupan Thumbelina sangatlah tenang hingga suatu malam, seekor katak besar masuk ke dalam rumah dan membawanya pergi. Katak itu ingin Thumbelina menjadi teman bagi anaknya di rawa-rawa. Thumbelina yang merasa sedih pun menangis, namun ia tidak sendirian. Makhluk-makhluk kecil di hutan, mulai dari ikan hingga kupu-kupu, merasa iba padanya dan membantunya melarikan diri dari rawa-rawa tersebut untuk mencari kebahagiaan yang sesungguhnya.

---

**Petualangan di Dunia Mikro**

Thumbelina memulai petualangan besar di dunia yang tampak raksasa baginya. Ia melewati hutan bunga yang rimbun, bertemu dengan laba-laba yang sibuk merajut jaring perak, dan lebah-lebah yang bercahaya di malam hari. Di tengah perjalanannya, ia bertemu dengan berbagai teman baru, seperti seekor tikus tanah yang bijaksana dan burung pipit yang ceria. Meskipun dunia luar penuh dengan tantangan, Thumbelina tetap memiliki hati yang lembut dan selalu menolong siapa pun yang ia temui di jalan.

Suatu hari, Thumbelina menemukan seekor burung walet yang terluka dan kedinginan. Dengan penuh kasih sayang, ia merawat burung itu sepanjang musim dingin dengan memberikan selimut dari helai rumput dan makanan dari sisa biji-bijian. Kebaikan hati Thumbelina tidak sia-sia; saat musim semi tiba, burung walet itu telah sembuh dan menawarkan diri untuk membawa Thumbelina terbang tinggi melintasi langit menuju negeri yang selalu hangat dan penuh dengan bunga-bunga indah.

---

**Negeri Bunga dan Kebahagiaan**

Burung walet membawa Thumbelina terbang jauh hingga mereka sampai di sebuah kerajaan yang menakjubkan di balik istana tua. Di sana, setiap bunga memiliki peri kecil yang tinggal di dalamnya. Thumbelina sangat terkejut sekaligus bahagia karena akhirnya ia menemukan tempat di mana ia merasa benar-benar diterima. Di negeri itu, ia bertemu dengan Pangeran Peri yang jatuh cinta pada kebaikan hati dan kecantikannya.

Thumbelina pun akhirnya menikah dengan Pangeran Peri dan mendapatkan sepasang sayap indah sehingga ia bisa terbang dari satu bunga ke bunga lainnya. Ia kini hidup bahagia selamanya sebagai ratu bunga, dikelilingi oleh teman-temannya—sang katak, tikus tanah, lebah, dan burung-burung yang kini menjadi sahabat baiknya. Perjalanan Thumbelina mengajarkan kita bahwa meskipun tubuh kita kecil, keberanian dan kebaikan hati akan selalu membimbing kita menemukan kebahagiaan yang sejati.

**Pesan Moral:** Jangan pernah merasa rendah diri karena kekurangan fisik atau ukuran tubuhmu. Keberanian untuk menghadapi dunia dan kebaikan hati kepada sesama makhluk hidup akan membawa keberuntungan dan kebahagiaan yang luar biasa pada waktunya.`
  ]
},
'Puss in Boots': {
  title: 'Puss in Boots',
  image: 'assets/icon/Puss in Boots.jpeg',
  content: [
    `**Warisan yang Tak Terduga**

Di sebuah desa kecil, seorang anak bungsu penggiling gandum merasa sangat malang karena hanya mendapatkan warisan berupa seekor kucing. Namun, kucing ini bukanlah kucing biasa. Dengan sepasang sepatu boots kulit, topi petualang dengan bulu kuning, dan jubah cokelat yang gagah, kucing cerdik ini berjanji akan mengubah nasib tuannya. "Jangan bersedih, Tuanku. Berikan aku sebuah tas dan sepasang sepatu yang bagus, maka kau akan melihat bahwa aku adalah warisan yang paling berharga," ucap si Kucing dengan penuh percaya diri.

Si Kucing mulai menyusun rencana besar. Ia menggunakan kecerdikannya untuk memikat hati Raja. Ia sering membawakan hadiah hasil buruan dari hutan dan mengklaim bahwa itu adalah kiriman dari tuannya yang ia beri gelar bangsawan palsu, "Marquis de Carabas". Raja yang sering menerima hadiah lezat pun mulai penasaran dengan sosok bangsawan dermawan yang diceritakan oleh si Kucing bersepatu tersebut.

---

**Muslihat di Depan Istana**

Suatu hari, si Kucing mengetahui bahwa Raja dan Putrinya akan melintas di dekat sungai. Ia menyuruh tuannya melompat ke air dan berpura-pura tenggelam setelah menyembunyikan pakaian kumuhnya. "Tolong! Marquis de Carabas dirampok dan tenggelam!" teriak si Kucing dengan panik. Raja yang mengenali si Kucing segera memerintahkan pengawalnya untuk menolong dan memberikan pakaian terbaik dari kerajaan kepada sang pemuda.

Kini, sang pemuda tampak sangat tampan dan gagah mengenakan pakaian biru kerajaan, terlihat seperti pangeran sungguhan. Puteri Raja pun langsung jatuh hati saat melihatnya. Sementara itu, si Kucing berlari mendahului rombongan menuju sebuah kastil megah milik seorang raksasa jahat yang bisa berubah wujud. Dengan kelicikannya, si Kucing menantang sang raksasa untuk berubah menjadi tikus kecil. Begitu sang raksasa berubah, si Kucing dengan cepat menerkamnya, sehingga kastil itu kini kosong dan menjadi milik tuannya.

---

**Kebahagiaan Sang Marquis**

Saat kereta kencana Raja tiba di depan gerbang kastil yang berkilauan, si Kucing menyambut mereka dengan hormat. "Selamat datang di kastil milik Marquis de Carabas, Baginda Raja!" serunya dengan bangga. Raja sangat terkesan dengan kekayaan dan kemegahan yang dimiliki sang pemuda. Ia tidak menyangka bahwa pengirim hadiah selama ini ternyata adalah seorang bangsawan muda yang kaya raya dan memiliki kastil yang begitu indah.

Akhirnya, dengan restu sang Raja, pemuda itu menikah dengan Puteri Raja yang cantik. Mereka hidup bahagia di dalam kastil megah tersebut, dikelilingi oleh taman bunga yang indah. Si Kucing yang cerdik pun tetap setia menemani mereka, bukan lagi sebagai pemburu tikus, melainkan sebagai bangsawan istana yang sangat dihormati. Ia membuktikan bahwa dengan kepercayaan diri dan akal pikiran, nasib yang paling buruk sekalipun bisa berubah menjadi keberuntungan yang luar biasa.

**Pesan Moral:** Jangan pernah meremehkan apa yang kamu miliki sekarang. Kecerdikan, keberanian, dan kepercayaan diri seringkali jauh lebih berharga daripada harta benda yang besar. Dengan usaha dan strategi yang tepat, setiap rintangan bisa diubah menjadi peluang menuju kesuksesan.`
  ]
}
    };
if (data[this.ceritaId]) {
      // Jika ID ada di daftar manual di atas, pakai data manual
      this.cerita = data[this.ceritaId];
    } else {
      // Jika tidak ada di manual, baru tanya ke Database MySQL
      this.loadDetail(this.ceritaId);
    }
  }

  // Fungsi loadDetail (Berdiri sendiri di luar ngOnInit)
  loadDetail(storyId: string) {
    this.http.get(`https://layananapp.my.id/story_api/get_detail.php?id=${storyId}`)
      .subscribe((res: any) => {
        this.cerita = res;
      }, error => {
        console.error('Data tidak ditemukan di Local maupun DB', error);
      });
  }
  // Fungsi ini dijalankan saat user klik tombol Love/Favorite
toggleFavorite() {
  // 1. Ambil daftar favorit yang sudah ada di memori HP (jika ada)
  let favorites = JSON.parse(localStorage.getItem('my_favorites') || '[]');

  // 2. Cek apakah cerita ini sudah ada di daftar favorit?
  const index = favorites.findIndex((item: any) => item.id === this.cerita.id);

  if (index > -1) {
    // Jika sudah ada, berarti user mau menghapus dari favorit
    favorites.splice(index, 1);
    console.log("Dihapus dari favorit");
  } else {
    // Jika belum ada, tambahkan data cerita ini ke daftar
    favorites.push({
      id: this.cerita.id,
      title: this.cerita.title,
      image: this.cerita.image
    });
    console.log("Ditambah ke favorit");
  }

  // 3. Simpan kembali daftar terbaru ke memori HP
  localStorage.setItem('my_favorites', JSON.stringify(favorites));
}
}