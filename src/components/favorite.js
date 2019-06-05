import React from 'react';
import Headline from './headline';
import Styles from '../styles/components/favorite.module.scss'

const skillList = [
    "Ruby on Rails", "React", "GatsbyJS", "Illustrator (ちょっと)"
];

class Favorite extends React.Component {
    
    render() {
        return (
            <div className={Styles.Skill}>
                <Headline name={"Skill"} />
                <ul className={Styles.Skill__text}>
                    {skillList.map((skillItem) => (
                        <li>{skillItem}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Favorite