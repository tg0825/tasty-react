import React from 'react';
import {NavLink} from 'react-router-dom';
 
const Navigation = () => {
    return (
        <div>
        	<ul>
                <li>
                    <NavLink activeClassName="active" to='/'>목록</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to='/create'>추가</NavLink>
                </li>
            </ul>
        </div>
     );
}
 
export default Navigation;