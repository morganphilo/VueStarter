<template>
  <v-list>
    <v-list-tile
      value="true"
      v-for="(item, i) in items"
      :key="i"
      @click="itemClick(item.link)"
    >
      <v-list-tile-action>
        <v-icon v-html="item.icon"></v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title v-text="item.title"></v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
    }
  },
  computed: {
    items () {
      return [{
        icon: 'dashboard',
        title: this.translate('Dashboard'),
        link: '/dashboard'
      }, {
        icon: 'chat_bubble',
        title: this.translate('Feedback'),
        link: '/feedback'
      }, {
        icon: 'settings',
        title: this.translate('ManageSurvey'),
        link: '/manage'
      }, {
        icon: 'description',
        title: this.translate('Reports'),
        link: '/reports'
      }]
    }
  },
  methods: {
    itemClick: function (link) {
      this.$router.push(link)
    }
  }
}
</script>