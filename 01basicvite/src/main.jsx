import React from 'react'
// import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

function MyApp() {
    return (
        <div>
            <h1> Custom React App in  Vite</h1>
        </div>
    )
}

const AnotherElement = (
    <a href="http://google.com" target='_blank'>Visit Google</a>
)

const aReactElement = React.createElement(
    'a',
    {href: 'https://google.com', target:"_blank"},
    'click to visit google 2',
    
)


// ReactDOM.createRoot(document.getElementById('root')).render(
createRoot(document.getElementById('root')).render(
  
    // AnotherElement
    // aReactElement
    <>
    <App />
    {/* <MyApp/>    */}
    </>
    
)
