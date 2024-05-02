import React from 'react'
import Header from '../../components/Header'
import * as S from "./styled"

export default function Sobre() {
  return (
  <S.Main>
      <Header/>
      <S.Container>
        <S.Sobre>
          <h2>Sobre Mim</h2>
          <p>Olá, me chamo Thaywane Pontes, moro onde o sol nasce primeiro em João Pessoa/PB.</p>
          
          <h3>Interesses</h3>
          <p>Sou apaixonada pelas áreas de STEAM(Ciência, Tecnologia, Engenharia, Artes 
          e Matemática), fortes interesses pelas áreas de Data Science e Machine Learning.</p>
          
          <h3>Objetivos</h3>
          <p>Estou plenamente feliz em participar do VaiNaWeb Front-end, está sendo gratificante 
          aprender diretamente com instrutores capacitados, que nos incentivam a nos desafiar, 
          nos inspiram e nos apoiam contribuindo para o nosso desenvolvimento.</p>
        </S.Sobre>
        <S.Skills>
        <h2>Main Skills</h2>
        <S.Icon>
          <a><box-icon name='html5' type='logo' size='md' color='#A13660'></box-icon></a>
          <a><box-icon name='css3' type='logo' size='md' color='#A13660'></box-icon></a>
          <a><box-icon name='file-js' type='solid' size='md' color='#A13660'></box-icon></a>
          <a><box-icon name='react' type='logo' size='md' color='#A13660'></box-icon></a>
          <a><box-icon name='code-alt' size='md' color='#A13660'></box-icon></a>
          </S.Icon>
        </S.Skills>
        <S.Sub>2024 - &copy; copyright All Rights Reserved. THAYWANE PONTES</S.Sub>
      </S.Container>
    </S.Main>
  )
}