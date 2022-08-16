const player = {
    name: "Shakib Al Hasan",
    id: 75,
    address: "Mirpur Home of Cricket",
    isSingle: false,
    friends: ["Mushfiqur", "Tamim", "Mahmudullah", "Taskin"],
    ranking: [
        {batting: {Test: 42, ODI: 30, T20: 70}},
        {bowling: {Test: 29, ODI: 14, T20: 25}},
        {allrounder: {Test: 3, ODI: 1, T20: 2}}
    ],
    role: function() {
        console.log("Batting Allrounder");
    },
    car: {
        brand: "BMW",
        price: 5000000,
        made: "2022",
        manufacturer: {
            name: "BMW",
            ceo: "Oliver Zipse",
            country: "Germany"
        }
    }
}

console.log(player.ranking);

player.role();
