import localFont from "next/font/local";
import "./globals.css";
import { Poppins, Raleway } from 'next/font/google'
import Footer from "@/components/Footer";
import { Suspense } from "react";
import GlobalLoading from "@/components/GlobalLoading";
import { getSeoData } from "@/sanity/lib/seo/getSeoData";
import { urlFor } from "@/sanity/lib/image";



const poppins = Poppins({
  subsets: ['latin'],
  weight: '600',
  variable: '--font-poppins',
});

const raleway = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-raleway',
});




const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Tamjid Ahmed",
  "jobTitle": "Full-Stack Developer",
  "description": "Tamjid Ahmed is a Full-Stack Developer specializing in JavaScript, Node.js, React, and creating modern web and mobile applications.",
  "knowsAbout": [
    "Web Development",
    "JavaScript",
    "React",
    "Node.js",
    "API Development",
    "Responsive Design",
    "Full-Stack Development",
    "RESTful APIs"
  ],

  "skills": [
    "MERN Stack",
    "React Native",
    "Docker",
    "Redis",
    "Socket.IO"
  ],

  "email": "mailto:tamjidahmed050@gmail.com",  // Your email
  "telephone": "+8801920284077",  // Your phone number
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dhaka",  // Your city
    "addressCountry": "Bangladesh",  // Your country
  },
  "image": "https://cdn.sanity.io/images/qwrysc9v/production/05f557e30437edce8e65931a06e58b590e534e6d-950x960.jpg",  // Profile image URL
  "url": "https://tamjidahmed.com",  // Link to your portfolio
  "sameAs": [
    "https://www.facebook.com/tamjid.ahmed.official1",
    "https://www.linkedin.com/in/tamjidahmedofficial",  // LinkedIn profile
    "https://www.github.com/tamjidahmed0",  // GitHub profile
    "https://www.x.com/tamjidahmed_bd"  // Twitter profile (if applicable)
  ]
};






export async function generateMetadata({ params }) {
  const seoResult = await getSeoData()

  return {
    title: seoResult.title,
    description: seoResult.metadescription,
    keywords: seoResult.keywords.map((item) => item.keyword) || 'tamjid, tamjid ahmed',
    openGraph: {
      title: seoResult.title,
      siteName: seoResult.site_name,
      description: seoResult.metadescription,
      images: seoResult.image.map((item) => urlFor(item.image).width(1200).height(630).url()) || ''
    },
    twitter: {
      title: seoResult.title,
      description: seoResult.metadescription,
      keywords: seoResult.keywords.map((item) => item.keyword) || 'tamjid, tamjid ahmed',
      openGraph: {
        title: seoResult.title,
        description: seoResult.metadescription,
        images: seoResult.image.map((item) => urlFor(item.image).width(1200).height(630).url()) || '',
        card: 'summary_large_image',
        creator: 'Tamjid Ahmed'
      },
    }

  }
}




export default async function RootLayout({ children }) {


  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${raleway.variable} antialiased bg-[#F2F5F9] `}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Suspense fallback={<GlobalLoading />}>

          {children}
        </Suspense>
        <Footer />

      </body>
    </html>
  );
}
