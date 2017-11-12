<template>
  <v-app>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :mini-variant.sync="mini"
      :clipped="true"
      v-model="drawer"
      enable-resize-watcher
      app
    >
      <v-divider></v-divider>
      <remando-menu></remando-menu>
    </v-navigation-drawer>
    <v-toolbar fixed app :clipped-left="true">
      <remando-header></remando-header>
    </v-toolbar>
    <main>
      <v-content>
        <v-container fluid>
          <v-slide-y-transition mode="out-in">
            <v-layout column align-center>
              <router-view></router-view>
            </v-layout>
          </v-slide-y-transition>
        </v-container>
      </v-content>
    </main>
    <v-footer :fixed="true" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  import Menu from './components/Layout/Menu'
  import Header from './components/Layout/TopHeader'

  export default {
    components: {
      'remando-menu': Menu,
      'remando-header': Header
    },
    data () {
      return {
        drawer: true,
        title: 'Remando',
        mini: false
      }
    }
  }

</script>

<style scoped>
  .slide-fade-enter-active, .slide-fade-leave-active {
    transition: opacity 0.5s;
    transition: height 0.5s ease-in-out;
  }
  .slide-fade-enter, .slide-fade-leave-to {
    opacity: 0;
    height: 0;
  }
</style>