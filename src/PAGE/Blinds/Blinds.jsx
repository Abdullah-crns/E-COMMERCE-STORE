import React from 'react'
import './Blinds.css'
import Navbar from '../../Components/Navbar/Navbar'
import dimout1 from '../../assets/h12.jpg'
import dimout2 from '../../assets/h13.jpg'
import blackout1 from '../../assets/h14.jpg'
import blackout2 from '../../assets/h15.jpg'
import blackout3 from '../../assets/blackout-3.jpg'
import blackout4 from '../../assets/blackout-4.jpg'
import blackout5 from '../../assets/blackout-5.jpg'
import blackout6 from '../../assets/blackout-6.jpg'
import blackout7 from '../../assets/blackout-7.jpg'
import blackout8 from '../../assets/blackout-8.jpg'
import blackout9 from '../../assets/blackout-8.jpg'
import Footer from '../../Components/Footer/Footer'
const Blinds = () => {
    return (
        <div className='Blind w-100'>
            <div className='p-0 m-0'>
                <Navbar />
                <div className='Blinds-main-image p-0 m-0'>
                </div>
                <div className='custom-made-curtains-text'>
                    <h1 className='text fw-medium'>
                        BLINDS
                    </h1>
                </div>
                <div className="dim-out-curtains-text d-flex justify-content-between align-items-center">
                    <div className="dim-out-curtains-line"></div>
                    <div className="dim-out-curtains-heading">
                        <h1 className='text fw-light'>ZEBRA BLINDS</h1>
                    </div>
                    <div className="dim-out-curtains-line"></div>
                </div>
                <div className=" dim-out-curtain-cards row d-flex justify-content-around align-content-center align-items-center">
                    <div className="col-md-3 card p-4 align-content-center align-items-center">
                        <img src={dimout1} alt="" className='dimout-image-1' />
                        <h4 className='text-center text-secondary'>M Betty French Pleat Custom Made Curtains</h4>
                        <h6 className='text text-center'>item id : 000</h6>
                    </div>
                    <div className="col-md-3 card p-4 align-content-center align-items-center">
                        <img src={dimout2} alt="" className='dimout-image-2' />
                        <h4 className='text-center text-secondary'>M La Apoma French Pleat Custom Made Curtains</h4>
                        <h6 className='text text-center'>item id : 001</h6>
                    </div>
                    <div className="col-md-3 card p-4 align-content-center align-items-center">
                        <img src={dimout2} alt="" className='dimout-image-2' />
                        <h4 className='text-center text-secondary'>M La Apoma French Pleat Custom Made Curtains</h4>
                        <h6 className='text text-center'>item id : 001</h6>
                    </div>
                </div>
                <div className="black-out-curtains-text d-flex justify-content-between align-items-center">
                    <div className="black-out-curtains-line"></div>
                    <div className="black-out-curtains-heading">
                        <h1 className='text fw-light'>ROLLER BLINDS</h1>
                    </div>
                    <div className="black-out-curtains-line"></div>
                </div>
                <div className="row black-out-curtain-cards ">
                    <div className="row m-0 p-0 black-out-cards-row-1 d-flex justify-content-around align-content-center align-items-center">
                        <div className="col-md-3 card p-4 align-content-center align-items-center">
                            <img src={blackout2} alt="" className='dimout-image-1' />
                            <h4 className='text-center text-secondary'>M Betty French Pleat Custom Made Curtains</h4>
                            <h6 className='text text-center'>item id : 003</h6>
                        </div>
                        <div className="col-md-3 card p-4 align-content-center align-items-center">
                            <img src={blackout2} alt="" className='dimout-image-2' />
                            <h4 className='text-center text-secondary'>M La Apoma French Pleat Custom Made Curtains</h4>
                            <h6 className='text text-center'>item id : 004</h6>
                        </div>
                        <div className="col-md-3 card p-4 align-content-center align-items-center">
                            <img src={blackout3} alt="" className='dimout-image-2' />
                            <h4 className='text-center text-secondary'>M La Apoma French Pleat Custom Made Curtains</h4>
                            <h6 className='text text-center'>item id : 005</h6>
                        </div>
                    </div>
                </div>
                <div className=" black-out-curtain-cards row-2 ">
                    <div className="row m-0 p-0 black-out-cards-row-1 d-flex justify-content-around align-content-center align-items-center">
                        <div className="col-md-3 card p-4 align-content-center align-items-center">
                            <img src={blackout4} alt="" className='dimout-image-1' />
                            <h4 className='text-center text-secondary'>M Betty French Pleat Custom Made Curtains</h4>
                            <h6 className='text text-center'>item id : 003</h6>
                        </div>
                        <div className="col-md-3 card p-4 align-content-center align-items-center">
                            <img src={blackout5} alt="" className='dimout-image-2' />
                            <h4 className='text-center text-secondary'>M La Apoma French Pleat Custom Made Curtains</h4>
                            <h6 className='text text-center'>item id : 004</h6>
                        </div>
                        <div className="col-md-3 card p-4 align-content-center align-items-center">
                            <img src={blackout6} alt="" className='dimout-image-2' />
                            <h4 className='text-center text-secondary'>M La Apoma French Pleat Custom Made Curtains</h4>
                            <h6 className='text text-center'>item id : 005</h6>
                        </div>
                    </div>
                </div>
                <div className="black-out-curtain-cards row-3 ">
                    <div className="row m-0 p-0 black-out-cards-row-1 d-flex justify-content-around align-content-center align-items-center">
                        <div className="col-md-3 card p-4 align-content-center align-items-center">
                            <img src={blackout7} alt="" className='dimout-image-1' />
                            <h4 className='text-center text-secondary'>M Betty French Pleat Custom Made Curtains</h4>
                            <h6 className='text text-center'>item id : 003</h6>
                        </div>
                        <div className="col-md-3 card p-4 align-content-center align-items-center">
                            <img src={blackout8} alt="" className='dimout-image-2' />
                            <h4 className='text-center text-secondary'>M La Apoma French Pleat Custom Made Curtains</h4>
                            <h6 className='text text-center'>item id : 004</h6>
                        </div>
                        <div className="col-md-3 card p-4 align-content-center align-items-center">
                            <img src={blackout9} alt="" className='dimout-image-2' />
                            <h4 className='text-center text-secondary'>M La Apoma French Pleat Custom Made Curtains</h4>
                            <h6 className='text text-center'>item id : 005</h6>
                        </div>
                    </div>
                </div>
                <div className="black-out-curtain-cards row-4 ">
                    <div className="row m-0 p-0 black-out-cards-row-1 d-flex justify-content-around align-content-center align-items-center">
                        <div className="col-md-3 card p-4 align-content-center align-items-center">
                            <img src={blackout7} alt="" className='dimout-image-1' />
                            <h4 className='text-center text-secondary'>M Betty French Pleat Custom Made Curtains</h4>
                            <h6 className='text text-center'>item id : 003</h6>
                        </div>
                        <div className="col-md-3 card p-4 align-content-center align-items-center">
                            <img src={blackout8} alt="" className='dimout-image-2' />
                            <h4 className='text-center text-secondary'>M La Apoma French Pleat Custom Made Curtains</h4>
                            <h6 className='text text-center'>item id : 004</h6>
                        </div>
                        <div className="col-md-3 card p-4 align-content-center align-items-center">
                            <img src={blackout9} alt="" className='dimout-image-2' />
                            <h4 className='text-center text-secondary'>M La Apoma French Pleat Custom Made Curtains</h4>
                            <h6 className='text text-center'>item id : 005</h6>
                        </div>
                    </div>
                </div>
                <div className="black-out-curtain-cards row-5 ">
                    <div className="row m-0 p-0 black-out-cards-row-1 d-flex justify-content-around align-content-center align-items-center">
                        <div className="col-md-3 card p-4 align-content-center align-items-center">
                            <img src={blackout7} alt="" className='dimout-image-1' />
                            <h4 className='text-center text-secondary'>M Betty French Pleat Custom Made Curtains</h4>
                            <h6 className='text text-center'>item id : 003</h6>
                        </div>
                        <div className="col-md-3 card p-4 align-content-center align-items-center">
                            <img src={blackout8} alt="" className='dimout-image-2' />
                            <h4 className='text-center text-secondary'>M La Apoma French Pleat Custom Made Curtains</h4>
                            <h6 className='text text-center'>item id : 004</h6>
                        </div>
                        <div className="col-md-3 card p-4 align-content-center align-items-center">
                            <img src={blackout9} alt="" className='dimout-image-2' />
                            <h4 className='text-center text-secondary'>M La Apoma French Pleat Custom Made Curtains</h4>
                            <h6 className='text text-center'>item id : 005</h6>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Blinds
