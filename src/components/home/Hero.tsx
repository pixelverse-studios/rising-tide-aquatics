'use client'

export default function HomeHero() {
    return (
        <section
            className="min-h-screen w-full bg-cover bg-center relative p-8 flex flex-col justify-center"
            style={{ backgroundImage: "url('/imgs/Hero.jpg')" }}
        >
            <h1 className="text-6xl text-white">
                Make Waves with Tampa Aquatics
            </h1>
            <p className="text-white font-semibold text-3xl">
                Dynamic - Inclusive - Empowering
            </p>
            <div>
                <button>join</button>
                <button>learn</button>
            </div>
        </section>
    )
}
