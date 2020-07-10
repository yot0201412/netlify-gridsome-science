<template>
  <div class="font-mono bg-gray-100">
    <div class="w-full max-w-screen-xl mx-auto">
      <header class="flex bg-white border-b border-gray-200 fixed top-0 inset-x-0 z-100 h-16justify-center">
          <div class="lg:w-3/5 xl:w-3/5 pl-6 pr-6 lg:pr-8 mx-10">
            <g-link to="/" ><g-image alt="Logo" src="~/logo-text.png" width="300" /> </g-link>
          </div>
          <p class="font-semibold self-center">- 科学の楽しさを語る -</p>
          <nav class="lg:flex lg:items-center lg:justify-between xl:w-1/6 px-6">
            <g-link class="m-5" to="/">Home</g-link>
            <g-link class="m-5" to="/about/">自己紹介</g-link>
          </nav>
      </header>
      <div class="flex mt-16">
        <SideBar id="sidebar" class="hidden m-0 fixed inset-0 pt-16 h-full bg-white z-90 w-full border-b lg:static lg:h-auto lg:overflow-y-visible lg:border-b-0 lg:pt-0 lg:w-1/4 lg:block lg:border-0 xl:w-1/5"/>
        <div class="min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4 xl:w-4/5 lg:ml-1/4 xl:ml-1/5">
          <slot />
        </div>
      </div>
      <footer>
        <p class="float-right">Copyright © 2020 Yo</p>
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
