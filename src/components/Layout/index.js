import {Component} from 'react'

import ConfigurationContext from '../../context/ConfigurationContext'

import Body from '../Body'
import Header from '../Header'
import Footer from '../Footer'

class Layout extends Component {
  state = {showContent: true, showLeftNavbar: true, showRightNavbar: true}

  onToggleShowContent = showContent => {
    console.log(showContent)
    this.setState({showContent: !showContent})
  }

  onToggleShowLeftNavbar = showLeftNavbar => {
    this.setState({showLeftNavbar: !showLeftNavbar})
  }

  onToggleShowRightNavbar = showRightNavbar => {
    this.setState({showRightNavbar: !showRightNavbar})
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state

    return (
      <>
        <Header />
        <ConfigurationContext.Provider
          value={{
            showContent,
            showLeftNavbar,
            showRightNavbar,
            onToggleShowContent: this.onToggleShowContent,
            onToggleShowLeftNavbar: this.onToggleShowLeftNavbar,
            onToggleShowRightNavbar: this.onToggleShowRightNavbar,
          }}
        >
          <Body />
        </ConfigurationContext.Provider>
        <Footer />
      </>
    )
  }
}
export default Layout
