<template>
  <Layout>
    <div class="info">
      <p> {{ $page.tag.title }} </p>
    </div>
    <g-link v-for="post in $page.tag.belongsTo.edges" :key="post.id" :to="post.node.path">
      <h2> {{ post.node.title }}</h2>
    </g-link>
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
query Tag ($id: ID!){
  tag(id: $id) {
    title
    belongsTo {
      edges {
        node {
          ... on Post {
            id
            title
            path
          }
        }
      }
    }
  }
}
</page-query>