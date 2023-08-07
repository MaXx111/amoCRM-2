import { ReactElement } from "react"
import { FutureOfEsport } from "../../../shared/futureOfEsport"

interface StartScreenProps {
    children: ReactElement
}

export const StartScreen = ({children}: StartScreenProps) => {

    return(
        <>
            <div className="start-screen">
                {children}
                <section className="start-screen_info">
                    <div className="social-media">
                        <ul className="social-media-list">
                            <li className="social-media-list_item">
                                <a href="" className="social-media-list_link orbitron-regular">FACEBOOK</a>
                            </li>
                            <li className="social-media-list_item">
                                <a href="" className="social-media-list_link orbitron-regular">INSTAGRAM</a>
                            </li>
                            <li className="social-media-list_item">
                                <a href="" className="social-media-list_link orbitron-regular">TWITCH</a>
                            </li>
                        </ul>
                    </div>
                    <div className="start-screen_content">
                        <FutureOfEsport />
                        <h1 className="content-title orbitron-regular">Unleash the Next <span className="underline">Generation</span> of Gaming</h1>
                        <p className="content-text orbitron-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, nec donec in morbi pulvinar. Enim non pulvinar neque.</p>
                        <div className="content-buttons">
                            <button className="content-button"><span className="content-button-txt orbitron-regular">Explore More</span></button>
                            <button className="content-button"><span className="content-button-txt orbitron-regular">View our team</span></button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}