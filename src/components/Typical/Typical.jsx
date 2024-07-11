import React from "react"
import { EnvironmentOutlined } from "@ant-design/icons"
import { IoBedOutline, IoPricetagsOutline } from "react-icons/io5"
import { PiBathtub } from "react-icons/pi"
import { BiArrowBack } from "react-icons/bi"
import { Link } from "react-router-dom"
import { formatCurrency } from "../../utils/util"

const Typical = ({ projectID, status, image, title, typeName, beds, baths, size, price }) => {
	return (
		<Link
			to={`/detail/${projectID}`}
			className='relative w-[415px] h-96 rounded-lg overflow-hidden shadow-lg'
			style={{
				backgroundImage: `url(${image})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}>
			<div className='absolute inset-0  bg-black bg-opacity-20 flex flex-col justify-between p-4 hover:bg-transparent transition-all duration-200 cursor-pointer'>
				<div className='flex items-center gap-1'>
					{status === "1" ? (
						<h2 className='text-white bg-btnGreen rounded-full w-20 text-xs text-center px-2 py-1 font-bold'>
							For Sale
						</h2>
					) : null}
					{status === "2" ? (
						<h2 className='text-black bg-btnPrimary rounded-full w-20 text-xs text-center px-2 py-1 font-bold'>
							Fetured
						</h2>
					) : null}
					{status === "3" ? (
						<h2 className='text-white bg-btnGreen rounded-full w-20 text-xs text-center px-2 py-1 font-bold'>
							For Rent
						</h2>
					) : null}
				</div>
				<div className='text-white'>
					<h2 className='text-lg font-semibold'>{title}</h2>
					<div className='ml-2'>
						<div className='flex gap-1 items-center mb-2'>
							<EnvironmentOutlined />
							<h2>{typeName}</h2>
						</div>
						<div className='flex justify-between items-center'>
							<div className='flex items-center'>
								<div className='flex gap-1 items-center pr-3 border-r'>
									<IoBedOutline />
									{beds}
								</div>
								<div className='flex gap-1 items-center px-3 border-r'>
									<PiBathtub />
									{baths}
								</div>
								<div className='flex gap-1 items-center pl-3'>
									<IoPricetagsOutline />
									{size}
								</div>
							</div>
							<p className='flex items-center '>
								{formatCurrency(price)}/ <p className='text-xs'>month</p>
							</p>
						</div>
					</div>
				</div>
			</div>
		</Link>
	)
}

export default Typical
