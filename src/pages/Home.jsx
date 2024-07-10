import { ArrowRightOutlined, CaretDownOutlined } from "@ant-design/icons"
import { Button, Dropdown, Menu } from "antd"
import React, { useEffect, useState } from "react"
import backgroundimg from "../assets/poster/home.png"
import Card from "../components/Card/Card"
import Typical from "../components/Typical/Typical"
import logo from "../assets/logoBlack.png"
import { Cards, TypicalData, properties } from "../utils/data"
import footerOPoster from "../assets/poster/homeFooter.png"
import { FaFacebook } from "react-icons/fa"
import { BsInstagram, BsTwitter } from "react-icons/bs"
import { SiLinkedin, SiLinkerd } from "react-icons/si"

const Home = () => {
	const [selected, setSelected] = useState("All Properties")

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch("https://realestateproject.azurewebsites.net/api/Properties")
				const data = await res.json()
				console.log(data)
			} catch (error) {
				console.error("Error fetching data: ", error)
			}
		}

		fetchData()
	}, [])

	const menuItems = ["All Properties", "Villa", "Apartments", "Office"]
	const statusMenu = (
		<Menu>
			<Menu.Item key='1'>Sắp mở bán</Menu.Item>
			<Menu.Item key='2'>Đang mở bán</Menu.Item>
			<Menu.Item key='3'>Đã bàn giao</Menu.Item>
		</Menu>
	)

	const typeMenu = (
		<Menu>
			<Menu.Item key='1'>Loại 1</Menu.Item>
			<Menu.Item key='2'>Loại 2</Menu.Item>
			<Menu.Item key='3'>Loại 3</Menu.Item>
		</Menu>
	)

	return (
		<>
			<div
				className='h-[600px] relative'
				style={{
					backgroundImage: `url(${backgroundimg})`,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
				}}>
				<div className='absolute inset-0 flex flex-col justify-center items-center text-white'>
					<div className='text-center mb-4'>
						<p className='text-sm text-slate-200'>5 Beds 2 Baths 180 sqft</p>
						<div className='mt-6'>
							<h2 className='text-4xl font-bold mb-2'>Office Space at</h2>
							<h2 className='text-4xl font-bold text-center'>Northwest</h2>
						</div>
						<p className='text-base font-semibold my-6 flex items-center justify-center'>
							$250/
							<p className='text-sm font-extralight'>month</p>
						</p>
						<button className='mt-4 bg-yellow-500 border-none text-sm font-bold hover:bg-yellow-400 px-4 py-2 rounded-md text-black transition-all'>
							Xem chi tiết
							<ArrowRightOutlined className='ml-2' />
						</button>
					</div>
				</div>
				<div className='absolute right-0 left-0 -bottom-10 flex flex-col justify-center items-center text-white'>
					<div className='flex bg-black bg-opacity-85 px-4 py-2 rounded-xl'>
						<div>
							<p className='text-[10px] font-light  text-slate-300'>Từ khóa</p>
							<input
								placeholder='Nhập từ khóa'
								className='mr-2 text-xs placeholder:text-xs bg-transparent border-none text-white placeholder:text-white outline-none'
							/>
						</div>
						<div>
							<p className='text-[10px] font-light  text-slate-300 ml-4'>Trạng thái</p>
							<Dropdown
								placement='bottomCenter'
								overlay={statusMenu}
								className='mr-2 bg-transparent border-none text-white'>
								<Button className='text-xs'>
									Tất cả trạng thái <CaretDownOutlined />
								</Button>
							</Dropdown>
						</div>

						<div>
							<p className='text-[10px] font-light  text-slate-300 ml-4'>Loại</p>
							<Dropdown
								placement='bottomCenter'
								overlay={typeMenu}
								className='mr-2 bg-transparent border-none text-white'>
								<Button className='text-xs'>
									Tất cả loại <CaretDownOutlined />
								</Button>
							</Dropdown>
						</div>

						<div className='flex items-center justify-center'>
							<button className='bg-yellow-500 border-none text-sm font-normal hover:bg-yellow-400 px-2 py-1 rounded-md text-black transition-all'>
								Search
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className='px-12 flex flex-col items-center justify-center gap-32 mt-28 text-black'>
				<div>
					<h2 className='w-full text-center font-bold mb-8 text-2xl'>Dự Án Nỗi Bật</h2>
					<div className='grid grid-cols-5 gap-2'>
						{Cards.map((card, index) => (
							<Card image={card.image} subtitle={card.subtitle} title={card.title} key={index} />
						))}
					</div>
				</div>
				<div>
					<div className='flex flex-col items-center mb-8 gap-4'>
						<h2 className='w-full text-center font-bold text-2xl'>Các căn hộ tiêu biểu</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						<div className='flex space-x-4 mt-2 '>
							{menuItems.map((item) => (
								<Button
									key={item}
									shape='round'
									onClick={() => setSelected(item)}
									className={
										selected === item
											? "border border-[#333] text-black rounded-sm bg-transparent"
											: "border-none"
									}>
									{item}
								</Button>
							))}
						</div>
					</div>
					<div className='grid grid-cols-3 gap-2'>
						{properties.map((data, index) => (
							<Typical
								image={data.image}
								address={data.address}
								title={data.view}
								beds={data.bedRoom}
								baths={data.bathRoom}
								size={data.sizeArea}
								price={data.totalPrice}
								status={data.status}
								key={index}
							/>
						))}
					</div>
					<button className='bg-btnPrimary my-0 mx-auto flex justify-center items-center mt-6 p-2 rounded-full text-xs gap-2'>
						See All Listing
						<ArrowRightOutlined />
					</button>
				</div>
			</div>
			<div
				className='relative w-full h-[500px] overflow-hidden shadow-lg mt-20'
				style={{
					backgroundImage: `url(${footerOPoster})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}>
				<div className='absolute inset-0 flex flex-col justify-center items-center p-4'>
					<p className='text-center text-3xl font-medium'>
						Discover a place you'll <br />
						love to live
					</p>
					<p className='text-center text-xs mt-2'>
						Pellentesque egestas elementum <br /> egestas faucibus sem. Velit nunc egestas ut morbi. Leo
						diam diam
					</p>
					<button className='bg-btnPrimary text-black my-0 mx-auto flex justify-center items-center mt-10 p-2 rounded-full text-xs gap-2'>
						View Properties
						<ArrowRightOutlined />
					</button>
				</div>
			</div>
			<div className='flex items-center justify-between bg-white text-black py-6 mx-40'>
				<p className='text-xs'>Copyright © 2024. JustHome</p>
				<img src={logo} className='w-40' />
				<div className='flex items-center gap-6'>
					<FaFacebook />
					<BsInstagram />
					<BsTwitter />
					<SiLinkedin />
				</div>
			</div>
		</>
	)
}

export default Home
