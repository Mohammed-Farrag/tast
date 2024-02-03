export default function PersonalInfo() {
    return (
        <div className="h-full  mx-auto " >
            <div className="text-xl md:text-3xl font-bold text-default">Personal Info</div>
            <div className="text-sm md:text-xl text-gray-400 mb-3 md:mb-10">Please Provide your name, email address and phone number</div>

            <div className="form-group flex flex-col mb-4 ">
                <label htmlFor="name" className="pl-1 mb-1 text-default font-bold">Name</label>
                <input type="text" id="name" name="name" 
                className="text-default px-1 py-1 md:px-4 md:py-3 rounded-lg border-gray-200 border-2 font-bold text-3xl focus-visible:border-default" />
            </div>

            <div className="form-group flex flex-col mb-4 ">
                <label htmlFor="email" className="pl-1 mb-1 text-default font-bold">Email Address</label>
                <input type="text" id="email" name="email" className="text-default px-1 py-1 md:px-4 md:py-3 rounded-lg border-gray-200 border-2 font-bold text-3xl focus-visible:border-default" />
            </div>

            <div className="form-group flex flex-col ">
                <label htmlFor="phone" className="pl-1 mb-1 text-default font-bold flex justify-between" >Phone Number <span className="text-red-400">This Field Is Required</span></label>
                <input type="text" id="phone" name="phone" className="text-default px-1 py-1 md:px-4 md:py-3 rounded-lg border-red-400 border-2 font-bold text-3xl focus-visible:border-default" />
            </div>
            
        </div>
    )
}