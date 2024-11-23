import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

const PostContent = ({ body }) => {
  // Define custom components for rendering Portable Text
  const components = {
    types: {
      // Example: Render image block
      image: ({ value }) => {
      
        return (
          <Image
            src={urlFor(value.asset).url()}
            width={500}
            height={500}
            alt={value.alt || 'Post image'}
            className="rounded-lg w-auto h-auto"
          />
        );
      },
    },
    block: {
      // Example: Custom styles for headings
      h1: ({ children }) => <h1 className="text-2xl font-bold ">{children}</h1>,
      h2: ({ children }) => <h2 className="text-xl font-semibold ">{children}</h2>,
      normal: ({ children }) => (
        <p className="text-base leading-relaxed ">{children}</p>
      ),
    },
    marks: {
      // Example: Custom rendering for links
      link: ({ children, value }) => (
        <a href={value.href} className="text-blue-500 underline ">
          {children}
        </a>
      ),
    },
  };

  return (
    <div className="prose prose-lg max-w-none">
      <PortableText value={body} components={components} />
    </div>
  );
};

export default PostContent;
