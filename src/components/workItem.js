import React from 'react';
import Styles from '../styles/components/workItem.module.scss'
import Image from "../components/image"

class WorkItem extends React.Component {
    render() {
        return (
            <div className={Styles.WorkItem}>
                <div className={Styles.WorkItem__image}>
                    <Image filename={this.props.image} />
                </div>
                <h2 className={Styles.WorkItem__title}>{this.props.title}</h2>
                <p className={Styles.WorkItem__text}>{this.props.text}</p>
            </div>
        );
    }
}

export default WorkItem