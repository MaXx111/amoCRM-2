import { ReactElement } from "react"

interface StartScreenProps {
    children: ReactElement
}

export const StartScreen = ({children}: StartScreenProps) => {

    return(
        <>
            <div className="start-screen">
                {children}
            </div>
        </>
    )
}