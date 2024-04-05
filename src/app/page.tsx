import 'tailwindcss/tailwind.css';

function Home() {
  return (
    <div className="h-screen flex items-center justify-center" style={{backgroundImage: `url('/background.jpg')` }}>
    
      <h1 className="text-amber-600 text-5xl"> Welcome to DrumFest! </h1>
    </div>
  )
}

export default Home;