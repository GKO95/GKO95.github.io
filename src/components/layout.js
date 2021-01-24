import React, { useState, useEffect } from "react"
import { siteMetadata } from "/gatsby-config"

import Storage from "./storage"
import Header from "./header"
import "./layout.scss"

const Layout = (props) => {
  const config = props.config === undefined ? new Storage() : props.config
  config.value = config.GetCONFIG();
  if (config.GetTHEME(config.THEME.DARK)) document.documentElement.setAttribute("dark", "true")
  document.body.style.color = `${config.GetTHEME()?"#000000":"#FFFFFF"}`

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(()=>{
    let hderHeight = document.getElementsByTagName("HEADER")[0].offsetHeight;
    let fterHeight = document.getElementsByTagName("FOOTER")[0].offsetHeight;
    document.getElementsByTagName("MAIN")[0].style.minHeight = `${window.innerHeight - (hderHeight + fterHeight)}px`
  }, [width, height])
  window.onresize = function () {
    if (window.innerWidth < 800) { }
    else setWidth(window.innerWidth)
    if (window.innerHeight < 600) { }
    else setHeight(window.innerHeight)
  }
  
  return (
      <>
        <Header config={config} title={props.title} user={siteMetadata.author.user}/>
        <main id={props.id}>{props.children}</main>
        <footer>
          <span id="copyright">Copyright (C) 2020-2021 {siteMetadata.author.name}</span>
        </footer>
      </>
  )
}

export { Storage }
export default Layout