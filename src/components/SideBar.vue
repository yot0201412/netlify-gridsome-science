<template>
  <div class="m-0">
    <div class="m-2 bg-white p-3">
      <p class="m-1 border-b">タグ</p>
      <span v-for="tag in $static.tags.edges" :key="tag.id" class='inline-block bg-gray-300 rounded-full px-3 py-1 text-base font-semibold text-gray-700 m-1'>
        <g-link :key="tag.id" :to="tag.node.path">
          <p> {{ tag.node.title }}</p>
        </g-link>
      </span>
    </div>
    <SideBarPost />
  </div>
</template>

<script>
import SideBarPost from '~/components/SideBarPost.vue'
export default {
  components: {
    SideBarPost,
  }
}
</script>

<static-query>
query {
  tags: allTag {
    edges {
      node {
        id
        title
        path
      }
    }
  }
}
</static-query>