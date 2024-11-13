// Define the BentoInfo interface
export interface BentoInfo {
  title: string;
  description: string;
  image: string;  // Image URL or path
  link: string;   // Link to more details
}

interface BentoBoxProps {
  items: BentoInfo[];  // Array of Bento items to display
}

// BentoBox component
export function BentoBox({ items }: BentoBoxProps) {
  return (
    <div className="bento-box grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 p-5">
      {items.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bento-item block border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200"
        >
          <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-xl">{item.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{item.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
