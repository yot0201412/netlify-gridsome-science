<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->

    <h1>Hello, world!</h1>
    <div>
    <g-link v-for="post in $page.posts.edges" :key="post.id" :to="post.node.path">
      <p> {{ post.node.title }}</p>
    </g-link>
    </div>
    <p>
      好きな科学の面白さ、知ってると役立つ情報を発信していきたい。<br>
      科学全般気になったものを取り上げて記事にしていきます。<br>
    </p>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home'
  }
}
</script>
<page-query>
  query {
    posts: allPost {
      edges {
        node {
          id
          title
          path
        }
      }
    }
  }
</page-query>
<style>
.home-links a {
  margin-right: 1rem;
}
</style>
