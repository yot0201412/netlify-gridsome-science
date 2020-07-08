<template>
  <Layout>
    <article>
        <h1>{{ $page.post.title }}</h1>
        <ul>
          <li v-for="tag in $page.post.tags" :key="tag.id">
            <p> {{ tag.title }} {{ tag.path }} </p>
          </li>
        </ul>
        <VueRemarkContent />
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
    tags {
      id
      title
    }
  }
}
</page-query>