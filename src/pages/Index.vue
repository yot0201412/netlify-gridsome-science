<template>
  <Layout>
    <div class="bg-white m-2  p-3">
      <p  class="text-center text-mx">
        好きな科学の面白さ、生活に役立つ情報を発信したくて始めました。<br>
        科学全般気になったものを取り上げて記事にしていきます。<br>
        取り上げて欲しい話題がありましたら、Twitterに連絡ください！
      </p>
      <p class="text-3xl lg:text-xl font-semibold  border-b  p-3 pb-1">記事一覧</p>
      <g-link v-for="post in $page.posts.edges" :key="post.id" :to="post.node.path">
        <p> {{ post.node.title }} {{post.node.discription}}</p>
      </g-link>
    </div>
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
          discription
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
