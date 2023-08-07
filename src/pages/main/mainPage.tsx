import { Footer } from "../../widgets/footer"
import { Header } from "../../widgets/header"
import { Customize } from "./lib/customize"
import { StartScreen } from "./lib/startScreen"


export const MainPage = () => {

    return(
        <>
        <StartScreen>
            <Header />
        </StartScreen>
        <Customize />
            
        <Footer />
        </>
    )
}