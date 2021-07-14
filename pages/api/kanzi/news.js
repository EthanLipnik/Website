export default (req, res) => {
    res.status(200).json({
        date: Date.now(),
        items: [
            {
                title: "Why These Bonobos Are 'Playing Airplane'",
                subtitle: "Studies have shown bonobos are friendlier and less aggressive than their species cousins.",
                url: "https://www.nationalgeographic.com/animals/article/bonobos-playful-behavior-cincinnati-zoo-spd",
                genus: "pan"
            },
            {
                title: "Chimpanzee moms are like us: They mourn, dote, and take 'me' time.",
                subtitle: "New research is revealing more about chimp motherhood, vital knowledge that can help conserve the endangered species.",
                url: "https://www.nationalgeographic.com/animals/article/why-chimpanzee-moms-are-so-much-like-our-own",
                genus: "pan"
            },
            {
                title: "Alligators can regrow severed tails, surprising scientists",
                subtitle: "Young alligators can grow back up to 9 inches of a lost tail, a study finds. They’re the largest animal with this regenerative ability.",
                url: "https://www.nationalgeographic.com/animals/article/alligators-can-regrow-their-tails",
                genus: "alligator"
            }
        ]
    })
}