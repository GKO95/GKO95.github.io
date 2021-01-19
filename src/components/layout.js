import React, { useState } from "react"
import { siteMetadata } from "/gatsby-config"

import Storage from "./storage"
import Header from "./header"
import "./layout.scss"

//==============================================================
// LAYOUT
//==============================================================
const Layout = ({children}) => {
  let config = new Storage()

  const [code, ] = useState(config.GetCONFIG());
  config.value = code;

  const LayoutStyle = {
    backgroundColor: config.GetTHEME() ? "#868686" : "#101010",
    fontColor: config.GetTHEME() ? "#000000" : "#FFFFFF"
  }

  return (
      <>
        <Header style={LayoutStyle} config={config} user={siteMetadata.author.user}/>
        <main>{children}</main>
        <footer style={LayoutStyle}>
          <span id="copyright">Copyright (C) 2020-2021 {siteMetadata.author.name}</span>
        </footer>
      </>
  )
}

export default Layout