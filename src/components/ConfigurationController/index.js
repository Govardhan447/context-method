import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onchangeContent = event => {
        onToggleShowContent(event.target.value)
        console.log(event.target.value)
      }

      const onchangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onchangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="configuration-container">
          <h1 className="layout">Layout</h1>
          <div className="checkboxs-container">
            <input
              type="checkbox"
              id="content"
              onChange={onchangeContent}
              value={showContent}
            />
            <label htmlFor="content">Content</label>
          </div>
          <div className="checkboxs-container">
            <input
              type="checkbox"
              id="leftNav"
              onChange={onchangeLeftNavbar}
              value={showLeftNavbar}
            />
            <label htmlFor="leftNav">Left Navbar</label>
          </div>
          <div className="checkboxs-container">
            <input
              type="checkbox"
              id="rightNav"
              onChange={onchangeRightNavbar}
              value={showRightNavbar}
            />
            <label htmlFor="rightNav">Right Navbar</label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
