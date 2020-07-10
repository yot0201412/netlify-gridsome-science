<template>
  <Layout>
    <article>
      <div class="bg-white m-2 p-3">
        <h1 class="font-semibold text-3xl mb-2 text-left p-3 border-b">{{ $page.post.title }}</h1>
        <div class="px-2 pt-0 pb-3 text-left">
          <span v-for="tag in $page.post.tags" :key="tag.id" class='inline-block bg-gray-300 rounded-full px-3 py-1 text-base font-semibold text-gray-700 m-3'>
            <g-link :to='tag.path'> {{ tag.title }}</g-link>
          </span>
        </div>
        <VueRemarkContent />
      </div>
    </article>
   </Layout>
</template>

<script>
import Layout from '~/layouts/Default.vue'

export default {
  components: {
    Layout
  }
}
</script>

<page-query>
query Post  ($id: ID!) {
  post (id: $id) {
    title
    content
    discription
    tags {
      id
      title
      path
    }
  }
}
</page-query>