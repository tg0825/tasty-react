import React from 'react';
import {NavLink} from 'react-router-dom';
 
const Navigation = () => {
    return (
        <div>
        	<ul>
                <li>
                    <NavLink activeClassName="active" to='/'>list</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to='/create'>create</NavLink>
                </li>
            </ul>
        </div>
     );
}
 
export default Navigation;