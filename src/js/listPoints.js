


const ulPoints = document.getElementById("list-points");
const productFeatures = document.getElementById("product-features")
const productWhyBloating = document.getElementById("product_why");
const grid = document.getElementById("why-nothing-grid");
const template = document.getElementById("why-nothing-card");
const productIconsGrid = document.getElementById("product-judge-icons-grid");
const productIconTemplate = document.getElementById("product-judge-icon-card");


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

const listWhyBloatingCell = [
	{
		img: "./assets/Untitled_design_3.webp",
		text: "Your stomach is flat in the morning, but by evening you look six months pregnant.",
	},
	{
		img: "./assets/Untitled_design_3_1.webp",
		text: "Your ankles disappear into \"kankles\" by the end of the day.",
	},
	{
		img: "./assets/Untitled_design_4.webp",
		text: "That dimpled, cottage cheese texture on your thighs won't go away no matter what you try.",
	},
	{
		img: "./assets/Untitled_design_4_1.webp",
		text: "You feel foggy and exhausted even after a full night's sleep.",
	},
	{
		img: "./assets/Untitled_design_3_2.webp",
		text: "You wake up stiff and achy, like your body aged overnight.",
	},
]

const whyNothingData = [
	{
		image: "//trysculptique.com/cdn/shop/files/X1.jpg?v=1760943360",
		title: "You cut out gluten, dairy, sugar. You ate clean for months.",
		desc: "Your diet only addressed what goes IN. It didn't fix your body's broken ability to drain what's already there."
	},
	{
		image: "//trysculptique.com/cdn/shop/files/X2.jpg?v=1760943359",
		title: "You tried viral lymphatic drops from TikTok.",
		desc: "They’re just pricey water with trace herbs. The active ingredients are destroyed by stomach acid."
	},
	{
		image: "//trysculptique.com/cdn/shop/files/X3.jpg?v=1760943359",
		title: "You got lymphatic massage or bought compression socks.",
		desc: "Temporary manual movement. Within 24–48 hours, everything backed up again."
	}
];

const productIconsData = [
	{
		img: "//trysculptique.com/cdn/shop/files/ship-min.png?v=1758713222",
		title: "Free Shipping from USA",
		desc: "On all orders",
	},
	{
		img: "//trysculptique.com/cdn/shop/files/support-min.png?v=1758713216",
		title: "Naturally Supports Your Body",
		desc: "Promotes healthy immune cell functions",
	},
	{
		img: "//trysculptique.com/cdn/shop/files/natural-min.png?v=1758713216",
		title: "100% Natural Ingredients",
		desc: "8 active, natural ingredients",
	},
	{
		img: "//trysculptique.com/cdn/shop/files/60-min.png?v=1758713216",
		title: "Try it Risk Free for 60 Days",
		desc: "60-day money-back guarantee",
	},
];

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

productWhyBloating.innerHTML = "";
listWhyBloatingCell.map(item => {
	productWhyBloating.innerHTML +=
		`
			<div class="product_why-bloating-cell flex flex-col h-full rounded-md overflow-hidden">
        <div class="h-45 overflow-hidden">
            <img src=${item.img}
                 class="w-full h-full object-cover block">
        </div>
        <div class="product_why-bloat-cell-inn flex-1 bg-[#f7f7f7] p-4 flex items-center justify-center text-center">
            <p>${item.text}</p>
        </div>
    </div>
		`
});

whyNothingData.forEach(item => {
	const clone = template.content.cloneNode(true);

	clone.querySelector(".card-image").src = item.image;
	clone.querySelector(".card-title").textContent = item.title;
	clone.querySelector(".card-desc").textContent = item.desc;

	grid.appendChild(clone);
});


productIconsGrid.innerHTML = "";
productIconsData.forEach(item => {
	const clone = productIconTemplate.content.cloneNode(true);

	clone.querySelector(".icon-img").src = item.img;
	clone.querySelector(".icon-title").textContent = item.title;
	clone.querySelector(".icon-desc").textContent = item.desc;

	productIconsGrid.appendChild(clone);
});