import React from 'react';
import Styles from '../styles/components/headline.module.scss'

class Headline extends React.Component {
    render() {
        return(
            <h2 className={Styles.Headline}>
                {this.props.name}
            </h2>
        );
    }
}

export default Headline