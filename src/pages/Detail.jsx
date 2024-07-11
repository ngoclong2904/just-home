import { FileImageOutlined } from "@ant-design/icons"
import { Badge, Button } from "antd"
import { BiBuildingHouse, BiHomeHeart } from "react-icons/bi"
import { Link, useNavigate, useParams } from "react-router-dom"
import Notification from "../components/Notifycation/Notifycation"
import { useEffect, useState } from "react"

import mainImage from "../assets/detail/main.jpg"
import smallImage1 from "../assets/detail/child1.jpg"
import smallImage2 from "../assets/detail/child2.jpg"
import smallImage3 from "../assets/detail/chid3.jpg"
import { formatCurrency } from "../utils/util"

const defaultDetailData = {
	title: "Peninsula Đà Nẵng",
	address: "Phường Nại Hiên Đông, Quận Sơn Trà, Đà Nẵng.",
	mainImage: mainImage,
	smallImages: [smallImage1, smallImage2, smallImage3],
	area: "7.172",
	depositPrice: 1000000,
	menuItems: [
		{ title: "Bán & Cho thuê", subtitle: "Bán & Cho thuê" },
		{ title: "Tổng quan", subtitle: "Tổng quan" },
		{ title: "Vị trí", subtitle: "Vị trí" },
		{ title: "Ước tính khoản vay", subtitle: "Ước tính khoản vay" },
		{ title: "Câu hỏi thường gặp", subtitle: "Câu hỏi thường gặp" },
		{ title: "Dự án liên quan", subtitle: "Dự án liên quan" },
	],
}

const Detail = () => {
	let { projectID } = useParams()
	console.log("🚀 -> projectID:", projectID)

	const [isModalVisible, setIsModalVisible] = useState(false)
	const [detailData, setDetailData] = useState(defaultDetailData)

	useEffect(() => {
		const fetchDetailProject = async () => {
			try {
				const res = await fetch(
					`https://realestateproject.azurewebsites.net/api/Projects/GetProjectByID/${projectID}`,
				)
				const data = await res.json()
				console.log("🚀 -> data:", data)

				setDetailData((prev) => ({
					...prev,
					title: data.projectName,
					address: data.address,
					area: data.campusArea,
				}))
			} catch (error) {
				console.error("Error fetching data: ", error)
			}
		}

		fetchDetailProject()
	}, [projectID])

	const navigator = useNavigate()
	const { title, address, mainImage, smallImages, statusBadges, menuItems } = detailData
	const isLogger = true

	const handleOk = () => {
		setIsModalVisible(false)
		navigator("/order")
	}

	const handleCancel = () => {
		setIsModalVisible(false)
	}
	return (
		<div className='bg-primary p-6 text-white pt-32 min-h-screen'>
			<div className='text-3xl font-bold'>{title}</div>
			<div className='text-xs mb-4 mt-2'>
				{address}
				<Link to='#' className='text-white underline'>
					Xem bản đồ
				</Link>
			</div>

			<div className='flex gap-1 relative'>
				<img src={mainImage} alt='Main' className='col-span-1 flex-1 h-80 object-cover' />
				<div className='flex items-center mb-4 absolute bottom-0 left-6'>
					<div className='text-center pr-4 border-r flex gap-1'>
						<BiHomeHeart className='mb-1 text-4xl' />
						<div>
							<p className='text-sm font-bold'>{formatCurrency(detailData.depositPrice)}</p>
							<p className='font-light text-xs'>tiền đặt cọc</p>
						</div>
					</div>
					<div className='text-center pl-4 flex gap-1'>
						<BiBuildingHouse className='mb-1 text-4xl' />
						<div>
							<p className='text-sm font-bold'>{detailData.area}</p>
						</div>
					</div>
				</div>
				<div className='flex items-center mb-4 absolute bottom-0 right-2 p-2 rounded-lg bg-[rgba(0,0,0,.5)]'>
					<FileImageOutlined />
					<p>+5</p>
				</div>
				<img src={smallImages[0]} alt='Small 1' className='w-1/4 h-80 object-cover' />
				<div className='flex flex-col'>
					<img src={smallImages[1]} alt='Small 2' className='w-full h-40 object-cover' />
					<img src={smallImages[2]} alt='Small 3' className='w-full h-40 object-cover pt-1' />
				</div>
			</div>
			<div className='flex justify-between bg-white px-20 py-6'>
				{menuItems.map((item, index) => (
					<div key={index} className='text-gray-400'>
						<p className='text-xl'>{item.title}</p>
						<p className='text-xs'>{item.subtitle}</p>
					</div>
				))}
			</div>
			<div
				className='flex justify-between items-center h-16 mx-20'
				style={{
					justifyContent: isLogger ? "space-between" : "flex-end",
				}}>
				{isLogger === true ? (
					<Button className='bg-btnPrimary py-6 px-6 text-black' onClick={() => navigator("/policy")}>
						Chính sách
					</Button>
				) : null}
				<Button className='bg-blue-400 py-6 px-6 text-black' onClick={() => setIsModalVisible(true)}>
					Đặt chỗ
				</Button>
			</div>
			<Notification
				showModal={isModalVisible}
				Cancel={handleCancel}
				finish={handleOk}
				header={"Dự án đã mở bán"}
				subHeader={"Quý khách xin vui lòng check in."}
				title={"Check in"}
			/>
		</div>
	)
}

export default Detail
