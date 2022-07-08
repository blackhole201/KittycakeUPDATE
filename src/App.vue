<template>
  <div class="">
    <Header v-bind="HeaderData" />
    <Footer v-bind="FooterData"/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data() {
    return { HeaderData, FooterData };
  },
};


const HeaderData = {
  heading: "Test"
};

const FooterData = {
  copyRightText: "Footer"  
}
</script>
