import { Skeleton } from '@/components/ui/skeleton';

const loading = () => {
  return (
    <main className='flex-col w-full mx-auto flex-center paddings max-w-screen-2xl'>
      <section className='w-full nav-padding'>
        <Skeleton className='h-[274px] w-full rounded-lg bg-black-200/40' />
      </section>

      <section className='flex flex-col w-full mt-6 sm:mt-20'>
        <Skeleton className='w-56 h-10 bg-black-200/40' />
        <div className='flex flex-wrap justify-center w-full gap-16 mt-12 sm:justify-start'>
          <Skeleton className='h-[440px] w-full sm:w-[356px] bg-black-200/40' />
          <Skeleton className='h-[440px] w-full sm:w-[356px] bg-black-200/40' />
          <Skeleton className='h-[440px] w-full sm:w-[356px] bg-black-200/40' />
        </div>
      </section>
    </main>
  );
};

export default loading;
