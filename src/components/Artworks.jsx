import ethlogo from '../assets/ethlogo.png'

const Artworks = () => {
  return (
    <div className="bg-[#131835] py-10">
        <div className="w-4/5 mx-auto">
            <h4 className="text-gradient uppercase text-2xl">Artworks</h4>

            <div className="relative shadow-xl shadow-black p-3
                bg-white rounded-lg item w-64 h-64 object-contain 
                bg-no-repeat bg-cover overflow-hidden mr-2 mb-2 cursor-pointer
                transition-all duration-75 delay-100 hover:shadow-[#bd255f]"
                style={{backgroundImage: `url(${BASE_URI})`}}>
                    <div className="absolute bottom-0 left-0 right-0
                  flex flex-row justify-between items-center
                  label-gradient p-2 w-full text-white text-sm">
                    <p>Rodgers NFT #1</p>
                    <img src={ethlogo} alt="Rodgers Logo" />
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Artworks