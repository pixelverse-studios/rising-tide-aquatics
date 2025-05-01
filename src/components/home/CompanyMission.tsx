'use client'

import AnimatedSection from '../animated-section'

export default function CompanyMission() {
    return (
        <section id="about" className="bg-black">
            <AnimatedSection animation="fadeIn">
                <section className="bg-black relative w-full">
                    <div className="max-w-custom mx-auto px-6 pt-10 pb-32">
                        <h2 className="text-primary">
                            Shaping the Future, One Stroke at a Time
                        </h2>
                        <p>
                            At Rising Tide Aquatics, we are committed to
                            building a diverse and inclusive swimming community
                            where athletes of all backgrounds and skill levels
                            can thrive. With expert coaching, teamwork, and an
                            unwavering passion for the sport, we empower
                            swimmers to reach their full potential - both in and
                            out of the water. Our dedication to excellence,
                            sportsmanship, and camaraderie fosters a positive,
                            high-energy environment that inspires every member
                            to succeed.
                        </p>
                    </div>
                </section>
            </AnimatedSection>
            <AnimatedSection animation="fadeIn" className="relative">
                <div
                    className="absolute left-0 top-[-6rem] w-full h-[6rem] bg-no-repeat bg-cover bg-bottom z-0"
                    style={{
                        backgroundImage: 'url(/imgs/WavePageBreak.svg)'
                    }}
                />
                <section className="bg-primary relative overflow-hidden">
                    <div className="max-w-custom mx-auto relative z-10 px-6 py-10">
                        <h2 className="text-black">
                            Diving into the Future of Rising Tide Aquatics
                        </h2>
                        <p className="text-black">
                            Rising Tide Aquatics is more than just a swim
                            program - it's a community built on excellence,
                            teamwork, and passion for the sport. As we grow,
                            we're excited to introduce new classes and training
                            to help swimmers of all backgrounds and skill levels
                            thrive. Whether you're just starting out or pushing
                            for peak performance, our upcoming programs will
                            provide the coaching, support, and environment you
                            need to succeed - both in and out of the water.
                        </p>
                    </div>
                </section>
            </AnimatedSection>
        </section>
    )
}
