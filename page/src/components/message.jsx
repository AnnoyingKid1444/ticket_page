import React, { useState } from "react";
import "../styles/message.css"
import { ReactComponent as Arrow } from "../svg/arrow_up.svg";
import Avatar from "../img/Rectangle 180.jpg";

const Message = () => {
    const [active, setActive] = useState(true)
    return(
        <div className={active ? 'mes active' : 'mes'} active={active} setactive = {setActive}>
            <div className="mes-header">

                <div className="mes-head-wrap">

                    <img src={Avatar} alt="Avatar"
                        height={'39px'}
                        width={'39px'}
                        style={{ borderRadius: '50%'}}
                    />

                <div className="mes-info">

                    <div className="mes-heading">
                        <p>academic progress, rules and other information</p>
                    </div>
                    <div className="mes-date">
                        <p>January 25 at 8 : 50</p>
                    </div>

                </div>

                </div>


                <div className="arrow" onClick={() => setActive(!active)}>
                <Arrow/>
                </div>

            </div>
            <div className="mes-body">
                <p>Student: </p>
                <p>Student ID: </p>
                <p>Students Email: </p>
                <p>Complain Theme: </p>
                <p>Message ID: </p>
                <p>Есть над чем задуматься: явные признаки победы институционализации рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок.
                     Противоположная точка зрения подразумевает, что тщательные исследования конкурентов призывают нас к новым свершениям, которые, в свою очередь, 
                     должны быть объявлены нарушающими общечеловеческие нормы этики и морали. А также стремящиеся вытеснить традиционное производство, нанотехнологии 
                     представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть разоблачены. Сложно сказать, почему базовые сценарии 
                     поведения пользователей, вне зависимости от их уровня, должны быть указаны как претенденты на роль ключевых факторов. В рамках спецификации современных
                     стандартов, ключевые особенности структуры проекта являются только методом политического участия и объединены в целые кластеры себе подобных.</p>
            </div>
        </div>
    )
}

export default Message;