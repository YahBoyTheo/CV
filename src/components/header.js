import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from '../components/image'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 0`,
      }}
    >
    <div style={{maxWidth: '80px'}}>
      <Image />
      </div>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#0A0908`,
            textDecoration: `none`,
          }}
        >

        </Link>

      </h1>

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
