import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{backgroundColor: '#F2F4F3', position:'relative', display:'flex', flexDirection:'column', height:'600px', justifyContent:'center', padding:'0 1rem', margin:'0 auto'}}>
      <div style={{backgroundColor: '#9197AE', position:'absolute', top:0, left:0, width: '50%', height:'100%'}}></div>
      <h1 style={{zIndex:20, position:'relative'}}>Hi, I'm Theo. A <span style={{color:'#F2F4F3'}}>Web Developer</span> and <span style={{color:'#9197AE'}}>Project Manager</span> specialising in Internal Search.</h1>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
