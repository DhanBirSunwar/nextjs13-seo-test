import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='w-full px-20 py-12 border-t text-white-800 flex-between body-text gap-y-10 border-black-400 bg-black-100 max-md:flex-col'>
      <p>Copyright © 2023 JS Mastery Pro | All Rights Reserved</p>

      <div className='flex gap-x-9'>
        <Link href='/terms-of-use'>Terms & Conditions</Link>
        <Link href='/privacy-policy'>Privacy Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
