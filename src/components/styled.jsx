import styled,{createGlobalStyle} from "styled-components";


export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
}
`

export const Header = styled.header`
width: 17vw;
background-color: #1F2C3D;
display: flex;
align-items: center;
flex-direction: column;
@media (max-width: 750px) {
    width: 20vw;
}
@media (max-width: 500px) {
    width: 100%;
    height: 30vh;
}
`

export const Id = styled.div`
width: 100%;
height: 38vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
img{
    width: 10vw;
    border-radius: 50%;
}
@media (max-width: 500px) {
    height: 15vh;
    padding-left: 1rem;
    flex-direction: row;
    width: 100%;
    flex-direction: row;
    height: 9vh;
}
`

export const Nome = styled.h2`
width: 100%;
text-align: center;
color: #A13660;
`

export const Sub = styled.p`
width: 100%;
text-align: center;
color: #FFB7C3;
@media (max-width: 500px) {
    display: none;
}
`

export const Menu = styled.nav`
height: 38vh;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
ul{
    width: 100%;
}
@media (max-width: 500px) {
    height: 15vh;
}
`

export const Li = styled.li`
border-bottom: solid 1px white;
height: 12vh;
display: flex;
justify-content: center;
align-items: center;
border-top:${props => props.linha};
a{
    color: #FFB7C3;
    font-size: 22px;
}
@media (max-width: 500px) {
    height: 5vh;
}
&:hover{
    transition: .3s ease-in;
    box-shadow: 0px 0px 8px #A13660;
    transform: scale(1.05);
}
`

export const Icon = styled.div`
padding-top: 20px;
height: 20vh;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
@media (max-width: 500px) {
    display: none;
}
color: #A13660;
box-icon{
    &:hover{
        transition: .3s ease-in;
        box-shadow: 0px 0px 8px #A13660;
        transform: scale(1.05);
    }
}
`