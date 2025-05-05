import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/projects/repairdesk-p.png';

const jobify = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={propertyImg}
          alt='/'
        />

        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>RepairDesk</h2>
          <h3>
            React JS / NestJS / MongoDB / AWS / Docker / Kubernetes / Terraform
            / CI/CD
          </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <Link href='/#projects' className='m-auto flex justify-center'>
          <p className='underline cursor-pointer m-auto'>Back</p>
        </Link>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            RepairDesk is a cloud-based Point of Sale (POS) and Enterprise
            Resource Planning (ERP) software tailored for the repair industry.
            It streamlines operations for mobile and computer repair shops by
            offering features such as inventory management, repair ticket
            tracking, customer relationship management, and integrated payment
            solutions.
            <br />
            <br />
            Here is my contribution to the project:
            <br />
            <br />
            ⭐️ Developed Appointments Pro, a versatile website widget that
            increased appointment scheduling efficiency by 50%, allowing
            customers to obtain accurate quotes and schedule appointments with
            ease.
            <br />
            ⭐️ Developed OrderSync app, an automated system for creating
            purchase orders and managing inventory, resulting in significant
            time and cost savings while maintaining accurate financial records.
            <br />
            ⭐️ Developed the Rewards app as a comprehensive ecosystem for
            repair business growth, providing exclusive offers, content, and
            rewards, along with the vendor discounts, to increase revenue.
            <br />
            ⭐️ Spearheaded the development of a successful Marketplace app by
            seamlessly integrating Magento 2 vendor APIs. This transformative
            solution empowers customers to effortlessly create orders on our
            platform, leveraging the seamless integration with popular sites
            like MobileSentrix, Parts4Cells, Rounded, One Source Suppliers,
            Rounded, One Source Suppliers, Repair Outlet, WholeSale Gadgets
            Parts, and Injured Gadgets. Optimizing the purchase order process
            significantly enhanced operational efficiency while delivering
            heightened customer satisfaction
          </p>

          <a href='https://app.repairdesk.co' target='_blank' rel='noreferrer'>
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default jobify;
