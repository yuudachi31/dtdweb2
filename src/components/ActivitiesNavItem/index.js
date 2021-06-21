import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import path from '../../utils/path';

/* uiStore */
import { UIStoreContext } from '../../uiStore/reducer';
import { setPageContent, setActiveNavItem } from '../../uiStore/actions';

/* json檔 */
import DTDActivities from '../../assets/json/DTDActivities.json';
import DTDGroup from '../../assets/json/DTDGroup.json';
import camp from '../../assets/json/camp.json';
import visits from '../../assets/json/visits.json';
import exhibition from '../../assets/json/exhibition.json';

const ActivitiesNavItem = (prop) => {
  const { children, pathTo, className, activeClassName } = prop;
  const { uiState, uiDispatch } = useContext(UIStoreContext);

  const getJSON = (url) => {
    switch (url) {
      case path.activities:
        return DTDActivities;
      case `${path.activities}/DTDGroup`:
        return DTDGroup;
      case `${path.activities}/camp`:
        return camp;
      case `${path.activities}/visits`:
        return visits;
      case `${path.activities}/exhibition`:
        return exhibition;
      default:
        return DTDActivities;
    }
  };

  const onClick = () => {
    setPageContent(uiDispatch, []);
    setPageContent(uiDispatch, getJSON(pathTo));
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
