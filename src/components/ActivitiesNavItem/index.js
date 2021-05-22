import { Link } from 'react-router-dom';
// import styles from './styles.module.scss';
import { UIStoreContext } from '../../uiStore/reducer';
import React, { useContext } from 'react';
import { setPageContent, setActiveNavItem } from '../../uiStore/actions';
import DTDActivities from '../../assets/json/DTDActivities.json';
import studyGroup from '../../assets/json/studyGroup.json';
import path from '../../utils/path';

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
