<template>
  <div class="player">
    <div class="player__view">
      <nav class="player__view__top-options">
        <a class="player__view__top-options__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="16"
            viewBox="0 0 17 16"
          >
            <g>
              <g>
                <path
                  fill="#fff"
                  d="M13.94 8.813L16.5 6.29v6.83H3.97v2.16L.5 11.857l3.47-3.42v2.158h9.97zM3.06 6.748L.5 9.273v-6.83h12.53V.282l3.47 3.421-3.47 3.422V4.967H3.06z"
                />
              </g>
            </g>
          </svg>
        </a>
        <a class="player__view__top-options__icon player__view__top-options__icon-shuffle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="16"
            viewBox="0 0 17 16"
          >
            <g>
              <g>
                <path
                  fill="#fff"
                  d="M13.018 8.491l3.469 3.44-3.469 3.44V13.2H9.226v-.002l-.003.002L4.5 5.087H.502V2.549h5.47v.004l.005-.004 4.724 8.113h2.317zm-2.946-3.404l-1.48-2.538h4.437V.379l3.469 3.44-3.469 3.44V5.087zm-4.947 5.575l1.48 2.538H.503v-2.538z"
                />
              </g>
            </g>
          </svg>
        </a>
        <a class="player__view__top-options__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 17 17"
          >
            <g>
              <g>
                <path
                  fill="#fff"
                  d="M16.397 7.23h-2.499a5.581 5.581 0 0 1-.287 3.434 5.56 5.56 0 0 1-2.953 2.951 5.515 5.515 0 0 1-2.158.434 5.512 5.512 0 0 1-3.923-1.622 5.502 5.502 0 0 1-1.624-3.918A5.507 5.507 0 0 1 4.577 4.59a5.54 5.54 0 0 1 6.081-1.19c.29.123.567.27.83.438L9.923 5.402h4.907V.5l-1.58 1.578A7.967 7.967 0 0 0 8.5.516c-4.419 0-8 3.579-8 7.993 0 4.413 3.581 7.99 8 7.99 4.418 0 8-3.577 8-7.99a8 8 0 0 0-.103-1.28z"
                />
              </g>
            </g>
          </svg>
        </a>
        <router-link to="/playlist" class="player__view__top-options__hamburger">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="14"
            viewBox="0 0 17 14"
          >
            <g>
              <g opacity=".3">
                <path
                  fill="#fff"
                  d="M16.5 3.291H.5V.693h16zm0 5.195H.5V5.89h16zm0 2.598v2.597H.5v-2.597z"
                />
              </g>
            </g>
          </svg>
        </router-link>
      </nav>
      <section class="player__view__information">
        <h2 class="player__view__information__band">{{song.author}}</h2>
        <h3 class="player__view__information__title-song">{{song.title}}</h3>
      </section>
    </div>
    <nav class="player__navigation">
      <div class="volume">
        <div class="volume__toogle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="9"
            viewBox="0 0 13 9"
          >
            <g>
              <g>
                <path
                  fill="#60558f"
                  d="M3.794 2.343L7.747.063v8.999L3.794 7.174zm-2.636 0h1.977v4.83H1.158c-.364 0-.658-.308-.658-.69v-3.45c0-.38.294-.69.658-.69zm9.484 1.917c0 .89-.333 1.7-.874 2.298l-.773-.773c.374-.415.578-.953.578-1.525 0-.573-.204-1.112-.578-1.527l.773-.772c.541.6.874 1.408.874 2.299zm1.858 0c0 1.41-.528 2.693-1.39 3.642l-.772-.772c.332-.366.595-.784.78-1.247a4.293 4.293 0 0 0 .313-1.623c0-.563-.104-1.11-.312-1.625a4.146 4.146 0 0 0-.78-1.246l.772-.774A5.41 5.41 0 0 1 12.5 4.26z"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
      <button href="#" class="player__navigation__btn player__navigation__btn-small player__navigation__share">
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
      <button @click="prevSong" class="player__navigation__btn player__navigation__btn-medium player__navigation__previous">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="13"
          viewBox="0 0 13 13"
        >
          <g>
            <g>
              <path fill="#fff" d="M12.5.5v12l-9.619-6zM2.88.5v11.977H.5V.5z" />
            </g>
          </g>
        </svg>
      </button>
      <button  v-if="!pausa" @click="pausa = !pausa" class="player__navigation__btn player__navigation__btn-medium player__navigation__play-pausa">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 17 17"
        >
          <g>
            <g>
              <path fill="#fff" d="M.5.5h5.867v16H.5zm16 0v16h-5.867V.5z" />
            </g>
          </g>
        </svg>
      </button>
      <button v-else @click="pausa = !pausa" class="player__navigation__btn player__navigation__btn-medium player__navigation__play-pausa">
         <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 24 24"
          >
          <g>
            <g>
              <path fill="#fff" d="M2 24v-24l20 12-20 12z" />
            </g>
          </g>
        </svg>
      </button>

      <button @click="nextSong" class="player__navigation__btn player__navigation__btn-medium player__navigation__next">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="13"
          viewBox="0 0 13 13"
        >
          <g>
            <g>
              <path
                fill="#fff"
                d="M.5 12.5V.5l9.618 6zm9.618 0V.522H12.5V12.5z"
              />
            </g>
          </g>
        </svg>
      </button>
      <button class="player__navigation__btn player__navigation__btn-small player__navigation__heart">
        <svg
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
    </nav>
  </div>
