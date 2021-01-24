import * as React from "react"
import { graphql } from "gatsby"
import Layout, { Storage } from "../components/layout"

class Group extends React.Component {

  divStyle = {
    width: "96%",
    margin: "1em auto",
    borderWidth: 4,
    borderRadius: 16,
    borderStyle: "solid",
    borderColor: (this.props.config.GetTHEME() ? "#404040" : "#A0A0A0"),
  }

  sectionStyle = {
    width: "96%",
    padding: "0.2em",
    margin: "0.8em auto 0.4em auto",
    fontSize: "1.6em",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
    borderRadius: 24,
    backgroundColor: (this.props.config.GetTHEME() ? "#D0D0D0" : "#202020"),
  }

  unorderedStyle = {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    width: "calc(96% - 4px * 2)",
    listStyleType: "none",
    margin: "0.4em auto",
    padding: 0,
  }

  listStyle = {
    height: 216,
    width: 216,
    display: "block",
    justifyContent: "center",
    borderRadius: 8,
    backgroundSize: 200,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundColor: (this.props.config.GetTHEME() ? "#A1A1A1" : "#404040"),
  }

  enumDocs() {

    let Markdown = [], listStyles = []
    for (let addr = 0; addr < 16; addr++)
    {
      if (((this.props.addr >> addr) & 1) !== 1) continue
      else
      {
        for(let index = 0; index < 16; index++)
        {
          if (this.props.docs[addr * 16 + index] === undefined) continue
          else {
            let liStyle = {...this.listStyle}
            liStyle["backgroundImage"] = "url(" + require("../images/icons/" + this.props.docs[addr * 16 + index].icon) + ")"
            Markdown.push(this.props.docs[addr * 16 + index])
            listStyles.push(liStyle)
          }
        }
      }
    }

    return Markdown.map((md, index) =>
      <a key={index} href={md.slug} title={md.title} style={{margin:8}}>
        <li key={index} style={listStyles[index]} />
      </a>
    )
  }

  render() {
    return (
      <div className="home-docs-group" style={this.divStyle}>
        <section className="home-docs-header" style={this.sectionStyle}>
          <span>{this.props.category}</span>
        </section>
        <ul className="home-docs-iterate" style={this.unorderedStyle}>
          {this.enumDocs()}
        </ul>
      </div>
    )
  }
}

const IndexPage = ({data}) => {

  const config = new Storage()

  const enumGroup = () =>{
    if (data.allMarkdownRemark.edges.length === 0) return

    let nameCategory = [], addrCategory = new Array(16), fullMarkdown = new Array(256)
    for(let i = 0; i < data.allMarkdownRemark.edges.length; i++)
    { const Markdown = data.allMarkdownRemark.edges[i].node.frontmatter
      if (config.GetLANG(config.LANG.KOREAN) && Markdown.language !== "ko") continue
      if (config.GetLANG(config.LANG.ENGLISH) && Markdown.language !== "en") continue
      
      fullMarkdown[Markdown.order] = Markdown
      if (addrCategory[Markdown.order >> 4] === undefined)
      {
        let category = Markdown.title.split('|')[0].trim()
        addrCategory[Markdown.order >> 4] = category
        if (!nameCategory.includes(category)) nameCategory.push(category)
      }
    }

    let indxCategory = new Array(nameCategory.length)
    for (let i = 0; i < nameCategory.length; i++)
    {
      let valid = true, addr = 0
      while (valid)
      {
        let index = addrCategory.indexOf(nameCategory[i])
        if (index !== -1) {
          addrCategory[index] = undefined
          addr |= (1 << index)
        }
        else valid = false
      }
      indxCategory[i] = addr
    }

    return nameCategory.map((category, index) => 
      <Group key={index} config={config} category={category} 
        addr={indxCategory[index]} docs={fullMarkdown} />
    )
  }

  const homeDocsStyle = {
    width: "calc(100% - (16px * 2))",
    backgroundColor: (config.GetTHEME() ? "#868686" : "#101010"),
    borderRadius: 32,
    marginTop: 16,
    marginBottom: 16,
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: 8,
    paddingBottom: 8,
    userSelect: "none",
    MsUserSelect: "none",
    MozUserSelect: "none",
    KhtmlUserSelect: "none",
    WebkitUserSelect: "none",
  }

  return (
    <Layout config={config}>
      <div id="home-docs" style={homeDocsStyle} config={config}>
        {enumGroup()}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(sort: {order: ASC, fields: frontmatter___order}) {
      edges {
        node {
          frontmatter {
            title
            icon
            slug
            order
            language
          }
        }
      }
    }
  }
`

export default IndexPage
