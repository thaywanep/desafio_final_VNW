import Header from '../../components/Header.jsx'
import * as S from "./styled.jsx"
// import Carrosel from "react-elastic-carousel"
import Card from "./card.jsx"
import prime_video from '../../assets/prime_video.jpeg'
import life_art from '../../assets/life_art.jpeg'
import self_care from '../../assets/self_care.jpeg'
import feliz_natal from '../../assets/feliz_natal.jpeg'
import mc_delivery from '../../assets/mc_delivery.jpeg'
import portfolio from '../../assets/portfolio.jpeg'


export default function Projetos() {
  return (
    <S.Main>
      <Header/>
      <S.Projetos>
          <Card imagem={prime_video} texto={"Desafio criar um site com a interface do Prime Video, utilizando apenas HTML e CSS."} />
          <Card imagem={life_art} texto={"Desafio criar um site de arte musical, com novas estilizações, utilizando apenas HTML e CSS."} />
          <Card imagem={self_care} texto={"Desafio de um site de cuidados pessoais, contendo cards de produtos naturais, utilizando apenas HTML e CSS, e responsividade."} />
          <Card imagem={feliz_natal} texto={"Projeto de Natal, desafio criar um site referente a doações, utilizando apenas HTML e CSS e responsividade."} />
          <Card imagem={mc_delivery} texto={"Desafio criar um site com a interface do McDonald's Delivery, utilizando HTML, CSS, JavaScript e React, useState e useEffect."} />
          <Card imagem={portfolio} texto={"Desafio de criar um portifólio pessoal, baseado em um modelo, utilizando HTML, CSS, JavaScript, React, Styled-Components e Raeact-Router."} />
      </S.Projetos>
    </S.Main>
  );
}