<template>
    <!-- header start here -->
    <header> 
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container">
                <router-link to="/" class="navbar-brand">
                    <img src="../assets/new-logo.png" alt=""  >
                </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav align-items-center ml-auto">
                        <li class="nav-item">
                            <router-link to="/">Features</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/" @click="scrollToTop('how-to-buy')">How to Buy</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/" @click="scrollToTop('our-roadmap-section')">Roadmap</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/faq">FAQ's</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/white-paper">White Paper</router-link>
                        </li>
                        <li>
                            <a target="_blank" href="https://kittyfam.vercel.app/" class="cmn-btn cs-border">Your Dashboard </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://pancakeswap.finance/swap?outputCurrency=0xc22e8114818a918260662375450e19ac73d32852" class="cmn-btn">Buy KittyCake</a>
                        </li>
                    </ul>
            </div>

            </div>
        </nav>  
    </header>
    <!-- header end here -->
    <router-view></router-view>
</template>
<script>
export default {
    name: "Header",
    props: {
        heading: String,
    },methods: {
        scrollToTop(id) {
            var element_to_scroll_to = document.getElementById(id);
            element_to_scroll_to.scrollIntoView();
           
        },  goToPricing() {
            this.$router.push('/pricing');
        }
        }
}
</script>
<style scoped>
 header{
     position: absolute;
     top: 0;
     left: 0;
     right: 0;
     z-index: 9999;
 }
 .navbar{
     padding: 0;
 }
 header .navbar-brand{
     /* background-color: #fff; */
    padding: 8px;
    border-radius: 0 0 8px 8px;
    max-width:150px;
 }
  header .navbar-brand img{
    width: 100%;
  }
  ul.navbar-nav{
    justify-content: flex-end;
    flex-grow: 1;
  }
  ul.navbar-nav li a:not(.cmn-btn){
    font-size: 16px;
    line-height: 19px;
    color: var(--blue);
    font-weight: 500;
    font-family: var(--font);
  }
  ul.navbar-nav li.nav-item{
      margin-right: 30px;
  }
  ul.navbar-nav a.cmn-btn.cs-border{
      margin-right: 20px;
  }
  /*responsive starts here*/
  @media(max-width:1199px){
       header .navbar-brand {
        width: 120px;
    }

    ul.navbar-nav li.nav-item{
        margin-right: 11px;
    }
  
  }
  @media(max-width:991px){
      ul.navbar-nav li {
       margin: 10px 0;
    }
    ul.navbar-nav li:last-child {
        margin-bottom: 35px;
    }
   .navbar-nav {
       background: rgba(255,255,255,0.9);
        padding: 20px;
        border-radius: 6px;
    }
    
  }
</style>