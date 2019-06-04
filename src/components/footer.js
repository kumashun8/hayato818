import React from 'react';
import Styles from '../styles/components/footer.module.scss'

const accountList = [
    {
        icon: "fab fa-facebook-square",
        link: "https://www.facebook.com/ohayato9",
        text: "ohayato9"
    },
    {
        icon: "fab fa-facebook-square",
        link: "https://github.com/8810KMKM",
        text: "KMKM8810"
    },
    {
        icon: "fas fa-envelope-square",
        link: "mailto:p00h_33@outlook.jp",
        text: "p00h_33@outlook.jp"
    }
];

class Footer extends React.Component {
    render() {
        return (
            <footer className={Styles.footer}>
                <div className={Styles.footer__info}>
                    <p className={Styles.footer__info__name}>大隈 隼</p>
                    <p className={Styles.footer__info__belongs}>
                        学校 : 九州工業大学 情報工学部 4年<br />
                        団体 : 
                        <a href="https://kyutech-stairs.github.io/" target="_blank"> stairs</a>
                        <a href="https://www.planningdev.com/" target="_blank">P&D</a>
                    </p>
                </div>
                <div className={Styles.footer__account}>
                    <ul className={Styles.footer__account__list}>
                        {accountList.map((item) => (
                            <li><a href={item.link} target="_blank"><i className={item.icon}></i>{item.text}</a></li>
                        ))}
                    </ul>
                </div>
            </footer>
        );
    }
}

export default Footer