import React, { useState } from "react"
import { siteMetadata } from "/gatsby-config"

import Storage from "./storage"
import Header from "./header"
import "./layout.scss"

const Layout = ({children}) => {
  let config = new Storage()

  const [code, ] = useState(config.GetCONFIG());
  config.value = code;

  document.styleSheets[0].insertRule(`body {background-color:${config.GetTHEME()?"#F2F2F2":"#202020"};color:${config.GetTHEME()?"#000000":"#FFFFFF"};}`);
  
  const mainStyle = {
    minHeight: document.getElementsByTagName("HTML")[0].getBoundingClientRect().height - (80 + 28)
  }

  const LayoutStyle = {
    backgroundColor: config.GetTHEME() ? "#868686" : "#101010",
    fontColor: config.GetTHEME() ? "#000000" : "#FFFFFF"
  }
  
  return (
      <>
        <Header style={LayoutStyle} config={config} user={siteMetadata.author.user}/>
        <main style={mainStyle}>{children}</main>
        <footer style={LayoutStyle}>
          <span id="copyright">Copyright (C) 2020-2021 {siteMetadata.author.name}</span>
        </footer>
      </>
  )
}

export default Layout