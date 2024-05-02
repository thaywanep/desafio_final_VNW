import { Link } from "react-router-dom";
import * as S from "./styled"

export default function Header() {
    return (
        <S.Header>
        <S.Id>
            <img src="https://cdn.icon-icons.com/icons2/2643/PNG/512/avatar_female_woman_person_people_white_tone_icon_159360.png" alt="" />
            <S.Nome>Thaywane</S.Nome>
            <S.Sub>Front-End Web Developer</S.Sub>
        </S.Id>
        <S.Menu>
            <ul>
                <S.Li linha="1px solid white"><Link to="/">Inicio</Link></S.Li>
                <S.Li><Link to="/sobre">Sobre mim</Link></S.Li>
                <S.Li><Link to="/projetos">Projetos</Link></S.Li>
            </ul>
        </S.Menu>
        <S.Icon>
        <a href="www.linkedin.com/in/thaywane-pontes" target="_blank"><box-icon name='linkedin-square' type='logo' size='md' color='#A13660'></box-icon></a>
        <a href="https://github.com/thaywanep" target="_blank"><box-icon name='github' type='logo' size='md' color='#A13660'></box-icon></a>
        <a href="mailto:thaywane.oliveira@gmail.com" target="_blank"><box-icon name='envelope' size='md' color='#A13660'></box-icon></a>
        </S.Icon>
    </S.Header>
    )
}