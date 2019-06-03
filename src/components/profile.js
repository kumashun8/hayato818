import React from 'react';
import Headline from './headline';
import Styles from '../styles/components/profile.module.scss'

class Profile extends React.Component {
    render() {
        return (
            <div className={Styles.Profile}>
                <Headline name={"Profile"} />
                <p className={Styles.Profile__text}>大隈隼 (おおくまはやと). 1997年生まれで福岡出身. 2018年に北九州高専を卒業し, 九州工業大学情報工学部 知能情報工学科(飯塚市)へ編入学しました. 現在は学部4年で, 坂本研究室に所属しており, 2020年度からは東京でWebエンジニアとして働く予定です.</p>
            </div>
        );
    }
}

export default Profile