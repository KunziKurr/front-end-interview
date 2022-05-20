import Head from 'next/head'
import Image from 'next/image'
import { useState,useEffect } from "react"
import Link from 'next/link'
import styles from '../styles/Home.module.css'


const svgs = {
  logo:<svg xmlns="http://www.w3.org/2000/svg" width="79.543" height="64" viewBox="0 0 79.543 64">
      <path id="logo" d="M55.929-17.375l.075.021v2.261H56a1.975,1.975,0,0,1-2.017,1.873H51.089V-10.7c.009.815.353,1.191,1.136,1.2h9.151c.778-.009,1.122-.385,1.137-1.2v-11.05c-.015-.818-.359-1.2-1.143-1.2H52.225c-.783,0-1.128.385-1.136,1.2v2.52h2.889A1.9,1.9,0,0,1,55.929-17.375ZM72.754-1.732V-30.467l0-.2A2.093,2.093,0,0,0,70.51-32.9H45.439a2.089,2.089,0,0,0-2.232,2.229l0,.2v11.24h2.274V-24.9a3.459,3.459,0,0,1,3.242-3.53H64.881a3.452,3.452,0,0,1,3.231,3.53V-7.55A3.454,3.454,0,0,1,64.881-4.02H48.721A3.461,3.461,0,0,1,45.478-7.55v-5.67H43.2V.451H70.469A2.1,2.1,0,0,0,72.754-1.732ZM28.519-10.7V-13.22h-2.9a1.978,1.978,0,0,1-2.011-1.873h0v-2.261h0a1.974,1.974,0,0,1,2.011-1.873h2.9v-2.52c-.017-.818-.356-1.2-1.142-1.2H18.231c-.783,0-1.124.385-1.14,1.2V-10.7c.015.815.356,1.191,1.14,1.2h9.146C28.162-9.506,28.5-9.883,28.519-10.7Zm51.024-22.06V.149A7,7,0,0,1,72.5,7.081H71.257v0H43.2v3L50.3,17.552V9.393h5.455V24.47H50.025S44.035,17.8,43.2,16.337V24.47H36.415V-13.22H34.124v5.67A3.458,3.458,0,0,1,30.893-4.02H14.72A3.456,3.456,0,0,1,11.487-7.55V-24.9a3.454,3.454,0,0,1,3.234-3.53H30.893a3.456,3.456,0,0,1,3.231,3.53v5.673h2.291v-13.53h0a6.994,6.994,0,0,1,7.1-6.772l1.908,0v0H71.257v0l1.184,0a7,7,0,0,1,7.1,6.772ZM0,.148V-.009H0V-32.757H0a7,7,0,0,1,7.1-6.772l1.184,0v0H34.124V-32.9H9.03a2.1,2.1,0,0,0-2.238,2.23V-1.733A2.1,2.1,0,0,0,9.077.452H34.124V7.085H8.282v0H7.04A7,7,0,0,1,0,.148ZM9.875,20.811a1.3,1.3,0,0,0,.8-1.052A1.392,1.392,0,0,0,9.6,18.581a6.283,6.283,0,0,0-1.929-.2H6.138v2.723H7.92A3.97,3.97,0,0,0,9.875,20.811Zm-3.738-8.2v2.546h1.6A3.556,3.556,0,0,0,9.6,14.871a1.152,1.152,0,0,0,.651-.974c0-1.145-1.347-1.285-2.631-1.285Zm6.742,4.056c2.516.314,4.235,1.622,4.235,3.42a3.915,3.915,0,0,1-2.232,3.53c-1.688.843-4.038.853-6,.853H0V9.393H9.545a10.79,10.79,0,0,1,4.713.768,3.732,3.732,0,0,1,2.32,3.173c0,1.6-1.484,2.917-3.7,3.28Zm9.9-7.276H29.2l6.259,15.078H29.674l-1.132-2.987h-5.29l-1.224,2.987H16.588ZM25.9,13.846,24.26,18.2h3.252ZM72.13,9.393h6.025L72.633,14.9l6.842,9.567H72.13l-3.756-5.688-2.266,2.194v3.494H59.789V9.393h6.319V15.6Z" transform="translate(0 39.529)" fill="#03513b"/>
  </svg>,
  audio: <svg  width="72.853" height="72.853" viewBox="0 0 72.853 72.853">
  <defs>
    <clipPath id="clip-path">
      <path id="Path_1" data-name="Path 1" d="M0,0H72.853V72.853H0Z" fill="#80ba27"/>
    </clipPath>
  </defs>
  <g id="Mask_Group_3" data-name="Mask Group 3">
    <g id="microphone" transform="translate(10.407)">
      <g id="Group_71" data-name="Group 71" transform="translate(13.009)">
        <g id="Group_70" data-name="Group 70">
          <path id="Path_32" data-name="Path 32" d="M38.724,0A13.009,13.009,0,0,0,25.714,13.009V28.621a13.009,13.009,0,1,0,26.019,0V13.009A13.009,13.009,0,0,0,38.724,0Zm7.806,28.621a7.806,7.806,0,1,1-15.611,0v-5.2H46.529Zm0-10.407H30.918v-5.2a7.806,7.806,0,1,1,15.611,0Z" transform="translate(-25.714)" fill="#80ba27"/>
        </g>
      </g>
      <g id="Group_73" data-name="Group 73" transform="translate(0 20.815)">
        <g id="Group_72" data-name="Group 72">
          <path id="Path_33" data-name="Path 33" d="M60.864,69.691H40.049V53.926A23.443,23.443,0,0,0,60.864,30.663v-5.2a2.6,2.6,0,1,0-5.2,0v5.2a18.213,18.213,0,0,1-36.426,0v-5.2a2.6,2.6,0,0,0-5.2,0v5.2A23.443,23.443,0,0,0,34.845,53.926V69.691H14.03a2.6,2.6,0,1,0,0,5.2H60.864a2.6,2.6,0,1,0,0-5.2Z" transform="translate(-11.428 -22.857)" fill="#80ba27"/>
        </g>
      </g>
    </g>
  </g>
  </svg>,
  menu:<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="768" height="768" viewBox="0 0 768 768">
<path d="M96 416h576c17.664 0 32-14.336 32-32s-14.336-32-32-32h-576c-17.664 0-32 14.336-32 32s14.336 32 32 32zM96 224h576c17.664 0 32-14.336 32-32s-14.336-32-32-32h-576c-17.664 0-32 14.336-32 32s14.336 32 32 32zM96 608h576c17.664 0 32-14.336 32-32s-14.336-32-32-32h-576c-17.664 0-32 14.336-32 32s14.336 32 32 32z"></path>
  </svg>,
  cancel:<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <path d="M480 390.368l-134.496-134.368 134.496-134.368-89.632-89.632-134.368 134.432-134.432-134.432-89.568 89.632 134.368 134.368-134.368 134.368 89.568 89.632 134.432-134.432 134.368 134.432z"></path>
  </svg>,
  watch:<svg width="72.853" height="72.853" viewBox="0 0 72.853 72.853">
  <defs>
    <clipPath>
      <path id="Path_1" data-name="Path 1" d="M0,0H72.853V72.853H0Z" fill="#80ba27" stroke="#707070" strokeWidth="1"/>
    </clipPath>
  </defs>
  <g id="Watch_banking_icon" data-name="Watch banking icon" clipPath="url(#clip-path)">
    <g id="watch" transform="translate(13.009)">
      <g id="Group_65" data-name="Group 65" transform="translate(0)">
        <path id="Path_29" data-name="Path 29" d="M53.314,10.408h-.572L50.634,1.97A2.6,2.6,0,0,0,48.11,0H27.3a2.6,2.6,0,0,0-2.524,1.97l-2.108,8.438h-.572a7.806,7.806,0,0,0-7.806,7.806V54.64a7.806,7.806,0,0,0,7.806,7.806h.572l2.108,8.438a2.6,2.6,0,0,0,2.524,1.97H48.11a2.6,2.6,0,0,0,2.524-1.97l2.108-8.438h.572A7.806,7.806,0,0,0,61.12,54.64V18.213A7.806,7.806,0,0,0,53.314,10.408ZM29.327,5.2H46.078l1.3,5.2H28.026ZM46.078,67.649H29.327l-1.3-5.2H47.379ZM55.916,54.64a2.6,2.6,0,0,1-2.6,2.6H22.091a2.6,2.6,0,0,1-2.6-2.6V39.028H23.3l4.423,6.648a2.6,2.6,0,0,0,4.6-.52l5.115-13.6,5.586,18.624A2.6,2.6,0,0,0,45.4,52.035h.1A2.6,2.6,0,0,0,47.925,50.4l4.548-11.373h3.442Zm0-20.815h-5.2a2.6,2.6,0,0,0-2.417,1.634L45.86,41.552,40.2,22.67a2.6,2.6,0,0,0-2.407-1.855A2.672,2.672,0,0,0,35.265,22.5L29.244,38.563l-2.386-3.58a2.6,2.6,0,0,0-2.165-1.158h-5.2V18.213a2.6,2.6,0,0,1,2.6-2.6H53.314a2.6,2.6,0,0,1,2.6,2.6V33.825Z" transform="translate(-14.286)" fill="#80ba27"/>
      </g>
    </g>
  </g>
  </svg>,
  diamond:<svg width="72.853" height="72.853" viewBox="0 0 72.853 72.853">
  <defs>
    <clipPath id="clip-path">
      <path id="Path_1" data-name="Path 1" d="M0,0H72.853V72.853H0Z" fill="#80ba27" stroke="#707070" strokeWidth="1"/>
    </clipPath>
  </defs>
  <g id="Mask_Group_6" data-name="Mask Group 6" clipPath="url(#clip-path)">
    <g id="diamond" transform="translate(0 0.005)">
      <g id="Group_79" data-name="Group 79" transform="translate(0 0)">
        <path id="Path_37" data-name="Path 37" d="M72.827,20.537a2.732,2.732,0,0,0-.052-.32,2.445,2.445,0,0,0-.127-.349,2.427,2.427,0,0,0-.094-.26l-.029-.039-.016-.049L62.1,1.307c-.036-.065-.094-.117-.135-.177a2.035,2.035,0,0,0-.143-.19,2.619,2.619,0,0,0-.684-.6h-.026a2.6,2.6,0,0,0-.835-.276C60.2.055,60.122.042,60.041.037s-.133-.031-.2-.031H13.009c-.065,0-.127.021-.193.026a2.385,2.385,0,0,0-.239.031,2.638,2.638,0,0,0-.833.276h-.026a2.622,2.622,0,0,0-.684.6,2,2,0,0,0-.143.19c-.042.06-.1.112-.135.177L.349,19.515l-.016.039L.3,19.593a2.352,2.352,0,0,0-.094.26,2.439,2.439,0,0,0-.127.349,2.694,2.694,0,0,0-.042.32A2.411,2.411,0,0,0,0,20.9a2.562,2.562,0,0,0,.039.312,2.9,2.9,0,0,0,.073.364,2.241,2.241,0,0,0,.117.284,2.648,2.648,0,0,0,.112.26c.018.031.044.052.065.083a.731.731,0,0,0,.039.078L34.265,71.7l.013.018a2.554,2.554,0,0,0,.507.539,2.113,2.113,0,0,0,.177.122,2.489,2.489,0,0,0,.492.26c.07.029.138.057.211.081a2.33,2.33,0,0,0,1.52,0c.073-.023.141-.052.211-.081a2.489,2.489,0,0,0,.492-.26q.091-.057.177-.122a2.555,2.555,0,0,0,.507-.539l.013-.018L72.4,22.288a.73.73,0,0,0,.039-.078c.021-.031.047-.052.065-.083a2.636,2.636,0,0,0,.112-.26,2.243,2.243,0,0,0,.117-.284,2.9,2.9,0,0,0,.073-.364,2.546,2.546,0,0,0,.049-.32A2.435,2.435,0,0,0,72.827,20.537ZM55.36,5.21,49.191,16,41.482,5.21ZM44.38,18.219H28.472L36.426,7.086ZM31.371,5.21,23.661,16,17.492,5.21ZM13.009,7.85l5.925,10.369H7.088ZM7.545,23.423H21.411l8.675,32.958ZM36.426,60.034,26.8,23.423H46.053Zm6.341-3.653,8.675-32.958H65.307ZM53.919,18.219,59.843,7.85l5.922,10.369Z" transform="translate(0 -0.006)" fill="#80ba27"/>
      </g>
    </g>
  </g>
  </svg>,
  line_graph:<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="640" height="640" viewBox="0 0 640 640">
  <path fill="#80ba27" d="M22.080 362.592l43.616 10.816 32.832-51.552-62.4-15.424c-15.616-3.872-31.392 5.568-35.264 21.12-3.872 15.456 5.6 31.136 21.216 35.040zM591.392 370.944l-142.816 128.512-167.904-129.952c-3.2-2.432-6.88-4.256-10.816-5.184l-22.336-5.568-32.864 51.552 35.2 8.736 182.304 141.056c5.312 4.064 11.584 6.048 17.888 6.048 7.008 0 14.016-2.496 19.488-7.424l160.896-144.864c11.904-10.688 12.832-28.992 2.048-40.864-10.784-11.84-29.152-12.8-41.088-2.048zM277.888 229.76l156.384 100.128c13.216 8.448 30.752 4.928 39.68-7.872l160.864-231.744c9.152-13.184 5.856-31.264-7.392-40.32-13.248-9.12-31.328-5.824-40.48 7.36l-144.896 208.672-157.312-100.704c-6.528-4.192-14.432-5.568-22.016-3.936-7.552 1.696-14.144 6.304-18.272 12.8l-239.904 376.544c-8.64 13.504-4.608 31.456 8.96 40 4.8 3.072 10.208 4.512 15.552 4.512 9.632 0 19.072-4.768 24.576-13.44l224.256-352z"></path>
  </svg>


  


}

