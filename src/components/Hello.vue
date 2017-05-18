<template>
  <div class="hello">
    <navbar></navbar>
    <range-input></range-input>
    <search></search>
    <formulaire></formulaire>
    <liste></liste>
  </div>
</template>

<script>
  import Navbar from './Navbar'
  import Liste from './Liste'
  import Form from './Form'
  import Search from './Search'
  import RangeInput from './Range'


  export default {
    name: 'hello',
    components: { navbar: Navbar, liste: Liste, formulaire: Form, search: Search, rangeInput: RangeInput },
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }
</style>