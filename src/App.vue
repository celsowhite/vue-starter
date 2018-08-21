<template>
  <div id="app">
    <transition name="header_anim" appear>
      <MainHeader />
    </transition>
    <transition name="router_anim" appear mode="out-in">
      <router-view/>
    </transition>
    <MainFooter />
  </div>
</template>

<script>
      
  // Imports
  
  import './styles/main.scss';
  import MainHeader from './components/organisms/MainHeader';
  import MainFooter from './components/organisms/MainFooter';
  
  export default {
    name: 'App',
    metaInfo: {
      title: 'Vue Starter',
      titleTemplate: '%s | Vue Starter'
    },
    components: {
      MainHeader,
      MainFooter
    }
  }
  
</script>

<style lang="scss">
      
  /*--- 
  Router Animation
  ---*/
      
  // Enter/Appear
      
  .router_anim-enter-active {
    transition: all 2s ease-in-out;
    
    &.main_content {
      transition: all 1s ease-in-out;
    }
  }
  
  .router_anim-enter, .router_anim-leave-to {
    &.main_content {
      opacity: 0;
      transform: translateY(30px);
    }
  }
    
  // Leave
  
  .router_anim-leave-active {
    transition: all .5s ease-in-out;
    
    &.main_content {
      transition: all .5s ease-in-out;
    }
  }
            
</style>
