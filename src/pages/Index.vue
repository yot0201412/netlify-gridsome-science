<template>
  <Layout>
    <div class="m-2 p-3">
      <div class="xl:grid lg:grid grid-rows-1 grid-cols-5">
        <p  class="text-sm lg:text-base xl:text-base col-start-2 col-span-3">
          好きな科学の面白さ、生活に役立つ情報を発信したくて始めました。
          科学全般気になったものを取り上げて記事にしていきます。
          取り上げて欲しい話題がありましたら、Twitterにご連絡ください！
        </p>
      </div>
      <p class="text-xl lg:text-xl font-semibold  border-b  p-3 pb-1">記事一覧</p>
      <g-link v-for="post in $page.posts.edges" :key="post.id" :to="post.node.path">
        <div class="mt-2 mx-5 border-b p-2 hover:bg-indigo-100">
          <p class="text-sm lg:text-base xl:text-base"> {{ post.node.date | date_fomatter }} <strong> {{ post.node.title }}</strong><p>
          <p class="text-sm lg:text-base xl:text-base"> {{post.node.discription}}</p>
        </div>
      </g-link>
    </div>
  </Layout>
</template>

<script>
import moment from 'moment';

export default {
  metaInfo: {
    title: 'Home'
  },
  filters: {
    date_fomatter(date){
      return moment(date).format('YYYY/MM/DD');
    }
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
          date
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
