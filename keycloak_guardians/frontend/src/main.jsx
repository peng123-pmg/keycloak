// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'  // 确保这里引用 .jsx

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import AppDiagnostic from './App-diagnostic.jsx'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <AppDiagnostic />
//   </React.StrictMode>,
// )

import React from 'react'
import ReactDOM from 'react-dom/client'
import AppEmergency from './App-emergency.jsx'

// 禁用 React StrictMode 以避免双重渲染
ReactDOM.createRoot(document.getElementById('root')).render(<AppEmergency />)