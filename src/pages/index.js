import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Download from "../components/Download/download"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`project manager`, `project`, `react`, 'gatsby', 'developer']} />
    
    <div style={{backgroundColor: '#F2F4F3', position:'relative', display:'flex', flexDirection:'column', height:'600px', justifyContent:'center', padding:'0 1rem', margin:'0 auto'}}>
      <div style={{backgroundColor: '#9197AE', position:'absolute', top:0, left:0, width: '50%', height:'100%'}}></div>
      <h1 style={{zIndex:20, position:'relative'}}>Hi, I'm Theo. A <span style={{color:'#F2F4F3'}}>Web Developer</span> and <span style={{color:'#9197AE'}}>Project Manager</span> specialising in Internal Search.</h1>
    </div>  
	<section>
		<h2>Projects</h2>
    <hr style={{height:'3px', backgroundColor:'#49111c'}}/>
		<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor a, quas, soluta vero officia quisquam maxime, aliquam sunt molestiae placeat ipsa natus beatae. Velit suscipit, cupiditate sapiente nulla deserunt eligendi asperiores culpa laborum odit voluptatibus assumenda quos ipsum aperiam voluptas!</p>	
    <Download />
  </section>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
