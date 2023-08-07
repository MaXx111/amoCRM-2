import { FutureOfEsport } from "../../../shared/futureOfEsport"

export const News = () => {

    return(
        <>

            <section className="news">
                <div className="news-header">
                    <div className="news-header-titles">
                        <FutureOfEsport />
                        <h2 className="news-header-title orbitron-regular">Latest News & Articles</h2>
                    </div>
                    <button className="news-header-btn">
                        <span className="news-header-btn-txt orbitron-regular">Read More</span>
                    </button>
                </div>
                <div className="news-content">
                    <article className="news-item">
                        <img src="./news-img-1.png" alt="" className="news-item-img" />
                        <p className="news-item-date orbitron-regular">April 2, 2021</p>
                        <h3 className="news-item-title orbitron-regular">Esports Group teams up with the Indianapolis Colts</h3>
                    </article>
                    <div className="news-little-articles">
                        <article className="news-item">
                            <img src="./news-img-2.png" alt="" className="news-item-img"/>
                            <p className="news-item-date orbitron-regular">April 2, 2021</p>
                            <h3 className="news-item-title orbitron-regular">NAVI reveals s1mple fifth anniversary</h3>
                        </article>
                        <article className="news-item">
                            <img src="./news-img-3.png" alt="" className="news-item-img"/>
                            <p className="news-item-date orbitron-regular">April 2, 2021</p>
                            <h3 className="news-item-title orbitron-regular">A1esports Shares new picture</h3>
                        </article>
                        <article className="news-item">
                            <img src="./news-img-4.png" alt="" className="news-item-img"/>
                            <p className="news-item-date orbitron-regular">April 2, 2021</p>
                            <h3 className="news-item-title orbitron-regular">T1 unveil partnership with Razers</h3>
                        </article>
                        <article className="news-item">
                            <img src="./news-img-5.png" alt="" className="news-item-img"/>
                            <p className="news-item-date orbitron-regular">April 2, 2021</p>
                            <h3 className="news-item-title orbitron-regular">RX secures content partnership with</h3>
                        </article>
                    </div>
                </div>
            </section>
        </>
    )
}