import useLocalStorage from "./useLocalStorage";
import './styles.css' ;

export default function LightDarkMode() {
    
    const [theme, setTheme] = useLocalStorage("theme","dark");

    function hangleToggleTheme(){
        setTheme(theme === "light" ? "dark" : "light");
    }
    
    return (
        <div className="light-dark-mode" data-theme={theme}>
            <div className="container">
                <p>Hello World</p>
                <button onClick={hangleToggleTheme}>Change Theme</button>
            </div>
        </div>
    );
}