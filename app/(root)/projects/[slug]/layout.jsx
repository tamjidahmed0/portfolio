import { getProjectsBySlug } from '@/sanity/lib/projects/getProject';
import { urlFor } from '@/sanity/lib/image';



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


  if (!result) {
    return
  }


  // Return metadata based on fetched data
  return {
    title: result.title || "Default Title",
    description: extractMetaDescription(result.body) || '',
    keywords: result.technology.map((item) => item.technology) || '',
    openGraph: {
      title: result.title,
      description: extractMetaDescription(result.body) || '',
      images: urlFor(result.projectThumbnail).url() || ''
    },
    twitter: {
      title: result.title,
      description: extractMetaDescription(result.body) || '',
      keywords: result.technology.map((item) => item.technology) || '',
      openGraph: {
        title: result.title,
        description: extractMetaDescription(result.body) || '',
        images: urlFor(result.projectThumbnail).url() || '',
        card: 'summary_large_image',
        creator: 'Tamjid Ahmed'
      },
    }
  };
}




export default async function getLayout({ children }) {

  return (
    <main>
      {children}
    </main>
  );
}
