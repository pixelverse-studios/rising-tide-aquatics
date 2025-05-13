import HomeHero from '@/components/home/Hero'
import CompanyMission from '@/components/home/CompanyMission'
import AnnouncementBanner from '@/components/home/AnnouncementBanner'
import TeamLevel from '@/components/team-level'
import AAUPage from '@/components/aau'

import { ripple, breakers, surges, tsunami } from '@/lib/teams'

export default function Home() {
    return (
        <main>
            <HomeHero />
            <CompanyMission />
            <AnnouncementBanner />
            <section id="teams" className="scroll-mt-20">
                <TeamLevel {...ripple} invert={false} />
                <TeamLevel {...breakers} invert />
                <TeamLevel {...surges} invert={false} />
                <TeamLevel {...tsunami} invert />
            </section>
            <AAUPage />
        </main>
    )
}
