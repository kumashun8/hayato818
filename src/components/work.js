import React from 'react';
import Headline from './headline';
import Styles from '../styles/components/work.module.scss'

const skillList = [
    "Ruby on Rails", "React", "GatsbyJS", "Illustrator (ちょっと)"
];

class Work extends React.Component {
    
    render() {
        return (
            <div className={Styles.Skill}>
                <Headline name={"Work"} />
                <ul className={Styles.Skill__text}>
                    {skillList.map((skillItem) => (
                        <li>{skillItem}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Work