import React, { useState } from 'react'
import './Header.css'

function Header() {
  const[showMenu,setShowMenu] = useState(true);
  const[classMenu,setClassMenu] = useState('hidden w-full md:block md:w-auto" id="navbar-dropdown"')
  const showMenuToMe = ()=>{
    // console.log("clicked")
    // console.log(showMenu);
    
    // setShowMenu((prev) => prev ? false: true);
    // console.log(showMenu);
    if(showMenu){
      setShowMenu((prev) => prev? false: true);
      setClassMenu('w-full md:block md:w-auto"')
      console.log(showMenu)
    }else{
      setShowMenu((prev) => prev? false: true);
      setClassMenu('hidden w-full md:block md:w-auto"');
      console.log(showMenu)
    }
    
  }
  return (
    <header className='bg-white border flex justify-between items-center md:px-24'>
        <svg className='mx-4 md:mx-0' width="97" height="72" viewBox="0 0 97 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_0_62)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M37.6813 31.0098L36.8779 30.4073L37.2267 30.038C37.2036 29.4445 37.4764 28.738 37.9961 28.1522C38.566 27.5098 39.3155 27.145 39.9463 27.1585L40.2922 26.7922L40.8947 27.5956L40.8838 27.6071C41.3509 28.2272 41.1651 29.345 40.362 30.2505C39.5106 31.2096 38.3405 31.5088 37.6842 31.0068L37.6813 31.0098Z" fill="url(#paint0_linear_0_62)"/>
        <path d="M39.8122 29.6874C40.725 28.6585 40.9037 27.3266 40.2114 26.7123C39.5191 26.0981 38.2179 26.4342 37.3051 27.4631C36.3923 28.4919 36.2136 29.8239 36.9059 30.4381C37.5982 31.0523 38.8994 30.7162 39.8122 29.6874Z" fill="url(#paint1_linear_0_62)"/>
        <path d="M39.8244 29.6985C40.7316 28.6759 40.9001 27.3441 40.2009 26.7237C39.5016 26.1032 38.1993 26.4292 37.2921 27.4518C36.3849 28.4743 36.2163 29.8062 36.9156 30.4266C37.6148 31.047 38.9172 30.721 39.8244 29.6985Z" fill="#0052FE"/>
        <path d="M10.3802 36.0675L19.2748 26.5374H14.5447L5.09816 36.4603V26.5374H0.847656V46.2692H5.09816V41.617L7.58131 39.0398L13.4964 46.2692H18.4876L10.9819 36.825L10.3802 36.0667V36.0675Z" fill="#0052FE"/>
        <path d="M32.9822 35.3068C31.6599 33.2093 29.2338 31.9119 26.2759 31.9119C23.1147 31.9119 20.548 33.3948 19.2964 35.7446C18.7558 36.7512 18.4609 37.9201 18.4609 39.1966C18.4609 43.456 21.7595 46.4814 26.2759 46.4814C30.7923 46.4814 34.066 43.456 34.066 39.1966C34.066 37.7289 33.6763 36.4066 32.9822 35.3068ZM26.2759 43.1145C24.2161 43.1145 22.6311 41.642 22.6311 39.1966C22.6311 37.0935 23.8008 35.7101 25.4388 35.3647C25.7063 35.306 25.9867 35.2771 26.2759 35.2771C26.4791 35.2771 26.6744 35.2899 26.8664 35.3213C28.6249 35.5751 29.8934 36.9898 29.8934 39.1966C29.8934 41.642 28.3365 43.1145 26.2767 43.1145H26.2759Z" fill="#0052FE"/>
        <path d="M40.9303 32.1221H36.8115V46.2698H40.9303V32.1221Z" fill="#0052FE"/>
        <path d="M53.3951 31.9119C51.4671 31.9119 49.8034 32.5706 48.6947 33.7788V32.1223H44.7607V46.2701H48.8787V39.2745C48.8787 38.2463 49.1004 37.4357 49.4949 36.834C50.0926 35.9061 51.0887 35.4635 52.2865 35.4635C53.9052 35.4635 54.9191 36.2933 55.1247 38.0808C55.1512 38.3041 55.1641 38.5467 55.1641 38.8022V46.2693H57.4327L59.2853 43.697V38.1723C59.2853 33.8576 56.7491 31.9119 53.3951 31.9119Z" fill="#0052FE"/>
        <path d="M80.6958 26.47L60.4893 46.2701H66.7787L68.6247 43.6455L79.0803 28.7691L80.6958 26.47Z" fill="url(#paint2_linear_0_62)"/>
        <path d="M74.7398 26.47L74.0939 27.3681L63.9533 41.4556L60.4893 46.2701L80.6958 26.47H74.7398Z" fill="url(#paint3_linear_0_62)"/>
        <path d="M78.6955 42.8124L78.4344 42.4428C78.2167 42.1343 77.8624 41.9512 77.4864 41.9512H72.733C72.5571 41.9512 72.4205 42.0556 72.3555 42.1946L81.1417 46.27L78.6955 42.8124Z" fill="#F69300"/>
        <path d="M72.3552 42.1948C72.2973 42.3185 72.2965 42.4696 72.3825 42.6013L73.3586 44.0867H73.361L74.7966 46.2702H81.1422L72.356 42.1948H72.3552Z" fill="url(#paint4_linear_0_62)"/>
        <path d="M69.4982 30.1348L67.9935 27.9256L67.0022 26.4707H60.7939L69.401 30.7051C69.5697 30.579 69.6332 30.3332 69.499 30.1348H69.4982Z" fill="url(#paint5_linear_0_62)"/>
        <path d="M60.7939 26.47L63.4426 30.2883C63.4538 30.3036 63.4643 30.3165 63.4755 30.3317C63.6948 30.6185 64.0346 30.788 64.3978 30.788H69.1536C69.2508 30.788 69.3335 30.7543 69.4018 30.7037L60.7947 26.4692L60.7939 26.47Z" fill="#F69300"/>
        <path d="M89.4298 27.2261H87.7573V31.6124H86.6271V27.2261H84.9775V26.3906H89.4298V27.2261ZM91.5417 26.3906L92.9459 30.1619L94.3444 26.3906H95.8227V31.6124H94.6811V30.1619L94.8067 27.6903L93.3283 31.6124H92.5578L91.0851 27.6961L91.1993 30.1619V31.6124H90.0748V26.3906H91.5417Z" fill="black"/>
        </g>
        <defs>
        <linearGradient id="paint0_linear_0_62" x1="40.9951" y1="27.7964" x2="37.9825" y2="31.3111" gradientUnits="userSpaceOnUse">
        <stop stop-color="#3372F5"/>
        <stop offset="0.249995" stop-color="#3372F5"/>
        <stop offset="0.505208" stop-color="#80DBFB"/>
        <stop offset="0.838547" stop-color="#3372F5"/>
        <stop offset="1" stop-color="#3372F5"/>
        </linearGradient>
        <linearGradient id="paint1_linear_0_62" x1="45.455" y1="27.7847" x2="44.6491" y2="28.6919" gradientUnits="userSpaceOnUse">
        <stop stop-color="#0080D4"/>
        <stop offset="0.47" stop-color="white"/>
        <stop offset="0.6" stop-color="#F1F8FC"/>
        <stop offset="1" stop-color="#007DCC"/>
        </linearGradient>
        <linearGradient id="paint2_linear_0_62" x1="76.1561" y1="31.7833" x2="68.3275" y2="40.8402" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FFAC00"/>
        <stop offset="1" stop-color="#FE7801"/>
        </linearGradient>
        <linearGradient id="paint3_linear_0_62" x1="60.4893" y1="36.3704" x2="80.6958" y2="36.3704" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FFCE00"/>
        <stop offset="1" stop-color="#FFB003"/>
        </linearGradient>
        <linearGradient id="paint4_linear_0_62" x1="72.3142" y1="44.2329" x2="81.1414" y2="44.2329" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FE8B01"/>
        <stop offset="1" stop-color="#FE7801"/>
        </linearGradient>
        <linearGradient id="paint5_linear_0_62" x1="60.7931" y1="28.5875" x2="69.5713" y2="28.5875" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FFCE00"/>
        <stop offset="1" stop-color="#FFC101"/>
        </linearGradient>
        <clipPath id="clip0_0_62">
        <rect width="96" height="24" fill="white" transform="translate(0.847656 24)"/>
        </clipPath>
        </defs>
        </svg>
        <nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

    <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg onClick={()=>showMenuToMe()} class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class={classMenu} id="navbar-dropdown">
      <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Features</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Exchanges</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">How it Works?</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Blog</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </header>
  )
}
{/* <button className='border-2 border-blue-600 px-2 py-1 text-blue-600 rounded-md hover:bg-blue-200/50 active:scale-[0.97] duration-300'>Sign In</button> */}
export default Header