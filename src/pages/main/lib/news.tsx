import { FutureOfEsport } from "../../../shared/futureOfEsport"

export const News = () => {

    return(
        <>

            <section className="news">
                <div className="news-header">
                    <div className="news-header-titles">
                        <FutureOfEsport />
                        <h2 className="news-header-title">Latest News & Articles</h2>
                    </div>
                    <button className="news-header-btn">
                        <span className="news-header-btn txt">Read More</span>
                    </button>
                </div>
                <div className="news-content">

                </div>
            </section>
        </>
    )
}