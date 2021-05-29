import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import path from '../../utils/path';

/* uiStore */
import { UIStoreContext } from '../../uiStore/reducer';
import { setPageContent, setActiveNavItem } from '../../uiStore/actions';

/* json檔 */
import DTDActivities from '../../assets/json/DTDActivities.json';
import studyGroup from '../../assets/json/studyGroup.json';

const ActivitiesNavItem = (prop) => {
  const { children, pathTo, className, activeClassName } = prop;
  const { state, dispatch } = useContext(UIStoreContext);

  const getJSON = (url) => {
    switch (url) {
      case path.activities:
        return DTDActivities;
      case `${path.activities}/studyGroup`:
        return studyGroup;
      default:
        return DTDActivities;
    }
  };

  const onClick = () => {
    setPageContent(dispatch, getJSON(pathTo));
    setActiveNavItem(dispatch, pathTo);
  };

  return (
    <>
      <Link to={pathTo}>
        <div
          onClick={onClick}
          className={`
            ${className} 
            ${
              state.activitiesNavBar.activeItem === pathTo
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
