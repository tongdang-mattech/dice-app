interface props {
  url: string
}
const Video: React.FC<props> = ({ url }) => {
  return (
    <video
      autoPlay
      playsInline
      preload="auto"
      loop
      muted
      style={{ height: "100%", width: "100%" }}
    >
      <source src={url} />
    </video>
  );
};
export default Video;
