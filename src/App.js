import {Component} from 'react'

import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="bg-container">
        <ConfigurationController />
        <Layout />
      </div>
    )
  }
}

export default App
