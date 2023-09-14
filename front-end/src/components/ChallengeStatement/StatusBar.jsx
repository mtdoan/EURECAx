const StatusBar = ({ step, maxSteps = 6 }) => {
	return (
		<div className="w-full relative">
			<div className="flex flex-row justify-between">
				{[...Array(maxSteps)].map((_, idx) => {
					return (
						<div
							className={`z-10 w-6 h-6 text-center font-bold rounded-full text-white ${idx + 1 <= step ? "bg-green-400" : "bg-gray-300 "}`}>
							{idx + 1}
						</div>
					)
				})}
			</div>
			<div className="z-0 h-1 bg-gray-300 absolute top-2.5 left-1 right-1">
				<div className="bg-green-400 h-full" style={{ width: `${(step - 1) / (maxSteps - 1) * 100}%` }}></div>
			</div>
		</div>
	)
}

export default StatusBar
