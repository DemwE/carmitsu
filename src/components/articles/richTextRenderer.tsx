import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';
import Image from 'next/image';

const renderOptions: Options = {
  renderNode: {
    'embedded-asset-block': (node) => {
      const { file, title } = node.data.target.fields;
      const url = file.url.startsWith('//') ? `https:${file.url}` : file.url;
      const width = file.details.image?.width || 800;
      const height = file.details.image?.height || 600;

      return (
        <div className="my-6">
          <Image
            src={url}
            alt={title || ''}
            width={width}
            height={height}
            unoptimized
            className="rounded-xl object-cover w-full h-auto"
          />
        </div>
      );
    },
    paragraph: (node, children) => {
      const text = node.content
        .filter((c) => c.nodeType === 'text')
        .map((c) => ('value' in c ? c.value : ''))
        .join('');
      if (text === '') return <br />;
      return <p className="mb-4 leading-relaxed">{children}</p>;
    },
    'heading-1': (_node, children) => (
      <h1 className="text-3xl md:text-4xl font-bold mt-8 mb-4">{children}</h1>
    ),
    'heading-2': (_node, children) => (
      <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-3">{children}</h2>
    ),
    'heading-3': (_node, children) => (
      <h3 className="text-xl md:text-2xl font-semibold mt-5 mb-2">{children}</h3>
    ),
  },
  renderMark: {
    bold: (text) => <strong className="font-bold">{text}</strong>,
    italic: (text) => <em className="italic">{text}</em>,
    underline: (text) => <u>{text}</u>,
  },
};

interface RichTextRendererProps {
  content: Document;
}

export default function RichTextRenderer({ content }: RichTextRendererProps) {
  return <div>{documentToReactComponents(content, renderOptions)}</div>;
}
