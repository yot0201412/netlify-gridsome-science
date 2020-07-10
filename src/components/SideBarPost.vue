<template>
  <div>
    <div class="m-2 bg-white p-3">
      <p class="m-1 border-b">最新の記事</p>
      <span v-for="post in $static.posts.edges" :key="post.id" class='inline-block bg-gray-200 rounded-full px-3 py-1 text-base font-semibold text-gray-700 m-1'>
        <g-link :key="post.id" :to="post.node.path">
          <p> {{ post.node.title }}</p>
        </g-link>
      </span>
    </div>
  </div>
</template>

<static-query>
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
</static-query>