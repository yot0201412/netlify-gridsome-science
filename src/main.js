// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import VueCompositionApi from '@vue/composition-api'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(VueCompositionApi)
  head.meta.push({
    name: 'keywords',
    content: 'yo-science,科学,化学,生物学,science,コロナウイルス,SARS-CoV-2'
  },{
    name: 'description',
    content: '科学の面白さや、生活に役立つ情報を発信していきます！楽しみながら科学に触れてみませんか!?'
  })
}
