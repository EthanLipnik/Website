export default (req, res) => {
    res.status(200).json({
        lastUpdated: 1626240486265,
        items: [
            {
                title: "Why These Bonobos Are 'Playing Airplane'",
                subtitle: "Studies have shown bonobos are friendlier and less aggressive than their species cousins.",
                pubDate: 1517529600,
                url: "https://www.nationalgeographic.com/animals/article/bonobos-playful-behavior-cincinnati-zoo-spd",
                genus: "pan"
            },
            {
                title: "Chimpanzee moms are like us: They mourn, dote, and take 'me' time.",
                subtitle: "New research is revealing more about chimp motherhood, vital knowledge that can help conserve the endangered species.",
                pubDate: 1620259200,
                url: "https://www.nationalgeographic.com/animals/article/why-chimpanzee-moms-are-so-much-like-our-own",
                genus: "pan"
            },
            {
                title: "Alligators can regrow severed tails, surprising scientists",
                subtitle: "Young alligators can grow back up to 9 inches of a lost tail, a study finds. They’re the largest animal with this regenerative ability.",
                pubDate: 1608508800,
                url: "https://www.nationalgeographic.com/animals/article/alligators-can-regrow-their-tails",
                genus: "alligator"
            }
        ]
    })
}