import React from 'react';
import FooterApp from './FooterApp';
import Sidebar from '../sidebar/Sidebar';
import UserList from '../user/UserList';
import CountriesList from '../countries/CountriesList';

class LayoutApp extends React.Component{
  render(){
    return(
      <div className="wrap-content d-flex" >
          <div className="layoutDrawer__nav">
            <Sidebar/>
          </div>
          <div className="layoutDrawer__content">
            <UserList/>
            <CountriesList/>
            <FooterApp/>
          </div>
      </div>
      
    )
  }
}

export default LayoutApp;