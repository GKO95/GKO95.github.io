import React from "react"
import { siteMetadata } from "../../gatsby-config"

class Header extends React.Component {

    render() {
        return (
            <header>
                <nav>{this.props.config.GetCONFIG()}</nav>
                {siteMetadata.author.name}
            </header>
        )
    }
}

export default Header