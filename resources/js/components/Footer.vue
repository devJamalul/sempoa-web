<template>
    <footer class="w-full mx-auto pt-10">
  
      <!-- Grow Your Business -->
      <section class="relative bg-darkGreen w-full h-full overflow-hidden mb-5">
          
        <!-- Circle background -->
        <div class="absolute top-0 w-full">
          <img src="/images/widget-bg.svg" alt="Widget Banner" class=" md:h-[400px] lg:w-full"> 
        </div>
        <!-- End Circle background -->
      
        <!-- Content -->
        <div class="px-5 md:container mx-auto space-y-2 text-neutral-100 p-10 md:p-20 w-full md:w-3/4 lg:w-1/2">
          <h3 class="font-bold text-lg md:text-2xl leading-tight">Mulai Kembangkan Bisnis dengan Sempoa</h3>
          <p class="text-xs md:text-sm pt-0.5 md:pt-2 opacity-75">Tinggalkan sistem pembukuan manual dan beralih ke software akuntansi online yang modern & mudah digunakan. Coba gratis sekarang.</p>
  
          <div class="px-3 space-y-3 pt-5 text-sm md:text-base">
  
            <li class="flex items-center gap-2">
              <img src="/images/check.svg" alt="Check" class="h-5">
              <span class="text-lightGreen">Mudah dan Aman</span>
            </li>
  
            <li class="flex items-center gap-2">
              <img src="/images/check.svg" alt="Check" class="h-5">
              <span class="text-lightGreen">Berlangganan yang fleksibel</span>
            </li>
  
            <li class="flex items-center gap-2">
              <img src="/images/check.svg" alt="Check" class="h-5">
              <span class="text-lightGreen">98.5% SLA Uptime</span>
            </li>
  
          </div>
  
        </div>
        <!-- End Content -->
  
      </section>
      <!-- End Grow Your Business -->
  
      <!-- Top Footer Content -->
      <section class="px-5 md:container mx-auto text-darkGreen list-none text-sm">
  
        <!-- Footer Content -->
        <div class="flex flex-col md:flex-row flex-wrap items-start gap-20">
          
          <!-- Address -->
          <div class="pt-3">
  
            <!-- Sempoa Logo -->
            <li>
              <img src="/images/sempoa-logo.svg" alt="Sempoa Logo" class="w-40">
            </li>
            <!-- End Sempoa Logo -->
  
            <li class="py-2">
              <p>Green Ville Blok BG No 69 Duri Kepa,</p>
              <p>Jakarta Barat 11510</p>
            </li>
            <!-- <li class="flex gap-2 py-1.5">
              <img src="/images/phone-icon.svg" alt="Phone" class="w-5">
              <p>021 5007080</p>
            </li> -->
            <li class="flex gap-2 py-1.5">
              <img src="/images/email-icon.svg" alt="Email" class="w-5">
              <a href="mailto:info@sempoa.id">info@sempoa.id</a>
            </li>
            <li class="flex gap-2 py-1.5">
              <img src="/images/wa-icon.svg" alt="Email" class="w-5">
              <a :href="`https://wa.me/${public_config.whatsapp}?text=Selamat%20datang%20di%20Sempoa!%20Bagaimana%20kami%20bisa%20membantu%20anda%20hari%20ini%3F`" target="_blank">
                <p>{{ public_config.whatsapp }}</p>
              </a>
            </li>
  
            <!-- Social medias -->
            <li class="space-x-3 flex pt-2">
              <a :href="`${public_config.facebook}`"  target="_blank" class="flex gap-2 items-center">
                <img src="/images/fb.svg" alt="Facebook" class="w-5">
                <span>Facebook</span>
              </a>
              <!-- <a href="#">
                <img src="/images/youtube.svg" alt="Facebook">
              </a>
              <a href="#">
                <img src="/images/twitter.svg" alt="Facebook">
              </a>
              <a href="#">
                <img src="/images/ig.svg" alt="Facebook">
              </a> -->
            </li>
            <!-- End Social medias -->
  
          </div>
          <!-- End Address -->
  
          <!-- About Sempoa -->
          <div class=" h-full space-y-2">
            <h5 class="font-bold text-lg">Tentang Sempoa</h5>
            <li>
              <a href="/about" class="hover:underline">Tentang Perusahaan</a>
            </li>
            <li>
              <a href="#" class="hover:underline">Klien Kami</a>
            </li>
            <!-- <li>
              <a href="#" class="hover:underline">Blog</a>
            </li> -->
            <li>
              <a href="#" class="hover:underline">Karir</a>
            </li>
            <!-- <li>
              <a href="#" class="hover:underline">Kebijakan Privasi</a>
            </li>
            <li>
              <a href="#" class="hover:underline">FAQs</a>
            </li> -->
          </div>
          <!-- End About Sempoa -->
  
          <!-- Sempoa Features -->
          <div class=" h-full space-y-2">
            <h5 class="font-bold text-lg">Fitur Sempoa</h5>
            <li>
              <a href="#" class="hover:underline">Chart of Accounts</a>
            </li>
            <li>
              <a href="#" class="hover:underline">Invoice</a>
            </li>
            <li>
              <a href="#" class="hover:underline">Cash & Bank</a>
            </li>
            <li>
              <a href="#" class="hover:underline">Account Receivable</a>
            </li>
            <li>
              <a href="#" class="hover:underline">Account Payable</a>
            </li>
            <li>
              <a href="#" class="hover:underline">General Ledger</a>
            </li>
            <li>
              <a href="#" class="hover:underline">Financial Reports</a>
            </li>
            <li>
              <a href="#" class="hover:underline">Trial Balance</a>
            </li>
          </div>
          <!-- End Sempoa Features -->
  
          <!-- Sempoa Helps -->
          <!-- <div class=" h-full space-y-2">
            <h5 class="font-bold text-lg">Bantuan</h5>
            <li>
              <a href="#" class="hover:underline">Harga</a>
            </li>
            <li>
              <a href="#" class="hover:underline">Hubungi Kami</NuxtLink>
            </li>
          </div> -->
          <!-- End Sempoa Helps -->
  
        </div>
        <!-- End Footer Content -->
  
      </section>
      <!-- End Top Footer Content -->
  
      <!-- Bottom Footer Content -->
      <section class="bg-lightGreen/10 list-none text-sm mt-5 py-5 text-center">
        <div class="flex flex-col justify-center items-center">
          <img src="/images/sempoa-logo-footer.svg" alt="Sempoa Logo Footer" class="w-36">
          <p class="text-sm"> &copy; 2021 All Rights Reserved. PT Sempoa Prima Teknologi. </p>
        </div>
      </section>
      <!-- End Bottom Footer Content -->
  
    </footer>
  </template>
<script setup>

defineProps({
      public_config: Object,
})
</script>
