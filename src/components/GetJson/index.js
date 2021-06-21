import path from '../../utils/path';

/* json檔 */
import DTDActivities from '../../assets/json/DTDActivities.json';
import DTDGroup from '../../assets/json/DTDGroup.json';
import camp from '../../assets/json/camp.json';
import visits from '../../assets/json/visits.json';
import exhibition from '../../assets/json/exhibition.json';

export const getJSON = (url) => {
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
