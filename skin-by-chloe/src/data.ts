import { Star } from 'lucide-react';

export const SITE_CONTENT = {
  hero: {
    title: "SKIN BY CHLOE",
    subtitle: "Unlock Your Healthiest Skin Yet",
    cta: "Book an Appointment"
  },
  about: {
    title: "Welcome",
    content: [
      "I’m Chloé, your dedicated skin health professional with a deep-rooted passion for skincare and holistic wellness.",
      "After graduating from Sacramento State with a business degree, I realized my true mission: to help others navigate their own skin journeys and achieve radiant skin health!",
      "My personal experiences have ignited my commitment to empowering others. I know what it’s like to struggle, and I’ve witnessed the life-changing transformation that comes from finding effective solutions. That’s why I’m devoted to providing expert care, education, and customized treatments, guiding my clients toward healthier, happier skin.",
      "If you’re ready to embrace your skin and glow from the inside out, I’m here to support you every step of the way! Let’s unlock your healthiest skin yet!"
    ],
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop"
  },
  services: [
    {
      title: "New Client Consultation",
      price: "$49",
      duration: "30 min",
      description: "Start your skincare journey right with a personalized consultation to address your concerns and goals for glowing, healthy skin! This consultation includes a thorough analyzation of your skin, a treatment plan, and home care recommendations. The $49 can be applied to future services booked with me or $25 can be applied to same day product purchases.",
      image: "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=2073&auto=format&fit=crop"
    },
    {
      title: "First Time Client Facial",
      price: "$99+",
      duration: "60+ min",
      description: "Skin consultation and tailored facial treatment or hybrid peel targeting specific skin concerns such as acne, aging, or dryness, leaving your skin refreshed and rejuvenated. See immediate results after just one session, with optimal transformation achieved through a series of 5 treatments. Special Package: Buy 4 treatments, get your 5th FREE!",
      image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Customized Facial",
      price: "$119+",
      duration: "60+ min",
      description: "Tailored facial treatment or peel targeting specific skin concerns such as acne, aging, or dryness, leaving your skin refreshed and rejuvenated. See immediate results after just one session, with optimal transformation achieved through a series of 5 treatments. Special Package: Buy 4 treatments, get your 5th FREE!",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  packages: [
    {
      title: "Anti-Aging Transformation Package",
      price: "$349.00",
      savings: "Save $207.00",
      description: "Four consecutive treatments designed to target aging skin. Must be an existing client and must be on Lira homecare.",
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Acne Transformation Package",
      price: "$349.00",
      savings: "Save $207.00",
      description: "Four consecutive treatments designed to treat your acne and kickstart your acne healing journey. Must be an existing client.",
      image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  reviews: [
    {
      author: "McKenna Cutshaw-Raby",
      date: "12.05.2025",
      rating: 5,
      text: "I have had many facials in my life, but none that got me results the way that Chloe's did. She is so knowledgeable about products and about people's skin! She truly has a gift and I am so thankful that I found her. 10 out of 10, 100 out of 100 will always go back!"
    },
    {
      author: "Sherry Farebrother",
      date: "11.13.2025",
      rating: 5,
      text: "Relaxing! But Professional, thorough and knowledgeable"
    },
    {
      author: "Lacey L.",
      date: "10.14.2025",
      rating: 5,
      text: "My visit with Chloe left my skin feeling so amazing! I can't wait to go back. Chloe makes you feel so at ease, and the space is so lovely. I couldn't believe the difference in my skin after just one session, took at least 5 years off my look. Thank you so much Chloe! I can't wait to see you again."
    },
    {
      author: "Itzel",
      date: "08.21.2025",
      rating: 5,
      text: "I had such a peaceful and relaxing experience from start to finish. The atmosphere was calming, and I immediately felt relaxed. I really appreciated how Chloe explained each product she applied and recommended products tailored to my skin type. I left with my skin literally glowing! I highly recommend anyone looking to treat themselves and their skin!"
    }
  ],
  giftCards: {
    title: "Purchase a gift card",
    amounts: ["$50", "$75", "$100", "$200", "Custom amount"],
    designs: [
      { name: "With Love", color: "bg-pink-300" },
      { name: "Thinking of You", color: "bg-purple-300" },
      { name: "Thank You", color: "bg-indigo-300" },
      { name: "Just Because", color: "bg-orange-200" },
      { name: "Happy Birthday", color: "bg-yellow-300" },
      { name: "Gift Card", color: "bg-green-300" },
      { name: "Congrats", color: "bg-red-300" },
      { name: "Celebrate You", color: "bg-slate-800 text-white" }
    ]
  }
};
