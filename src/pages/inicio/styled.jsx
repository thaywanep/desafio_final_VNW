import styled from "styled-components";

const center = styled.section`
display: flex;
justify-content: center;
align-items: center;
`

export const Main = styled.main`
height: 100vh;
display: flex;
background-color: #839697;
@media (max-width: 500px) {
    flex-direction: column;
}
`

export const Container = styled.section`
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
background-color: #283040;
${center}
@media (max-width: 500px) {
        height: 70vh;
    }
`;

export const Inicio = styled.div`
width: 90%;
heigth: 80vh;
display: flex;
align-items: center;
justify-content: space-evenly;
h3{
    font-size: 2.6rem;
    color: #A13660;
    @media (max-width: 700px) {
        font-size: 2rem;
    }
    @media (max-width: 500px) {
        font-size: 2rem;
        width: 100%;
        text-align: center;
    }
}
img{
    width: 20vw;
    heigth: 80vh;
    border-radius: 20px;
    &:hover{
        transition: .3s ease-in;
        box-shadow: 0px 0px 10px #A13660;
        transform: scale(1.05);
    }
}
p{
font-size: 1.2rem;
width: 45vw;
color: #FFB7C3;
margin: 10px 0 10px 0;
@media (max-width: 500px) {
    flex-direction: column-reverse;
    width: 100%;
    text-align: center;
    font-size: 1rem;
    height: 50vh;
    justify-content: space-evenly;
}
`

export const Sub = styled.p`
width: 100%;
text-align: center;
color: #FFB7C3;
`