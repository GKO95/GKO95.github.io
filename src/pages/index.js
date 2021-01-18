import * as React from "react"
import Layout from "../components/layout"

const __category__ = ["Programming", "Library", "Computer Science"];

const Docs = (props) => {
  const listGroups = props.groups.map((group, index) =>
      <li key={index}>{group}</li>
  )

  return (
    <div className="home-docs">{listGroups}</div>
  );
}

const IndexPage = () => {
  return (
    <Layout>
      <Docs groups={__category__}/>
    </Layout>
  )
}

export default IndexPage
