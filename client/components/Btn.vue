<template>
  <button
    class="pr-5 pl-5 pt-1/2 pb-1/2 rounded-sm font-lato-medium shadow
    pr-5 smp:pr-3 sml:pr-3 md:pr-5 lg:pr-5 xl:pr-5 xxl:pr-5
    pl-5 smp:pl-3 sml:pl-3 md:pl-5 lg:pl-5 xl:pl-5 xxl:pl-5
    text-sm smp:text-xs sml:text-xs md:text-md lg:text-md xl:text-md xxl:text-md"
    type="button">
    <slot
      name="img"/>
    <slot
      name="text"/>
  </button>
</template>
