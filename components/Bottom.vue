<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    id="Bottom"
    class="is-c1sb"
  >
    <div class="container">
      <div class="footer">
        <div class="copy is-c1sb">
          &copy; WEER STUDIO, 2022
        </div>
        <div class="copy is-c1sb">
          SITE BY&nbsp;<a
            href="https://matrixmyanmar.netlify.app/"
            target="_new"
          >MATRiX</a>
        </div>
      </div>
      <div class="clear" />
    </div>
  </div>
</template>

<style lang="stylus">
json('../assets/colors.json')
#Bottom
  padding 60px
  text-transform uppercase
  letter-spacing 2px
  > .container
    > .footer
      float left
      > .copy
        padding 4px 0
        color black
        text-decoration none
        > a
          color black
          text-decoration none
          transition all 0.2s ease
          &:hover
            color rgba(black, 0.5)
            text-decoration underline

@media all and (min-width: 1px) and (max-width: 1000px)
  #Bottom
    padding 20px 10px
    > .container
      text-align center
      > .footer
        float none

</style>