export default function HomeBase() {
  const [mobileMenu ,setMobileMenu] = useState("hidden")
  return (
    <div>
      <Head>
        <title>Front End test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="home_base">
        <div className="home_base_wrapper">
          <div className="home_base_wrapper_icon_map">
            {svgs.logo}
          </div>
          
          <div className="home_base_wrapper_nav">
          <button className="home_base_wrapper_mobile_btn" onClick={()=>{setMobileMenu('active')}}>
              {svgs.menu}
           </button>
            {/* {svg.menu} */}
            <nav className="home_base_wrapper_nav_nav">
              <ul className="home_base_wrapper_nav_nav_ul" id={mobileMenu}>
              <button className="home_base_wrapper_mobile_btn" onClick={()=>{setMobileMenu('hidden')}}>
              {svgs.cancel}
           </button>
                <li className="home_base_wrapper_nav_nav_ul_li active">
                  <Link href='#' >Home</Link>
                </li>

                <li className="home_base_wrapper_nav_nav_ul_li">
                <Link href='#' >Personal</Link>
                </li>

                <li className="home_base_wrapper_nav_nav_ul_li">
                <Link href='#' >Business</Link>
                </li>

                </ul>
            </nav>
          </div>
          <div className="home_base_wrapper_content">
            <h1 className="home_base_wrapper_content_heading">
            Online banking that makes a statement
            </h1>
            <h2 className="home_base_wrapper_content_heading_sub">
              Full financial visibility of all your bank accounts and credit cards all in one place.
              Get interest on your money, personalised budgeting and much more.
            </h2>




            <div className="home_base_wrapper_content_grid">



              <div className="home_base_wrapper_content_grid_child">
                {svgs.watch}
                <h4 className="home_base_wrapper_content_grid_child_heading">
                  Watch Banking
                </h4>
                <p className="home_base_wrapper_content_grid_child_p">
                  Send money to your saved beneficiaries and pay bills from
                  your saved bills straight from your smart watch.
                </p>
              </div>







              <div className="home_base_wrapper_content_grid_child">
                {svgs.audio}
                <h4 className="home_base_wrapper_content_grid_child_heading">
                  Audio Banking
                </h4>
                <p className="home_base_wrapper_content_grid_child_p">
                Transact by speaking to your mobile app or connected smart watch, and our voice recognition software will verify your voice and complete your transaction.
                </p>
              </div>
<div className="home_base_wrapper_content_grid_child">
                {svgs.line_graph}
                <h4 className="home_base_wrapper_content_grid_child_heading">
                  Line-chart
                </h4>
                <p className="home_base_wrapper_content_grid_child_p">
                Get smart charts that will guide you on your spending
                </p>
              </div>
<div className="home_base_wrapper_content_grid_child">
                {svgs.diamond}
                <h4 className="home_base_wrapper_content_grid_child_heading">
                  Quality
                </h4>
                <p className="home_base_wrapper_content_grid_child_p">
                Cutting-edge technology, FSCS protection and 24/7 support. Just a few of the reasons over 10 million customers trust us to keep their money safe.
                </p>
              </div>

            </div>
          
          </div>
          <div className="home_base_wrapper_btn">
              <button className="home_base_wrapper_btn_btn sign_up">
                  Sign up
              </button>
              <button className="home_base_wrapper_btn_btn login">
                  Login
              </button>
            </div>

            <footer className="home_base_wrapper_footer">
              Copyright 2022 All Rights Reserved
            </footer>
          </div>
      </div>

      
    </div>
  )
}
