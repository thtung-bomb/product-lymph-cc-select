
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


const faqRoot = document.getElementById("faq-root");


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
