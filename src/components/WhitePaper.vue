<template>
    <div class="whitepaper-outer">
        <div class="container">
            <div class="heading">
                <h2>Whitepaper</h2>
            </div>
            <div class="subheading break-all">0xc22e8114818a918260662375450e19ac73d32852</div>
        <!-- <div class="subheading mob">0xdb8d30b74bf098af214e862c90<span>e647bbb1fcc58c</span></div> -->
        <div class="whitepaper-text">
            <h4>Introduction to KittyCake</h4>
          <p>Bring DeFi to the masses.</p>
          <p> Decentralized finance, which utilizes technologies to remove </p>
          <p>intermediaries, middlemen, and banks from financial markets, is a complicated system to enter. </p>
          <p>KittyCake’s primary goal is to make it simple enough to start earning passive income without having to understand this complicated DeFi world.</p>
          <p>The first step towards achieving that goal was to create the KittyCake token. It is an innovative Reflection Token: one that pays dividends in an already established token instead of our own. Our dividends are paid out in $CAKE, the premier BSC Swap on the market and a company whose tokens are getting more valuable all the time. </p>
          <p>The rate of Crypto adoption in the world is growing, but the percentage of the world’s population who are users is still very small.  </p>
          <p>KittyCake history</p> 
          <p>KittyCake was Fair Launched on the PancakeSwap Exchange on July 2021. There were no presales or ICO: everyone could buy KittyCake fairly from the moment it launched.</p>
          <p>In the first 10 days, we achieved a market cap of $12 million from an initial market cap of $6,000. We now have over 7,000 holders. We also have large, loyal, and active communities on Twitter and Telegram and Medium. </p>
          <h4>We run Voice Chat, Main Chat and Support Chat services 24/7 on Telegram.</h4>
          
           <p>There is a 15% buy tax. An extra 1% fee is applied to all sales to encourage holding, discourage swing trading and to lessen whale manipulation. At times, our tokenomics may change in response to market conditions.</p>

           <p>The token contract employs a static rewards system. The 15% buy tax is split as follows:</p>
         
          <ul>
            <li>7% is redistributed to holders </li>
            <li>3% is used to fuel the liquidity pool </li>
            <li>5% is allocated to the Marketing wallet.</li>
          </ul>
          <h4>KittyCake divided distribution</h4>
          <p>The dividend mechanism incentivizes token holders to hold in order to earn dividends from the transactions (buys and sells).</p>
          <p>The dividends are not dependent on the price of either KittyCake or $CAKE. They are based purely on the volume and proportional to the KittyCake amount you hold in your wallet.</p>
          <h4>Under the KittyCake contract’s hood:</h4>
          <ul>
            <li>All $Cake the contract gains are split proportionally between the token holders.</li>
            <li>To receive dividends a minimum token balance of 200,000 KittyCake is required to be held in a wallet.</li>
            <li>The contract keeps track of all the dividends due to each holder in a list.</li>
            <li>Every transaction processes a certain number of users from the list.</li>
            <li>The number of holders processed through each transaction is dynamic and based on transaction size. </li>
            <li>Holders will receive dividends from the queue based on their position in the list.</li>
            <li>It’s a fair system, fully automated.</li>
          </ul>
          <h4>Security</h4>   
<p>The KittyCake team has taken several steps to ensure optimal security. </p> 
          <p>
There’s a 9-Year lock on the liquidity pool, so holders can rest assured they can trade. DXLock, a cross-chain decentralized token and liquidity provider locker for Ethereum and BSC, is here to help as a middleman. </p>
         

 <p>
KittyCake’s contract is also audited by Desert Finance.

 </p>




            </div>  
          <div class="yoken-wrap">
          <h4>Token information:</h4>
          <div class="text black">Network:</div>
          <p>Binance Smart Chain (BEP-20)</p>
          <p>Name:</p>
          <p>KittyCake</p>
          <p>Symbol:</p>
          <p>KCAKE</p>
          <p>Contract address:</p>
          <p class="break-all">0xc22e8114818a918260662375450e19ac73d32852</p>
          <p>Decimals:</p>
          <p>18</p>
          <p>Total Supply:</p>
          <p>100,000,000,000</p>
          <p>Team Wallet:</p>
          <p>NO Team Wallet</p>
          <p>Fair Launch Time:</p>
          <p>July 2021</p>
          <p>Liquidity Lock:</p>
          <p>2030</p> 
        
        
        
        
   
       <div class="thanks-text">Thank you for your interest in KittyCake.
</div>  
    </div>  
        </div>  
        </div> 
</template>

<script>
export default{
     name: 'WhitePaper', 
}
</script>
<style scoped>
.break-all{
  word-break: break-all;
}
.whitepaper-outer{
    padding-top: 200px;
    padding-bottom: 100px; 
}
ul li {
    font-size: 15px;
    line-height: 25px;
    font-weight: 400;
    color: var(--grey);
    font-family: var(--font);
}
h4{

    font-size: 20px;
    line-height: 20px;
    font-weight: 500;
    color: var(--blue);
    font-family: var(--font);
    margin-bottom: 20px;
    margin-top: 30px;

}
@media(max-width:1199px){
  h4{
        font-size: 18px;
    line-height: 18px;
    margin-bottom: 15px;
  }
}
</style>