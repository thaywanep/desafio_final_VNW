import Header from "../../components/Header";
import * as S from "./styled";
import fotoperfil from "../../assets/fotoperfil.jpeg"

export default function Inicio() {
    return (
    <S.Main>
        <Header />
        <S.Container>
            <S.Inicio>
                <div>
                    <h3>Olá, me chamo Thaywane</h3>
                    <h3>Sou Front-End Web Developer</h3>
                    <p>Transformando código em soluções e desafios em oportunidades.</p>
                </div>
                <img src={fotoperfil} alt="Foto Perfil" />
            </S.Inicio>
            <S.Sub>2024 - &copy; copyright All Rights Reserved. THAYWANE PONTES</S.Sub>
        </S.Container>
    </S.Main>
    );
}