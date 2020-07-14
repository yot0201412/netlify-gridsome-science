<template>
  <Layout>
    <article>
      <div class="m-2 p-5 text-sm lg:text-base xl:text-base">
        <p class="p-1">{{ $page.post.date | date_fomatter }}</p>
        <h1 class="font-semibold text-2xl mb-2 text-left p-1">{{ $page.post.title }}</h1>
        <div class="px-2 pt-0 pb-3 text-left">
          <span v-for="tag in $page.post.tags" :key="tag.id" class='text-sm inline-block bg-gray-300 hover:bg-indigo-300 rounded-full px-3 py-1 text-gray-700 m-3'>
            <g-link :to='tag.path'> {{ tag.title }}</g-link>
          </span>
        </div>
        <div>
        <VueRemarkContent />
        </div>
      </div>
    </article>
   </Layout>
</template>

<script>
import Layout from '~/layouts/Default.vue'
import moment from 'moment';

export default {
  components: {
    Layout
  },
  filters: {
    date_fomatter(date){
      return moment(date).format('YYYY/MM/DD');
    }
  }
}
</script>

<page-query>
query Post  ($id: ID!) {
  post (id: $id) {
    title
    date
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