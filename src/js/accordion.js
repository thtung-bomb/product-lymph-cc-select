
const FAQS = [
	{
		question: "How is this different from lymphatic drops I saw on TikTok?",
		answer: `
        <p>Lymphatic drops have poor bioavailability—liquid ingredients pass through your digestive system too quickly to be properly absorbed. Most contain only milligrams of herbs (symbolic amounts, not therapeutic doses) and act as basic diuretics that pull water from your bloodstream, not from tissue swelling.</p>
        <p>Sculptique uses capsules with therapeutic doses (100-500mg per ingredient) that are properly absorbed and work at the cellular level to restore vessel function, break down protein clogs, and strengthen vessel walls—not just make you urinate more.</p>
      `,
		active: true,
	},
	{
		question: "Why didn't my diet changes work?",
		answer: `
        <p>Your diet only addressed what goes INTO your system (inflammation from food). It didn't fix your body's broken ability to drain what's already there. That's why you could eat perfectly clean and still wake up bloated—the backed-up lymphatic waste was still pooling in your tissues.</p>
      `,
		active: true,
	},
	{
		question: "How long until I see results?",
		answer: `
        <p>Most women notice something within the first week—feeling lighter, less bloated, morning puffiness fading faster. Visible changes happen by weeks 2-3. Transformation becomes undeniable by weeks 4-6. But true restoration takes time—we recommend 90 days for complete results.</p>
      `,
	},
	{
		question: "Is this safe? Any side effects?",
		answer: `
        <p>Sculptique contains 100% natural botanical ingredients used safely for centuries. The most common experience is increased urination in the first few days (expected—you're flushing excess fluid). Serious side effects are extremely rare. However, if you have pre-existing conditions or take prescription medications, consult your healthcare provider first.</p>
      `,
	},
	{
		question: "Can I take this with other supplements?",
		answer: `
        <p>Yes. Sculptique works synergistically with most supplements. However, if you're taking blood thinners, diuretics, thyroid medication, or immune-suppressing drugs, check with your healthcare provider first.</p>
      `,
	},
	{
		question: "How do I use it?",
		answer: `
        <p>Take 2 capsules daily with water. Any time of day (though mornings are ideal). With or without food. Just be consistent.</p>
      `,
	},
	{
		question: "What if it doesn't work for me?",
		answer: `
        <p>You have 60 full days to try it. If you don't feel lighter, less bloated, more energized—send it back. Even if you've taken every capsule. We'll refund your purchase immediately. You only keep Sculptique if it works for YOU.</p>
      `,
	},
	{
		question: "Where is this manufactured?",
		answer: `
        <p>Sculptique is manufactured in the USA at an FDA-registered, GMP-certified facility. We use Infrared Spectroscopy testing, heavy metal testing, and third-party quality control. Every batch is tested to ensure therapeutic doses with no contaminants.</p>
      `,
	},
	{
		question: "Why isn't this in stores?",
		answer: `
        <p>Two reasons: Quality control (we oversee the entire process from sourcing to testing) and price (retail markup would make it cost at least double). By selling direct, we maintain the highest quality while keeping the price affordable.</p>
      `,
		active: true,
	},
	{
		question: "Is this vegan/gluten-free?",
		answer: `
        <p>Yes. 100% vegan, gluten-free, sugar-free, no artificial ingredients</p>
      `,
	},
];

