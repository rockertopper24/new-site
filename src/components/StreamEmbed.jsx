export default function StreamEmbed({ channel }){
  return (
    <div className="card overflow-hidden aspect-video">
      <iframe
        src={`https://player.twitch.tv/?channel=${channel}&parent=localhost&muted=true`}
        height="100%" width="100%" allowFullScreen
        title={`Twitch: ${channel}`}
      />
    </div>
  );
}