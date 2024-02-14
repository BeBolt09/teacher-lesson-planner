import Footer from "../components/Footer"
function Home() {
  return (
    <>  
    <div className="flex flex-row items-center justify-center">
      <div className="w-2/5 mx-10">
        <video autoPlay loop muted playsInline src="/Lesson Planner Demo .mp4" className="bg-gray-200 rounded-lg overflow-hidden shadow-lg border-2 mt-36 mx-10"/>
        <img src="/Step2.png" className="bg-gray-200 rounded-lg overflow-hidden shadow-lg  border-2 mt-36 mx-10" />
        <img src="/Step4.png" className="bg-gray-200 rounded-lg overflow-hidden shadow-lg  border-2 mt-36 mx-10" />
      </div>
      <div className="w-2/5 mx-10">
        <img src="/Step1.png" className="bg-gray-200 rounded-lg overflow-hidden shadow-lg  border-2 mt-36 mx-10"/>
        <img src="/Step3.png" className="bg-gray-200 rounded-lg overflow-hidden shadow-lg  border-2 mt-36 mx-10" />
      </div>
    </div>

        <div className="mt-44">h</div>
        <div className="mt-44">h</div>
        <div className="mt-44">h</div>
        
        <Footer/>
    </>
  )
}

export default Home