const lymphIngredients = [
	{
		title: "Reactivate Lymphatic Pumps",
		image: "//trysculptique.com/cdn/shop/files/Frame_1484580382.png?v=1760698909",
		name: "Cleavers Extract",
		dose: "100mg",
		content: `
      <p>Restores rhythmic vessel contractions that move lymph through your system.
      Contains iridoids that wake up muscle cells in vessel walls.</p>
      <p>[Study: Enhanced NK cell activity in immunosuppressed models]</p>
    `
	},
	{
		title: "Flush Excess Fluid",
		image: "//trysculptique.com/cdn/shop/files/Frame_1484580382_1.png?v=1760939908",
		name: "Dandelion Extract",
		dose: "250mg",
		content: `
      <p>Proven gentle diuretic that increases fluid excretion without harsh side effects.</p>
      <p>[Study: First human pilot study on diuretic effects]</p>
    `
	},
	{
		title: "Break Down Protein Clogs",
		image: "//trysculptique.com/cdn/shop/files/image_2.png?v=1760939909",
		name: "Bromelain Powder",
		dose: "100mg",
		content: `
      <p>Proteolytic enzyme that clears blockages preventing drainage.</p>
      <p>[Study: As effective as prescription NSAIDs]</p>
    `
	},
	{
		title: "Strengthen Vessel Walls",
		image: "//trysculptique.com/cdn/shop/files/image_3.png?v=1760939909",
		name: "Rutin",
		dose: "100mg",
		content: `
      <p>Reduces vessel permeability so fluid doesn't leak back into tissues.</p>
      <p>[Study: Systematic review of 1,643 participants]</p>
    `
	},
	{
		title: "Reduce Inflammation",
		image: "//trysculptique.com/cdn/shop/files/Frame_1484580382_2.png?v=1760939909",
		name: "Burdock Root Powder",
		dose: "200mg",
		content: `
      <p>Breaks the inflammation–congestion cycle.</p>
      <p>[Study: 42-day trial in osteoarthritis patients]</p>
    `
	},
	{
		title: "Boost Immune Clearance",
		image: "//trysculptique.com/cdn/shop/files/image_4.png?v=1760939909",
		name: "Echinacea Purpurea Extract",
		dose: "500mg",
		content: `
      <p>Enhances lymphocyte activity for better waste removal.</p>
      <p>[Study: Increased NK cell cytotoxic activity]</p>
    `
	},
	{
		title: "Support Metabolism",
		image: "//trysculptique.com/cdn/shop/files/Frame_1484580382_3.png?v=1760939909",
		name: "Kelp Extract",
		dose: "30mg",
		content: `
      <p>Provides iodine for thyroid function and metabolic rate.</p>
      <p>[Study: Dose-dependent increase in TSH]</p>
    `
	},
	{
		title: "Antioxidant Protection",
		image: "//trysculptique.com/cdn/shop/files/Frame_1484580382_4.png?v=1760939910",
		name: "Lemon Powder",
		dose: "50mg",
		content: `
      <p>Protects vessels from oxidative damage.</p>
      <p>[Study: Triple-masked trial in 90 participants]</p>
    `
	}
];





const faqRoot = document.getElementById("faq-root");
const container = document.getElementById("lymph-accordion");


faqRoot.innerHTML = FAQS.map((item, index) => `
    <div class="faq-item ${item.active ? "active" : ""}">
      <button class="faq-header">
        <span class="text-black">${item.question}</span>
        <svg class="faq-icon" viewBox="0 0 512 512">
          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
        </svg>
      </button>
      <div class="faq-content">
        ${item.answer}
      </div>
    </div>
  `).join("");


document.querySelectorAll(".faq-header").forEach((header) => {
	header.addEventListener("click", () => {
		const item = header.parentElement;

		// đóng các item khác (accordion chuẩn)
		document.querySelectorAll(".faq-item").forEach((el) => {
			if (el !== item) el.classList.remove("active");
		});

		item.classList.toggle("active");
	});
});


container.innerHTML = lymphIngredients.map((item, index) => `
	<div id="lymph-ingredient-${index}" class="product-lymph-ingredient bg-white ${index === 0 ? 'active' : ''}">
    
    <p class="product_lymph-ingr-subtitle nunito">
      <span>
        <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/check-mark_17013456_2.png" class="max-w-4">
      </span>
      <span class="text-[#0c7c00]">${item.title}</span>
    </p>

    <img class="max-w-30 max-h-20 my-3 mx-auto object-contain"
         src="${item.image}" loading="lazy">

    <button class="product_lymph-ingr-thumb" data-index="${index}">
      <div>
        <h5 class="text-[16px] font-bold trirong text-start">${item.name} (${item.dose})</h5>
      </div>
      <div class="max-w-4">
        <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/weui_arrow-outlined.png">
      </div>
    </button>

		<div class="product_lymph-ingr-content">
			${item.content}
		</div>

  </div>
`).join("");

document.addEventListener("click", (e) => {
	const trigger = e.target.closest(".product-lymph-ingredient");
	if (!trigger) return;

	const item = trigger; // the clicked ingredient element itself
	const content = item.querySelector(".product_lymph-ingr-content");
	if (!content) return;

	item.classList.toggle("active");
});