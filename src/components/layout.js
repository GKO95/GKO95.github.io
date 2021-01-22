import React, { useState, useEffect } from "react"
import { siteMetadata } from "/gatsby-config"

import Storage from "./storage"
import Header from "./header"
import "./layout.scss"

const Layout = (props) => {
  let config = new Storage()
  config.value = config.GetCONFIG();
  document.styleSheets[0].insertRule(`body {background-color:${config.GetTHEME()?"#F2F2F2":"#202020"};color:${config.GetTHEME()?"#000000":"#FFFFFF"};}`);

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

  const LayoutStyle = {
    backgroundColor: config.GetTHEME() ? "#868686" : "#101010",
    fontColor: config.GetTHEME() ? "#000000" : "#FFFFFF"
  }
  
  return (
      <>
        <Header style={LayoutStyle} config={config} title={props.title} user={siteMetadata.author.user}/>
        <main>{props.children}</main>
        <footer style={LayoutStyle}>
          <span id="copyright">Copyright (C) 2020-2021 {siteMetadata.author.name}</span>
        </footer>
      </>
  )
}

export default Layout