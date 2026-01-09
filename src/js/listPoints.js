


const ulPoints = document.getElementById("list-points");
const productFeatures = document.getElementById("product-features")


const list = [
	"Made & produced in USA",
	"100% Natural Ingredients",
	"60-Day Money-Back Guarantee",
	"Free Shipping"
]

const listFeatures = [
	{
		image: "./assets/population_12285628_1_e864791e-7a6d-4f08-9aea-3aeffba37cc7.png",
		text: "Join over 93 Thousand who say - it WORKS!"
	},
	{
		image: "./assets/blood_13858030_1.webp",
		text: "Restores your body’s natural 24-hour lymphatic cycle"
	},
	{
		image: "./assets/thigh_1431039_1_a75a1917-7cc8-40dc-923b-d09cece1d6e9.webp",
		text: "Helps reduce fluid retention and the appearance of puffiness and bloating"
	},
	{
		image: "./assets/smile_3318262_1_1da99ae9-5c63-4339-af75-d35f89cd1cbc.webp",
		text: "Helps fall asleep faster, stay asleep longer and wake up energized"
	},
	{
		image: "./assets/blood_13858030_2_78da9178-9f3f-491e-a5f8-b4d69dd5b9cd.png",
		text: "Eliminates joint stiffness, pain, morning creakiness and feel more grounded"
	},
	{
		image: "./assets/ecology_18588873_1_dad420da-2490-4e30-828a-28b366974307.webp",
		text: "Boosts energy, mental clarity and emotional balance"
	}
]


ulPoints.innerHTML = "";
list.map(item => {
	ulPoints.innerHTML +=
		`<li class="flex gap-3 items-center justify-start">
		<img src="./assets/Mark_Icon_ce1ad4c9-5ec0-4162-969e-b565980ab82b.png" class="size-4" />
		<span class="text-[12px] leading-[1.3em]">${item}</span>
	</li>`;
});

productFeatures.innerHTML = "";
listFeatures.map(item => {
	productFeatures.innerHTML +=
		`
			<li class="flex items-center my-4 mx-0 gap-4">
				<div class="w-1/10 flex items-center">
					<img src="${item.image}" class="w-full" />
				</div>
				<div class="">
					<span class="text-[16px]/[1.3em] nunito font-nunito">${item.text}</span>
				</div>
			</li>
		`;
});
