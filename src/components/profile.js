import React from 'react';
import Headline from './headline';
import Styles from '../styles/components/profile.module.scss'

class Profile extends React.Component {
    render() {
        return (
            <div className={Styles.Profile}>
                <Headline name={"Profile"} />
                <p className={Styles.Profile__text}>
                    大隈隼 (おおくまはやと). 1997年生まれで福岡県宗像市出身. 2018年に北九州高専を卒業し, 九州工業大学情報工学部 知能情報工学科(飯塚市)へ編入学しました. 現在は学部4年で坂本研究室に所属しており, 圧縮アルゴリズムに関する研究に取り組んでいます. 
                </p>
                <p className={Styles.Profile__text}>
                    また, アプリケーションやWebサービスの開発などを行うIT学生団体 P&D に所属し, 日々技術の習得や団体としての活動にも参加しています. そうした実践的な経験を活かして, 2020年度からは東京でWebエンジニアとして働く予定です.
                </p>
            </div>
        );
    }
}

export default Profile