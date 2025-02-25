export default function Header(){

    return (
        <header className="bg-[#ff5200] font-serif">
            <div className="flex justify-between container mx-auto py-8 text-center">
                <img className="w-40 h-12"  src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"></img>

            
            <div className="font-serif text-white font-bold flex gap-15 text-base text-center">
                <a target="_blank" href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
                <a target="_blank" href="https://partner.swiggy.com/login#/swiggy"> Partner With Us</a>
                <a  className="border border-white py-3 px-4 rounded-2xl" target="_blank" >Get the App</a>
                <a className="border border-black bg-black py-3 px-4 rounded-2xl" target="_blank"> Sign In</a>
            </div>
            </div>
           
           <div className="pt-16 pb-8">
            <div className="text-white text-5xl max-w-[60%] pl-3 font-bold   container mx-auto text-center ">
                <h1>Order food & groceries. Discover best restaurants. Swiggy it!</h1>
            </div>
            <div></div>
            </div>
          
            <div></div>
        </header>
    )
}