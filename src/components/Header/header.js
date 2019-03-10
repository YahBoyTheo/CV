import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../image"
import classes from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header className={classes.Header}>
    <div className={classes.Container}>
      <div className={classes.Logo}>
        <Link to="/">
          <Image />
        </Link>
      </div>
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
