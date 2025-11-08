// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import Header from './Header';
// import Sidebar from './Sidebar';
// import './Layout.css';

// const Layout = () => {
//   return (
//     <div className="layout">
//       <Header />
//       <div className="layout-body">
//         <Sidebar />
//         <main className="main-content">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Layout;




// import React from 'react'
// import { Outlet } from 'react-router-dom'
// import Header from './Header'
// import Sidebar from './Sidebar'

// const Layout = () => {
//   return (
//     <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
//       <Header />
//       <div style={{ display: 'flex', flex: 1 }}>
//         <Sidebar />
//         <main style={{ flex: 1, padding: '20px', backgroundColor: '#f8f9fa', overflowY: 'auto' }}>
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   )
// }

// export default Layout

import React from 'react'
import { Outlet } from 'react-router-dom'  // 确保正确导入 Outlet
import Header from './Header.jsx'  // 更新导入
import Sidebar from './Sidebar.jsx'  // 更新导入

const Layout = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar />
        <main style={{ flex: 1, padding: '20px', backgroundColor: '#f8f9fa', overflowY: 'auto' }}>
          <Outlet />  {/* 确保这里是 <Outlet /> 而不是 <outlet /> */}
        </main>
      </div>
    </div>
  )
}

export default Layout
