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
    padding: 3rem 0;
    position: relative;
    transition: 1s ease-in-out;
`;

export const SearchInput = styled.input`
    width: 70%;
    height: 7%;
    background: rgb(243, 243, 243);
    border-radius: 50px;
    padding: 1.5rem 1rem;
    border: none;
    outline: none;
    font-size: 1.3em;
`;

export const SearchButton = styled.button`
    position: absolute;
    border: none;
    font-size: 1.3em;
    top: 52%;
    left: 84%;
    transform: translate(-84%, -50%);
    cursor: pointer;
    padding: 1rem;
    background: transparent;
    border: none;
    outline: none;

    @media screen and (max-width: 420px) {
        top: 60%;
    }
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
`;

export const FeelsLikeTemperature = styled.h2`
    color: white;
    font-size: 1.5em;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    text-align: center;
    text-shadow: 4px 0px 0px rgba(0, 0, 0, .3);
    @media screen and (max-width: 420px) {
        font-size: 1.2em;
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
    @media screen and (max-width: 420px) {
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

    @media screen and (max-width: 420px) {
        font-size: 2.7em;
    }
`;

export const SecondaryDescription = styled.h2`
    color: white;
    font-size: 1.2em;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    text-shadow: 2px 1px 0px rgba(0, 0, 0, .3);
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
    @media screen and (max-width: 420px) {
        font-size: 2.2em;
    }
`;