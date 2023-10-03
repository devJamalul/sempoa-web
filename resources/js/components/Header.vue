<template>
  <div class="absolute top-0 z-20 w-full">
    <header class="w-full mx-auto ">
      
      <!-- Desktop Nav -->
      <nav class="hidden lg:flex px-5 md:container mx-auto justify-between items-center pt-3">
  
        <!-- Left Header -->
        <div class="flex gap-5 list-none items-center">
          <li>
            <a href="/">
              <img src="/images/sempoa-logo.svg" alt="Sempoa Logo" class="w-40">
            </a>
          </li>
          <li>
            <a href="/about" class="font-bold hover:underline">Tentang Sempoa</a>
          </li>
          <li>
            <a href="/#features" class="font-bold hover:underline">Fitur Sempoa</a>
          </li>
        </div>
        <!-- End Left Header -->
        
        <!-- Right Header -->
        <div class="space-x-3">
          <a href="/register" class="shadow-md uppercase bg-gradient-to-t from-[#07BE5E] to-lightGreen text-neutral-100 p-1.5 px-5 rounded-full text-sm font-semibold">Coba gratis 14 hari</a>
          <a :href="`${public_config.loginUrl}`" class="shadow-md bg-darkGreen text-neutral-100 font-semibold p-1.5 px-5 rounded-full uppercase text-sm">Login</a>
        </div>
        <!-- End Right Header -->
  
      </nav>
      <!-- End Desktop Nav -->
  
      <!-- Mobile Nav -->
      <nav class="relative flex lg:hidden justify-between items-center pt-3 bg-neutral-100 px-5 md:px-10 py-3">
  
        <!-- Left Header -->
        <div>
          <a href="/">
            <img src="/images/sempoa-logo.svg" alt="Sempoa Logo" class="w-32">
          </a>
        </div>
        <!-- End Left Header -->
        
        <!-- Right Header -->
        <Popover>
          <PopoverButton>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </PopoverButton>
          
          <transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="-translate-y-2 opacity-50"
            enter-to-class="translate-y-0 opacity-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="translate-y-0 opacity-100"
            leave-to-class="-translate-y-2 opacity-50"
          >
            <PopoverPanel class="absolute top-16 left-0 bg-neutral-100 flex flex-col gap-2 w-full z-10 py-5 px-10 list-none space-y-2">
              <li>
                <a href="/about" class="font-bold hover:underline">Tentang Sempoa</a>
              </li>
              <li>
                <a href="/#features" class="font-bold hover:underline">Fitur Sempoa</a>
              </li>
              <li class="flex items-center space-x-3">
                <a href="/register" class="shadow-md uppercase bg-gradient-to-t from-[#07BE5E] to-lightGreen text-neutral-100 p-1.5 px-3 rounded-full text-xs font-semibold">Coba gratis 14 hari</a>
                <a class="shadow-md bg-darkGreen text-neutral-100 font-semibold p-1.5 px-5 rounded-full uppercase text-xs">Login</a>
              </li>
            </PopoverPanel>
          </transition>
        </Popover>
        <!-- End Right Header -->
  
      </nav>
      <!-- End Mobile Nav -->
  
    </header>
  </div>
  </template>
  
  <script setup >
    import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
    defineProps({
      public_config: Object,
})
  </script>