export function Categories() {
    return (
   <>     
            <blockquote class="text-5xl font-semibold text-gray-900 dark:text-white p-4">
                <p className=" font-semibold text-gray-700 py-6">Categories</p>
            </blockquote>

        {/* Display of categories like fashion, furniture, electronics,.. that the system deals in */}
        <div class="grid grid-cols-1 md:grid-cols-6  gap-4 rounded-lg">
            <div className="shadow-lg shadow-cyan-500/70 hover:shadow-cyan-500/50 rounded-lg relative ">
                <div className="absolute">
                    <p className="text-2xl italic font-thin text-white dark:text-white-700 px-8 py-8">Fashion</p>
                </div>

                <img class="h-full max-w-full shadow-xl rounded-lg" src="https://assets.teenvogue.com/photos/676953b251d5b40ddf5564ec/16:9/w_2560%2Cc_limit/2025%2520FASHION%2520TRENDS.jpg" alt="" />

            </div>
           
            <div className="shadow-lg shadow-cyan-500/70 hover:shadow-cyan-500/50 rounded-lg relative">
                <div className="absolute">
                    <p className="text-2xl italic font-thin text-black dark:text-white-700 px-8 py-8">Furniture</p>
                </div>

                <img class="h-full max-w-full rounded-lg" src="https://plus.unsplash.com/premium_photo-1661964014750-963a28aeddea?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />

            </div>
            <div className="shadow-lg shadow-cyan-500/70 hover:shadow-cyan-500/50 rounded-lg relative">
                <div className="absolute">
                    <p className="text-2xl italic font-thin text-gray-900 dark:text-white-700 px-8 py-7">Appliances</p>
                </div>

                <img class="h-full max-w-full rounded-lg" src="https://blog.zuchex.com/wp-content/uploads/2022/06/shutterstock_411692476-1.jpg" alt="" />

            </div>
            <div className="shadow-lg shadow-cyan-500/70 hover:shadow-cyan-500/50 rounded-lg relative">
                <div className="absolute">
                    <p className="text-2xl italic  font-thin text-gray-100 dark:text-white-700 px-8 py-8">Electronics</p>
                </div>

                <img class="h-full max-w-full rounded-lg" src="https://t3.ftcdn.net/jpg/03/08/02/16/360_F_308021654_AQM6zoArCHDYzisgXh18IZtUwVRAXPUY.jpg" alt="" />

            </div>
           
            <div className="shadow-lg shadow-cyan-500/70 hover:shadow-cyan-500/50 rounded-lg relative">
                <div className="absolute">
                    <p className="text-2xl italic font-thin text-black dark:text-white-700 px-8 py-8">Stationary</p>
                </div>

                <img class="h-full max-w-full rounded-lg" src=" https://cphfcrflaa.cloudimg.io/_bcuimages/stationary-header-132369613170388666.jpg" alt="" />

            </div>
            
            <div className="shadow-lg shadow-cyan-500/70 hover:shadow-cyan-500/50 rounded-lg relative">
                <div className="absolute">
                    <p className="text-2xl italic  font-thin text-gray-100 dark:text-white-700 px-8 py-8">Shoes</p>
                </div>

                <img class="h-full max-w-full rounded-lg" src="https://bearfoot.store/cdn/shop/files/ursus-royal-bloodline-landscape-4web.jpg?v=1736274186&width=1920" alt="" />

            </div>

        </div>
        </>

    )
}