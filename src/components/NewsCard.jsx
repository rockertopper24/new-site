export default function NewsCard({ item }){
  return (
    <article className="card p-5">
      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
      <p className="opacity-80 mb-4">{item.description}</p>
      <a className="btn-primary inline-block" href={item.url} target="_blank" rel="noreferrer">Read</a>
    </article>
  );
}