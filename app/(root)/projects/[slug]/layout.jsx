
import {Poppins, Raleway } from 'next/font/google'
import { getProjectsBySlug } from '@/sanity/lib/projects/getProject';

const poppins = Poppins({
  subsets: ['latin'],
  weight: '600',
  variable: '--font-poppins',
});

const raleway = Poppins({
  subsets: ['latin'],
  weight: ['400','500', '600'],
  variable: '--font-raleway',
});


export async function generateMetadata(props) {
  const params = await props.params;
  const { slug } = params;
  const result = await getProjectsBySlug(slug);


  const extractMetaDescription = (body) => {
    if (!body || !Array.isArray(body)) {
      return '';
    }
  
    // Extract the first block of text
    return body
      .map((block) => {
        if (block._type === 'block' && block.children) {
          return block.children
            .map((child) => (child._type === 'span' ? child.text : ''))
            .join(''); // Combine all text in the block
        }
        return '';
      })
      .join(' ') // Combine all blocks into a single string
      .slice(0, 160); // Limit to 160 characters for meta description
  };
  
  


console.log()

  if (!result) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  // Return metadata based on fetched data
  return {
    title: result.title || "Default Title",
    description:  extractMetaDescription(result.body) || '',
    keywords: result.technology.map((item)=> item.technology)|| ''
  };
}




export default async function getLayout({ children }) {
  
  return (
  <main>
      {children}
  </main>
  );
}
