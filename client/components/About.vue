<template>
  <div
    class="flex flex-no-shrink overflow-hidden relative bg-blue-dark text-white justify-center flex-col
    items-center smp:items-start sml:items-start md:items-start lg:items-start xl:items-start xxl:items-center
    h-auto smp:h-auto sml:h-auto md:h-full lg:h-full xl:h-full xxl:h-full
    w-full smp:w-full sml:w-full md:w-2/5 lg:w-2/5 xl:w-2/5 xxl:w-2/5
    p-6 smp:p-6 sml:p-6 md:p-8 lg:p-10 xl:p-12 xxl:p-12">
    <div>
      <!-- ADD RESPONSIVE PADDING (UP)-->
      <h3 class="text-base smp:text-base sml:text-base md:text-2xl lg:text-4xl xl:text-5xl xxl:text-5xl uppercase font-semibold">En quelques mots...</h3>
      <!-- ADD TEXT (UP)-->
      <h4 class="text-base smp:text-base sml:text-base md:text-lg lg:text-2xl xl:text-3xl xxl:text-3xl uppercase mt-2 text-left">A propos</h4>
      <!-- ADD TEXT (UP / DOWN)-->
    </div>
    <ul
      class="flex justify-around
      flex-col smp:flex-row sml:flex-row md:flex-col lg:flex-col xl:flex-col xxl:flex-col
      w-full
      items-center smp:items-center sml:items-center md:items-start lg:items-start xl:items-start xxl:items-center
      pb-2 smp:pb-0 sml:pb-0 md:pb-0 lg:pb-0 xl:pb-0 xxl:pb-0
      mt-6 smp:mt-8 sml:mt-8 md:mt-12 lg:mt-12 xl:mt-12 xxl:mt-12
      text-sm smp:text-sm sml:text-sm md:text-md lg:text-lg xl:text-xl xxl:text-2xl
      ml-0 smp:ml-0 sml:ml-0 md:ml-8 lg:ml-10 xl:ml-12 xxl:ml-12">
      <!-- ADD RESPONSIVE MARGIN (UP)-->
      <li
        class="flex items-center
        mb-6 smp:mb-0 sml:mb-0 md:mb-11 lg:mb-11 xl:mb-11 xxl:mb-11
        smp:mr-8 sml:mr-11">
        <span class="mr-8 smp:mr-5">
          <img
            class="w-20px smp:w-20px sml:w-25px md:w-30px lg:w-35px xl:w-35px xxl:w-35px
            h-20px smp:h-20px sml:h-25px md:h-30px lg:h-35px xl:h-35px xxl:h-35px"
            src="~assets/img/flask.svg"
            alt="Expérience">
        </span>
        <div class="max-w-100px smp:max-w-150px sml:max-w-100px md:max-w-none lg:max-w-none xl:max-w-none xxl:max-w-none">
          <p><span class="font-semibold">Plus de 3 ans</span> d'expérience</p>
        </div>
      </li>
      <li
        class="flex items-center
        mb-6 smp:mb-0 sml:mb-0 md:mb-11 lg:mb-11 xl:mb-11 xxl:mb-11
        smp:mr-8 sml:mr-11 md:ml-4 lg:ml-4 xl:ml-4 xxl:ml-4">
        <span class="mr-8 smp:mr-5">
          <img
            class="w-30px smp:w-30px sml:w-35px md:w-40px lg:w-45px xl:w-45px xxl:w-45px
            h-30px smp:h-30px sml:h-35px md:h-40px lg:h-45px xl:h-45px xxl:h-45px"
            src="~assets/img/cap.svg"
            alt="Double casquette">
        </span>
        <div class="max-w-100px smp:max-w-220px sml:max-w-100px md:max-w-none lg:max-w-none xl:max-w-none xxl:max-w-none">
          <p class="font-semibold">Double casquette</p>
          <p>Business et technique</p>
        </div>
      </li>
      <li class="flex items-center">
        <span class="mr-8 sml:mr-5 smp:mr-5">
          <img
            class="w-25px smp:w-25px sml:w-30px md:w-35px lg:w-40px xl:w-40px xxl:w-40px
            h-25px smp:h-25px sml:h-30px md:h-35px lg:h-40px xl:h-40px xxl:h-40px"
            src="~assets/img/heart.svg"
            alt="Passion">
        </span>
        <div class="max-w-100px smp:max-w-100px sml:max-w-100px md:max-w-none lg:max-w-none xl:max-w-none xxl:max-w-none">
          <p>Passionné par le <span class="font-semibold">#digital</span></p>
        </div>
      </li>
    </ul>
  </div>
</template>
