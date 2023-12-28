import {
    Link
} from "react-router-dom";
import styled, {
    createGlobalStyle
} from "styled-components";
export const GlobalStyle = createGlobalStyle `
    *{
        box-sizing: border-box;
        margin:0;
        padding:0;
    }
    a{
        text-decoration:none;

    }
    li{
        list-style:none;
    }
`



export const Navbar = styled.nav `
    background-color: #28292D;
    color: #fff;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;

`
export const Logo = styled.h1 `
    font-size: 38px;
    font-weight: bold;
    font-family:'Oswald', sans-serif;
    color: #fff;
    text-transform: uppercase;
    background: #EC1D24;
    padding: .5px 6px;
`
export const NavbarLinks = styled.ul `
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    font-size: 20px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    color: #fff;
    & li{
        padding: 3px;
    }
`
export const NavbarLink = styled(Link)
`
    text-decoration: none;
    color: #fff;
    padding: 5px;
    &:hover{
        color: #EC1D24;
    }
`

export const Grid = styled.section `
    width:90vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
    margin-top:20px;
   
`
export const GridItem = styled.div `
    background-color: #fff;
    border-radius: 10px;
    padding: 10px;
    text-align: center;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
    transition: all 0.3s ease-in-out;
    cursor:pointer;
    &:hover{
        transform: scale(1.1);
    }
`
export const GritImage = styled.img `
    width: 100%;
    height: auto;
    border-radius: 10px;
`
export const GridItemTitle = styled.h3 `
    font-size: 20px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    color: #EC1D24;
    text-transform: uppercase;
    margin-bottom: 10px;
`

export const DetailTitle = styled.h2 `
    font-size: 30px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    color: #EC1D24;
    text-transform: uppercase;
    margin-bottom: 10px;
`
export const DetailSubtitle = styled.h3 `
    font-size: 25px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    color: #00acee;
    text-transform: uppercase;
    margin-bottom: 10px;
    margin-top:10px;
`
export const DetailDescription = styled.p `
    font-size: 20px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    color:gray;
`
export const DetailsList = styled.ul `
    list-style: none;
    background: rgb(235, 235, 235);
`
export const DetailsListItem = styled.li `
    font-size: 20px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    padding:10px;
    border-top:solid .3px gray;
    cursor:pointer;
    &:hover{
        background: rgb(230, 103, 103);
        color:#fff;
    }
`

export const GridDetailItem = styled.div `
    background-color: #fff;
    padding: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
    img{
        margin-top:5px ;
        width: 100%;
    }
`
export const SearchInput= styled.input`
    width:20%;
    height:40px;
    border-radius:10px;
    border:solid 1px gray;
    padding:10px;
    font-size:20px;
    font-weight:bold;
    font-family: 'Roboto', sans-serif;
    color:gray;
    &:focus{
        outline:none;
    }
`