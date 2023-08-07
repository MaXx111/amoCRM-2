import { Footer } from "../../widgets/footer"
import { Header } from "../../widgets/header"
import { StartScreen } from "./lib/startScreen"


export const MainPage = () => {

    return(
        <>
        <StartScreen>
            <Header />
        </StartScreen>
            
            <Footer />

        </>
    )
}