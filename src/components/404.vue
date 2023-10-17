<template>
  <div class="h-screen pt-16 pb-12 flex flex-col bg-white">
    <main
      class="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div class="flex-shrink-0 flex justify-center">
        <a href="/" class="inline-flex">
          <span class="sr-only">vuelet</span>
          <img class="h-12 w-auto" src="/favicon.ico" alt="" />
        </a>
      </div>
      <div class="py-16">
        <div class="text-center">
          <p
            class="text-sm font-semibold text-blue-600 uppercase tracking-wide"
          >
            ۴۰۴
          </p>
          <h1
            class="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl"
          >
            صفحه پیدا نشد
          </h1>
          <p class="mt-2 text-base text-gray-500">
            صفحه ای که دنبالش بودید پیدا نشد
          </p>
          <div class="mt-6">
            <router-link
              to="/order-history"
              class="text-base font-medium text-blue-600 hover:text-blue-500"
              >بازگشت به خانه<span aria-hidden="true">
                &rarr;</span
              ></router-link
            >
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
