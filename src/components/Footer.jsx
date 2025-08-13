export default function Footer(){
  return (
    <footer className="mt-12 border-t border-white/5 bg-black/30">
      <div className="container-padded py-8 text-sm opacity-80">
        © {new Date().getFullYear()} New Site — Built on Netlify + Firebase
      </div>
    </footer>
  );
}