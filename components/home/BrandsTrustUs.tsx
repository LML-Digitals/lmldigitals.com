import Image from "next/image";

function BrandsTrustUs() {
  const logos = [
    // {
    //   name: 'Vercel',
    //   url: '/fakeLogos/t1.png',
    // },
    {
      name: "Nextjs",
      url: "/fakeLogos/t2.png",
    },
    {
      name: "Prime",
      url: "/fakeLogos/t3.png",
    },
    {
      name: "Trustpilot",
      url: "/fakeLogos/yy5.png",
    },
    {
      name: "Trustpilot",
      url: "/fakeLogos/t4.png",
    },
  ];

  return (
    <div className="w-full md:py-0">
      <div className="mx-auto w-full px-4 md:px-8">
        <div className="flex justify-center">
          <h1 className="text-gray-500 text-lg">Trusted by teams at</h1>
        </div>
        <div className="group relative mt-4 flex gap-10 overflow-hidden p-0">
          {Array(1)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="flex  justify-center flex-row w-full gap-6"
              >
                {logos.map((logo, key) => (
                  <div
                    key={key}
                    className="flex items-center justify-center p-2"
                    style={{ width: 130, height: 130 }}
                  >
                    <Image
                      src={logo.url}
                      width={150}
                      height={150}
                      className="brightness-0"
                      alt={`${logo.name}`}
                    />
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default BrandsTrustUs;
