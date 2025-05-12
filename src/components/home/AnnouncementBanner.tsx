'use client'
import {
    AlertTriangle,
    Calendar,
    Clock,
    Users,
    DollarSign,
    MapPin
} from 'lucide-react'

import AnimatedSection from '../animated-section'
import CallToAction from '../call-to-action'

export default function AnnouncementBanner() {
    return (
        <section id="announcement" className="bg-gray-dark">
            <AnimatedSection
                animation="fadeIn"
                className="max-w-custom mx-auto px-6 py-12 flex flex-col gap-2"
            >
                <h2 className="text-center mb-0">New For Summer 2025!</h2>
                <p className="text-center text-xl mb-6">
                    Rising Tide Swim Prep Program - Starts June 3rd
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <p>
                            A 6-week small-group training program designed to
                            prepare swimmers for their next journey. Whether
                            you're just starting out or preparing for high
                            school swim, this is the program for you!
                        </p>
                        <div className="text-white p-6 pl-0 max-w-lg space-y-4">
                            <div className="flex items-center gap-4">
                                <AlertTriangle
                                    className="text-white flex-shrink-0"
                                    size={24}
                                />
                                <p className="text-lg font-medium">
                                    Limited spots – registration closes soon!
                                </p>
                            </div>

                            <div className="flex items-center gap-4">
                                <Calendar
                                    className="text-white flex-shrink-0"
                                    size={24}
                                />
                                <p className="text-lg">
                                    Dates: June 3 – July 8 on Tuesdays &
                                    Thursdays
                                </p>
                            </div>

                            <div className="flex items-center gap-4">
                                <Clock
                                    className="text-white flex-shrink-0"
                                    size={24}
                                />
                                <p className="text-lg">30-minute sessions</p>
                            </div>

                            <div className="flex items-center gap-4">
                                <Users
                                    className="text-white flex-shrink-0"
                                    size={24}
                                />
                                <p className="text-lg">
                                    Max 5 swimmers per group
                                </p>
                            </div>

                            <div className="flex items-center gap-4">
                                <DollarSign
                                    className="text-white flex-shrink-0"
                                    size={24}
                                />
                                <p className="text-lg">$275</p>
                            </div>

                            <div className="flex items-center gap-4">
                                <MapPin
                                    className="text-white flex-shrink-0"
                                    size={24}
                                />
                                <p className="text-lg">
                                    Bobby Hicks Pool, 4120 W Mango St, Tampa, FL
                                    33616
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-light rounded-xl shadow-xl p-8 flex flex-col gap-6 m-auto text-center text-white">
                        <h3>Ready to Dive in?</h3>
                        <p>
                            Secure your spot in our limited-capacity summer
                            program - perfect for future swim stars!
                        </p>
                        <CallToAction
                            buttonLabel="Claim Your Spot"
                            variant="cta"
                            buttonClass="w-[20rem] mx-auto text-black"
                        />
                        <p>
                            Only 5 swimmers per group. Registration closes soon
                            - don't miss out!
                        </p>
                    </div>
                </div>
            </AnimatedSection>
        </section>
    )
}
