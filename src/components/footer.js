import React from 'react';
import Styles from '../styles/components/footer.module.scss'

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
                        <li><a href="https://www.facebook.com/ohayato9"><i class="fab fa-facebook-square"></i>ohayato9</a></li>
                        <li><a href="https://github.com/8810KMKM"><i class="fab fa-github-square"></i>KMKM8810</a></li>
                        <li><a href="mailto:p00h_33@outlook.jp"><i class="fas fa-envelope-square"></i>p00h_33@outlook.jp</a>  </li>
                    </ul>
                </div>
            </footer>
        );
    }
}

export default Footer