import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"
import Styles from '../styles/components/header.module.scss';

const Header = ({ siteTitle }) => (
  <header>
    <div className={Styles.header}>
        <div className={Styles.header__text}>
            <h1 className={Styles.header__text__message}>
                Always Climb,<br />
                Even Slowly.
            </h1>
            <p className={Styles.header__text__name}>-- Hayato OKUMA [Engineer]</p>
        </div>
      <div className={Styles.header__image}>
        <div className={Styles.header__image__main}>
          <Image filename='kuma01.jpg' />
        </div>   
        <div className={Styles.header__image__under}> </div>
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
