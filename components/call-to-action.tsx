import { Button } from '@/components/ui/button'
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";

export default async function CallToAction() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <section className='py-16 md:py-32'>
      <div className='mx-auto max-w-5xl px-6'>
        <div className='text-center'>
          <h2 className='text-balance text-4xl font-semibold lg:text-5xl'>
            Elevate Every Thought
          </h2>
          <p className='mt-4'>
            Take notes like a hero. Build with clarity and confidence.
          </p>

          <div className='mt-12 flex flex-wrap justify-center gap-4'>
            <Button asChild size='lg'>
              <Link href={`${session ? "/dashboard" : "/login"}`}>
                <span>Get Started</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