</template>

<script>
import {eventBus} from '../main.js'
export default {
  name: "Player",
  data(){
    return {
      pausa: false,
      song:  { id: 0, author: 'Icona Pop', title: 'Still Don\'t Know', time: '3:16' },
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
    nextSong(){
      this.currentId++ ;
      if (this.currentId == 5) this.currentId = 0;
      this.song = this.songs[this.currentId];
    },
    prevSong(){
      this.currentId--;
      if (this.currentId == -1) this.currentId = 4;
      this.song = this.songs[this.currentId]
    },
    chanceSong(song){
      this.song = song;
    }
  },
  created(){
    eventBus.$on('song', (data, id) => {
      this.currentId = id;
      this.song = data;
    })
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

@mixin hover {
&:hover{
  transform: scale(1.1);
  transition: all .3 ease-in-out;
}
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
  overflow: hidden;
}


// Player----------------------
.player{
    height: 48rem;
    width: 36rem;
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 0px 0px 101px -5px rgba(0,0,0,0.61);

    &__view{
        height: 34rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        color: $color-primary-light;
        background-image: url('../assets/IconaPop.png');
        position: relative;

        &::before{
              display: table;
              content: '';
              width: 100%;
              height: 100%;
              position: absolute;
              background-color: $bgc-shadow-view;
              opacity: .26;
        }

        &__top-options{
          height: 6.5rem;
          background-color: $bgc-shadow-view-inner;
          opacity: .6;
          @include flex;

          &__icon{
            cursor: pointer;
            @include hover;
          }

          &__icon-shuffle{
            cursor: pointer;
            padding: 20px;
            z-index: 2000;
          }

          &__refresh1{
            cursor: pointer;
          }

          &__hamburger{
            cursor: pointer;
            position: absolute;
            top: 23px;
            right: 20px;
            @include hover;
          }
        }

        &__information{
            height: 6.5rem;
            // @include flex;
            // flex-direction: column;
            // background-color: $bgc-shadow-view;
            // opacity: .6;
            position: relative;
            margin-bottom: .2rem;
            
            &::before{
              display: table;
              content: '';
              width: 100%;
              height: 100%;
              position: absolute;
              background-color: $bgc-shadow-view-inner;
              opacity: .6;
            }
            h2,h3{
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
              z-index: 500;
            }

            &__band{
              top: 1.1rem;
              font-size: 1.8rem;
              font-weight: 700;
            }

            &__title-song{
              bottom: 1.2rem;
              font-size: 1.4rem;
              font-weight: 400;
            }
        }
    }

    &__navigation{
        height: 14rem;
        padding: 2rem;
        background-color: $color-primary-light2;
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        & .volume{
          position: absolute;
          top: -2px;
          height: .7rem;
          width: 100%;
          background-color: $color-primary-light;

          &::after{
            display: table;
            content: '';
            position: absolute;
            // top: -2px;
            right: -2px;
            height: .7rem;
            width: calc(100% - 74% + 11px);
            background-color: $color-red;
            position: absolute;
          }

          &__toogle{
            z-index: 10;
            cursor: pointer;
            position: absolute;
            top: 50%;
            width: 22px;
            height: 22px;
            margin-left: calc(74% - 22px);
            background-color:$color-primary-light;
            border-radius: 50%;
            transform: translateY(-50%);
            box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.75);

            & svg{
              @include horver;
            }
          }
        }

        &__btn{
           @include formatBtn;
            @include hover;
          
          & svg{
            @include horver;
          }
        }

        &__btn-medium{
          @include mediumRoundButton;
        }

        &__btn-small{
          @include smallRoundButton;
        }

        &__share{
          margin-right: auto;
        }


        &__play-pausa{
          width: 50px;
          height: 50px;
          margin: 0 20px;
          position: relative;
          z-index:10;
          box-shadow: 0 0 0 3px #d3d5de;

        }

        &__heart{
          margin-left: auto;
        }
    }

}
</style>
