<template>
<div class="playlist">
  <div class="wrapper">
    <header class="playlist__header">
     <router-link to="/" class="playlist__back">
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="11" viewBox="0 0 16 11"><g><g><path fill="#60558f" d="M0 5.122L6.133-.006v2.431c4.78.333 8.72 3.874 9.867 8.58-1.932-2.05-4.618-3.322-7.589-3.322-.782 0-1.544.008-2.278.129v2.437z"/></g></g></svg>
      </router-link>
      <h2 class="playlist__title">Playlist</h2>
  </header>
  <section class="playlist__songs">
    <div v-for="song in songs" :key="song.id" class="playlist__song-container" @click="sendSong(song.id)">
        <div class="playlist__song"> 
          <span class="playlist__song__meta">{{song.time}}  |  {{song.author}}</span>
          <h4 class="playlist__song__title">{{song.title}}</h4>
        </div>
      
        <div class="playlist__btn-icons">
          <button class="playlist__btn-icons__icon">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            viewBox="0 0 13 13"
            >
            <g>
            <g>
              <path
                fill="#60558f"
                d="M10.2 7.899c-.653 0-1.242.273-1.661.71l-3.47-1.734a2.32 2.32 0 0 0 0-.75L8.54 4.39a2.292 2.292 0 0 0 1.66.71A2.301 2.301 0 0 0 10.2.5 2.3 2.3 0 0 0 7.93 3.176L4.461 4.911A2.301 2.301 0 1 0 2.8 8.8c.653 0 1.242-.274 1.661-.711l3.47 1.734a2.3 2.3 0 1 0 2.27-1.926z"
              />
            </g>
            </g>
          </svg>
          </button>
          <button class="playlist__btn-icons__icon"><svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="12"
            viewBox="0 0 15 12"
            >
            <g>
              <g>
                <path
                  fill="#ed5e74"
                  d="M14.497 3.805C14.43 1.705 12.817 0 10.743 0 9.36 0 8.152.757 7.5 1.883A3.745 3.745 0 0 0 4.257 0C2.183 0 .57 1.705.503 3.805.347 8.565 7.5 12 7.5 12s7.152-3.434 6.997-8.195z"
                />
              </g>
            </g>
          </svg>
          </button>
        </div>
    </div>
  </section>
</div>
</div>

</template>

<script>
import {eventBus} from '../main'
export default {
  name: "Playlist",
  data(){
    return {
      songs: [
        { id: 0, author: 'Icona Pop', title: 'Still Don\'t Know', time: '3:16' },
        { id: 1, author: 'Icona Pop', title: 'I Love It', time: '2:35' },
        { id: 2, author: 'Icona Pop', title: 'Girlfriend', time: '2:50' },
        { id: 3, author: 'Icona Pop', title: 'We Got the World', time: '3:07' },
        { id: 4, author: 'Icona Pop', title: 'Nights Like This', time: '3:24' },
      ],
      currentId: 0
    }
  },
  methods: {
    sendSong(id){
      eventBus.$emit('song', this.songs[id], id);
      this.$router.push('/');
    }
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Rambla:wght@400;700&display=swap');
//SCSS--------------------------------------

// abstracts/_variables.scss
// COLORS
$color-primary:#60558f; // button
$color-primary-light: #fff; //title song
$color-primary-light2: #eeeff5;; //title song
$color-red: #ed5e74; // heartlike
$bgc-shadow-view: #544282;; // view-nav & info
$bgc-shadow-view-inner: #2a224d; // view-nav & info
$color-playlist-title: #2f1a4b;
$color-playlist-meta: #78747f;

$color-icon-toogle: #60558f;

// FONT
$default-font-size: 1.6rem;
$font-family: "Rambla", sans-serif;

// EFECTS
// $shadow-small: 0 1.5rem 4rem rgba($color-black, .15);

//actions
$volume-progress: 75%;

//element

//abstracts/__mixins.scss
@mixin horver {
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}

@mixin flex { 
    display: flex;
    justify-content: center;
    align-items: center;
}

@mixin smallRoundButton {
  width: 36px;
  height: 36px;
  position:relative;
  background-color: $color-primary-light;
  border-radius: 50%;
}

@mixin mediumRoundButton {
  width: 36px;
  height: 36px;
  position:relative;
  background-color: $color-primary;
  border-radius: 50%;
}

@mixin formatBtn{
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
}



// base/_base.scss
*,
*::after,
*::before{
    margin: 0;
    padding: 0;
    box-sizing:inherit;
}

html {
    font-size: 62.5%;
}

body{  
    box-sizing: border-box;
    font-family: $font-family;
}

::selection {
    background-color: $color-primary-light;
    color: $color-primary;
}
//APP------------------
#app {
  height: 100vh;
  @include flex;
}
// Widget-------------

.container {
  width: 400px;
  height: 600px;
  background-image: url('../assets/background.png');
  @include flex;
}


// Player----------------------
.wrapper{
  height: 200%;
  // overflow: scroll;
  
}

.playlist{
    height: 48rem;
    width: 36rem;
    border-radius: 30px; 
    padding: 2rem;
    padding-left: 2.6rem;
    background-color: #f3f4f8;
    overflow: hidden;
    position:relative;
    box-shadow: 0px 0px 101px -5px rgba(0,0,0,0.61);

    &__header{
      display: flex;
      justify-content: center;
      position: relative;
    }

    &__back{
      @include smallRoundButton;
      @include formatBtn;
      position: absolute;
      top: 0;
      left: 0;
      width: 36px;

      svg {
        @include horver
      }
    }

    &__title{
      color: $color-primary;
      font-size: 1.8rem;
      font-weight: 700;
      line-height: 3.6rem;
    }

    /////songs
    &__song-container{
      display: flex;
      justify-content: space-between;
      padding-bottom: 2.4rem;
      border-bottom: 1px solid #d3d5de;
      margin-right: 3.2rem;
      margin-top: 2.7rem;
      cursor: pointer;

      &:hover{
        background-color: darken(white, 6%);
      }
    }

    &__songs::after{
      display: table;
      content: '';
      position: absolute;
      bottom: 0;
      height: 10rem;
      width: 29rem;
      background: linear-gradient(to top, white 5%, transparent);
    }

    &__song{
      

      &__meta{
        color: $color-playlist-meta;
        font-family: 'Rambla';
        font-size: 1.2rem;
        font-weight: 400;
      }

      &__title{
        color: $color-playlist-title;
        font-family: 'Rambla';
        font-size: 1.6rem;
        font-weight: 400;
      }
    }

    &__btn-icons{
      display: flex;
      align-items: center;

      &__icon{
        border: none;
        background-color: transparent;
        outline: none;
        cursor: pointer;
        &:hover{
  transform: scale(1.1);
  transition: all .3 ease-in-out;
}

        &:first-child{
        margin-right: 1.2rem ;
      }
      }
    }
}
</style>
