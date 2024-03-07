import React from 'react'
import NavLink from '../UI/NavLink'
import SvgAnimation from '../animation/SvgAnimation'

export default function Footer() {
    return (
        <footer className="footer block-wrapper">
            <div className="footer__content-wrapper">
                <div className="footer__top-content-wrapper">
                    <ul className="footer__aside-links-list">
                        <li className="footer__aside-link">Все права защищены ©2023</li>
                        <li>
                            <NavLink
                                text="Политика конфиденциальности"
                                wrapperClassName="footer__aside-link"
                            />
                        </li>
                        <li>
                            <NavLink
                                text="Политика Cookie"
                                wrapperClassName="footer__aside-link"
                            />
                        </li>
                        <li>
                            <NavLink
                                text="Разработано Friend Lee"
                                wrapperClassName="footer__aside-link"
                            />
                        </li>
                    </ul>
                    <ul className="footer__contacts-list">
                        <li>
                            <NavLink
                                text="+7 900 873 65 32"
                                wrapperClassName="footer__contacts-link"
                            />
                        </li>
                        <li>
                            <NavLink
                                text="MESTO@ MESTO .RU"
                                wrapperClassName="footer__contacts-link"
                            />
                        </li>
                    </ul>
                </div>
                <NavLink text="обсудить задачу" wrapperClassName="footer__conversation-link" />
            </div>
            <SvgAnimation />
        </footer>
    )
}
