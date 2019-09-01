import React from 'react';
import Headline from './headline';
import Styles from '../styles/components/work.module.scss';
import WorkItem from './workItem';
import { Link } from 'gatsby';

const workList = [
    {
        image: "work01.png",
        title: "魁!! 漢飯 (さきがけ おとこめし)",
        text: "「美味しいご飯は食べたいけど、作るのは面倒」という方のため、簡単に作ることができる漢の料理 = 漢飯のレシピを共有するアプリ。もらった天晴 (いいね) の数と投稿数に応じて、自分の二つ名となる称号を獲得することができます。3人チームによるRuby on Railsで開発し、参加した「九州アプリチャレンジキャラバン2018」では、最優秀賞及び協賛企業であるサイバーエージェント賞を受賞しました!! 現在は正式リリースに向け準備中ですので、乞うご期待。",
        link: "https://challecara.hatenablog.com/entry/2018/12/12/005721",
        linkText: "「九州アプリチャレンジキャラバン2018」コンテスト結果"
    },
    {
        image: "work02.png",
        title: "株式会社Lien 求人サイト",
        text: "福岡県の飯塚市・嘉麻市にて児童発達支援や放課後等デイサービスを行う株式会社Lienの求人情報サイトです。友人と2人で作成したもので、Lienさんらしさが伝わりやすいデザインの提案からドメインの設定までを一貫してやり遂げました。",
        link: "https://www.recruit.kk-lien.jp/",
        linkText: "https://www.recruit.kk-lien.jp/"
    },
    {
        image: "work03.png",
        title: "nori-nori",
        text: "「運転したお礼が欲しいけど、欲しいと言えない」というドライバーのために開発したスマホアプリ。ドライブ情報を元に、ドライバーへのお礼を同乗者に可愛く伝える機能や、ドライバーが欲しい物をお礼としてお願いできる機能などがあります。ヤフー株式会社が主催する「HACK U 2019 FUKUOKA」で、友人と2人で開発しました。現在はリリースに向けて準備中です。",
        link: "https://hacku.yahoo.co.jp/hacku2019fukuoka/",
        linkText: "HAKU U 2019 FUKUOKA 詳細"
    }
];

class Work extends React.Component {
    
    render() {
        return (
            <div className={Styles.Work}>
                <Headline name={"Work"} />
                <div className={Styles.Work__items}>
                    {workList.map((workItem) => (
                        <WorkItem data={workItem} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Work