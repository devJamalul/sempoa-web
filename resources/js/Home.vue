
<template>
    
    
    <Header :public_config="public_config"/>
      <main class="w-full mx-auto  ">
  
        <!-- Hero Section -->
        <section class="relative mt-16 lg:mt-0">
            
          <!-- Background Image -->
          <div class="w-full h-full">
            <img src="/images/home-banner.png" alt="Home Banner" class="h-[300px] md:h-full w-full object-cover"> 
          </div>
          <!-- End Background Image -->
  
          <!-- Home Hero Text -->
          <div class="px-3  md:container mx-auto">
            <div class="absolute top-0 md:-top-10 lg:top-0 w-3/4 md:w-1/2 items-start justify-center flex flex-col z-10 h-full gap-5">
           
              <h2 class="text-base md:text-2xl lg:text-4xl text-darkGreen font-semibold">Software Akuntansi Online Terintegrasi untuk Kembangkan Bisnis Tanpa Batas</h2>
              <h3 class="text-xs md:text-sm lg:text-base text-darkGreen">Di Sempoa, kami percaya bahwa semua proses akuntansi perusahaan dapat dilakukan dengan mudah dan mendetil, sehingga memberikan gambaran posisi keuangan yang akurat dan terpercaya!</h3>
  
              <!-- Hero Button -->
              
                <a  href="/register" class="uppercase bg-gradient-to-t from-[#07BE5E] to-lightGreen shadow-md text-neutral-100 p-2 px-3 rounded-full text-xs lg:text-sm font-semibold">Coba gratis 14 hari</a>
              <!-- End Hero Button -->
  
            </div>
          </div>
          <!-- End Home Hero Text -->
  
        </section>
        <!-- Hero Section -->
  
        <!-- About Sempoa Feature -->
        <section id="about" class="px-5  md:container mx-auto space-y-10 md:space-y-20 py-10 md:py-20">
          
          <!-- About Sempoa Feature Slider -->
          <ClientOnly>
            <swiper
              class="relative"
              :slidesPerView="1"
              :autoplay="{delay: 5000, disableOnInteraction: false}"
              :lazy="true"
              :loop="true"
            >
              <swiper-slide>
                <div class="w-full flex justify-center">
                  <img src="/images/img-invoice-2.svg" alt="Invoice Image" class="h-[200px] md:h-[400px] object-cover rounded-lg">
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="w-full flex justify-center">
                  <img src="/images/img-cashbank-2.svg" alt="Invoice Image" class="h-[200px] md:h-[400px] object-cover rounded-lg">
                </div>
              </swiper-slide>
            </swiper>
          </ClientOnly>
          <!-- End About Sempoa Feature Slider -->
  
          <!-- About Sempoa Feature Details -->
          <div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
  
              <li class="flex flex-col items-center justify-start gap-1 border-2 rounded-2xl p-5">
                <img src="/images/widget1-img1.svg" alt="Dashboard Keuangan">
                <h4 class="font-semibold">Dashboard Keuangan</h4>
                <p class="text-sm text-center pt-4 opacity-60">Kemudahan untuk melihat data keuangan perusahaan secara menyeluruh</p>
              </li>
  
              <li class="flex flex-col items-center justify-start gap-1 border-2 rounded-2xl p-5">
                <img src="/images/widget1-img2.svg" alt="Manajemen Invoice">
                <h4 class="font-semibold">Manajemen Invoice</h4>
                <p class="text-sm text-center pt-4 opacity-60">Membuat tagihan ke pelanggan dengan mudah dan otomatis tercatat ke buku besar</p>
              </li>
  
              <li class="flex flex-col items-center justify-start gap-1 border-2 rounded-2xl p-5">
                <img src="/images/widget1-img3.svg" alt="Kas & Bank">
                <h4 class="font-semibold">Kas & Bank</h4>
                <p class="text-sm text-center pt-4 opacity-60">Melihat flow uang masuk dan keluar baik di kas perusahaan ataupun rekening bank</p>
              </li>
  
            </div>
          </div>
          <!-- End About Sempoa Feature Details -->
  
          <!-- Reason To Choose Sempoa -->
          <div class="flex flex-col md:flex-row justify-between items-center gap-5">
  
            <!-- Left Section -->
            <div class="w-full lg:w-1/2">
              <ClientOnly>
                <swiper
                  class="relative"
                  :slidesPerView="1"
                  :autoplay="{delay: 5000, disableOnInteraction: false}"
                  :lazy="true"
                  :loop="true"
                >
                  <swiper-slide>
                    <div class="w-full flex justify-center">
                      <img src="/images/img-1.svg" alt="Image" class="h-[200px] md:h-[300px] lg:h-[400px] object-cover rounded-lg">
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="w-full flex justify-center">
                      <img src="/images/img-2.svg" alt="Image" class="h-[200px] md:h-[300px] lg:h-[400px] object-cover rounded-lg">
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="w-full flex justify-center">
                      <img src="/images/img-3.svg" alt="Image" class="h-[200px] md:h-[300px] lg:h-[400px] object-cover rounded-lg">
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="w-full flex justify-center">
                      <img src="/images/img-4.svg" alt="Image" class="h-[200px] md:h-[300px] lg:h-[400px] object-cover rounded-lg">
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="w-full flex justify-center">
                      <img src="/images/img-5.svg" alt="Image" class="h-[200px] md:h-[300px] lg:h-[400px] object-cover rounded-lg">
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="w-full flex justify-center">
                      <img src="/images/img-6.svg" alt="Image" class="h-[200px] md:h-[300px] lg:h-[400px] object-cover rounded-lg">
                    </div>
                  </swiper-slide>
                </swiper>
              </ClientOnly>
            </div>
            <!-- End Left Section -->
  
            <!-- Right Section -->
            <div class="w-full lg:w-1/2 space-y-5 text-sm md:text-base">
              <h3 class="font-bold text-base md:text-lg leading-tight">Alasan Sempoa menjadi pilihan terbaik software akuntansi bisnis UMKM di Indonesia</h3>
              <div class="space-y-3">
  
                <li class="flex items-center gap-2">
                  <img src="/images/bullet-list.svg" alt="Image" class="h-5">
                  <span>Fitur keuangan dan akuntansi yang lengkap</span>
                </li>
  
                <li class="flex items-center gap-2">
                  <img src="/images/bullet-list.svg" alt="Image" class="h-5">
                  <span>Penggunaan yang mudah dan sederhana</span>
                </li>
  
                <li class="flex items-center gap-2">
                  <img src="/images/bullet-list.svg" alt="Image" class="h-5">
                  <span>Berdasarkan pengalaman kerja para founder</span>
                </li>
  
                <li class="flex items-center gap-2">
                  <img src="/images/bullet-list.svg" alt="Image" class="h-5">
                  <span>Didukung tenaga ahli di bidang keuangan dan akuntansi</span>
                </li>
  
              </div>
            </div>
            <!-- End Right Section -->
  
          </div>
          <!-- End Reason To Choose Sempoa -->
  
        </section>
        <!-- End About Sempoa Feature -->
  
        <!-- Features -->
        <section id="features" class="px-5  md:container mx-auto space-y-10 md:space-y-20 py-10 md:py-20 flex flex-col justify-center w-full">
          
          <!-- Top Section -->
          <div class="space-y-2">
            <h3 class="font-bold text-base md:text-xl lg:text-2xl leading-tight text-center">Fitur lengkap dan terintegrasi untuk pertumbuhan bisnis yang maksimal</h3>
            <p class="text-sm md:text-base text-center opacity-75">Sempoa ERP dilengkapi dengan berbagai fitur yang siap mendukung semua transaksi keuangan perusahaan</p>
          </div>
          <!-- End Top Section -->
  
          <!-- Features -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            
            <li class="flex flex-col items-center justify-center gap-1 border-2 rounded-2xl p-5">
              <img src="/images/menu-icon-coa.svg" alt="Chart of Accounts">
              <h4 class="font-semibold">Chart of Accounts</h4>
              <p class="text-sm text-center pt-4 opacity-60">Penomoran kode akun yang sistematis mendukung pemasukan data transaksi yang akurat</p>
            </li>
  
            <li class="flex flex-col items-center justify-center gap-1 border-2 rounded-2xl p-5">
              <img src="/images/menu-icon-invoice.svg" alt="Invoice">
              <h4 class="font-semibold">Invoice</h4>
              <p class="text-sm text-center pt-4 opacity-60">Pembuatan tagihan kepada pelanggan yang dapat dicetak atau dikirimkan melalui email</p>
            </li>
  
            <li class="flex flex-col items-center justify-center gap-1 border-2 rounded-2xl p-5">
              <img src="/images/menu-icon-cashnbank.svg" alt="Cash & Bank">
              <h4 class="font-semibold">Cash & Bank</h4>
              <p class="text-sm text-center pt-4 opacity-60">Pencatatan kejadian pemasukan dan pengeluaran uang pada kas perusahaan dan rekening bank</p>
            </li>
  
            <li class="flex flex-col items-center justify-center gap-1 border-2 rounded-2xl p-5">
              <img src="/images/menu-icon-ar.svg" alt="Account Receivable">
              <h4 class="font-semibold">Account Receivable</h4>
              <p class="text-sm text-center pt-4 opacity-60">Pencatatan piutang dagang untuk semua transaksi yang bersifat accrual</p>
            </li>
  
            <li class="flex flex-col items-center justify-center gap-1 border-2 rounded-2xl p-5">
              <img src="/images/menu-icon-ap.svg" alt="Account Payable">
              <h4 class="font-semibold">Account Payable</h4>
              <p class="text-sm text-center pt-4 opacity-60">Pencatatan hutang dagang perusahaan kepada pemasok barang atau penyedia layanan</p>
            </li>
  
            <li class="flex flex-col items-center justify-center gap-1 border-2 rounded-2xl p-5">
              <img src="/images/menu-icon-gl.svg" alt="General Ledger">
              <h4 class="font-semibold">General Ledger</h4>
              <p class="text-sm text-center pt-4 opacity-60">Jurnal Umum adalah catatan lengkap dari semua transaksi keuangan bisnis perusahaan</p>
            </li>
  
            <li class="flex flex-col items-center justify-center gap-1 border-2 rounded-2xl p-5">
              <img src="/images/menu-icon-fr.svg" alt="Income Statement">
              <h4 class="font-semibold">Income Statement</h4>
              <p class="text-sm text-center pt-4 opacity-60">Laporan laba rugi untuk melihat perkembangan usaha perusahaan pada suatu masa</p>
            </li>
  
            <li class="flex flex-col items-center justify-center gap-1 border-2 rounded-2xl p-5">
              <img src="/images/menu-icon-tb.svg" alt="Trial Balance">
              <h4 class="font-semibold">Trial Balance</h4>
              <p class="text-sm text-center pt-4 opacity-60">Neraca Percobaan menampilkan saldo pada buku besar perusahaan per suatu masa tertentu</p>
            </li>
  
          </div>
          <!-- Features -->
  
        </section>
        <!-- Features -->
  
  
      </main>
    <FloatWhatshapp :public_config="public_config"/>
    <Footer :public_config="public_config"/>
    
    
  </template>
  
  <script setup>
    
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Autoplay } from 'swiper/modules';
    // Import Swiper styles
    import 'swiper/css';
    import SwiperCore from 'swiper';
    import Header from './components/Header.vue';
    import Footer from './components/Footer.vue';
    import FloatWhatshapp from './components/WhatsappFloatingButton.vue'
    
 
    defineProps({
      public_config: Object,
    })
    // import { Swiper, SwiperSlide } from 'swiper/vue';
    // import 'swiper/css';
    // import 'swiper/css/autoplay';
    // import 'swiper/css/lazy'
  
    // const config = useRuntimeConfig()
  
    // // Must use SwiperCore to register props
    SwiperCore.use([Autoplay]);
  
    // // const sliderBreakpoints = {
    // //   // Tablet breakpoints
    // //   768: {
    // //     slidesPerView: 5,
    // //     spaceBetween: 10
    // //   },
    // //   1280: {
    // //     slidesPerView: 7,
    // //     spaceBetween: 10
    // //   }
    // // }
  
    
    
  
  </script>