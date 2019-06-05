import React from 'react';
import Headline from './headline';
import Styles from '../styles/components/favorite.module.scss'

const favoList = [
    {
        category: "Food",
        object: "チキン南蛮, ガトーショコラ"
    },
    {
        category: "Drink",
        object: "ブラックコーヒー"
    },
    {
        category: "Music",
        object: "サカナクション"
    },
    {
        category: "Actress",
        object: "中条あやみ"
    },
    {
        category: "Color",
        object: "チャコールグレー"
    },
    {
        category: "Fashion brand",
        object: "MONKEY TIME, Jieda, NIKE"
    },
];

class Favorite extends React.Component {
    
    render() {
        return (
            <div className={Styles.Favorite}>
                <Headline name={"Favorite"} />
                <table className={Styles.Favorite__item} bor>
                    {favoList.map((favoItem) => (
                        <tr>
                            <td className={Styles.Favorite__item__category}>{favoItem.category}</td>
                            <td className={Styles.Favorite__item__object}>{favoItem.object}</td>
                        </tr>
                    ))}
                </table>
            </div>
        );
    }
}

export default Favorite