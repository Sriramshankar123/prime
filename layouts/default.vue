<template>
    <div>
        <sidebar v-if="false"></sidebar>

    <div class="lg:pl-72 h-screen flex flex-col justify-between">

      <!-- navigation bar -->
      <navbar></navbar>

      <main class="py-10 mb-auto bg-gray-200 h-screen">
        <div class="px-4 sm:px-6 lg:px-8 ">
          <!-- Your content -->
          <slot></slot>
        </div>
      </main>
      </div>


    </div>
</template>