export default function Home(){
  return (
    <div className="h-[100vh] bg-gray-100">
        <section
          className="h-[150px] bg-cover bg-center flex items-center justify-center bg-blue-600"
          style={{
            backgroundImage: "url('/your-image-name.jpg')", // <-- apna image ka naam daalna yaha
          }}
        >
          <div className="text-center text-white bg-black/50 p-6 rounded-xl">
            <h1 className="text-4xl font-bold mb-4">Welcome to Health Plus</h1>
            <p className="text-lg">Caring for you and your family.</p>
            
          </div>
            
         
        </section>
       </div>
  )
}