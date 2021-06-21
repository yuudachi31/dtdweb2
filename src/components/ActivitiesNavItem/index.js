import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

/* uiStore */
import { UIStoreContext } from '../../uiStore/reducer';
import { setPageContent, setActiveNavItem } from '../../uiStore/actions';

const ActivitiesNavItem = (prop) => {
  const { children, pathTo, className, activeClassName } = prop;
  const { uiState, uiDispatch } = useContext(UIStoreContext);

  const onClick = () => {
    setPageContent(uiDispatch, []);
    setActiveNavItem(uiDispatch, pathTo);
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
