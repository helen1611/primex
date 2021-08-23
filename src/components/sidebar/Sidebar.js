import React from 'react';


class SideBar extends React.Component{
  render(){
    return(
      <div className="sidebar py-3">
        <h2 className="sidebar-heading">Main</h2>
        <ul className="list-user">
          <li className="list-user__item">
            <a href="#" className="sidebar-link text-muted  active">
              Master record 1
            </a>
          </li>
        </ul>
        
        
      </div>
    )
  }
}

export default SideBar;