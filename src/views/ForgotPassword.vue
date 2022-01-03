<template>

  <div class="authentication">
    <Forgot />
  </div>
  
</template>

<script>

// @ is an alias to /src
import Forgot from '@/components/Forgot.vue'

export default {
  name: 'SignIn',
  components: {
    Forgot
  }
}

</script>
