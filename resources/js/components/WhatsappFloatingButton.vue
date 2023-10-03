<template>
    <a :href="`https://wa.me/${public_config.whatsapp}?text=Selamat%20datang%20di%20Sempoa!%20Bagaimana%20kami%20bisa%20membantu%20anda%20hari%20ini%3F`" target="_blank">
      <div class="sticky bottom-10 z-50">
        <div class="flex justify-end p-10">
          <img src="/images/whatsapp.png" alt="Whatsapp" class="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-[#09AB55] p-2 lg:p-3 rounded-full">
        </div>
      </div>
    </a>
  </template>

<script setup>
  defineProps({
      public_config: Object,
})

</script>