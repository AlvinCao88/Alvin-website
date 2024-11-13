import PFP from "@/assets/pfp.jpg";
import Image from "next/image";

export interface TabInfo {
  name: string;
  link: string;
  image?: string; // Include an image field if you want to show project images
  description?: string;
}


export function Tab({ name = "Unnamed Tab", image, link = "#" }: TabInfo) {
  // Set a fallback image if `image` is missing
  const fallbackImage = "@/assets/pfp.jpg";  // You can place a default image in your public folder
  //const imageUrl = image ? (image.startsWith('http') ? image : `/${image}`) : fallbackImage;

  return (
    <div className="tab">
      <a href={link} target="_blank" rel="noopener noreferrer">
        {/* <Image src={PFP} alt={name} className="" /> */}
        <p>{name}</p>
      </a>
    </div>
  );
}
