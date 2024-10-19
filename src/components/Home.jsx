import {  useState } from "react";
import gold from '../../public/gold.png'
import gold1 from '../../public/gold1.png'
import gold2 from '../../public/gold2.png'
import gold3 from '../../public/gold3.png'
import gold4 from '../../public/gold4.png'
import logo from '../../public/logo.png'
import logo1 from '../../public/logo1.png'
import logo2 from '../../public/logo2.png'
import logo3 from '../../public/logo3.png'
import logo4 from '../../public/logo4.png'
import ring from '../../public/ring.png'
import ring1 from '../../public/ring1.png'
import play from '../../public/play.png'
import blog from '../../public/blog.png'
import blog1 from '../../public/blog1.png'
import blog2 from '../../public/blog2.png'
import man from '../../public/man.png'

import { FaStar,  FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { AiFillFacebook, AiFillLinkedin, AiFillTwitterSquare, AiOutlineLinkedin, AiOutlineShoppingCart, AiOutlineTwitter } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";

const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const testimonialsData = [
    {
      name: "Maria Sarapovoo",
      role: "Senior Designer",
      text: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      stars: 5
    },
    {
      name: "shahed",
      role: "Senior Designer",
      text: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      stars: 4
    },
    // Add more testimonial data here as needed
  ];

  const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(0);

  const handleNextFeedback = () => {
    setCurrentFeedbackIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const handlePreviousFeedback = () => {
    setCurrentFeedbackIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const currentFeedback = testimonialsData[currentFeedbackIndex];
    return (
        <div >
          <div className="  bg-[#FFDBB7]"> 
          <nav className=" mx-auto container p-4">
      <div className=" mx-auto flex items-center justify-between">
        <div className="">
          <a href="#" className="text-2xl font-bold">J-Shop</a>
        </div>

        <div className="hidden lg:flex space-x-4">
          <a href="#" className="">Categories</a>
          <a href="#" className="">About</a>
          <a href="#" className="">Shop</a>
          <a href="#" className="">Contact</a>
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <a href="#" className="">
          <IoIosSearch />
          </a>
          <a href="#" className="">
          <AiOutlineShoppingCart />
          </a>
        </div>

        <div className="lg:hidden ">
          <input type="checkbox" id="menu-btn" className="hidden" checked={isMenuOpen} onChange={toggleMenu} />
          <label htmlFor="menu-btn" className=" cursor-pointer">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </label>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden w-[70%] absolute top-16  text-center  bg-[#d8a572] right-[10%]  py-4 px-2">
          <a href="#" className="block py-2  ">Categories</a>
          <a href="#" className="block py-2  ">About</a>
          <a href="#" className="block py-2  ">Shop</a>
          <a href="#" className="block py-2    ">Contact</a>
        </div>
      )}
    </nav>
    <div className="md:flex justify-between container mx-auto px-4 items-center gap-14 py-[60px] mb-[100px]">
        <div className="md:w-1/2">
<img src={ring} className="mix-blend-multiply" alt="" />
<h1 className="font-medium font-5xl lg:text-[80px]">Jewelery tells a great story</h1>
<div className="flex gap-12 mt-7 lg:mt-12">
    <div>
        <h1 className="font-medium text-[20px]">Gold</h1>
        <p className="text-[12px] mt-1">Her provision acuteness had
two why intention. </p>
    </div>
    <div>
        <h1 className="font-medium text-[20px]">SILVER</h1>
        <p className="text-[12px] mt-1">Her provision acuteness had
two why intention.  </p>
    </div>
</div>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0">
          <h1 className="text-[34px] mb-[10px] font-medium">Our Story</h1>  
          <p>modern jewelry is made of gold, silver, or platinum, often with precious or semiprecious stones, it evolved from shells, animal teeth, and other items used as body decoration in prehistoric times.</p>
          <div>
            <img src={ring1} className="mix-blend-multiply relative" alt="" />
            <div>
                <img className="absolute top-[50%] lg:right-[20%] right-12" src={play} alt="" />
                <div className="flex-col flex gap-4 absolute left-[90%] top-[50%]">
                    <AiFillFacebook></AiFillFacebook>
                    <AiOutlineTwitter></AiOutlineTwitter>
                    <AiOutlineLinkedin></AiOutlineLinkedin>
                </div>
            </div>
        </div>
        </div>
        
    </div>
          </div>
{/* Gold Woven Chain Bracelet  */}
<section className="mx-auto container px-4 bg-[ #F8F3E9
] pb-[60px]">
    <div className="md:flex justify-between items-center gap-[89px]">
        <div className="md:w-1/2 bg-[#F7F2E8]">
            <img className="bg-[#F7F2E8] mix-blend-multiply   hover:scale-105 md:hover:scale-110 duration-300" src={gold} alt="" />
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0 ">
            <h1 className="md:text-[48px] text-4xl font-bold  mb-[30px]">Gold Woven Chain Bracelet in Black</h1>
            <p className="text-[14px] mb-[50px]">This bracelet features a 5MM Stainless Steel chain with Nylon cord braiding. Each bracelet includes a polishing pad and a cotton jewelry pouch. Proudly made by hand in Atlanta, GA. </p>
            <p className="text-[26px] font-medium tracking-wide">Size</p>
            <p className="flex gap-6">S <span>M</span> <span>L</span></p>
            <div className="mt-[70px] flex lg:gap-[50px] gap-5">
                <button className="bg-[#3D3D3F] hover:bg-[#1d1d21]  text-[20px] text-white font-medium lg:px-8 lg:py-4 px-3
">Add to cart</button>
                <h1 className="font-black text-[36px]">549.29</h1>
            </div>
        </div>
    </div>
</section>
{/* Gold Black Coral Ring */}
<section className="mx-auto container px-4 bg-[ #F8F3E9
] pb-[60px]">
    <div className="md:flex  justify-between items-center gap-[89px]">
        
        <div className="md:w-1/2 mt-12 md:mt-0 ">
            <h1 className="md:text-[48px] text-4xl font-bold mb-[30px]">Gold Black Coral Ring</h1>
            <p className="text-[14px] mb-[50px]">A 14K yellow gold ring Two Hawaiian Black Coral inlaid strips, 14.5x2mm Ring sizes 4-8 Contact us for additional ring sizes To our valued International Customers, an extra CITES charge will be added to your order. </p>
            <p className="text-[26px] font-medium tracking-wide">Size</p>
            <p className="flex gap-6">S <span>M</span> <span>L</span></p>
            <div className="mt-[70px] flex gap-[50px]">
                <button className="bg-[#3D3D3F] hover:bg-[#1d1d21] text-white text-[20px] font-medium lg:px-8 lg:py-4 px-3
">Add to cart</button>
                <h1 className="font-black text-[36px]">320.99</h1>
            </div>
        </div>
        <div className="md:w-1/2">
            <img src={gold1} className="mix-blend-multiply hover:scale-105 md:hover:scale-110 duration-300" alt="" />
        </div>
    </div>
</section>
{/* J-Shop’s best Collections  */}
<section className="mx-auto container px-4 bg-[ #F8F3E9
] pb-[60px]">
    <div className="md:flex justify-between items-center gap-[89px]">
        <div className="md:w-1/2">
            <img src={gold2} className="hover:scale-105 md:hover:scale-110 duration-300" alt="" />
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0 ">
            <h1 className="md:text-[48px] text-4xl font-bold mb-[64px]"> J-Shop’s best Collections</h1>
            <p className="text-[26px] font-medium tracking-wide">Comfort</p>
            <p className="text-[14px] mt-[30px]"> We will reach out to you for the current cost of this permit. Please contact us for more information. Maui Divers Jewelry offers extended sizing which may be subject to an additional cost. Any subsequent resizes after purchase will incur an additional charge. Please note some styles cannot be resized due to their design. </p>
           
        
           
        </div>
    </div>
