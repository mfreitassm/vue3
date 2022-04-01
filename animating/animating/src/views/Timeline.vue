<template>
  <div>
    <img class="runner first" src="../assets/runner.png" alt="runner" />
    <img class="runner second" src="../assets/runner.png" alt="runner" />
    <img class="runner third" src="../assets/runner.png" alt="runner" />
    <div>
      <img class="runner forth" src="../assets/runner.png" alt="runner" />
      <h2>absolute position</h2>
    </div>
    <div>
      <img class="runner fifth" src="../assets/runner.png" alt="runner" />
      <h2>relative position</h2>
    </div>
    <img class="runner first2" src="../assets/runner.png" alt="runner" />
    <img class="runner second2" src="../assets/runner.png" alt="runner" />
    <img class="runner third2" src="../assets/runner.png" alt="runner" />
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  mounted() {
    let tl = gsap.timeline()
    let tl2 = gsap.timeline({ repeat: 2 })
    tl.to('.first', { x: 700, duration: 2, ease: 'expo.out' })
    tl.to('.second', { x: 700, duration: 2, ease: 'expo.out' })
    tl.to('.third', { x: 700, duration: 2, ease: 'expo.out' })
    tl.to('.forth', { x: 400, duration: 2, ease: 'expo.out' }, 0.5) // now with an absolute position
    tl.to('.fifth', { x: 400, duration: 2, ease: 'expo.out' }, '-=.75')

    tl2.to('.first2', { x: 200, duration: 2, ease: 'expo.out' })
    tl2.to('.second2', { x: 400, duration: 2, ease: 'expo.out' }, '<') // starts when first tween starts
    tl2.to('.third2', { x: 600, duration: 2, ease: 'expo.out' }, '<') // starts when second tween starts, which is when first tween starts
  }
}
</script>

<style scoped>
.runner {
  display: block;
  height: 5em;
  width: 5em;
  margin-top: 1.5em;
}
</style>
