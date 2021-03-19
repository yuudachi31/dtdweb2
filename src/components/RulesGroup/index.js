import React, { useState, useEffect } from 'react';

import styles from './styles.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import rulesjson from '../../assets/json/rules.json';

const RulesGroup = () => {
  const [rulesdetail, setrulesdetail] = useState([]);
  useEffect(() => {
    setrulesdetail(rulesjson);
  }, []);
  return (
    <div className={styles.containerrg}>
      {rulesdetail.map((group) => (
        <div className={styles.containerrg} key={group.title}>
          <div className={styles.rulesGroupName}>{group.title}</div>
          <div className={styles.rulebar}>
            {group.list.map((rule) =>
              !rule.docname2 ? (
                <div key={rule.docname} className={styles.rulebar_rulebox}>
                  <a href={rule.docurl} target="_blank" rel="noreferrer">
                    {rule.docname}
                  </a>
                </div>
              ) : (
                <div key={rule.docname} className={styles.rulebar_rulebox}>
                  <a href={rule.docurl} target="_blank" rel="noreferrer">
                    {rule.docname}
                  </a>
                  ／
                  <a href={rule.docurl2} target="_blank" rel="noreferrer">
                    {rule.docname2}
                  </a>
                </div>
              ),
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RulesGroup;
