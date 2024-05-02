import * as S from "./styled.jsx"

export default function Card({imagem, texto}) {
return (
    <S.Card>
        <img src={imagem} alt="" />
        <p><b>{texto}</b></p>
        <button><b>Repositório</b></button>
    </S.Card>
)
}
