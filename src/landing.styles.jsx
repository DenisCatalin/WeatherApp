import styled from 'styled-components';

export const WeatherPage = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-flow: wrap column;
`;

export const SearchArea = styled.div`
    width: 100%;
    height: 15vh;
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 2rem 0;
    position: relative;
    transition: 1s ease-in-out;
`;

export const SearchInput = styled.input`
    width: 70%;
    height: 80%;
    background: rgb(243, 243, 243);
    border-radius: 50px;
    background-color: white;
    padding: 1rem;
    border: none;
    outline: none;
    font-size: 1.3em;
`;

export const TemperatureArea = styled.div`
    width: 100%;
    height: 20vh;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-flow: wrap column;
    transition: 1s ease-in-out;
`;

export const MainTemperature = styled.h1`
    color: white;
    font-size: 4.5em;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    text-align: center;
    text-shadow: 5px 1px 0px rgba(0, 0, 0, .3);

    @media screen and (max-width: 850px) {
        font-size: 2.5em;
    }
    @media screen and (max-width: 420px) {
        font-size: 3em;
    }
    @media screen and (max-width: 670px) {
        font-size: 1.8em;
    }
    @media screen and (max-width: 360px) {
        font-size: 2.8em;
    }
`;

export const FeelsLikeTemperature = styled.h2`
    color: white;
    font-size: 1.5em;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    text-align: center;
    text-shadow: 4px 0px 0px rgba(0, 0, 0, .3);

    @media screen and (max-width: 850px) {
        font-size: .8em;
    }
    @media screen and (max-width: 420px) {
        font-size: 1.2em;
    }
    @media screen and (max-width: 360px) {
        font-size: .8em;
    }
`;

export const DescriptionArea = styled.div`
    width: 100%;
    height: 40vh;
    text-align: center;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    position: relative;
    transition: 1s ease-in-out;
`;

export const DescriptionImage = styled.img`
    width: 8%;
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-50%, 0);

    @media screen and (max-width: 1330px) {
        width: 15%;
    }
    @media screen and (max-width: 1050px) {
        width: 20%;
    }
    @media screen and (max-width: 850px) {
        width: 10%;
    }
    @media screen and (max-width: 420px) {
        width: 35%;
    }
    @media screen and (max-width: 360px) {
        width: 30%;
    }
`;

export const MainDescription = styled.h1`
    color: white;
    font-size: 3em;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    margin-top: 3em;
    text-shadow: 4px 1px 0px rgba(0, 0, 0, .3);

    @media screen and (max-width: 850px) {
        font-size: 1.7em;
    }
    @media screen and (max-width: 570px) {
        font-size: 1.4em;
    }
    @media screen and (max-width: 420px) {
        font-size: 2.7em;
    }
    @media screen and (max-width: 360px) {
        font-size: 1.8em;
    }
`;

export const SecondaryDescription = styled.h2`
    color: white;
    font-size: 1.2em;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    text-shadow: 2px 1px 0px rgba(0, 0, 0, .3);
    @media screen and (max-width: 850px) {
        font-size: .7em;
    }
    @media screen and (max-width: 570px) {
        font-size: .6em;
    }
    @media screen and (max-width: 420px) {
        font-size: 1em;
    }
    @media screen and (max-width: 360px) {
        font-size: .8em;
    }
`;

export const CityName = styled.div`
    width: 100%;
    height: 25vh;
    text-align: center;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-flow: wrap column;
    transition: 1s ease-in-out;
`;

export const NameSearch = styled.h1`
    color: white;
    font-size: 3em;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    text-shadow: 4px 1px 0px rgba(0, 0, 0, .3);

    @media screen and (max-width: 850px) {
        font-size: 1.7em;
    }
    @media screen and (max-width: 570px) {
        font-size: 1em;
    }

    @media screen and (max-width: 420px) {
        font-size: 2.2em;
    }

    @media screen and (max-width: 360px) {
        font-size: 1.5em;
    }
`;

export const NotFound = styled.h1`
    color: white;
    height: 80vh;
    width: 100%;
    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-family: 'Poppins', sans-serif;
`;