import React from 'react';
import FooterApp from './FooterApp';
import Sidebar from '../sidebar/Sidebar';
import UserDetail from '../user/UserList';

class LayoutApp extends React.Component{
  render(){
    return(
      <div className="wrap-content d-flex" >
          <div className="layoutDrawer_nav">
            <Sidebar/>
          </div>
          <div className="layoutDrawer_content">
            <UserDetail/>
            <FooterApp/>
          </div>
      </div>
      
    )
  }
}

export default LayoutApp;