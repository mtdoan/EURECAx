import { useState } from "react";
import Button from "./Button";
import StatusBar from "./StatusBar";

const ChallengeStatement = () => {
	const [step, setStep] = useState(1);
	const maxSteps = 6;
	const isAtFirstStep = step == 1;

	const handleNextStep = () => {
		setStep((prev) => Math.min(prev + 1, maxSteps));
	};

	const handlePreviousStep = () => {
		setStep((prev) => Math.max(prev - 1, 0));
	};

	return (
		<div className="w-full h-full p-1">
			<div className="w-full h-full p-6 bg-white">
				<div className="flex flex-col gap-8">
					<h1 className="font-bold">Generate Challenge Statement</h1>
					<StatusBar step={step} maxSteps={6} />
					<div className="py-3 px-5 bg-gray-100 rounded-md">
						<h2 className="capitalize font-bold">Event</h2>
					</div>
					<div className="flex flex-row justify-between">
						<Button
							label="Previous"
							onClick={handlePreviousStep}
							className={`${isAtFirstStep ? "opacity-0" : "opacity-100"}`}
						/>
						<Button label="Next" className="bg-primary-700 !text-primary-50" onClick={handleNextStep} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChallengeStatement;
