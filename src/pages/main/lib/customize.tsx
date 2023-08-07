import { FutureOfEsport } from "../../../shared/futureOfEsport"


export const Customize = () => {

    return(
        <>
            <section className="customize">
                <div className="customize-content">
                    <FutureOfEsport />
                    <h2 className="customize-title orbitron-regular">Customize Your Own Character</h2>
                    <p className="customize-text orbitron-regular">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.</p>
                    <div className="customize-imgs">
                        <a href="!#" className="customize-img-link">
                            <img src="./customize-img-1.png" alt="customize-img-1" className="customize-img"/>
                        </a>
                        <a href="!#" className="customize-img-link">
                            <img src="./customize-img-2.png" alt="customize-img-2" className="customize-img"/>
                        </a>
                        <a href="!#" className="customize-img-link">
                            <img src="./customize-img-3.png" alt="customize-img-3" className="customize-img"/>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}