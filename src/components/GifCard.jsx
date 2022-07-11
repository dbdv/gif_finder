export default function GifCard({ gif }) {
  return (
    <div className="gifCard">
      <img src={gif.images.downsized.url} alt={gif.title} />
      <h3>{gif.title}</h3>
    </div>
  );
}
