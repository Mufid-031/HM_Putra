<script>
import mufidImg from '@/assets/img/mufid.jpg'

export default {
  data() {
    return {
      mufidImg
    }
  }
}
</script>

<template>
  <section class="grid gap-6 px-5 md:py-8 md:px-20 md:grid-cols-2 bg-gray-900 mt-10 pt-10">
    <div
      class="w-full h-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-10"
      data-aos="fade-right"
    >
      <div class="flex flex-col md:flex-row items-center justify-center gap-6 pb-10 mt-20">
        <img class="w-40 h-40 md:w-52 md:h-52 mb-5 rounded-full shadow-lg" :src="mufidImg" alt="Bonnie image" />
        <div>
          <h5 class="mb-1 text-3xl font-medium text-gray-900 dark:text-white">Ahmad Mufid Risqi</h5>
          <span class="text-xl text-green-500 dark:text-green-400">Full Stack Developer</span>
        </div>
      </div>
    </div>

    <div
      class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8 h-96 mt-10"
      data-aos="fade-left"
    >
      <h1 class="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">
        Tentang Website HM_Putra
      </h1>
      <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
        web ini dibuat pada tahun 2024 oleh Ahmad Mufid Risqi yang merupakan seorang mahasiswa
        teknik infomatika di Universitas Trunojoyo Madura yang dibuat untuk mempermudah pengolahan
        data bisnis orang tuanya.
      </p>
      <RouterLink
        to="/admin/products"
        class="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900"
      >
        Read more
        <svg
          class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </RouterLink>
    </div>

    <div data-aos="fade-up">
      <h1 class="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">
        Tentang Developer
      </h1>
      <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
        saya adalah seorang mahasiswa aktif teknik infomatika di Universitas Trunojoyo Madura, saya
        tertarik dengan dunia teknologi dan ingin belajar hal baru yang berhubungan dengan
        teknologi. saya menemukan bakat saya di bidang programming dan memutuskan untuk menjadi Full
        Stack Developer, untuk mencapai tujuan tersebut saya mempelajari beberapa bahasa
        pemrograman.
      </p>
    </div>
    <div></div>
    <div></div>
    <div data-aos="fade-up">
      <h1 class="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">
        Tentang Web ini
      </h1>
      <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
        saya memutuskan untuk membuat web ini untuk mempermudah pengolahan data bisnis orang tua saya dengan menggunakan framework javascript yaitu Vue yang menurut saya sangat mudah untuk membuat suatu interface yang menarik serta menggunakan express js sebagai backend untuk mempermudah pengolahan data
      </p>
    </div>
  </section>
</template>
