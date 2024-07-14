import TypeWriterComponent from '@/components/TypeWriterComponent';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
   title: 'LML Digitals | Our services',
   description:
      'LML Digitals is a leading marketing and software development company dedicated to transforming businesses with innovative digital solutions.',
   keywords:
      'marketing, software development, digital solutions, business transformation, LML Digitals',
   authors: [{ name: 'LML Digitals', url: 'https://www.lmldigitals.com' }],
   viewport: 'width=device-width, initial-scale=1.0',
   openGraph: {
      title: 'LML Digitals | Marketing and Software Development',
      description:
         'Transform your business with innovative digital solutions from LML Digitals, a leader in marketing and software development.',
      type: 'website',
      url: 'https://www.lmldigitals.com',
      images: [
         {
            url: '/app/opengraph-image.png',
         },
      ],
   },
   twitter: {
      card: 'summary_large_image',
      site: '@LMLDigitals',
      title: 'LML Digitals | Marketing and Software Development',
      description:
         'Transform your business with innovative digital solutions from LML Digitals, a leader in marketing and software development.',
      images: ['/images/twitter-image.jpg'],
   },
};

function Services() {
   const ourServices = [
      {
         id: 1,
         title: 'Digital Marketing',
         link: '/services/marketing',
         description:
            'Boost your brand with targeted online marketing strategies.',

         image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RGlnaXRhbCUyMG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D',
      },
      {
         id: 2,
         title: 'Software Development',
         link: '/services/development',
         description:
            'Innovative software solutions tailored to your business needs.',

         image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c29mdHdhcmUlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D',
      },
   ];

   return (
      <div className='mt-20'>
         <TypeWriterComponent />
         <div className='flex items-center justify-center gap-28 h-96  mt-20'>
            {ourServices.map((service) => (
               <CardContainer key={service.id} className='inter-var'>
                  <CardBody className='bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  '>
                     <CardItem
                        translateZ='50'
                        className='text-xl font-bold text-neutral-600 dark:text-white'
                     >
                        {service.title}
                     </CardItem>
                     <CardItem
                        as='p'
                        translateZ='60'
                        className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'
                     >
                        {service.description}
                     </CardItem>
                     <CardItem translateZ='100' className='w-full mt-4'>
                        <Image
                           src={service.image}
                           height='1000'
                           width='1000'
                           className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
                           alt='thumbnail'
                        />
                     </CardItem>
                     <div className='flex justify-between items-center mt-16'>
                        <Link href={`${service.link}`}>
                           <CardItem
                              translateZ={20}
                              as='button'
                              className='px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold'
                           >
                              Explore more
                           </CardItem>
                        </Link>
                     </div>
                  </CardBody>
               </CardContainer>
            ))}
         </div>
      </div>
   );
}

export default Services;
