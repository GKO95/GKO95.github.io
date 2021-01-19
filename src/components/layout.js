import React, { useState } from "react"
import { siteMetadata } from "../../gatsby-config"

import Header from "./header"
import "./layout.scss"

//==============================================================
// LAYOUT
//==============================================================
const Layout = ({children}) => {

    let config = new class {
        constructor()
        { if (isNaN(this.GetCONFIG())) { this.SetCONFIG(0); } if (window.localStorage.length !== 1) 
        { let config = this.GetCONFIG(); if (config > 0xFF) { config &= 0xFF; } else if (config == null || isNaN(config)) 
        { config = 0; } window.localStorage.clear(); this.SetCONFIG(config); } } 
        value = 0; enumTHEME = { LIGHT: 0, DARK: 1 }; enumLANG = { KOREAN: 0, ENGLISH: 1 };
        GetCONFIG(sess = true)
        { return (sess ? parseInt(window.localStorage.getItem("CODE")) : this.value) }
        SetCONFIG(code = 0)   
        { this.value = code; window.localStorage.setItem("CODE", `${this.value}`) }
        GetTHEME(sess = true)
        { return ((0b0001 & (sess ? parseInt(window.localStorage.getItem("CODE")) : this.value) ) >> 0) }
        SetTHEME(theme = this.enumTHEME.LIGHT)
        { this.value = (this.value & 0b1110) | (0b0001 & (theme << 0)); window.localStorage.setItem("CODE", `${this.value}`) }
        GetLANG(sess = true)
        { return ((0b0010 & (sess ? parseInt(window.localStorage.getItem("CODE")) : this.value) ) >> 1) }
        SetLANG(lang = this.enumLANG.KOREAN)
        { this.value = (this.value & 0b1101) | (0b0010 & (lang << 0)); window.localStorage.setItem("CODE", `${this.value}`) }
    };
    
    const [code, ] = useState(config.GetCONFIG());
    config.value = code;

    return (
        <>
          <Header config={config} user={siteMetadata.author.user}/>
          <main>{children}</main>
          <footer>
            <span id="copyright">Copyright (C) 2020-2021 {siteMetadata.author.name}</span>
          </footer>
        </>
    )
}

export default Layout