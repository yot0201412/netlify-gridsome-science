<template>
  <div class="font-mono leading-normal">
    <div class="w-full max-w-screen-xl mx-auto">
      <header class="flex bg-white border-b border-gray-200 lg:fixed xl:fixed top-0 inset-x-0 z-100 h-16justify-center">
          <div class="lg:w-3/5 xl:w-3/5 w-1/2 px-0 lg:pr-8 xl:pr-8 lg:mx-10 xl:mx-10">
            <g-link to="/" ><g-image alt="Logo" src="~/logo-text.png" width="300"/></g-link>
          <p class="font-semibold self-center lg:text-base xl:text-base text-xs m-1">- 科学の楽しさを語る -</p>
          </div>
          <nav class="items-center justify-between xl:w-1/5 px-6 w-1/2 right-0">
            <g-link class="lg:m-5 xl:m-5 m-1 hover:text-indigo-600 lg:flex xl:flex hidden" to="/">Home</g-link>
            <g-link class="lg:m-5 xl:m-5 m-1 hover:text-indigo-600" to="/about/">ABOUT ME</g-link>
            <g-link to="https://twitter.com/yoo_medeng" ><g-image alt="twitter" src="~/twitter_icon.png" width="30"/></g-link>
          </nav>
      </header>
      <div class="flex mt-16">
        <SideBar id="sidebar" class="hidden m-0 fixed inset-0 pt-16 h-full z-90 w-full border-b lg:static lg:h-auto lg:overflow-y-visible lg:border-b-0 lg:pt-0 lg:w-1/4 lg:block lg:border-0 xl:w-1/5"/>
        <div class="min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4 xl:w-4/5 lg:ml-1/4 xl:ml-1/5 border-l">
          <slot />
        </div>
      </div>
      <footer>
        <p class="float-right mx-1">Copyright © 2020 Yo</p>
      </footer>
    </div>
  </div>
</template>

<script>
import SideBar from '~/components/SideBar.vue'
export default {
  components: {
    SideBar,
  }
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
}
</style>
