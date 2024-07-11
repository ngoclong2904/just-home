import { Button, Modal } from "antd"
import React, { useEffect, useState } from "react"
import { BiHomeAlt } from "react-icons/bi"
import { FaCar, FaRegStar, FaStar } from "react-icons/fa"
import { useParams } from "react-router-dom"

// Mock data
const units = [{ propertyName: "A1.01", sizeArea: 79.78, cars: 2, stars: 1, status: "1" }]

const statusClasses = {
	1: "bg-yellow-100",
	2: "bg-red-600",
	3: "bg-orange-500",
}

const ChooseProduct = () => {
	let { projectID } = useParams()
	const [isModalVisible, setIsModalVisible] = useState(false)
	const [units, setUnits] = useState([])

	const orderNumber = 35

	useEffect(() => {
		const fetchAllPropertiesForProject = async () => {
			try {
				const res = await fetch(
					`https://realestateproject.azurewebsites.net/api/Property/GetPropertyByProjectID/${projectID}`,
				)
				const data = await res.json()
				console.log("🚀 -> data:", data)
				setUnits(data)
			} catch (error) {
				console.error("Error fetching data: ", error)
			}
		}

		fetchAllPropertiesForProject()
	}, [projectID])

	const handleOk = () => {
		setIsModalVisible(false)
	}

	function handleChooseProduct(propertyID) {
		console.log("🚀 -> propertyID:", propertyID)
	}

	return (
		<div className='pt-[64px] w-full min-h-screen'>
			<Modal
				open={isModalVisible}
				onOk={handleOk}
				footer={null}
				closable={false}
				centered
				modalClassName='custom-modal'
				bodyStyle={{
					backgroundColor: "#4a0905",
					color: "white",
					textAlign: "center",
					padding: "50px 0",
				}}
				style={{
					padding: 0,
				}}>
				<p className='text-xl'>Số thứ tự của bạn là {orderNumber}</p>
				<p className='text-xl'>Quý khách xin vui lòng chờ đến lượt để chọn sản phẩm</p>
				<Button className='mt-8 p-4' onClick={() => setIsModalVisible(false)}>
					Đóng
				</Button>
			</Modal>
			<div className='flex items-start flex-wrap justify-start gap-8 px-4 py-8 bg-yellow-200'>
				<Button className='w-1/5 text-red-500 py-6 text-lg font-bold'>Mã sản phẩm</Button>
				<Button className='w-1/5 text-red-500 py-6 text-lg font-bold'>Block</Button>
				<Button className='w-1/5 text-red-500 py-6 text-lg font-bold'>Đang mở bán</Button>
				<Button className='w-1/5 text-red-500 py-6 text-lg font-bold'>2 PN</Button>
				<Button className='w-1/5 text-red-500 py-6 text-lg font-bold'>Số Tầng</Button>
				<Button className='w-1/5 text-red-500 py-6 text-lg font-bold'>Vị trí</Button>
				<Button className='w-1/6 text-red-500 bg-green-300 rounded-full py-6 text-lg font-bold'>
					Tìm kiếm
				</Button>
			</div>

			<div className='mt-8 px-12 text-black'>
				<div className='mb-8'>
					<h2 className='text-start mb-8 text-lg'>Golden Point Đông Hòa</h2>
					<div className='flex justify-start gap-6'>
						<span className=''>Chú thích:</span>
						<div className='flex items-center gap-2'>
							<div className='w-12 h-6 bg-yellow-100'></div>
							<span className='ml-1'>Đang mở bán</span>
						</div>
						<div className='flex items-center gap-2'>
							<div className='w-12 h-6 bg-red-600'></div>
							<span className='ml-1'>Đã bán</span>
						</div>
						<div className='flex items-center gap-2'>
							<div className='w-12 h-6 bg-orange-500'></div>
							<span className='ml-1'>Đang chờ hoàn tất thủ tục</span>
						</div>
					</div>
				</div>
				<div className='border border-[#999] shadow-md'>
					<h3 className='text-start border-b border-[#999] text-black font-semibold text-xl py-4 ml-4'>
						Tầng 1
					</h3>
					<div className='grid grid-cols-4 gap-2 p-4'>
						{units.map((unit) => (
							<div
								key={unit.propertyID}
								className={`${
									statusClasses[unit.status]
								} text-black font-bold flex flex-col items-center border border-[#999] cursor-pointer`}
								onClick={() => handleChooseProduct(unit.propertyID)}>
								<span className='font-bold text-lg p-4'>{unit.propertyName}</span>
								<div className='flex items-center justify-between w-full mt-2 text-sm bg-[#bdbdbd] p-2'>
									<span className='flex items-center gap-2 text-[#71726e] text-sm'>
										<BiHomeAlt />
										{unit.sizeArea}
									</span>
									<span className='flex items-center gap-2 text-[#71726e] text-sm'>
										<FaCar />
										{unit.cars}
									</span>
									<span className='flex items-center gap-2 text-[#b8932e] text-sm'>
										<FaStar />
										{unit.stars}
									</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default ChooseProduct
