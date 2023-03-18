import React from 'react';
import './assets/style/global.scss';
import ResponsiveView from './components/resposive-view';
import MobailView from './pages/mobail-view';
import WebView from './pages/web-view';

const App = () => {
  return (
    <div className="G-container">
      <ResponsiveView mobileView={<MobailView/>} webView={<WebView/>}/>
    </div>
  )
}

export default App
