<template>
   <footer>
       <div class="container">
           <div class="row align-items-center">
               <div class="col-md-6">
                   <p>Copyright © 2021 KittyCake</p>
               </div>
               <div class="col-md-6">
                   <ul class="social-icons d-flex align-itens-center">
                       <li>
                           <a href=""> 
                               <img src="../assets/icon-1.svg" alt="">
                           </a>
                       </li>
                       <li>
                           <a href=""> 
                               <img src="../assets/icon-2.svg" alt="">
                           </a>
                       </li>
                       <!-- <li>
                           <a href=""> 
                               <img src="../assets/linkedin.png" alt="">
                           </a>
                       </li> -->
                       <li>
                           <a href=""> 
                               <img src="../assets/icon-6.png" alt="">
                           </a>
                       </li>
                   </ul>
               </div>
           </div>
       </div>
   </footer>
</template>

<script>
export default {
    name:'Footer',
    props: {
        copyRightText: String,
    }    
}
</script>
<style scoped>
footer{
    background-color: var(--blue);
}
footer p{
    color: var(--white);
    padding: 12px 0;
    margin: 0;
}
footer .social-icons{
    padding: 12px 0;
}
footer .social-icons{
    justify-content: flex-end;
    list-style: none;
    margin:0;
    padding: 0;
}
footer .social-icons li:not(:last-child){
    margin-right: 7px;
}
footer .social-icons li a{
    width: 28px;
    height: 28px; 
    border-radius: 50%;
    display: inline-block; 
    background-color: #fff;
}
footer .social-icons li a:hover{
    opacity: 0.8;
} 
footer .social-icons li a img{
    width: 100%;
    height: 100%;
    object-fit: scale-down;
    object-position: center;
}
@media(max-width:767px){
    footer p{
        text-align: center;
    }
    ul.social-icons.d-flex.align-itens-center {
        justify-content: center;
        padding-bottom: 20px;
    }
}
@media(max-width:480px){
     footer p{
        text-align:center;
    }
    ul.social-icons.d-flex.align-itens-center {
        justify-content: center;
        padding-bottom: 20px;
    }
}
</style>