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
    slug: 'fue-hair-transplant-guide',
    title: 'A Complete Guide to FUE Hair Transplant',
    author: 'My Looks Care Team',
    date: '2024-07-15',
    excerpt: 'Considering an FUE hair transplant? Here’s everything you need to know about this advanced hair restoration technique, from the procedure to recovery.',
    content: `<p>Follicular Unit Extraction (FUE) is a revolutionary hair transplant technique that offers natural-looking results with minimal downtime. If you're struggling with hair loss, here’s what you need to know about FUE at My Looks Care.</p>
    
    <h2>What is FUE?</h2>
    <p>FUE is a method where individual hair follicles are extracted directly from a donor area (typically the back of the scalp) and transplanted to the balding or thinning areas. Unlike traditional methods, it doesn’t leave a linear scar, making it a popular choice.</p>
    
    <h2>The Procedure</h2>
    <p>The process is performed under local anesthesia. Our expert surgeons use a micro-punch tool to extract each follicular unit. These grafts are then carefully implanted into the recipient area, following your natural hair growth pattern to ensure a seamless result.</p>
    
    <h2>Benefits of FUE</h2>
    <ul>
      <li>No linear scarring, allowing for short hairstyles.</li>
      <li>Faster recovery time compared to other methods.</li>
      <li>Minimal discomfort during and after the procedure.</li>
      <li>Natural and permanent results.</li>
    </ul>
    
    <h2>Recovery and Results</h2>
    <p>Most patients can return to their daily activities within a few days. The transplanted hair will shed initially, but new growth will begin in 3-4 months. You can expect to see significant results within 9-12 months.</p>
    
    <p>At My Looks Care, we pride ourselves on our 20+ years of experience in providing successful FUE hair transplants. Schedule a consultation to find out if this treatment is right for you.</p>`,
  },
  {
    slug: 'laser-hair-removal-benefits',
    title: 'The Top 5 Benefits of Laser Hair Removal',
    author: 'My Looks Care Team',
    date: '2024-06-28',
    excerpt: 'Tired of endless shaving and waxing? Discover the long-term benefits of laser hair removal and why it’s a leading choice for smooth, hair-free skin.',
    content: `<p>Laser hair removal is one of the most popular cosmetic treatments worldwide, and for good reason. It offers a safe, effective, and long-term solution to unwanted hair. Here are the top five benefits.</p>

    <h2>1. Precision</h2>
    <p>Lasers can selectively target dark, coarse hairs while leaving the surrounding skin undamaged. This makes it ideal for treating sensitive areas with precision.</p>
    
    <h2>2. Speed</h2>
    <p>Each laser pulse takes a fraction of a second and can treat many hairs at the same time. Small areas like the upper lip can be treated in under a minute, and large areas, like the back or legs, may take up to an hour.</p>
    
    <h2>3. Cost-Effective in the Long Run</h2>
    <p>While the initial cost may seem high, laser hair removal can save you money over time. Think of the endless costs of razors, shaving creams, and waxing appointments you’ll no longer need.</p>
    
    <h2>4. Prevents Ingrown Hairs</h2>
    <p>Laser hair removal is an excellent option for people who suffer from ingrown hairs. By destroying the hair at the root, it prevents it from curling back or growing sideways into the skin.</p>
    
    <h2>5. Long-Lasting Results</h2>
    <p>Most patients experience permanent hair loss after an average of three to seven sessions. While you might need a maintenance session every year or so, you'll enjoy smooth skin for a very long time.</p>
    
    <p>At My Looks Care, we use advanced laser technology tailored for Indian skin types to ensure the safest and most effective results.</p>`,
  },
  {
    slug: 'rejuvenate-your-skin',
    title: 'How to Rejuvenate Your Skin for a Lasting Glow',
    author: 'My Looks Care Team',
    date: '2024-06-10',
    excerpt: 'Unlock radiant, youthful skin with our expert tips and treatments. From skin polishing to advanced tightening, learn how to achieve a lasting glow.',
    content: `<p>Everyone desires glowing, youthful skin. At My Looks Care, we combine at-home care with professional treatments to help you achieve the best skin of your life.</p>

    <h2>1. Consistent At-Home Routine</h2>
    <p>A good skincare routine is the foundation. It should include a gentle cleanser, a hydrating moisturizer, and, most importantly, a broad-spectrum sunscreen with at least SPF 30. Sun protection is the number one anti-aging tool.</p>
    
    <h2>2. Skin Polishing and Brightening</h2>
    <p>Professional treatments like skin polishing (microdermabrasion) gently exfoliate the top layer of dead skin cells, revealing a smoother, brighter complexion underneath. It helps reduce fine lines, sun damage, and minor scars.</p>
    
    <h2>3. Stay Hydrated and Eat Well</h2>
    <p>What you put inside your body is as important as what you put on your skin. Drinking plenty of water and eating a diet rich in antioxidants, vitamins, and minerals will support your skin's health from the inside out.</p>
    
    <h2>4. Non-Surgical Face & Body Tightening</h2>
    <p>For those looking for a lift without surgery, non-surgical tightening treatments use technologies like radiofrequency to heat the deeper layers of your skin. This stimulates collagen production, leading to firmer, tighter skin over time.</p>
    
    <h2>5. Get Enough Sleep</h2>
    <p>Your skin repairs itself while you sleep. Aim for 7-9 hours of quality sleep per night to allow this natural rejuvenation process to happen.</p>
    
    <p>Combining a healthy lifestyle with targeted treatments from our experienced team at My Looks Care can help you achieve and maintain that coveted glow.</p>`,
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
