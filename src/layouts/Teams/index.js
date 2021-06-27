import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
//componemt
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import PageTitle from '../../components/PageTitle';
import TeamsGroup from '../../components/TeamsGroup';
//css
import styles from './styles.module.scss';
//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
//data
import teamsJson from '../../assets/json/teams.json';

const Teams = () => {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>系網團隊-國立臺北教育大學</title>
        <meta name="description" content="數位科技設計學系的系網團隊" />
      </Helmet>
      <div className={styles.container}>
        <Header />
        <Banner bannerNumber={4} />
        <div className={styles.teamsContainer}>
          <div className={styles.teamsContainer_content}>
            &emsp;&emsp;本系的系統團隊成員由數位系與玩遊所學生所組成，在指導老師俞齊山的帶領下，利用課餘時間自發學習網站相關的介面設計與前後端知識，並著手自行架設與維護數位系的系網。
            <br />
            <br />
            &emsp;&emsp;本團隊的目標在於建立一個代表數位系的獨特品牌。建立此網站的目的除了宣傳數位系，更重要的是幫助不同需求的訪客快速取得有關數位系的種種資訊，以及提供最新消息成為系上和外界的交流管道。歡迎喜歡網頁設計與開發的同學加入系網團隊，共同打造獨一無二的精彩成果。
          </div>
          <div className={styles.teamsContainer_link}>
            <a
              href="https://dtd.ntue.edu.tw/gdlab/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faAngleRight} />
              &ensp;&ensp;&ensp;更多
            </a>
          </div>
        </div>

        {teamsJson.map((grade) => (
          <div className={styles.teamsContainer} key={grade.gradeTitle}>
            <PageTitle title={'系網團隊 ' + grade.gradeTitle} />
            <TeamsGroup gradeList={grade.gradeList} />
          </div>
        ))}
        <section className={styles.teamsContainer_bottomSpace}></section>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Teams;
