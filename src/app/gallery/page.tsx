import Image from "next/image";
import nextImg from "@/assets/next-image.jpg"

const GalleryPage = () => {
  return (
    <div className="text-center">
      <h1>Regular Image Tag</h1>

      <img
        src="https://miro.medium.com/1*_bJ2z2NRfTncHAv5UjUxwA.jpeg"
        alt=""
        width={500}
        height={500}
        className="mx-auto"
      />

      <h1>Nextjs Image Component</h1>
      <Image src='https://images.ctfassets.net/c63hsprlvlya/IacLLeOBR5WCvdCPqKuff/6860b5cc464c4f54703a2befa3f706b4/nextjs3.webp'
        alt="next image"
        width={500}
        height={400}
        className="mx-auto"
      />


      <h1>Local Nextjs Image Component</h1>
      <Image
        src={nextImg}
        alt="next image"
        width={500}
        height={400}
        className="mx-auto"
      />


      <h1>Local Nextjs Image Component public folder</h1>
      <Image
        src="/next-image.jpg"
        alt="next image"
        width={500}
        height={400}
        className="mx-auto"
      />
    </div>
  );
};

export default GalleryPage;
