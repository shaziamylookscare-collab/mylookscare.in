import { PlaceHolderImages } from "./placeholder-images";

export type Post = {
  slug: string;
  title: string;
  author: string;
  date: string;
  image: string;
  imageHint: string;
  excerpt: string;
  content: string;
};

const blogPosts: Omit<Post, 'image' | 'imageHint'>[] = [
  {
    slug: 'the-ultimate-guide-to-glowing-skin',
    title: 'The Ultimate Guide to a Glowing Skin Routine',
    author: 'Dr. Emily Carter',
    date: '2024-07-15',
    excerpt: 'Discover the secrets to radiant skin with our comprehensive guide. From daily cleansers to weekly treatments, we cover everything you need to know.',
    content: `<p>Achieving glowing skin is a goal for many, but it often feels like a moving target. The secret isn't a single magical product, but rather a consistent and well-rounded routine tailored to your skin type. Here's our ultimate guide to building a routine that brings out your natural radiance.</p>
    
    <h2>1. The Foundation: Cleansing</h2>
    <p>Start and end your day by washing your face. A gentle cleanser removes dirt, oil, and impurities without stripping your skin of its natural moisture. For oily or acne-prone skin, a cleanser with salicylic acid can be beneficial. For dry or sensitive skin, opt for a creamy, hydrating formula.</p>
    
    <h2>2. Tone It Up</h2>
    <p>Toner is a fast-penetrating liquid that delivers a quick hit of hydration and helps remove any last traces of debris. Look for toners with ingredients like hyaluronic acid, glycerin, and rosewater.</p>
    
    <h2>3. Serums: The Power-Players</h2>
    <p>Serums are concentrated treatments that target specific skin concerns. A Vitamin C serum in the morning can protect your skin from free radicals and brighten your complexion. In the evening, a retinol serum can help with fine lines, wrinkles, and texture.</p>
    
    <h2>4. Moisturize, Moisturize, Moisturize</h2>
    <p>Moisturizer is non-negotiable, regardless of your skin type. It helps to lock in all the goodness from the previous steps and keeps your skin's barrier healthy. Choose a lightweight, oil-free moisturizer for oily skin and a richer cream for dry skin.</p>
    
    <h2>5. Don't Forget Sunscreen</h2>
    <p>Sunscreen is the most critical step in any skincare routine. It protects your skin from harmful UV rays, which are the primary cause of premature aging and skin cancer. Use a broad-spectrum SPF of 30 or higher every single day, even when it's cloudy.</p>
    
    <p>By following these steps consistently, you'll be well on your way to achieving the healthy, glowing skin you've always wanted. Remember, patience is key—it can take several weeks to see results from a new routine.</p>`,
  },
  {
    slug: 'benefits-of-hydrafacial',
    title: '5 Surprising Benefits of a Regular Hydrafacial',
    author: 'Dr. Ben Richards',
    date: '2024-06-28',
    excerpt: 'Hydrafacial is more than just a facial. Learn about the surprising benefits of this popular treatment, from improving texture to boosting hydration.',
    content: `<p>The Hydrafacial has taken the skincare world by storm, and for good reason. This multi-step treatment cleanses, exfoliates, extracts, and hydrates the skin, leaving it looking and feeling refreshed. But its benefits go beyond just a temporary glow. Here are five surprising advantages of incorporating regular Hydrafacials into your skincare regimen.</p>

    <h2>1. Works for Virtually All Skin Types</h2>
    <p>Whether you have sensitive, oily, dry, or combination skin, the Hydrafacial is likely a great option for you. The treatment is highly customizable, allowing your esthetician to tailor the serums and suction power to your specific needs.</p>
    
    <h2>2. Consistent and Immediate Results</h2>
    <p>Unlike some treatments that require downtime or a long waiting period to see results, the Hydrafacial delivers an instant "wow" factor. Clients often leave the clinic with visibly smoother, more radiant skin. The results are also remarkably consistent, thanks to the patented technology that controls every aspect of the treatment.</p>
    
    <h2>3. Addresses Multiple Skin Concerns at Once</h2>
    <p>The Hydrafacial isn't a one-trick pony. It can effectively address a variety of concerns simultaneously, including:</p>
    <ul>
      <li>Fine lines and wrinkles</li>
      <li>Elasticity and firmness</li>
      <li>Uneven tone and vibrancy</li>
      <li>Skin texture</li>
      <li>Brown spots</li>
      <li>Oily and congested skin</li>
      <li>Enlarged pores</li>
    </ul>
    
    <h2>4. Painless Extractions</h2>
    <p>If you've ever had manual extractions during a facial, you know they can be uncomfortable. The Hydrafacial uses a unique, spiral-tipped vortex suction to dislodge and remove impurities from pores without the painful squeezing. It's a gentle yet highly effective way to achieve a deep clean.</p>
    
    <h2>5. Boosts Overall Skin Health</h2>
    <p>By infusing the skin with potent antioxidants, peptides, and hyaluronic acid, the Hydrafacial does more than just improve its appearance—it enhances its health. Regular treatments can help to build a stronger skin barrier, improve hydration levels, and protect against environmental damage, leading to healthier skin in the long run.</p>`,
  },
  {
    slug: 'debunking-skincare-myths',
    title: 'Top 3 Skincare Myths Debunked by Dermatologists',
    author: 'Dr. Chloe Davis',
    date: '2024-06-10',
    excerpt: 'Tired of conflicting skincare advice? We asked dermatologists to debunk three of the most common skincare myths to help you care for your skin correctly.',
    content: `<p>With so much information available online, it can be hard to separate fact from fiction when it comes to skincare. To clear up the confusion, we've consulted with dermatologists to debunk three of the most persistent skincare myths.</p>

    <h2>Myth #1: You Don't Need Moisturizer if You Have Oily Skin</h2>
    <p>This is one of the most common misconceptions. Many people with oily skin skip moisturizer, fearing it will make their skin even greasier. However, the opposite is often true. When you strip oily skin of its natural moisture (often with harsh, drying cleansers), it can go into overdrive and produce even more oil to compensate. The key is to choose the right moisturizer. Look for lightweight, oil-free, non-comedogenic formulas that will hydrate your skin without clogging pores.</p>
    
    <h2>Myth #2: The Higher the SPF, the Better the Protection</h2>
    <p>While a higher SPF does offer more protection, the increase is marginal once you get above SPF 30. For example:</p>
    <ul>
      <li>SPF 15 blocks about 93% of UVB rays.</li>
      <li>SPF 30 blocks about 97% of UVB rays.</li>
      <li>SPF 50 blocks about 98% of UVB rays.</li>
      <li>SPF 100 blocks about 99% of UVB rays.</li>
    </ul>
    <p>More important than a super-high SPF is applying it correctly and consistently. Most people don't apply enough sunscreen to achieve the stated SPF level. You should use about a shot glass full for your body and a nickel-sized dollop for your face, and reapply every two hours, or more often if you're swimming or sweating.</p>
    
    <h2>Myth #3: Natural or "Clean" Ingredients Are Always Better</h2>
    <p>The terms "natural" and "clean" are not regulated in the beauty industry, so they can mean different things to different brands. While many natural ingredients are beneficial, not all synthetic ingredients are bad, and not all natural ingredients are safe. For example, essential oils and plant extracts can be potent allergens for some people. The effectiveness and safety of an ingredient depend on its chemical composition, concentration, and how it's formulated, not just whether it's derived from nature or a lab. It's more important to focus on evidence-based ingredients and formulations that are proven to be effective and suitable for your skin type.</p>`,
  },
];

export const posts: Post[] = blogPosts.map((post, index) => {
  const image = PlaceHolderImages.find(p => p.id === `blog-${index + 1}`);
  return {
    ...post,
    image: image?.imageUrl || '',
    imageHint: image?.imageHint || '',
  }
});

export const getPostBySlug = (slug: string): Post | undefined => {
  return posts.find(post => post.slug === slug);
}