</section>
{/* 100% Gold */}
<section className="mx-auto container px-4 bg-[ #F8F3E9
] pb-[60px]">
    <div className="md:flex justify-between items-center gap-[89px]">
        
        <div className="md:w-1/2 mt-12 md:mt-0 ">
        
            <p className="text-[26px] font-medium tracking-wide">100% Gold</p>
            <p className="text-[14px] mt-[30px]"> We will reach out to you for the current cost of this permit. Please contact us for more information. Maui Divers Jewelry offers extended sizing which may be subject to an additional cost. Any subsequent resizes after purchase will incur an additional charge. Please note some styles cannot be resized due to their design. </p>
           
        
           
        </div>
        <div className="md:w-1/2 bg-[#F7F2E8]">
            <img src={gold3} className="hover:scale-105 md:hover:scale-110 duration-300" alt="" />
        </div>
    </div>
</section>
<section className="mx-auto container px-4 bg-[ #F8F3E9
] pb-[60px]">
    <div className="md:flex justify-between items-center gap-[89px]">
    <div className="md:w-1/2 bg-[#F7F2E8]">
            <img src={gold4} className="hover:scale-105 md:hover:scale-110 duration-300" alt="" />
        </div>
        <div className="md:w-1/2  mt-12 md:mt-0 ">
        
            <p className="text-[26px] font-medium tracking-wide">Trendy</p>
            <p className="text-[14px] mt-[30px]">A collection of hammered gold discs swing from the top and bottom of a shimmery gold hoop, creating a noisy fringe. Earring attaches to a standard fishhook fitting. Sold as one pair of earrings.Other hoop designs do not complete the circle, but penetrate through the ear in a post, using the same attachment techniques that apply to stud earrings.</p>
           <button className="px-3 py-2 text-white font-medium bg-[#3D3D3F] mt-4 hover:bg-[#222225]">GO TO SHOP</button>
        
           
        </div>
      
    </div>
