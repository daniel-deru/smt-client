import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from 'styled-components';

let theme = {
  colors: {
    green: "#9ecd16",
    orange: "#ff4400",
    lightBlue: "#0567e1",
    darkBlue: "#051456",
    opacity(color, opacity){
      let themeColor
      switch(color){
        case "green":
            themeColor = this.green
            break
        case "orange":
            themeColor = this.orange
            break
        case "lightBlue":
            themeColor = this.lightBlue
            break
        case "darkBlue":
            themeColor = this.darkBlue
            break
      }

      return themeColor + opacity
    }
  }
}

ReactDOM.render(
  <React.StrictMode> 
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
