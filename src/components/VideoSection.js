import video from "../assets/diamond-hands.mp4";
function VideoSection() {
  return (
    <section className="container video-section">
      <video className="intro-video" controls autoPlay={true} muted loop>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}

export default VideoSection;
