<template>
  <Layout>
    <div  class="bg-white m-1 p-3">
      <div>
        <h2 class="text-3xl mb-2 text-left p-3 border-b"><strong>{{ $page.tag.title }}</strong>の関連記事</h2>
      </div>
      <g-link v-for="post in $page.tag.belongsTo.edges" :key="post.id" :to="post.node.path">
        <h2> {{ post.node.title }}</h2>
      </g-link>
    </div>
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