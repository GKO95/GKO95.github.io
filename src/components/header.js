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

  const enablePageTitle = () => {
    if (document.location.pathname !== "/") return (
      <span>{props.title}</span>
    )
  }

  return (
    <nav>
      <div className="nav-panel" id="nav-left">
        <a title="Home" href="/"><span className="nav-button" id="nav-home" /></a>
        <a title="Switch Language" onClick={switchLang}><span className="nav-button" id="nav-lang" /></a>
      </div>
      <div className="nav-panel" id="nav-center">{enablePageTitle()}</div>
      <div className="nav-panel" id="nav-rigft">
        <a title="Switch Theme" onClick={switchTheme}><span className="nav-button" id="nav-theme" /></a>
        <a title="GitHub" href="https://github.com/GKO95"><span className="nav-button" id="nav-github" /></a>
      </div>
    </nav>
  )
}

class Header extends React.Component {

  isPageIndex() {
    if (document.location.pathname === "/") return (
      <div id="idx-title">
        <span>{this.props.user}</span>
      </div>
    )
  }

  render() {
    return (
      <header style={this.props.style}>
        <Navigation title={this.props.title} config={this.props.config}/>
        {this.isPageIndex()}
      </header>
    )
  }
}

export default Header