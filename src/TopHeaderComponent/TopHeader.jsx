import React from 'react';
import TopHeaderLeft from './TopHeaderLeft';
import TopHeaderRight from './TopHeaderRight';
import './TopHeader.css'



const TopHeader = () => {
    return (
        
           <section id="topHeaderBlock">
               <article>
               <TopHeaderLeft/>
               <TopHeaderRight/>
               </article>
           </section>
            
        
    )
}

export default TopHeader
