import React from "react"

const Navigation = (props) => {

  document.styleSheets[0].insertRule(`.nav-button {filter: invert(${props.config.GetTHEME()?"0%":"100%"});}`);

  const switchLang = () => {
    if (props.config.GetLANG()) props.config.SetLANG(props.config.LANG.ENGLISH)
    else props.config.SetLANG(props.config.LANG.KOREAN)
    document.location.reload();
  }

  const switchTheme = () => {
    if (props.config.GetTHEME()) props.config.SetTHEME(props.config.THEME.DARK)
    else props.config.SetTHEME(props.config.THEME.LIGHT)
    document.location.reload();
  }

  return (
    <nav>
      <div className="nav-panel" id="nav-left">
        <a className="nav-button" id="nav-home" title="Home" href="/" />
        <span className="nav-button" id="nav-lang" title="Switch Language" onClick={switchLang}/>
      </div>
      <div className="nav-panel" id="nav-center" />
      <div className="nav-panel" id="nav-rigft">
        <span className="nav-button" id="nav-theme" title="Switch Theme" onClick={switchTheme}/>
        <a className="nav-button" id="nav-github" title="GitHub" href="https://github.com/GKO95" />
      </div>
    </nav>
  )
}

class Header extends React.Component {

  render() {
    return (
      <header style={this.props.style}>
        <Navigation config={this.props.config}/>
      </header>
    )
  }
}

export default Header