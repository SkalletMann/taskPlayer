<template>
  <div id="app">
      <div class="container">
        <transition name="slide" mode="out-in">
          <router-view />
        </transition>
      </div>
  </div>
</template>

<script>

export default {
  name: "App"
};
</script>

<style lang="scss">

.slide-enter-active {
    animation: slide-in 200ms ease-out forwards;
}

.slide-leave-active {
    animation: slide-out 200ms ease-out forwards;
}

@keyframes slide-in {
    from {
        transform: translateX(-30px);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slide-out {
    from {
        transform: translateX(0);
        opacity: 1;
    }
    to {
        transform: translateX(30px);
        opacity: 0;
    }
}
</style>

