<template>
  <Header :public_config="public_config"/>
    <main class="lg:container mx-auto ">

        <!-- Welcome Section -->
        <section class="flex flex-col-reverse lg:flex-row justify-between text-darkGreen pt-10 space-x-5 lg:px-0 px-5 ">
          
          <!-- Left Section -->
          <div class="w-full lg:w-1/2 mx-5 mt-20">
            <h2 class="font-black text-3xl">Welcome. </h2>
            <p class="text-justify mt-3">
              We are PT Sempoa Prima Teknologi, founder of Sempoa ERP. With our many years
              of experience in finance and tax, we build this system with the belief that
              managing a company's finance should be easy but complete. We designed Sempoa
              ERP to be easy-to-use and integrate-able with other systems that any single
              company may use.
            </p>
          </div>
          <!-- End Left Section -->
  
          <!-- Right Section -->
          <div class="w-full lg:w-1/2 mx-3 mt-20">
            <img src="/images/banner-invoice.png" alt="Invoice" class="rounded" />
          </div>
          <!-- End Right Section -->
        </section>
        <!-- End Welcome Section -->
        
        <!-- Cerita Sempoa Section -->
        <section class="text-darkGreen pt-10 lg:px-0 px-5">
          <h2 class="font-black text-3xl border-b-2 border-darkGreen flex w-fit mb-3 pb-2">Cerita Sempoa</h2>
          <div class="flex flex-col lg:flex-row justify-between gap-3">
  
            <!-- Left Section -->
            <div class="w-full lg:w-1/2 mx-5">
              <img src="/images/blog-img-1.png" alt="Invoice" />
            </div>
            <!-- End Left Section -->
  
            <!-- Right Section -->
            <div class="w-full lg:w-1/2 text-justify">
              In 2020, Peter Anugrah and Ivan Tanu met in Greenville, Jakarta. Peter is a
              prominent tax consultant who has been in the industry for more than 30 years.
              Ivan is a professional IT consultant with experiences in SAP consulting and
              Jakarta government.<br />
              <br />
              Together they decided to develop the software Sempoa ERP, a cloud based ERP
              sysetm that is designed for Indonesia.<br />
              <br />
              Today Sempoa ERP has 2 major features - Finance and Inventory. Sempoa ERP's
              core is Finance. With our Finance module, you can write down Invoices and
              Cashflow in and see the results as an accurate Profit &amp; Loss report. With
              our Inventory module, you can track down the current stock as it is consumed
              during sales while automatically update its commercial value.
            </div>
            <!-- End Right Section -->
          </div>
        </section>
        <!-- End Cerita Sempoa Section -->
  
        <!-- Divider Chart -->
        <section class="text-darkGreen pt-10 lg:px-0 px-5">
          <div class="flex justify-between space-x-5">
  
            <!-- Left Section -->
            <div class="w-1/4">
              <img src="/images/circles-chart.svg" alt="Circle Chart" />
            </div>
            <!-- End Left Section -->
  
            <!-- Right Section -->
            <div class="w-3/4">
              <img src="/images/line-chart.svg" alt="Invoice" />
            </div>
            <!-- End Right Section -->
          </div>
        </section>
        <!-- End Divider Chart -->
  
        <!-- Keunggulan Sempoa Section -->
        <section class="text-darkGreen pt-10 lg:px-0 px-5">
          <h2 class="font-black text-3xl border-b-2 border-darkGreen flex w-fit mb-3 pb-2">Keunggulan Sempoa</h2>
          <div class="flex flex-col lg:flex-row justify-between items-center gap-5">
            <!-- Left Section -->
            <div class="w-full lg:w-1/2">
              <img src="/images/blog-img-2.png" alt="Invoice" />
            </div>
            <!-- End Left Section -->
  
            <!-- Right Section -->
            <div class="w-full lg:w-1/2 text-justify">
              <div class="flex gap-3">
                <img src="/images/bullet-list.svg" alt="Bullet" class="h-5 mt-1" />
                <div>
                  <span class="text-lg">Made by and for Finance</span><br />
                  We know that writing down financial transactions is tedious and time
                  consuming. We designed the system to be as easy as possible for you to
                  use!
                </div>
              </div>
              <div class="flex gap-3 mt-2">
                <img src="/images/bullet-list.svg" alt="Bullet" class="h-5 mt-1" />
                <div>
                  <span class="text-lg">Easy Integration</span><br />
                  Do you use POS? Or CRM? We can integrate Sempoa ERP with any system that
                  you use. Lets make it easy for you to get your financial data!
                </div>
              </div>
              <div class="flex gap-3 mt-2">
                <img src="/images/bullet-list.svg" alt="Bullet" class="h-5 mt-1" />
                <div>
                  <span class="text-lg">Complete Support</span><br />
                  Questions? Not sure if doing it correctly? Talk to us! Our professional
                  team is ready to assist you.
                </div>
              </div>
            </div>
            <!-- End Right Section -->
          </div>
        </section>
        <!-- End Keunggulan Sempoa Section -->
      </main>
      <FloatWhatshapp :public_config="public_config"/>
      <Footer :public_config="public_config"/>
</template>

<script setup>
    import Header from './components/Header.vue';
    import Footer from './components/Footer.vue';
    import FloatWhatshapp from './components/WhatsappFloatingButton.vue';
    defineProps({
      public_config: Object,
    })
  
</script>