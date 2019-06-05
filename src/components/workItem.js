import React from 'react';
import Styles from '../styles/components/workItem.module.scss'
import Image from "../components/image"

class WorkItem extends React.Component {
    render() {
        return (
            <a href={this.props.data.link} target="_blank" className={Styles.WorkItem}>
                <div  className={Styles.WorkItem__image}>
                    <Image filename={this.props.data.image} />
                </div>
                <h2 className={Styles.WorkItem__title}>{this.props.data.title}</h2>
                <p className={Styles.WorkItem__text}>{this.props.data.text}</p>
            </a>
        );
    }
}

export default WorkItem