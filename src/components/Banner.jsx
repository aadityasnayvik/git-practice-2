// import videoSrc from "../assets/images/video.mp4";

export default function Banner() {
    return (
        <section className="banner">
            <div className="container-fluid p-0">
                <div className="ratio ratio-16x9">
                    <video src={videoSrc} className="w-100 h-75 object-fit-cover" autoPlay loop muted playsInline preload="auto" />
                </div>
            </div>
        </section>
    );
}