'use client'
// import { cn } from '@/lib/utils'
import { Button } from '../ui/button'
import CallToAction from '../call-to-action'
import { useSmoothScroll } from '@/lib/hooks/useSmoothScroll'

// const imgStyles = 'h-[100%] w-auto md:h-[12rem]'
// 'h-[23rem] w-auto absolute border-[1rem] border-secondary rounded-lg'

export default function HomeHero() {
    const { scrollToElement } = useSmoothScroll()

    return (
        <section
            id="home"
            className="relative min-h-[75dvh] w-full flex items-center bg-gradient-to-b from-secondary from-[0%] via-secondary via-[75%] to-primary to-[100%]"
        >
            <div className="max-w-custom w-full mx-auto relative z-10 text-primary px-4 pt-36 lg:pt-0 pb-8 lg:pb-0 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="my-auto mx-auto md:mx-0">
                    <h1 className="text-5xl font-bold mb-4 max-w-md">
                        Make Waves with Rising Tide Aquatics
                    </h1>
                    <h2 className="text-2xl mb-8">
                        A Swim Club With a Lane for Everyone.
                        <br />
                        Rise Together!
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <CallToAction
                            buttonLabel="Join our Swim Family"
                            buttonClass="text-black"
                            variant="cta"
                        />
                        <Button
                            variant="ctaAlt"
                            onClick={() => scrollToElement('about')}
                        >
                            Learn More
                        </Button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-primary p-4 rounded-xl shadow-xl">
                    <div className="rounded-lg overflow-hidden">
                        <img
                            src="/imgs/son.png"
                            alt="Swimmer in pool with water bottle"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="rounded-lg overflow-hidden">
                        <img
                            src="/imgs/daughter.png"
                            alt="Young swimmer in jacket at pool venue"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
