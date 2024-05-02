import styled from "styled-components";

const center = styled.section`
display: flex;
justify-content: center;
align-items: center;
`

export const Main = styled.main`
height: 100vh;
display: flex;
@media (max-width: 500px) {
    flex-direction: column;
}
`

export const Projetos = styled.section`
width: 100%;
display: flex;
flex-wrap: wrap;
gap: 1rem;
justify-content: center;
align-items: center;
background-color: #283040;
`

export const Card = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 1rem;
text-align: center;
background-color: #283040;
border-radius: 1.5rem;
box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 6px;
width: 26vw;
height: 47vh;
overflow: hidden;
p{
    height: 10vh;
    ${center}
    z-index: 5;
    color: #FFB7C3;
    
}
img{
    align-items: center;
    justify-content: center;
    height: 10rem;
    widht: 90%;
    object-fit: cover;
    transition: all 0.2s ease-in-out;
    &:hover{
        height: 12rem;
        widht: 100%;
        position: relative;
    }
}
button{
    cursor: pointer;
    background-color: #BF7E8A;
    border: none;
    height: 5vh;
    width: 45%;
    border-radius: 10px;
    margin-bottom: 1rem;
    &:hover{
        background-color: #FFB7C3;
    }
}
&:hover{
    box-shadow: rgba(0, 0, 0, 0.3) 0px 6px 16px;
}
`
