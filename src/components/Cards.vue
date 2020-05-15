<template>
  <!-- COntainer for all Cards -->
  <div :class="theme" class="flex self-center	 flex-col md:flex-row mt-8 items-center w-screen justify-center">
    <!-- For Recovers -->
    <div :class="theme" class="flex flex-row mb-4 md:mr-4  w-11/12 max-w-sm rounded overflow-hidden shadow-lg bg-background-secondary">
      <div class="flex flex-col flex-1">
        <div :class="theme" class="px-6 py-4 font-bold text-xl mb-2 text-text-textColor font-mono  font-normal ">Recovered</div>
        <!-- SVG of Recovery -->
         <div class="mx-6 my-4">
              <svg  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="64" height="64"
            viewBox="0 0 172 172"
            style=" fill:#000000;">
            <defs>
              <linearGradient 
              x1="86" y1="15.68425" 
              x2="86" y2="157.67563" gradientUnits="userSpaceOnUse" id="color-1_56315_gr1">
              <stop offset="0" stop-color="#2af598"></stop>
              <stop offset="1" stop-color="#009efd"></stop>
              </linearGradient>
              <linearGradient x1="145.125" y1="21.5" 
              x2="145.125" y2="32.30375" gradientUnits="userSpaceOnUse" id="color-2_56315_gr2">
              <stop offset="0" stop-color="#95facc"></stop>
              <stop offset="1" stop-color="#6ec8ff"></stop>
              </linearGradient>
              <linearGradient x1="126.3125" y1="61.8125" 
              x2="126.3125" y2="72.61625" gradientUnits="userSpaceOnUse" id="color-3_56315_gr3">
              <stop offset="0" stop-color="#95facc"></stop>
              <stop offset="1" stop-color="#6ec8ff"></stop>
              </linearGradient>
              <linearGradient x1="67.1875" y1="40.3125" 
              x2="67.1875" y2="51.11625" gradientUnits="userSpaceOnUse" id="color-4_56315_gr4">
              <stop offset="0" stop-color="#95facc"></stop>
              <stop offset="1" stop-color="#6ec8ff"></stop>
              </linearGradient>
              <linearGradient 
              x1="104.8125" y1="115.5625" 
              x2="104.8125" y2="126.36625" gradientUnits="userSpaceOnUse" id="color-5_56315_gr5">
              <stop offset="0" stop-color="#95facc"></stop>
              <stop offset="1" stop-color="#6ec8ff"></stop></linearGradient><linearGradient x1="51.0625" y1="99.4375" x2="51.0625" y2="110.24125" gradientUnits="userSpaceOnUse" id="color-6_56315_gr6"><stop offset="0" stop-color="#95facc"></stop><stop offset="1" stop-color="#6ec8ff"></stop></linearGradient><linearGradient x1="26.875" y1="139.75" x2="26.875" y2="150.55375" gradientUnits="userSpaceOnUse" id="color-7_56315_gr7"><stop offset="0" stop-color="#95facc"></stop><stop offset="1" stop-color="#6ec8ff"></stop></linearGradient></defs><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M145.125,16.125c-5.92863,0 -10.75,4.82138 -10.75,10.75c0,3.32981 1.55338,6.27262 3.93719,8.24525l-10.0405,21.51612c-0.63694,-0.11825 -1.28731,-0.19887 -1.95919,-0.19887c-3.67113,0 -6.91225,1.85438 -8.85262,4.67087l-39.6245,-14.40769c0.03225,-0.33862 0.10212,-0.6665 0.10212,-1.01319c0,-5.92862 -4.82138,-10.75 -10.75,-10.75c-5.92862,0 -10.75,4.82138 -10.75,10.75c0,5.92862 4.82138,10.75 10.75,10.75c0.77131,0 1.52112,-0.08869 2.24675,-0.24456l28.34238,56.68206c-0.83044,0.72563 -1.54531,1.56144 -2.12313,2.50744l-33.884,-10.16412c0.00806,-0.13706 0.043,-0.26606 0.043,-0.40581c0,-5.92863 -4.82138,-10.75 -10.75,-10.75c-5.92862,0 -10.75,4.82137 -10.75,10.75c0,2.93206 1.18519,5.59 3.09869,7.53306l-13.51006,22.51587c-0.9675,-0.28487 -1.96994,-0.48644 -3.02612,-0.48644c-5.92862,0 -10.75,4.82137 -10.75,10.75c0,5.92863 4.82138,10.75 10.75,10.75c5.92862,0 10.75,-4.82137 10.75,-10.75c0,-2.93206 -1.18519,-5.59 -3.096,-7.53037l13.51006,-22.51856c0.96481,0.28487 1.96725,0.48644 3.02344,0.48644c3.88881,0 7.26969,-2.09625 9.159,-5.19762l33.884,10.16412c-0.00806,0.13975 -0.043,0.26875 -0.043,0.4085c0,5.92863 4.82137,10.75 10.75,10.75c5.92863,0 10.75,-4.82137 10.75,-10.75c0,-5.92863 -4.82137,-10.75 -10.75,-10.75c-0.77131,0 -1.52113,0.08869 -2.24675,0.24456l-28.34238,-56.68206c0.67725,-0.59125 1.30344,-1.23894 1.81675,-1.98337l39.6245,14.41038c-0.03225,0.33594 -0.10212,0.66381 -0.10212,1.0105c0,5.92862 4.82137,10.75 10.75,10.75c5.92863,0 10.75,-4.82138 10.75,-10.75c0,-3.32981 -1.55338,-6.27262 -3.93719,-8.24525l10.0405,-21.51344c0.63694,0.11556 1.28731,0.19619 1.95919,0.19619c5.92863,0 10.75,-4.82138 10.75,-10.75c0,-5.92862 -4.82137,-10.75 -10.75,-10.75z" fill="url(#color-1_56315_gr1)"></path><path d="M145.125,21.5c-2.96853,0 -5.375,2.40647 -5.375,5.375c0,2.96853 2.40647,5.375 5.375,5.375c2.96853,0 5.375,-2.40647 5.375,-5.375c0,-2.96853 -2.40647,-5.375 -5.375,-5.375z" fill="url(#color-2_56315_gr2)"></path><path d="M126.3125,61.8125c-2.96853,0 -5.375,2.40647 -5.375,5.375c0,2.96853 2.40647,5.375 5.375,5.375c2.96853,0 5.375,-2.40647 5.375,-5.375c0,-2.96853 -2.40647,-5.375 -5.375,-5.375z" fill="url(#color-3_56315_gr3)"></path><path d="M67.1875,40.3125c-2.96853,0 -5.375,2.40647 -5.375,5.375c0,2.96853 2.40647,5.375 5.375,5.375c2.96853,0 5.375,-2.40647 5.375,-5.375c0,-2.96853 -2.40647,-5.375 -5.375,-5.375z" fill="url(#color-4_56315_gr4)"></path><path d="M104.8125,115.5625c-2.96853,0 -5.375,2.40647 -5.375,5.375c0,2.96853 2.40647,5.375 5.375,5.375c2.96853,0 5.375,-2.40647 5.375,-5.375c0,-2.96853 -2.40647,-5.375 -5.375,-5.375z" fill="url(#color-5_56315_gr5)"></path><path d="M51.0625,99.4375c-2.96853,0 -5.375,2.40647 -5.375,5.375c0,2.96853 2.40647,5.375 5.375,5.375c2.96853,0 5.375,-2.40647 5.375,-5.375c0,-2.96853 -2.40647,-5.375 -5.375,-5.375z" fill="url(#color-6_56315_gr6)"></path><path d="M26.875,139.75c-2.96853,0 -5.375,2.40647 -5.375,5.375c0,2.96853 2.40647,5.375 5.375,5.375c2.96853,0 5.375,-2.40647 5.375,-5.375c0,-2.96853 -2.40647,-5.375 -5.375,-5.375z" fill="url(#color-7_56315_gr7)"></path></g></g> </svg>
          </div>
      </div>
       <!-- Number of Recovered -->
      <number
       :class="theme" class="flex-1 text-text-greenNumbers font-bold font-sans text-5xl self-center items-center pl-16"
      :from="26000"
      :to="objDailySummary.discharged"
      :duration="5"
      />
    </div>

    <!-- For Active -->

    <div :class="theme" class="flex flex-row mb-4 md:mr-4  w-11/12 max-w-sm rounded overflow-hidden shadow-lg bg-background-secondary">
      <div class="flex flex-col flex-1">
        <div :class="theme" class="px-6 py-4 font-bold text-xl mb-2 text-text-textColor font-mono  font-normal ">Active</div>
        <!-- SVG of Recovery -->
         <div class="mx-6 my-4">
              <svg  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="64" height="64"
            viewBox="0 0 172 172"
            style=" fill:#000000;">
            <defs>
              <linearGradient 
              x1="86" y1="15.68425" 
              x2="86" y2="157.67563" gradientUnits="userSpaceOnUse" id="color-1_56315_gr1">
              <stop offset="0" stop-color="#2af598"></stop>
              <stop offset="1" stop-color="#009efd"></stop>
              </linearGradient>
              <linearGradient x1="145.125" y1="21.5" 
              x2="145.125" y2="32.30375" gradientUnits="userSpaceOnUse" id="color-2_56315_gr2">
              <stop offset="0" stop-color="#95facc"></stop>
              <stop offset="1" stop-color="#6ec8ff"></stop>
              </linearGradient>
              <linearGradient x1="126.3125" y1="61.8125" 
              x2="126.3125" y2="72.61625" gradientUnits="userSpaceOnUse" id="color-3_56315_gr3">
              <stop offset="0" stop-color="#95facc"></stop>
              <stop offset="1" stop-color="#6ec8ff"></stop>
              </linearGradient>
              <linearGradient x1="67.1875" y1="40.3125" 
              x2="67.1875" y2="51.11625" gradientUnits="userSpaceOnUse" id="color-4_56315_gr4">
              <stop offset="0" stop-color="#95facc"></stop>
              <stop offset="1" stop-color="#6ec8ff"></stop>
              </linearGradient>
              <linearGradient 
              x1="104.8125" y1="115.5625" 
              x2="104.8125" y2="126.36625" gradientUnits="userSpaceOnUse" id="color-5_56315_gr5">
              <stop offset="0" stop-color="#95facc"></stop>
              <stop offset="1" stop-color="#6ec8ff"></stop></linearGradient><linearGradient x1="51.0625" y1="99.4375" x2="51.0625" y2="110.24125" gradientUnits="userSpaceOnUse" id="color-6_56315_gr6"><stop offset="0" stop-color="#95facc"></stop><stop offset="1" stop-color="#6ec8ff"></stop></linearGradient><linearGradient x1="26.875" y1="139.75" x2="26.875" y2="150.55375" gradientUnits="userSpaceOnUse" id="color-7_56315_gr7"><stop offset="0" stop-color="#95facc"></stop><stop offset="1" stop-color="#6ec8ff"></stop></linearGradient></defs><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M145.125,16.125c-5.92863,0 -10.75,4.82138 -10.75,10.75c0,3.32981 1.55338,6.27262 3.93719,8.24525l-10.0405,21.51612c-0.63694,-0.11825 -1.28731,-0.19887 -1.95919,-0.19887c-3.67113,0 -6.91225,1.85438 -8.85262,4.67087l-39.6245,-14.40769c0.03225,-0.33862 0.10212,-0.6665 0.10212,-1.01319c0,-5.92862 -4.82138,-10.75 -10.75,-10.75c-5.92862,0 -10.75,4.82138 -10.75,10.75c0,5.92862 4.82138,10.75 10.75,10.75c0.77131,0 1.52112,-0.08869 2.24675,-0.24456l28.34238,56.68206c-0.83044,0.72563 -1.54531,1.56144 -2.12313,2.50744l-33.884,-10.16412c0.00806,-0.13706 0.043,-0.26606 0.043,-0.40581c0,-5.92863 -4.82138,-10.75 -10.75,-10.75c-5.92862,0 -10.75,4.82137 -10.75,10.75c0,2.93206 1.18519,5.59 3.09869,7.53306l-13.51006,22.51587c-0.9675,-0.28487 -1.96994,-0.48644 -3.02612,-0.48644c-5.92862,0 -10.75,4.82137 -10.75,10.75c0,5.92863 4.82138,10.75 10.75,10.75c5.92862,0 10.75,-4.82137 10.75,-10.75c0,-2.93206 -1.18519,-5.59 -3.096,-7.53037l13.51006,-22.51856c0.96481,0.28487 1.96725,0.48644 3.02344,0.48644c3.88881,0 7.26969,-2.09625 9.159,-5.19762l33.884,10.16412c-0.00806,0.13975 -0.043,0.26875 -0.043,0.4085c0,5.92863 4.82137,10.75 10.75,10.75c5.92863,0 10.75,-4.82137 10.75,-10.75c0,-5.92863 -4.82137,-10.75 -10.75,-10.75c-0.77131,0 -1.52113,0.08869 -2.24675,0.24456l-28.34238,-56.68206c0.67725,-0.59125 1.30344,-1.23894 1.81675,-1.98337l39.6245,14.41038c-0.03225,0.33594 -0.10212,0.66381 -0.10212,1.0105c0,5.92862 4.82137,10.75 10.75,10.75c5.92863,0 10.75,-4.82138 10.75,-10.75c0,-3.32981 -1.55338,-6.27262 -3.93719,-8.24525l10.0405,-21.51344c0.63694,0.11556 1.28731,0.19619 1.95919,0.19619c5.92863,0 10.75,-4.82138 10.75,-10.75c0,-5.92862 -4.82137,-10.75 -10.75,-10.75z" fill="url(#color-1_56315_gr1)"></path><path d="M145.125,21.5c-2.96853,0 -5.375,2.40647 -5.375,5.375c0,2.96853 2.40647,5.375 5.375,5.375c2.96853,0 5.375,-2.40647 5.375,-5.375c0,-2.96853 -2.40647,-5.375 -5.375,-5.375z" fill="url(#color-2_56315_gr2)"></path><path d="M126.3125,61.8125c-2.96853,0 -5.375,2.40647 -5.375,5.375c0,2.96853 2.40647,5.375 5.375,5.375c2.96853,0 5.375,-2.40647 5.375,-5.375c0,-2.96853 -2.40647,-5.375 -5.375,-5.375z" fill="url(#color-3_56315_gr3)"></path><path d="M67.1875,40.3125c-2.96853,0 -5.375,2.40647 -5.375,5.375c0,2.96853 2.40647,5.375 5.375,5.375c2.96853,0 5.375,-2.40647 5.375,-5.375c0,-2.96853 -2.40647,-5.375 -5.375,-5.375z" fill="url(#color-4_56315_gr4)"></path><path d="M104.8125,115.5625c-2.96853,0 -5.375,2.40647 -5.375,5.375c0,2.96853 2.40647,5.375 5.375,5.375c2.96853,0 5.375,-2.40647 5.375,-5.375c0,-2.96853 -2.40647,-5.375 -5.375,-5.375z" fill="url(#color-5_56315_gr5)"></path><path d="M51.0625,99.4375c-2.96853,0 -5.375,2.40647 -5.375,5.375c0,2.96853 2.40647,5.375 5.375,5.375c2.96853,0 5.375,-2.40647 5.375,-5.375c0,-2.96853 -2.40647,-5.375 -5.375,-5.375z" fill="url(#color-6_56315_gr6)"></path><path d="M26.875,139.75c-2.96853,0 -5.375,2.40647 -5.375,5.375c0,2.96853 2.40647,5.375 5.375,5.375c2.96853,0 5.375,-2.40647 5.375,-5.375c0,-2.96853 -2.40647,-5.375 -5.375,-5.375z" fill="url(#color-7_56315_gr7)"></path></g></g> </svg>
          </div>
      </div>
       <!-- Number of Active -->
       <number
       :class="theme" class="flex-1 text-text-greenNumbers font-bold font-sans text-5xl self-center items-center pl-16"
      :from="49000"
      :to="objDailySummary.Active"
      :duration="5"
      />
    </div>

    <!-- For Deaths -->
    <div :class="theme" class="flex flex-row mb-4 md:mr-4  w-11/12 max-w-sm rounded overflow-hidden shadow-lg bg-background-secondary">
      <div class="flex flex-col flex-1">
        <div :class="theme" class="px-6 py-4 font-bold text-xl mb-2 text-text-textColor font-mono  font-normal ">Deaths</div>
        <!-- SVG of Recovery -->
         <div class="mx-6 my-4">
              <svg  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="64" height="64"
            viewBox="0 0 172 172"
            style=" fill:#000000;">
            <defs>
              <linearGradient 
              x1="86" y1="15.68425" 
              x2="86" y2="157.67563" gradientUnits="userSpaceOnUse" id="color-1_56315_gr1">
              <stop offset="0" stop-color="#2af598"></stop>
              <stop offset="1" stop-color="#009efd"></stop>
              </linearGradient>
              <linearGradient x1="145.125" y1="21.5" 
              x2="145.125" y2="32.30375" gradientUnits="userSpaceOnUse" id="color-2_56315_gr2">
              <stop offset="0" stop-color="#95facc"></stop>
              <stop offset="1" stop-color="#6ec8ff"></stop>
              </linearGradient>
              <linearGradient x1="126.3125" y1="61.8125" 
              x2="126.3125" y2="72.61625" gradientUnits="userSpaceOnUse" id="color-3_56315_gr3">
              <stop offset="0" stop-color="#95facc"></stop>
              <stop offset="1" stop-color="#6ec8ff"></stop>
              </linearGradient>
              <linearGradient x1="67.1875" y1="40.3125" 
              x2="67.1875" y2="51.11625" gradientUnits="userSpaceOnUse" id="color-4_56315_gr4">
              <stop offset="0" stop-color="#95facc"></stop>
              <stop offset="1" stop-color="#6ec8ff"></stop>
              </linearGradient>
              <linearGradient 
              x1="104.8125" y1="115.5625" 
              x2="104.8125" y2="126.36625" gradientUnits="userSpaceOnUse" id="color-5_56315_gr5">
              <stop offset="0" stop-color="#95facc"></stop>
              <stop offset="1" stop-color="#6ec8ff"></stop></linearGradient><linearGradient x1="51.0625" y1="99.4375" x2="51.0625" y2="110.24125" gradientUnits="userSpaceOnUse" id="color-6_56315_gr6"><stop offset="0" stop-color="#95facc"></stop><stop offset="1" stop-color="#6ec8ff"></stop></linearGradient><linearGradient x1="26.875" y1="139.75" x2="26.875" y2="150.55375" gradientUnits="userSpaceOnUse" id="color-7_56315_gr7"><stop offset="0" stop-color="#95facc"></stop><stop offset="1" stop-color="#6ec8ff"></stop></linearGradient></defs><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M145.125,16.125c-5.92863,0 -10.75,4.82138 -10.75,10.75c0,3.32981 1.55338,6.27262 3.93719,8.24525l-10.0405,21.51612c-0.63694,-0.11825 -1.28731,-0.19887 -1.95919,-0.19887c-3.67113,0 -6.91225,1.85438 -8.85262,4.67087l-39.6245,-14.40769c0.03225,-0.33862 0.10212,-0.6665 0.10212,-1.01319c0,-5.92862 -4.82138,-10.75 -10.75,-10.75c-5.92862,0 -10.75,4.82138 -10.75,10.75c0,5.92862 4.82138,10.75 10.75,10.75c0.77131,0 1.52112,-0.08869 2.24675,-0.24456l28.34238,56.68206c-0.83044,0.72563 -1.54531,1.56144 -2.12313,2.50744l-33.884,-10.16412c0.00806,-0.13706 0.043,-0.26606 0.043,-0.40581c0,-5.92863 -4.82138,-10.75 -10.75,-10.75c-5.92862,0 -10.75,4.82137 -10.75,10.75c0,2.93206 1.18519,5.59 3.09869,7.53306l-13.51006,22.51587c-0.9675,-0.28487 -1.96994,-0.48644 -3.02612,-0.48644c-5.92862,0 -10.75,4.82137 -10.75,10.75c0,5.92863 4.82138,10.75 10.75,10.75c5.92862,0 10.75,-4.82137 10.75,-10.75c0,-2.93206 -1.18519,-5.59 -3.096,-7.53037l13.51006,-22.51856c0.96481,0.28487 1.96725,0.48644 3.02344,0.48644c3.88881,0 7.26969,-2.09625 9.159,-5.19762l33.884,10.16412c-0.00806,0.13975 -0.043,0.26875 -0.043,0.4085c0,5.92863 4.82137,10.75 10.75,10.75c5.92863,0 10.75,-4.82137 10.75,-10.75c0,-5.92863 -4.82137,-10.75 -10.75,-10.75c-0.77131,0 -1.52113,0.08869 -2.24675,0.24456l-28.34238,-56.68206c0.67725,-0.59125 1.30344,-1.23894 1.81675,-1.98337l39.6245,14.41038c-0.03225,0.33594 -0.10212,0.66381 -0.10212,1.0105c0,5.92862 4.82137,10.75 10.75,10.75c5.92863,0 10.75,-4.82138 10.75,-10.75c0,-3.32981 -1.55338,-6.27262 -3.93719,-8.24525l10.0405,-21.51344c0.63694,0.11556 1.28731,0.19619 1.95919,0.19619c5.92863,0 10.75,-4.82138 10.75,-10.75c0,-5.92862 -4.82137,-10.75 -10.75,-10.75z" fill="url(#color-1_56315_gr1)"></path><path d="M145.125,21.5c-2.96853,0 -5.375,2.40647 -5.375,5.375c0,2.96853 2.40647,5.375 5.375,5.375c2.96853,0 5.375,-2.40647 5.375,-5.375c0,-2.96853 -2.40647,-5.375 -5.375,-5.375z" fill="url(#color-2_56315_gr2)"></path><path d="M126.3125,61.8125c-2.96853,0 -5.375,2.40647 -5.375,5.375c0,2.96853 2.40647,5.375 5.375,5.375c2.96853,0 5.375,-2.40647 5.375,-5.375c0,-2.96853 -2.40647,-5.375 -5.375,-5.375z" fill="url(#color-3_56315_gr3)"></path><path d="M67.1875,40.3125c-2.96853,0 -5.375,2.40647 -5.375,5.375c0,2.96853 2.40647,5.375 5.375,5.375c2.96853,0 5.375,-2.40647 5.375,-5.375c0,-2.96853 -2.40647,-5.375 -5.375,-5.375z" fill="url(#color-4_56315_gr4)"></path><path d="M104.8125,115.5625c-2.96853,0 -5.375,2.40647 -5.375,5.375c0,2.96853 2.40647,5.375 5.375,5.375c2.96853,0 5.375,-2.40647 5.375,-5.375c0,-2.96853 -2.40647,-5.375 -5.375,-5.375z" fill="url(#color-5_56315_gr5)"></path><path d="M51.0625,99.4375c-2.96853,0 -5.375,2.40647 -5.375,5.375c0,2.96853 2.40647,5.375 5.375,5.375c2.96853,0 5.375,-2.40647 5.375,-5.375c0,-2.96853 -2.40647,-5.375 -5.375,-5.375z" fill="url(#color-6_56315_gr6)"></path><path d="M26.875,139.75c-2.96853,0 -5.375,2.40647 -5.375,5.375c0,2.96853 2.40647,5.375 5.375,5.375c2.96853,0 5.375,-2.40647 5.375,-5.375c0,-2.96853 -2.40647,-5.375 -5.375,-5.375z" fill="url(#color-7_56315_gr7)"></path></g></g> </svg>
          </div>
      </div>
       <!-- Number of Deaths -->
    <number
       :class="theme" class="flex-1 text-text-greenNumbers font-bold font-sans text-5xl self-center items-center pl-16"
      :from="1900"
      :to="objDailySummary.deaths"
      :duration="5"
      />

</div>
    
  </div>
    
</template>

<script>
export default {
  name: 'Cards',
  props:['theme','objDailySummary'],
  computed:{
    
    
    
  },
  
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
