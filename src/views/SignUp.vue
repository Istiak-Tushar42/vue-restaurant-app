<template>

  <div class="authentication">
    <Register />
  </div>
  
</template>

<script>
// @ is an alias to /src
import Register from '@/components/Register.vue'

export default {
  name: 'SignUp',
  components: {
    Register
  }
}
</script>
