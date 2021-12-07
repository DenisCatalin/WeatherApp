import React, {useState} from 'react'
import env from "react-dotenv";
import { CityName, DescriptionArea, DescriptionImage, FeelsLikeTemperature, MainDescription, MainTemperature, NameSearch, SearchArea, SearchButton, SearchInput, SecondaryDescription, TemperatureArea, WeatherPage } from './landing.styles';
import './global.css'

const App = () => {
    const getPhoto = (string) => {
        let text = '';
        switch(string) {
            case '01d': {
                text = "https://i.ibb.co/YWpMnm4/01d.png";
                break;
            }
            case '01n': {
                text = "https://i.ibb.co/myw5fnL/01n.png";
                break;
            }
            case '02d': {
                text = "https://i.ibb.co/bQs8R0T/02d.png";
                break;
            }
            case '02n': {
                text = "https://i.ibb.co/JCPv3Hx/02n.png";
                break;
            }
            case '03d': {
                text = "https://i.ibb.co/n1q9qqZ/03d.png";
                break;
            }
            case '03n': {
                text = "https://i.ibb.co/n1q9qqZ/03d.png";
                break;
            }
            case '04d': {
                text = "https://i.ibb.co/bLxyxpF/04d.png";
                break;
            }
            case '04n': {
                text = "https://i.ibb.co/zS0TyBW/04n.png";
                break;
            }
            case '09d': {
                text = "https://i.ibb.co/LQPLjQB/09d.png";
                break;
            }
            case '09n': {
                text = "https://i.ibb.co/LQPLjQB/09d.png";
                break;
            }
            case '10d': {
                text = "https://i.ibb.co/vL8DDTc/10d.png";
                break;
            }
            case '10n': {
                text = "https://i.ibb.co/yQqXd64/10n.png";
                break;
            }
            case '11d': {
                text = "https://i.ibb.co/k8jbcMX/11d.png";
                break;
            }
            case '11n': {
                text = "https://i.ibb.co/Kh1zyPP/11n.png";
                break;
            }
            case '13d': {
                text = "https://i.ibb.co/3R4WG15/13d.png";
                break;
            }
            case '13n': {
                text = "https://i.ibb.co/3R4WG15/13n.png";
                break;
            }
            case '50d': {
                text = "https://i.ibb.co/WP4rQYv/50d.png";
                break;
            }
            case '50n': {
                text = "https://i.ibb.co/WP4rQYv/50n.png";
                break;
            }
            default: {
                text = '';
                break;
            }
        }
        return text;
    }

    const d = new Date();
    const hour = d.getHours();

    const backgroundDay = {
        background: 'linear-gradient(180deg, #193259, rgba(0, 209, 255, .5))'
    }

    const backgroundNight = {
        background: 'linear-gradient(180deg, rgba(25, 50, 89, 1), rgba(0, 0, 0, .8))'
    }

    const [search, setSearch] = useState('');
    const [data, setData] = useState();

    const searchForWeather = async () => {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=Metric&appid=${env.API_KEY}`);
        const data = await res.json();
        setData(data);
    }

    return (
        <WeatherPage style={hour < 17 ? backgroundNight : backgroundDay}>
            <SearchArea style={{marginBottom: data ? '0em' : '50em'}}>
                <SearchInput 
                    onChange={(e) => {
                        setSearch(e.target.value);
                    }} 
                    
                    placeholder='Search...' 

                    onKeyPress={event => {
                    if(event.key === 'Enter') searchForWeather();
                }}/>
                <SearchButton onClick={searchForWeather}><i className="fas fa-search"></i></SearchButton>
            </SearchArea>
            <TemperatureArea style={{opacity: data ? '1' : '0'}}>
                <MainTemperature>{data ? data.main.temp.toFixed(0) : null}°C</MainTemperature>
                <FeelsLikeTemperature>Feels like: {data ? data.main.feels_like.toFixed(0) : null}°C</FeelsLikeTemperature>
            </TemperatureArea>
            <DescriptionArea style={{opacity: data ? '1' : '0'}}>
                <DescriptionImage src={data ? getPhoto(data.weather[0].icon) : null} alt={data ? data.weather[0].description : null}/>
                <MainDescription>{data ? data.weather[0].main : null}</MainDescription>
                <SecondaryDescription>{data ? data.weather[0].description : null}</SecondaryDescription>
            </DescriptionArea>
            <CityName style={{opacity: data ? '1' : '0'}}>
                <NameSearch>{data ? data.name.toUpperCase() : null}</NameSearch>
                <NameSearch>{data ? data.sys.country.toUpperCase() : null}</NameSearch>
            </CityName>
        </WeatherPage>
    )
}

export default App
