import React from "react"

const Navigation = () => {
  return (
    <nav>
      <div class="nav-panel" id="nav-left">
        <a class="nav-button" id="nav-home" title="Home"/>
        <a class="nav-button" id="nav-lang" title="Switch Language"/>
      </div>
      <div class="nav-panel" id="nav-center" />
      <div class="nav-panel" id="nav-rigft">
        <a class="nav-button" id="nav-theme" title="Switch Theme" />
        <a class="nav-button" id="nav-github" title="GitHub"/>
      </div>
    </nav>
  )
}

class Header extends React.Component {

  render() {
    return (
      <header>
        <Navigation />
        <div id="title">
          <span>{this.props.user}</span>
        </div>
      </header>
    )
  }
}

export default Header