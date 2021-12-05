import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { getJSON } from '../../components/GetJson';

/* uiStore */
import { UIStoreContext } from '../../uiStore/reducer';
import { setPageContent, setActiveNavItem } from '../../uiStore/actions';

const ActivitiesNavItem = (prop) => {
  const { children, pathTo, className, activeClassName } = prop;
  const { uiState, uiDispatch } = useContext(UIStoreContext);

  const onClick = () => {
    if (pathTo == localStorage.getItem('activeItem')) {
      setPageContent(uiDispatch, getJSON(pathTo));
      setActiveNavItem(uiDispatch, pathTo);
    } else {
      setPageContent(uiDispatch, []);
      setActiveNavItem(uiDispatch, pathTo);
    }
  };

  return (
    <>
      <Link to={pathTo}>
        <div
          onClick={onClick}
          className={`
            ${className} 
            ${
              uiState.activitiesNavBar.activeItem === pathTo
                ? activeClassName
                : ''
            }`}
        >
          {children}
        </div>
      </Link>
    </>
  );
};

export default ActivitiesNavItem;
