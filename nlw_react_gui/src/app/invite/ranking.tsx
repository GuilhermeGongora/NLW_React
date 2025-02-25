import Image from "next/image";
import medalCooper from "../../assets/medalCooper.svg";
import medalGold from "../../assets/medalGold.svg";
import medalSilver from "../../assets/medalSilver.svg";
export function Ranking() {
	return (
		<div className="w-full max-w-[440px] space-y-5">
			<h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
				Ranking de indicações.
			</h2>

			<div className="space-y-4">
				<div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
					<span className="text-sm text-gray-300 leading-none">
						<span className="font-semibold">1°</span> | Guilherme Gongora
					</span>
					<span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
						1030
					</span>
					<Image
						src={medalGold}
						alt="Gold medal"
						className="absolute top-0 right-8"
					/>
				</div>
				<div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
					<span className="text-sm text-gray-300 leading-none">
						<span className="font-semibold">2°</span> | Guilherme Gongora
					</span>
					<span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
						1030
					</span>
					<Image
						src={medalSilver}
						alt="Gold medal"
						className="absolute top-0 right-8"
					/>
				</div>
				<div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
					<span className="text-sm text-gray-300 leading-none">
						<span className="font-semibold">3°</span> | Guilherme Gongora
					</span>
					<span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
						1030
					</span>
					<Image
						src={medalCooper}
						alt="Gold medal"
						className="absolute top-0 right-8"
					/>
				</div>
			</div>
		</div>
	);
}
