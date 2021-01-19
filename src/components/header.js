import React from "react"

const navStyle = {

}

const buttonStyle = {

}

const Navigation = () => {
  return (
    <nav style={navStyle}>
      <div className="nav-panel" id="nav-left">
        <a style={buttonStyle} className="nav-button" id="nav-home" title="Home" href="/" />
        <a style={buttonStyle} className="nav-button" id="nav-lang" title="Switch Language" />
      </div>
      <div className="nav-panel" id="nav-center" />
      <div className="nav-panel" id="nav-rigft">
        <a style={buttonStyle} className="nav-button" id="nav-theme" title="Switch Theme" />
        <a style={buttonStyle} className="nav-button" id="nav-github" title="GitHub" href="https://github.com/GKO95" />
      </div>
    </nav>
  )
}

class Header extends React.Component {

  render() {
    return (
      <header style={this.props.style}>
        <Navigation />
        <div id="title">
          <span>{this.props.user}</span>
        </div>
      </header>
    )
  }
}

export default Header