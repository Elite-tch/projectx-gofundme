import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const contentData = [
    { id:1,
        src: '/avax.png',
      title: 'Avalanche',
      description: 'Fast and cheaper transaction . Earn rewards in AVAX for borrowing or suppling liquidity.',
    },
    { id:2,
        src: '/opt.png',
      title: 'Optimism',
      description: 'Optimism is an EVM  equivalent Rollup chain. it is dwsigned to be fast , simple and secure. ',
    },
    { id:3,
        src: '/arc.png',
      title: 'Aave Arc ',
      description: 'Aave Arc is a permissioned DeFi market for institutions, wealth managers and private funds. ',
       
    },
    { id:4,
        src: '/eth.png',
      title: 'Ethereum',
      description: 'Fast and cheaper transaction . Earn rewards in AVAX for borrowing or suppling liquidity.',
    },
    
    
    { id:5,
        src: '/base.png',
      title: 'Base',
      description: ' Base is a layer 2 (L2) blockchain solution built by Coinbase . Designed as an Ethereum L2 with the goals of enhancing security.',
    },
    

    { id:6,
        src: '/ab.png',
      title: 'Arbitrum',
      description: 'Ethereum security with speed. Arbitrum is a layer 2 rollup deployed on Aave for secure, fast transactions. ',
    },
    { id:7,
        src: '/poly.png',
      title: 'Polygon',
      description: 'Faster transactions and lower fees makes interacting with Aave on polygon perfect for high volume transaction. ',
    },
    { id:8,
        src: '/gen.png',
      title: ' Gnosis',
      description: 'Gnosis Chain is one of the first Ethereum Chains. It ensures that it operates at a much lower cost compared to Ethereum mainnet. ',
    },

]

export default function ContentPage() {
  return (
    <div>
      <div className='bg-gray-900 py-10'>
        <div className='md:w-4/5 mx-auto px-6 md:px-0'>
          <div className='text-gray-500 text-sm flex justify-between'>
            <div className='md:w-4/5 w-2/5 '>
              <h2 className='text-gray-100 md:text-3xl'>$20,888,734,456.00</h2>
              <p>of liquidity in Aave across 8 networks and over 15 markets</p>
            </div>

            <div className='flex flex-col gap-2 w-3/5 pl-8 md:pl-0 md:w-2/5'>
              <div className='flex items-center gap-2 md:gap-4'>
                <p>Supply</p>
                <p>Stake</p>
                <p>Borrow</p>
                <p>Vote</p>
              </div>
              <div className="w-full bg-gray-600 rounded-full ">
          <div className="bg-blue-900 h-0.5 rounded-full" style={{ width: '70%' }}></div>
        </div>
              <p>Participate in Aave governance and vote on new proposals, new assets, and protocol upgrades</p>
            </div>
          </div>
<div className='pt-12'>
<h2 className='text-2xl text-gray-200'>Aave Markets</h2>

<div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-6 mt-8'>
{contentData.map((item, id) => (
            <div key={id} className='mb-4 '>
                <div className=''>
                <div data-aos="zoom-in-up" className='flex flex-col gap-2 bg-gray-800 py-4 px-6 rounded-xl animated-hover shadow-2xl'>
                    <img src={item.src} alt="" className='w-12' />
              <h2 className='text-gray-400 text-2xl'>{item.title}</h2>
              <p className='text-sm text-gray-600 '>{item.description}</p>
              </div>
            </div>
            </div>
          ))}


</div>


</div>

<div className='bg-gray-800 mt-12 px-8 py-6 text-gray-600'>
<h4 className='text-gray-300 text-lg'>And more to come...</h4>
<p className='text-sm'>Submit a proposal to deploy a new Aave ecosystem. You can learn from the Aave governance.</p>
<button className='bg-slate-200 py-3 px-6 hover:bg-gray-300 rounded-full mt-6'>Learn more</button>


</div>

<div className='flex flex-col items-center justify-center pt-12'>
<h2 className='text-gray-300 text-center font-bold text-3xl pb-2'>Governed by the community</h2>
<p className='text-gray-500 text-center text-sm'>Aave is a fully decentralized community governed protocol with 166.224  Token holders.</p>
<button className=' bg-slate-200 hover:bg-gray-300 py-3 px-6 rounded-xl mt-6'>
Governors Forum</button>
<img src="emoji.png" alt="" className='pt-4 ml:8 md:ml-16 w-4/5' />
</div>

<div className='pt-4'>
<h2 className='text-gray-300 text-center  font-bold text-2xl pb-2' >How it Works</h2>
<div className='flex justify-center flex-col md:flex-row gap-4  md:gap-12 text-gray-400 mx-auto pt-6'>
<div className='md:w-3/5'>
    <h4 className='text-gray-200 font-medium pb-1'>Submit Aave Request for comment</h4>
    <p className='text-sm'>Discuss with community feedback.</p>
    <button className='text-purple-700 text-sm hover:text-gray-300'>Visit Docs 
 </button>
</div>



<div className='md:w-3/5'>
    <h4 className='text-gray-200 font-medium pb-1'>Create a Snapshot</h4>
    <p className='text-sm'>Cauga community sentiment on a new proposal through a snapshot</p>
    
    <button className='text-purple-700 text-sm hover:text-gray-300'>
How to create a Snapshot </button>
</div>


<div className='md:w-3/5'>
    <h4 className='text-gray-200 font-medium pb-1'>Submit an Aave Request for Improvement</h4>
    <p className='text-sm'>The proposal is submitted through a GitHub pull request and the community votes on approvals.</p>
</div>

</div>
</div>


</div>

</div>
</div>







        
  );
}
