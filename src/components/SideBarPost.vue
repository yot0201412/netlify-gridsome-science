<template>
  <div>
    <div class="m-2 bg-white p-2">
      <p class="m-2 pt-2 border-t font-semibold"><g-image alt="tag" src="~/post_icon.png" class="m-0 mr-1 float-left"/>最新の記事</p>
      <div v-for="post in $static.posts.edges" :key="post.id" class="px-1 pb-2">
        <g-link :to="post.node.path" class="m-1 pt-0 pb-3 text-left hover:text-indigo-600 text-base">
          {{ post.node.date | date_fomatter }}<br>
          {{ post.node.title }}
        </g-link>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  filters: {
    date_fomatter(date){
      return moment(date).format('YYYY/MM/DD');
    }
  }
}
</script>

<static-query>
query {
  posts: allPost {
    edges {
      node {
        id
        title
        path
        date
      }
    }
  }
}
</static-query>