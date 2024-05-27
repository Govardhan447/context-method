import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => {
  const getleftNavBar = () => (
    <div className="leftNav-container">
      <h1 className="heading">Left Navbar Menu</h1>
      <p className="paragraph">Item 1</p>
      <p className="paragraph">Item 2</p>
      <p className="paragraph">Item 3</p>
      <p className="paragraph">Item 4</p>
    </div>
  )

  const getContent = () => (
    <div className="content-container">
      <h1 className="heading">Content</h1>
      <p className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua ut enim ad minim
        veniam.
      </p>
    </div>
  )

  const getRightNavbar = () => (
    <div className="leftNav-container">
      <h1 className="heading">Right Navbar</h1>
      <div className="ad-contianer">
        <p className="paragraph ad">Ad 1</p>
      </div>
      <div className="ad-contianer">
        <p className="paragraph ad">Ad 2</p>
      </div>
    </div>
  )

  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {showContent, showLeftNavbar, showRightNavbar} = value
        return (
          <div className="body-container">
            {showLeftNavbar ? getleftNavBar() : null}
            {showContent ? getContent() : null}
            {showRightNavbar ? getRightNavbar() : null}
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}

export default Body