</section>
{/* Trusted by leading companies */}
<section className="mx-auto container px-4 my-20">
    <h1 className="font-medium text-center md:text-[40px] text-3xl my-12">Trusted by leading companies</h1>
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        <img src={logo} className="w-28" alt="brand" />
        <img className="w-28"  src={logo1} alt="brand" />
        <img className="w-28"  src={logo2} alt="brand" />
        <img className="w-28"  src={logo3} alt="brand" />
        <img className="w-28"  src={logo4} alt="brand" />
    </div>
</section>
<section>
<div className="flex flex-col px-4 items-center justify-center bg-[#FFD7B5] py-12">
      <div className="text-4xl font-bold">Testimonials</div>
      <div className="mt-8 flex items-center justify-center space-x-4">
        <FaArrowAltCircleLeft className="h-6 w-6 text-black cursor-pointer" onClick={handlePreviousFeedback} />
        <FaArrowAltCircleRight className="h-6 w-6 text-black cursor-pointer" onClick={handleNextFeedback} />
      </div>
      <div className="mt-8 flex items-center space-x-4 md:space-x-8">
        <img
          alt=""
          className="h-52 w-36 rounded-lg bg-gray-200"
          height="200"
          src={man}
          style={{
            aspectRatio: "150/200",
            objectFit: "cover",
          }}
          width="150"
        />
        <div className="max-w-xl rounded-lg bg-white p-6 shadow-lg">
          <div className="text-lg font-semibold">{currentFeedback.name}</div>
          <div className="text-sm text-gray-500">{currentFeedback.role}</div>
          <p className="mt-4 text-sm text-gray-600">{currentFeedback.text}</p>
          <div className="mt-4 flex">
            {[...Array(currentFeedback.stars)].map((_, index) => (
              <FaStar key={index} className="h-5 w-5 text-yellow-400" />
            ))}
          </div>
        </div>
      </div>
      
    </div>

</section>
{/* Join J-shop's */}
<section className="my-24 px-4">
    <h1 className="text-center md:text-[40px] text-3xl my-10">Join J-Shop’s Family</h1>
    <div className="flex mx-auto justify-center">
    <input type="email" className="h-12 pl-4 w-[50%] lg:w-[30%]" name="" placeholder="Enter your email" id="" />
    <button className="bg-[#313131] px-6 py-3 hover:bg-[#232323] text-white font-medium">JOIN FAMILY</button>
    </div>
</section>
{/* Our Blogs */}
<section className="px-4 container mx-auto my-[100px]">
    <h1 className="text-center font-medium md:text-[40px] text-3xl mb-[60px]">Our Blogs</h1>
   <div className="flex justify-center">
   <div className="md:flex lg:gap-10 gap-5 items-center justify-between">
        <div className="w-[300px] h-[419px]">
            <img src={blog} alt="" />
            <h1 className="text-[28px] mt-3 mb-2">For Beauty</h1>
            <p>Offending belonging promotion provision an be oh consulted ourselves it.</p>
        </div>
        <div className="w-[300px] h-[419px]  mt-12 md:mt-0">
            <img src={blog1} alt="" />
            <h1 className="text-[28px] mt-3 mb-2">Product Quality</h1>
            <p>Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day necessary.</p>
        </div>
        <div className="w-[300px]  mt-12 md:mt-0 h-[419px]">
            <img src={blog2} alt="" />
            <h1 className="text-[28px] mt-3 mb-2">For Comfort</h1>
            <p>Warmly little before cousin sussex entire men set. Blessing it ladyship on sensible judgment.</p>
        </div>
    </div>
   </div>
</section>
{/* Footer */}

    <footer className="  pt-[120px]">
      <div className="container mx-auto flex px-4  flex-wrap justify-between">
        {/* Footer Sections */}
        <div className="w-full md:w-1/2  lg:w-1/4 mb-4 md:mb-0">
          <h2 className="text-xl font-bold mb-4 text-center md:text-left">Product</h2>
          <ul className="text-center md:text-left">
            <li><a href="#">Free Tools</a></li>
            <li><a href="#">Video</a></li>
            <li><a href="#">Free Trial</a></li>
          </ul>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
          <h2 className="text-xl font-bold mb-4 text-center md:text-left">Resources</h2>
          <ul className="text-center md:text-left">
            <li><a href="#">Member Stories</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
          <h2 className="text-xl font-bold mb-4 text-center md:text-left">Company</h2>
          <ul className="text-center md:text-left">
            <li><a href="#">Our Agents</a></li>
            <li><a href="#">Partnerships</a></li>
          </ul>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
          <h2 className="text-xl font-bold mb-4 text-center md:text-left">Get in Touch</h2>
         <p>You’ll find your next Marketing value you prefer.</p>
         <div className="flex gap-3">
         <AiFillFacebook size={25} /> <AiFillTwitterSquare size={25} />
         <AiFillLinkedin size={25} />
         </div>
        </div>

        {/* Copyright and Sitemap */}
        <div className="w-full text-white py-3 text-center bg-[#3D3D3F] mt-8">
          <p className="text-center  ">&copy; 2021 j-shop.com, All rights reserved.</p>
         
        </div>
      </div>
    </footer>
        </div>
    );
};

export default Home;