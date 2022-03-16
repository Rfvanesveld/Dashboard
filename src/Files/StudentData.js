const studentData = [
    {
        name: "Evelyn", project: "SCRUM", hardshiplevel: 3, funlevel: 4
    },
    {
        name: "Evelyn", project: "W1D1-1", hardshiplevel: 3, funlevel: 3
    },
    {
        name: "Evelyn", project: "W1D2-1", hardshiplevel: 1, funlevel: 3
    },
    {
        name: "Evelyn", project: "W1D2-2", hardshiplevel: 1, funlevel: 4
    },
    {
        name: "Evelyn", project: "W1D2-3", hardshiplevel: 2, funlevel: 3
    },
    {
        name: "Evelyn", project: "W1D2-4", hardshiplevel: 3, funlevel: 4
    },
    {
        name: "Evelyn", project: "W1D2-5", hardshiplevel: 3, funlevel: 4
    },
    {
        name: "Evelyn", project: "W1D3-1", hardshiplevel: 3, funlevel: 4
    },
    {
        name: "Evelyn", project: "W1D3-2", hardshiplevel: 3, funlevel: 4
    },
    {
        name: "Evelyn", project: "W1D3-4", hardshiplevel: 4, funlevel: 4
    },
    {
        name: "Evelyn", project: "W1D3-5", hardshiplevel: 4, funlevel: 4
    },
    {
        name: "Evelyn", project: "W1D3 - Project - Guess-the-number", hardshiplevel: 5, funlevel: 5
    },
    {
        name: "Evelyn", project: "W1D4-1", hardshiplevel: 4, funlevel: 5
    },
    {
        name: "Evelyn", project: "W1D4 - Project - Kleurentoggle", hardshiplevel: 3, funlevel: 4
    },
    {
        name: "Evelyn", project: "W1D5 - Project - Galgje", hardshiplevel: 3, funlevel: 3
    },
    {
        name: "Evelyn", project: "W2D1-1", hardshiplevel: 1, funlevel: 5
    },
    {
        name: "Evelyn", project: "W2D1-2", hardshiplevel: 2, funlevel: 5
    },
    {
        name: "Evelyn", project: "W2D2-1", hardshiplevel: 3, funlevel: 4
    },
    {
        name: "Evelyn", project: "W2D2-2", hardshiplevel: 3, funlevel: 4
    },
    {
        name: "Evelyn", project: "W2D2-3", hardshiplevel: 3, funlevel: 4
    },
    {
        name: "Evelyn", project: "W2D3-1", hardshiplevel: 4, funlevel: 4
    },
    {
        name: "Evelyn", project: "W2D3-2", hardshiplevel: 1, funlevel: 3
    },
    {
        name: "Evelyn", project: "W2D3-3", hardshiplevel: 4, funlevel: 4
    },
    {
        name: "Evelyn", project: "W2D4-1", hardshiplevel: 1, funlevel: 3
    },
    {
        name: "Evelyn", project: "W2D4-2", hardshiplevel: 4, funlevel: 4
    },
    {
        name: "Evelyn", project: "W2D4-3", hardshiplevel: 1, funlevel: 3
    }, {
        name: "Evelyn", project: "W2D5 - Project - Filmzoeker", hardshiplevel: 3, funlevel: 4
    },
    {
        name: "Evelyn", project: "W3D1-1", hardshiplevel: 3, funlevel: 4
    },
    {
        name: "Evelyn", project: "W3D1-2", hardshiplevel: 2, funlevel: 4
    },
    {
        name: "Evelyn", project: "W3D1-3", hardshiplevel: 3, funlevel: 4
    },
    {
        name: "Evelyn", project: "W3D1-4", hardshiplevel: 3, funlevel: 3
    },
    {
        name: "Evelyn", project: "W3D2-1", hardshiplevel: 2, funlevel: 4
    },
    {
        name: "Evelyn", project: "W3D2-2", hardshiplevel: 3, funlevel: 3
    },
    {
        name: "Evelyn", project: "W3D2-3", hardshiplevel: 3, funlevel: 5
    },
    {
        name: "Evelyn", project: "W3D3-1", hardshiplevel: 4, funlevel: 4
    },
    {
        name: "Evelyn", project: "W3D3-2", hardshiplevel: 4, funlevel: 5
    },
    {
        name: "Evelyn", project: "W3D3-3", hardshiplevel: 3, funlevel: 5
    },
    {
        name: "Evelyn", project: "W3D3-4", hardshiplevel: 4, funlevel: 5
    },
    {
        name: "Evelyn", project: "W3D4-1", hardshiplevel: 5, funlevel: 5
    },
    {
        name: "Evelyn", project: "W3D4-2", hardshiplevel: 1, funlevel: 5
    },
    {
        name: "Evelyn", project: "W3D5 - Project - Todo-List", hardshiplevel: 2, funlevel: 5
    },
    {
        name: "Evelyn", project: "W4D2-1", hardshiplevel: 1, funlevel: 5
    },
    {
        name: "Evelyn", project: "W4D2-2", hardshiplevel: 1, funlevel: 5
    },
    {
        name: "Evelyn", project: "W4D2-3", hardshiplevel: 1, funlevel: 5
    },
    {
        name: "Evelyn", project: "W4D2-4", hardshiplevel: 1, funlevel: 5
    },
    {
        name: "Evelyn", project: "W4D3-1", hardshiplevel: 1, funlevel: 5
    },
    {
        name: "Evelyn", project: "W4D3-2", hardshiplevel: 1, funlevel: 5
    },
    {
        name: "Evelyn", project: "W4D3-3", hardshiplevel: 1, funlevel: 5
    },
    {
        name: "Evelyn", project: "W4D3-4", hardshiplevel: 1, funlevel: 5
    },
    {
        name: "Evelyn", project: "W4D3-5", hardshiplevel: 1, funlevel: 5
    },
    {
        name: "Evelyn", project: "W4D3 - Project - Next-Level CSS", hardshiplevel: 1, funlevel: 5
    },
    {
        name: "Evelyn", project: "W5D4-1", hardshiplevel: 3, funlevel: 4
    },
    {
        name: "Evelyn", project: "W5D5 - Project - Lil_Playlist", hardshiplevel: 4, funlevel: 3
    },
    {
        name: "Evelyn", project: "W6D1-1", hardshiplevel: 5, funlevel: 5
    },
    {
        name: "Evelyn", project: "W6D2-1", hardshiplevel: 4, funlevel: 3
    },
    {
        name: "Evelyn", project: "W6D2 - Project - Eindopdracht", hardshiplevel: 5, funlevel: 5
    },
    {
        name: "Aranka",
        project: "SCRUM",
        hardshiplevel: 1,
        funlevel: 1
    },
    {
        name: "Aranka",
        project: "W1D1-1",
        hardshiplevel: 4,
        funlevel: 3
    },
    {
        name: "Aranka",
        project: "W1D2-1",
        hardshiplevel: 3,
        funlevel: 1
    },
    {
        name: "Aranka",
        project: "W1D2-2",
        hardshiplevel: 3,
        funlevel: 2
    },
    {
        name: "Aranka",
        project: "W1D2-3",
        hardshiplevel: 4,
        funlevel: 1
    },
    {
        name: "Aranka",
        project: "W1D2-4",
        hardshiplevel: 2,
        funlevel: 3
    },
    {
        name: "Aranka",
        project: "W1D2-5",
        hardshiplevel: 4,
        funlevel: 2
    },
    {
        name: "Aranka",
        project: "W1D3-1",
        hardshiplevel: 3,
        funlevel: 2
    },
    {
        name: "Aranka",
        project: "W1D3-2",
        hardshiplevel: 2,
        funlevel: 1
    },
    {
        name: "Aranka",
        project: "W1D3-4",
        hardshiplevel: 1,
        funlevel: 2
    },
    {
        name: "Aranka",
        project: "W1D3-5",
        hardshiplevel: 4,
        funlevel: 1
    },
    {
        name: "Aranka",
        project: "W1D3 - Project - Guess-the-number",
        hardshiplevel: 2,
        funlevel: 3
    },
    {
        name: "Aranka",
        project: "W1D4-1",
        hardshiplevel: 3,
        funlevel: 2
    },
    {
        name: "Aranka",
        project: "W1D4 - Project - Kleurentoggle",
        hardshiplevel: 4,
        funlevel: 3
    },
    {
        name: "Aranka",
        project: "W1D5 - Project - Galgje",
        hardshiplevel: 4,
        funlevel: 1
    },
    {
        name: "Aranka",
        project: "W2D1-1",
        hardshiplevel: 2,
        funlevel: 4
    },
    {
        name: "Aranka",
        project: "W2D1-2",
        hardshiplevel: 4,
        funlevel: 4
    },
    {
        name: "Aranka",
        project: "W2D2-1",
        hardshiplevel: 3,
        funlevel: 4
    },
    {
        name: "Aranka",
        project: "W2D2-2",
        hardshiplevel: 3,
        funlevel: 4
    },
    {
        name: "Aranka",
        project: "W2D2-3",
        hardshiplevel: 1,
        funlevel: 4
    },
    {
        name: "Aranka",
        project: "W2D3-1",
        hardshiplevel: 4,
        funlevel: 3
    },
    {
        name: "Aranka",
        project: "W2D3-2",
        hardshiplevel: 4,
        funlevel: 1
    },
    {
        name: "Aranka",
        project: "W2D3-3",
        hardshiplevel: 1,
        funlevel: 1
    },
    {
        name: "Aranka",
        project: "W2D4-1",
        hardshiplevel: 1,
        funlevel: 4
    },
    {
        name: "Aranka",
        project: "W2D4-2",
        hardshiplevel: 2,
        funlevel: 3
    },
    {
        name: "Aranka",
        project: "W2D4-3",
        hardshiplevel: 2,
        funlevel: 3
    },
    {
        name: "Aranka",
        project: "W2D5 - Project - Filmzoeker",
        hardshiplevel: 2,
        funlevel: 2
    },
    {
        name: "Aranka",
        project: "W3D1-1",
        hardshiplevel: 4,
        funlevel: 2
    },
    {
        name: "Aranka",
        project: "W3D1-2",
        hardshiplevel: 3,
        funlevel: 2
    },
    {
        name: "Aranka",
        project: "W3D1-3",
        hardshiplevel: 1,
        funlevel: 4
    },
    {
        name: "Aranka",
        project: "W3D1-4",
        hardshiplevel: 1,
        funlevel: 3
    },
    {
        name: "Aranka",
        project: "W3D2-1",
        hardshiplevel: 1,
        funlevel: 3
    },
    {
        name: "Aranka",
        project: "W3D2-2",
        hardshiplevel: 2,
        funlevel: 3
    },
    {
        name: "Aranka",
        project: "W3D2-3",
        hardshiplevel: 2,
        funlevel: 3
    },
    {
        name: "Aranka",
        project: "W3D3-1",
        hardshiplevel: 2,
        funlevel: 2
    },
    {
        name: "Aranka",
        project: "W3D3-2",
        hardshiplevel: 4,
        funlevel: 3
    },
    {
        name: "Aranka",
        project: "W3D3-3",
        hardshiplevel: 3,
        funlevel: 3
    },
    {
        name: "Aranka",
        project: "W3D3-4",
        hardshiplevel: 1,
        funlevel: 3
    },
    {
        name: "Aranka",
        project: "W3D4-1",
        hardshiplevel: 1,
        funlevel: 1
    },
    {
        name: "Aranka",
        project: "W3D4-2",
        hardshiplevel: 3,
        funlevel: 2
    },
    {
        name: "Aranka",
        project: "W3D5 - Project - Todo-List",
        hardshiplevel: 1,
        funlevel: 1
    },
    {
        name: "Aranka",
        project: "W4D2-1",
        hardshiplevel: 2,
        funlevel: 1
    },
    {
        name: "Aranka",
        project: "W4D2-2",
        hardshiplevel: 3,
        funlevel: 2
    },
    {
        name: "Aranka",
        project: "W4D2-3",
        hardshiplevel: 2,
        funlevel: 2
    },
    {
        name: "Aranka",
        project: "W4D2-4",
        hardshiplevel: 3,
        funlevel: 4
    },
    {
        name: "Aranka",
        project: "W4D3-1",
        hardshiplevel: 2,
        funlevel: 1
    },
    {
        name: "Aranka",
        project: "W4D3-2",
        hardshiplevel: 4,
        funlevel: 4
    },
    {
        name: "Aranka",
        project: "W4D3-3",
        hardshiplevel: 3,
        funlevel: 1
    },
    {
        name: "Aranka",
        project: "W4D3-4",
        hardshiplevel: 3,
        funlevel: 1
    },
    {
        name: "Aranka",
        project: "W4D3-5",
        hardshiplevel: 4,
        funlevel: 3
    },
    {
        name: "Aranka",
        project: "W4D3 - Project - Next-Level CSS",
        hardshiplevel: 4,
        funlevel: 4
    },
    {
        name: "Aranka",
        project: "W5D4-1",
        hardshiplevel: 1,
        funlevel: 3
    },
    {
        name: "Aranka",
        project: "W5D5 - Project - Lil_Playlist",
        hardshiplevel: 3,
        funlevel: 2
    },
    {
        name: "Aranka",
        project: "W6D1-1",
        hardshiplevel: 1,
        funlevel: 1
    },
    {
        name: "Aranka",
        project: "W6D2-1",
        hardshiplevel: 2,
        funlevel: 2
    },
    {
        name: "Aranka",
        project: "W6D2 - Project - Eindopdracht",
        hardshiplevel: 3,
        funlevel: 4
    },
    {
        name: "Floris",
        project: "SCRUM",
        hardshiplevel: 2,
        funlevel: 1
    },
    {
        name: "Floris",
        project: "W1D1-1",
        hardshiplevel: 4,
        funlevel: 3
    },
    {
        name: "Floris",
        project: "W1D2-1",
        hardshiplevel: 1,
        funlevel: 2
    },
    {
        name: "Floris",
        project: "W1D2-2",
        hardshiplevel: 1,
        funlevel: 4
    },
    {
        name: "Floris",
        project: "W1D2-3",
        hardshiplevel: 1,
        funlevel: 4
    },
    {
        name: "Floris",
        project: "W1D2-4",
        hardshiplevel: 3,
        funlevel: 4
    },
    {
        name: "Floris",
        project: "W1D2-5",
        hardshiplevel: 1,
        funlevel: 3
    },
    {
        name: "Floris",
        project: "W1D3-1",
        hardshiplevel: 2,
        funlevel: 4
    },
    {
        name: "Floris",
        project: "W1D3-2",
        hardshiplevel: 4,
        funlevel: 4
    },
    {
        name: "Floris",
        project: "W1D3-4",
        hardshiplevel: 4,
        funlevel: 2
    },
    {
        name: "Floris",
        project: "W1D3-5",
        hardshiplevel: 2,
        funlevel: 4
    },
    {
        name: "Floris",
        project: "W1D3 - Project - Guess-the-number",
        hardshiplevel: 2,
        funlevel: 2
    },
    {
        name: "Floris",
        project: "W1D4-1",
        hardshiplevel: 1,
        funlevel: 3
    },
    {
        name: "Floris",
        project: "W1D4 - Project - Kleurentoggle",
        hardshiplevel: 4,
        funlevel: 3
    },
    {
        name: "Floris",
        project: "W1D5 - Project - Galgje",
        hardshiplevel: 4,
        funlevel: 4
    },
    {
        name: "Floris",
        project: "W2D1-1",
        hardshiplevel: 2,
        funlevel: 2
    },
    {
        name: "Floris",
        project: "W2D1-2",
        hardshiplevel: 4,
        funlevel: 1
    },
    {
        name: "Floris",
        project: "W2D2-1",
        hardshiplevel: 4,
        funlevel: 1
    },
    {
        name: "Floris",
        project: "W2D2-2",
        hardshiplevel: 2,
        funlevel: 2
    },
    {
        name: "Floris",
        project: "W2D2-3",
        hardshiplevel: 4,
        funlevel: 2
    },
    {
        name: "Floris",
        project: "W2D3-1",
        hardshiplevel: 1,
        funlevel: 1
    },
    {
        name: "Floris",
        project: "W2D3-2",
        hardshiplevel: 1,
        funlevel: 2
    },
    {
        name: "Floris",
        project: "W2D3-3",
        hardshiplevel: 3,
        funlevel: 3
    },
    {
        name: "Floris",
        project: "W2D4-1",
        hardshiplevel: 4,
        funlevel: 4
    },
    {
        name: "Floris",
        project: "W2D4-2",
        hardshiplevel: 3,
        funlevel: 1
    },
    {
        name: "Floris",
        project: "W2D4-3",
        hardshiplevel: 4,
        funlevel: 1
    },
    {
        name: "Floris",
        project: "W2D5 - Project - Filmzoeker",
        hardshiplevel: 4,
        funlevel: 1
    },
    {
        name: "Floris",
        project: "W3D1-1",
        hardshiplevel: 4,
        funlevel: 3
    },
    {
        name: "Floris",
        project: "W3D1-2",
        hardshiplevel: 2,
        funlevel: 3
    },
    {
        name: "Floris",
        project: "W3D1-3",
        hardshiplevel: 2,
        funlevel: 3
    },
    {
        name: "Floris",
        project: "W3D1-4",
        hardshiplevel: 3,
        funlevel: 3
    },
    {
        name: "Floris",
        project: "W3D2-1",
        hardshiplevel: 3,
        funlevel: 2
    },
    {
        name: "Floris",
        project: "W3D2-2",
        hardshiplevel: 2,
        funlevel: 2
    },
    {
        name: "Floris",
        project: "W3D2-3",
        hardshiplevel: 3,
        funlevel: 2
    },
    {
        name: "Floris",
        project: "W3D3-1",
        hardshiplevel: 4,
        funlevel: 4
    },
    {
        name: "Floris",
        project: "W3D3-2",
        hardshiplevel: 2,
        funlevel: 4
    },
    {
        name: "Floris",
        project: "W3D3-3",
        hardshiplevel: 2,
        funlevel: 1
    },
    {
        name: "Floris",
        project: "W3D3-4",
        hardshiplevel: 3,
        funlevel: 2
    },
    {
        name: "Floris",
        project: "W3D4-1",
        hardshiplevel: 1,
        funlevel: 3
    },
    {
        name: "Floris",
        project: "W3D4-2",
        hardshiplevel: 2,
        funlevel: 2
    },
    {
        name: "Floris",
        project: "W3D5 - Project - Todo-List",
        hardshiplevel: 4,
        funlevel: 2
    },
    {
        name: "Floris",
        project: "W4D2-1",
        hardshiplevel: 1,
        funlevel: 4
    },
    {
        name: "Floris",
        project: "W4D2-2",
        hardshiplevel: 2,
        funlevel: 3
    },
    {
        name: "Floris",
        project: "W4D2-3",
        hardshiplevel: 2,
        funlevel: 4
    },
    {
        name: "Floris",
        project: "W4D2-4",
        hardshiplevel: 1,
        funlevel: 2
    },
    {
        name: "Floris",
        project: "W4D3-1",
        hardshiplevel: 1,
        funlevel: 4
    },
    {
        name: "Floris",
        project: "W4D3-2",
        hardshiplevel: 4,
        funlevel: 4
    },
    {
        name: "Floris",
        project: "W4D3-3",
        hardshiplevel: 3,
        funlevel: 2
    },
    {
        name: "Floris",
        project: "W4D3-4",
        hardshiplevel: 2,
        funlevel: 2
    },
    {
        name: "Floris",
        project: "W4D3-5",
        hardshiplevel: 4,
        funlevel: 1
    },
    {
        name: "Floris",
        project: "W4D3 - Project - Next-Level CSS",
        hardshiplevel: 2,
        funlevel: 2
    },
    {
        name: "Floris",
        project: "W5D4-1",
        hardshiplevel: 1,
        funlevel: 3
    },
    {
        name: "Floris",
        project: "W5D5 - Project - Lil_Playlist",
        hardshiplevel: 3,
        funlevel: 1
    },
    {
        name: "Floris",
        project: "W6D1-1",
        hardshiplevel: 3,
        funlevel: 2
    },
    {
        name: "Floris",
        project: "W6D2-1",
        hardshiplevel: 1,
        funlevel: 1
    },
    {
        name: "Floris",
        project: "W6D2 - Project - Eindopdracht",
        hardshiplevel: 4,
        funlevel: 1
    },
    {
        name: "Hector",
        project: "SCRUM",
        hardshiplevel: 1,
        funlevel: 2
    },
    {
        name: "Hector",
        project: "W1D1-1",
        hardshiplevel: 1,
        funlevel: 4
    },
    {
        name: "Hector",
        project: "W1D2-1",
        hardshiplevel: 2,
        funlevel: 4
    },
    {
        name: "Hector",
        project: "W1D2-2",
        hardshiplevel: 2,
        funlevel: 3
    },
    {
        name: "Hector",
        project: "W1D2-3",
        hardshiplevel: 1,
        funlevel: 2
    },
    {
        name: "Hector",
        project: "W1D2-4",
        hardshiplevel: 1,
        funlevel: 3
    },
    {
        name: "Hector",
        project: "W1D2-5",
        hardshiplevel: 3,
        funlevel: 1
    },
    {
        name: "Hector",
        project: "W1D3-1",
        hardshiplevel: 1,
        funlevel: 4
    },
    {
        name: "Hector",
        project: "W1D3-2",
        hardshiplevel: 4,
        funlevel: 3
    },
    {
        name: "Hector",
        project: "W1D3-4",
        hardshiplevel: 3,
        funlevel: 1
    },
    {
        name: "Hector",
        project: "W1D3-5",
        hardshiplevel: 4,
        funlevel: 2
    },
    {
        name: "Hector",
        project: "W1D3 - Project - Guess-the-number",
        hardshiplevel: 3,
        funlevel: 1
    },
    {
        name: "Hector",
        project: "W1D4-1",
        hardshiplevel: 1,
        funlevel: 1
    },
    {
        name: "Hector",
        project: "W1D4 - Project - Kleurentoggle",
        hardshiplevel: 1,
        funlevel: 3
    },
    {
        name: "Hector",
        project: "W1D5 - Project - Galgje",
        hardshiplevel: 2,
        funlevel: 4
    },
    {
        name: "Hector",
        project: "W2D1-1",
        hardshiplevel: 4,
        funlevel: 4
    },
    {
        name: "Hector",
        project: "W2D1-2",
        hardshiplevel: 3,
        funlevel: 2
    },
    {
        name: "Hector",
        project: "W2D2-1",
        hardshiplevel: 4,
        funlevel: 3
    },
    {
        name: "Hector",
        project: "W2D2-2",
        hardshiplevel: 1,
        funlevel: 2
    },
    {
        name: "Hector",
        project: "W2D2-3",
        hardshiplevel: 3,
        funlevel: 2
    },
    {
        name: "Hector",
        project: "W2D3-1",
        hardshiplevel: 3,
        funlevel: 1
    },
    {
        name: "Hector",
        project: "W2D3-2",
        hardshiplevel: 4,
        funlevel: 2
    },
    {
        name: "Hector",
        project: "W2D3-3",
        hardshiplevel: 4,
        funlevel: 2
    },
    {
        name: "Hector",
        project: "W2D4-1",
        hardshiplevel: 2,
        funlevel: 4
    },
    {
        name: "Hector",
        project: "W2D4-2",
        hardshiplevel: 4,
        funlevel: 1
    },
    {
        name: "Hector",
        project: "W2D4-3",
        hardshiplevel: 3,
        funlevel: 2
    },
    {
        name: "Hector",
        project: "W2D5 - Project - Filmzoeker",
        hardshiplevel: 4,
        funlevel: 1
    },
    {
        name: "Hector",
        project: "W3D1-1",
        hardshiplevel: 1,
        funlevel: 1
    },
    {
        name: "Hector",
        project: "W3D1-2",
        hardshiplevel: 1,
        funlevel: 4
    },
    {
        name: "Hector",
        project: "W3D1-3",
        hardshiplevel: 3,
        funlevel: 2
    },
    {
        name: "Hector",
        project: "W3D1-4",
        hardshiplevel: 4,
        funlevel: 3
    },
    {
        name: "Hector",
        project: "W3D2-1",
        hardshiplevel: 1,
        funlevel: 3
    },
    {
        name: "Hector",
        project: "W3D2-2",
        hardshiplevel: 4,
        funlevel: 3
    },
    {
        name: "Hector",
        project: "W3D2-3",
        hardshiplevel: 2,
        funlevel: 1
    },
    {
        name: "Hector",
        project: "W3D3-1",
        hardshiplevel: 4,
        funlevel: 4
    },
    {
        name: "Hector",
        project: "W3D3-2",
        hardshiplevel: 3,
        funlevel: 1
    },
    {
        name: "Hector",
        project: "W3D3-3",
        hardshiplevel: 2,
        funlevel: 4
    },
    {
        name: "Hector",
        project: "W3D3-4",
        hardshiplevel: 4,
        funlevel: 1
    },
    {
        name: "Hector",
        project: "W3D4-1",
        hardshiplevel: 3,
        funlevel: 4
    },
    {
        name: "Hector",
        project: "W3D4-2",
        hardshiplevel: 1,
        funlevel: 4
    },
    {
        name: "Hector",
        project: "W3D5 - Project - Todo-List",
        hardshiplevel: 2,
        funlevel: 4
    },
    {
        name: "Hector",
        project: "W4D2-1",
        hardshiplevel: 1,
        funlevel: 1
    },
    {
        name: "Hector",
        project: "W4D2-2",
        hardshiplevel: 2,
        funlevel: 1
    },
    {
        name: "Hector",
        project: "W4D2-3",
        hardshiplevel: 3,
        funlevel: 3
    },
    {
        name: "Hector",
        project: "W4D2-4",
        hardshiplevel: 1,
        funlevel: 3
    },
    {
        name: "Hector",
        project: "W4D3-1",
        hardshiplevel: 3,
        funlevel: 3
    },
    {
        name: "Hector",
        project: "W4D3-2",
        hardshiplevel: 1,
        funlevel: 4
    },
    {
        name: "Hector",
        project: "W4D3-3",
        hardshiplevel: 3,
        funlevel: 1
    },
    {
        name: "Hector",
        project: "W4D3-4",
        hardshiplevel: 1,
        funlevel: 3
    },
    {
        name: "Hector",
        project: "W4D3-5",
        hardshiplevel: 1,
        funlevel: 2
    },
    {
        name: "Hector",
        project: "W4D3 - Project - Next-Level CSS",
        hardshiplevel: 3,
        funlevel: 1
    },
    {
        name: "Hector",
        project: "W5D4-1",
        hardshiplevel: 3,
        funlevel: 4
    },
    {
        name: "Hector",
        project: "W5D5 - Project - Lil_Playlist",
        hardshiplevel: 3,
        funlevel: 1
    },
    {
        name: "Hector",
        project: "W6D1-1",
        hardshiplevel: 1,
        funlevel: 1
    },
    {
        name: "Hector",
        project: "W6D2-1",
        hardshiplevel: 4,
        funlevel: 2
    },
    {
        name: "Hector",
        project: "W6D2 - Project - Eindopdracht",
        hardshiplevel: 2,
        funlevel: 4
    },
    {
        name: "Martina",
        project: "SCRUM",
        hardshiplevel: 1,
        funlevel: 1
    },
    {
        name: "Martina",
        project: "W1D1-1",
        hardshiplevel: 4,
        funlevel: 1
    },
    {
        name: "Martina",
        project: "W1D2-1",
        hardshiplevel: 3,
        funlevel: 3
    },
    {
        name: "Martina",
        project: "W1D2-2",
        hardshiplevel: 2,
        funlevel: 1
    },
    {
        name: "Martina",
        project: "W1D2-3",
        hardshiplevel: 2,
        funlevel: 1
    },
    {
        name: "Martina",
        project: "W1D2-4",
        hardshiplevel: 4,
        funlevel: 2
    },
    {
        name: "Martina",
        project: "W1D2-5",
        hardshiplevel: 3,
        funlevel: 4
    },
    {
        name: "Martina",
        project: "W1D3-1",
        hardshiplevel: 3,
        funlevel: 4
    },
    {
        name: "Martina",
        project: "W1D3-2",
        hardshiplevel: 2,
        funlevel: 1
    },
    {
        name: "Martina",
        project: "W1D3-4",
        hardshiplevel: 3,
        funlevel: 2
    },
    {
        name: "Martina",
        project: "W1D3-5",
        hardshiplevel: 1,
        funlevel: 1
    },
    {
        name: "Martina",
        project: "W1D3 - Project - Guess-the-number",
        hardshiplevel: 2,
        funlevel: 2
    },
    {
        name: "Martina",
        project: "W1D4-1",
        hardshiplevel: 4,
        funlevel: 2
    },
    {
        name: "Martina",
        project: "W1D4 - Project - Kleurentoggle",
        hardshiplevel: 1,
        funlevel: 3
    },
    {
        name: "Martina",
        project: "W1D5 - Project - Galgje",
        hardshiplevel: 1,
        funlevel: 4
    },
    {
        name: "Martina",
        project: "W2D1-1",
        hardshiplevel: 1,
        funlevel: 4
    },
    {
        name: "Martina",
        project: "W2D1-2",
        hardshiplevel: 4,
        funlevel: 2
    },
    {
        name: "Martina",
        project: "W2D2-1",
        hardshiplevel: 4,
        funlevel: 1
    },
    {
        name: "Martina",
        project: "W2D2-2",
        hardshiplevel: 3,
        funlevel: 3
    },
    {
        name: "Martina",
        project: "W2D2-3",
        hardshiplevel: 3,
        funlevel: 1
    },
    {
        name: "Martina",
        project: "W2D3-1",
        hardshiplevel: 4,
        funlevel: 2
    },
    {
        name: "Martina",
        project: "W2D3-2",
        hardshiplevel: 3,
        funlevel: 4
    },
    {
        name: "Martina",
        project: "W2D3-3",
        hardshiplevel: 3,
        funlevel: 3
    },
    {
        name: "Martina",
        project: "W2D4-1",
        hardshiplevel: 1,
        funlevel: 4
    },
    {
        name: "Martina",
        project: "W2D4-2",
        hardshiplevel: 3,
        funlevel: 4
    },
    {
        name: "Martina",
        project: "W2D4-3",
        hardshiplevel: 3,
        funlevel: 4
    },
    {
        name: "Martina",
        project: "W2D5 - Project - Filmzoeker",
        hardshiplevel: 2,
        funlevel: 4
    },
    {
        name: "Martina",
        project: "W3D1-1",
        hardshiplevel: 1,
        funlevel: 1
    },
    {
        name: "Martina",
        project: "W3D1-2",
        hardshiplevel: 3,
        funlevel: 3
    },
    {
        name: "Martina",
        project: "W3D1-3",
        hardshiplevel: 3,
        funlevel: 1
    },
    {
        name: "Martina",
        project: "W3D1-4",
        hardshiplevel: 3,
        funlevel: 2
    },
    {
        name: "Martina",
        project: "W3D2-1",
        hardshiplevel: 1,
        funlevel: 2
    },
    {
        name: "Martina",
        project: "W3D2-2",
        hardshiplevel: 2,
        funlevel: 4
    },
    {
        name: "Martina",
        project: "W3D2-3",
        hardshiplevel: 3,
        funlevel: 1
    },
    {
        name: "Martina",
        project: "W3D3-1",
        hardshiplevel: 1,
        funlevel: 4
    },
    {
        name: "Martina",
        project: "W3D3-2",
        hardshiplevel: 4,
        funlevel: 1
    },
    {
        name: "Martina",
        project: "W3D3-3",
        hardshiplevel: 3,
        funlevel: 3
    },
    {
        name: "Martina",
        project: "W3D3-4",
        hardshiplevel: 2,
        funlevel: 3
    },
    {
        name: "Martina",
        project: "W3D4-1",
        hardshiplevel: 4,
        funlevel: 4
    },
    {
        name: "Martina",
        project: "W3D4-2",
        hardshiplevel: 3,
        funlevel: 1
    },
    {
        name: "Martina",
        project: "W3D5 - Project - Todo-List",
        hardshiplevel: 2,
        funlevel: 3
    },
    {
        name: "Martina",
        project: "W4D2-1",
        hardshiplevel: 3,
        funlevel: 4
    },
    {
        name: "Martina",
        project: "W4D2-2",
        hardshiplevel: 1,
        funlevel: 2
    },
    {
        name: "Martina",
        project: "W4D2-3",
        hardshiplevel: 3,
        funlevel: 4
    },
    {
        name: "Martina",
        project: "W4D2-4",
        hardshiplevel: 4,
        funlevel: 1
    },
    {
        name: "Martina",
        project: "W4D3-1",
        hardshiplevel: 2,
        funlevel: 4
    },
    {
        name: "Martina",
        project: "W4D3-2",
        hardshiplevel: 1,
        funlevel: 3
    },
    {
        name: "Martina",
        project: "W4D3-3",
        hardshiplevel: 2,
        funlevel: 4
    },
    {
        name: "Martina",
        project: "W4D3-4",
        hardshiplevel: 4,
        funlevel: 1
    },
    {
        name: "Martina",
        project: "W4D3-5",
        hardshiplevel: 3,
        funlevel: 2
    },
    {
        name: "Martina",
        project: "W4D3 - Project - Next-Level CSS",
        hardshiplevel: 3,
        funlevel: 4
    },
    {
        name: "Martina",
        project: "W5D4-1",
        hardshiplevel: 1,
        funlevel: 4
    },
    {
        name: "Martina",
        project: "W5D5 - Project - Lil_Playlist",
        hardshiplevel: 1,
        funlevel: 1
    },
    {
        name: "Martina",
        project: "W6D1-1",
        hardshiplevel: 2,
        funlevel: 1
    },
    {
        name: "Martina",
        project: "W6D2-1",
        hardshiplevel: 1,
        funlevel: 4
    },
    {
        name: "Martina",
        project: "W6D2 - Project - Eindopdracht",
        hardshiplevel: 1,
        funlevel: 4
    },
    {
        name: "Maurits",
        project: "SCRUM",
        hardshiplevel: 3,
        funlevel: 4
    },
    {
        name: "Maurits",
        project: "W1D1-1",
        hardshiplevel: 4,
        funlevel: 3
    },
    {
        name: "Maurits",
        project: "W1D2-1",
        hardshiplevel: 2,
        funlevel: 2
    },
    {
        name: "Maurits",
        project: "W1D2-2",
        hardshiplevel: 1,
        funlevel: 4
    },
    {
        name: "Maurits",
        project: "W1D2-3",
        hardshiplevel: 2,
        funlevel: 2
    },
    {
        name: "Maurits",
        project: "W1D2-4",
        hardshiplevel: 3,
        funlevel: 1
    },
    {
        name: "Maurits",
        project: "W1D2-5",
        hardshiplevel: 2,
        funlevel: 3
    },
    {
        name: "Maurits",
        project: "W1D3-1",
        hardshiplevel: 2,
        funlevel: 4
    },
    {
        name: "Maurits",
        project: "W1D3-2",
        hardshiplevel: 2,
        funlevel: 2
    },
    {
        name: "Maurits",
        project: "W1D3-4",
        hardshiplevel: 2,
        funlevel: 2
    },
    {
        name: "Maurits",
        project: "W1D3-5",
        hardshiplevel: 1,
        funlevel: 3
    },
    {
        name: "Maurits",
        project: "W1D3 - Project - Guess-the-number",
        hardshiplevel: 1,
        funlevel: 1
    },
    {
        name: "Maurits",
        project: "W1D4-1",
        hardshiplevel: 3,
        funlevel: 4
    },
    {
        name: "Maurits",
        project: "W1D4 - Project - Kleurentoggle",
        hardshiplevel: 4,
        funlevel: 1
    },
    {
        name: "Maurits",
        project: "W1D5 - Project - Galgje",
        hardshiplevel: 3,
        funlevel: 2
    },
    {
        name: "Maurits",
        project: "W2D1-1",
        hardshiplevel: 1,
        funlevel: 1
    },
    {
        name: "Maurits",
        project: "W2D1-2",
        hardshiplevel: 2,
        funlevel: 3
    },
    {
        name: "Maurits",
        project: "W2D2-1",
        hardshiplevel: 1,
        funlevel: 2
    },
    {
        name: "Maurits",
        project: "W2D2-2",
        hardshiplevel: 4,
        funlevel: 1
    },
    {
        name: "Maurits",
        project: "W2D2-3",
        hardshiplevel: 2,
        funlevel: 2
    },
    {
        name: "Maurits",
        project: "W2D3-1",
        hardshiplevel: 2,
        funlevel: 2
    },
    {
        name: "Maurits",
        project: "W2D3-2",
        hardshiplevel: 3,
        funlevel: 3
    },
    {
        name: "Maurits",
        project: "W2D3-3",
        hardshiplevel: 2,
        funlevel: 1
    },
    {
        name: "Maurits",
        project: "W2D4-1",
        hardshiplevel: 1,
        funlevel: 3
    },
    {
        name: "Maurits",
        project: "W2D4-2",
        hardshiplevel: 3,
        funlevel: 2
    },
    {
        name: "Maurits",
        project: "W2D4-3",
        hardshiplevel: 3,
        funlevel: 3
    },
    {
        name: "Maurits",
        project: "W2D5 - Project - Filmzoeker",
        hardshiplevel: 3,
        funlevel: 1
    },
    {
        name: "Maurits",
        project: "W3D1-1",
        hardshiplevel: 4,
        funlevel: 4
    },
    {
        name: "Maurits",
        project: "W3D1-2",
        hardshiplevel: 1,
        funlevel: 3
    },
    {
        name: "Maurits",
        project: "W3D1-3",
        hardshiplevel: 1,
        funlevel: 4
    },
    {
        name: "Maurits",
        project: "W3D1-4",
        hardshiplevel: 1,
        funlevel: 2
    },
    {
        name: "Maurits",
        project: "W3D2-1",
        hardshiplevel: 1,
        funlevel: 4
    },
    {
        name: "Maurits",
        project: "W3D2-2",
        hardshiplevel: 1,
        funlevel: 1
    },
    {
        name: "Maurits",
        project: "W3D2-3",
        hardshiplevel: 4,
        funlevel: 3
    },
    {
        name: "Maurits",
        project: "W3D3-1",
        hardshiplevel: 1,
        funlevel: 1
    },
    {
        name: "Maurits",
        project: "W3D3-2",
        hardshiplevel: 2,
        funlevel: 1
    },
    {
        name: "Maurits",
        project: "W3D3-3",
        hardshiplevel: 1,
        funlevel: 3
    },
    {
        name: "Maurits",
        project: "W3D3-4",
        hardshiplevel: 4,
        funlevel: 1
    },
    {
        name: "Maurits",
        project: "W3D4-1",
        hardshiplevel: 4,
        funlevel: 4
    },
    {
        name: "Maurits",
        project: "W3D4-2",
        hardshiplevel: 1,
        funlevel: 3
    },
    {
        name: "Maurits",
        project: "W3D5 - Project - Todo-List",
        hardshiplevel: 3,
        funlevel: 4
    },
    {
        name: "Maurits",
        project: "W4D2-1",
        hardshiplevel: 3,
        funlevel: 1
    },
    {
        name: "Maurits",
        project: "W4D2-2",
        hardshiplevel: 4,
        funlevel: 4
    },
    {
        name: "Maurits",
        project: "W4D2-3",
        hardshiplevel: 4,
        funlevel: 1
    },
    {
        name: "Maurits",
        project: "W4D2-4",
        hardshiplevel: 2,
        funlevel: 3
    },
    {
        name: "Maurits",
        project: "W4D3-1",
        hardshiplevel: 3,
        funlevel: 1
    },
    {
        name: "Maurits",
        project: "W4D3-2",
        hardshiplevel: 3,
        funlevel: 2
    },
    {
        name: "Maurits",
        project: "W4D3-3",
        hardshiplevel: 3,
        funlevel: 4
    },
    {
        name: "Maurits",
        project: "W4D3-4",
        hardshiplevel: 1,
        funlevel: 3
    },
    {
        name: "Maurits",
        project: "W4D3-5",
        hardshiplevel: 2,
        funlevel: 1
    },
    {
        name: "Maurits",
        project: "W4D3 - Project - Next-Level CSS",
        hardshiplevel: 2,
        funlevel: 3
    },
    {
        name: "Maurits",
        project: "W5D4-1",
        hardshiplevel: 1,
        funlevel: 3
    },
    {
        name: "Maurits",
        project: "W5D5 - Project - Lil_Playlist",
        hardshiplevel: 4,
        funlevel: 2
    },
    {
        name: "Maurits",
        project: "W6D1-1",
        hardshiplevel: 1,
        funlevel: 3
    },
    {
        name: "Maurits",
        project: "W6D2-1",
        hardshiplevel: 1,
        funlevel: 4
    },
    {
        name: "Maurits",
        project: "W6D2 - Project - Eindopdracht",
        hardshiplevel: 3,
        funlevel: 3
    },
    {
        name: "Rahima",
        project: "SCRUM",
        hardshiplevel: 2,
        funlevel: 4
    },
    {
        name: "Rahima",
        project: "W1D1-1",
        hardshiplevel: 3,
        funlevel: 4
    },
    {
        name: "Rahima",
        project: "W1D2-1",
        hardshiplevel: 2,
        funlevel: 4
    },
    {
        name: "Rahima",
        project: "W1D2-2",
        hardshiplevel: 1,
        funlevel: 2
    },
    {
        name: "Rahima",
        project: "W1D2-3",
        hardshiplevel: 1,
        funlevel: 3
    },
    {
        name: "Rahima",
        project: "W1D2-4",
        hardshiplevel: 1,
        funlevel: 2
    },
    {
        name: "Rahima",
        project: "W1D2-5",
        hardshiplevel: 1,
        funlevel: 3
    },
    {
        name: "Rahima",
        project: "W1D3-1",
        hardshiplevel: 1,
        funlevel: 1
    },
    {
        name: "Rahima",
        project: "W1D3-2",
        hardshiplevel: 2,
        funlevel: 4
    },
    {
        name: "Rahima",
        project: "W1D3-4",
        hardshiplevel: 1,
        funlevel: 2
    },
    {
        name: "Rahima",
        project: "W1D3-5",
        hardshiplevel: 2,
        funlevel: 2
    },
    {
        name: "Rahima",
        project: "W1D3 - Project - Guess-the-number",
        hardshiplevel: 3,
        funlevel: 1
    },
    {
        name: "Rahima",
        project: "W1D4-1",
        hardshiplevel: 4,
        funlevel: 3
    },
    {
        name: "Rahima",
        project: "W1D4 - Project - Kleurentoggle",
        hardshiplevel: 2,
        funlevel: 4
    },
    {
        name: "Rahima",
        project: "W1D5 - Project - Galgje",
        hardshiplevel: 3,
        funlevel: 3
    },
    {
        name: "Rahima",
        project: "W2D1-1",
        hardshiplevel: 2,
        funlevel: 2
    },
    {
        name: "Rahima",
        project: "W2D1-2",
        hardshiplevel: 3,
        funlevel: 1
    },
    {
        name: "Rahima",
        project: "W2D2-1",
        hardshiplevel: 1,
        funlevel: 1
    },
    {
        name: "Rahima",
        project: "W2D2-2",
        hardshiplevel: 1,
        funlevel: 1
    },
    {
        name: "Rahima",
        project: "W2D2-3",
        hardshiplevel: 4,
        funlevel: 2
    },
    {
        name: "Rahima",
        project: "W2D3-1",
        hardshiplevel: 1,
        funlevel: 1
    },
    {
        name: "Rahima",
        project: "W2D3-2",
        hardshiplevel: 1,
        funlevel: 4
    },
    {
        name: "Rahima",
        project: "W2D3-3",
        hardshiplevel: 4,
        funlevel: 2
    },
    {
        name: "Rahima",
        project: "W2D4-1",
        hardshiplevel: 4,
        funlevel: 4
    },
    {
        name: "Rahima",
        project: "W2D4-2",
        hardshiplevel: 4,
        funlevel: 4
    },
    {
        name: "Rahima",
        project: "W2D4-3",
        hardshiplevel: 2,
        funlevel: 3
    },
    {
        name: "Rahima",
        project: "W2D5 - Project - Filmzoeker",
        hardshiplevel: 3,
        funlevel: 1
    },
    {
        name: "Rahima",
        project: "W3D1-1",
        hardshiplevel: 1,
        funlevel: 1
    },
    {
        name: "Rahima",
        project: "W3D1-2",
        hardshiplevel: 1,
        funlevel: 2
    },
    {
        name: "Rahima",
        project: "W3D1-3",
        hardshiplevel: 2,
        funlevel: 3
    },
    {
        name: "Rahima",
        project: "W3D1-4",
        hardshiplevel: 2,
        funlevel: 4
    },
    {
        name: "Rahima",
        project: "W3D2-1",
        hardshiplevel: 3,
        funlevel: 2
    },
    {
        name: "Rahima",
        project: "W3D2-2",
        hardshiplevel: 1,
        funlevel: 4
    },
    {
        name: "Rahima",
        project: "W3D2-3",
        hardshiplevel: 2,
        funlevel: 1
    },
    {
        name: "Rahima",
        project: "W3D3-1",
        hardshiplevel: 3,
        funlevel: 1
    },
    {
        name: "Rahima",
        project: "W3D3-2",
        hardshiplevel: 4,
        funlevel: 4
    },
    {
        name: "Rahima",
        project: "W3D3-3",
        hardshiplevel: 1,
        funlevel: 4
    },
    {
        name: "Rahima",
        project: "W3D3-4",
        hardshiplevel: 2,
        funlevel: 2
    },
    {
        name: "Rahima",
        project: "W3D4-1",
        hardshiplevel: 1,
        funlevel: 2
    },
    {
        name: "Rahima",
        project: "W3D4-2",
        hardshiplevel: 3,
        funlevel: 3
    },
    {
        name: "Rahima",
        project: "W3D5 - Project - Todo-List",
        hardshiplevel: 2,
        funlevel: 4
    },
    {
        name: "Rahima",
        project: "W4D2-1",
        hardshiplevel: 2,
        funlevel: 4
    },
    {
        name: "Rahima",
        project: "W4D2-2",
        hardshiplevel: 4,
        funlevel: 3
    },
    {
        name: "Rahima",
        project: "W4D2-3",
        hardshiplevel: 3,
        funlevel: 3
    },
    {
        name: "Rahima",
        project: "W4D2-4",
        hardshiplevel: 4,
        funlevel: 1
    },
    {
        name: "Rahima",
        project: "W4D3-1",
        hardshiplevel: 2,
        funlevel: 1
    },
    {
        name: "Rahima",
        project: "W4D3-2",
        hardshiplevel: 1,
        funlevel: 1
    },
    {
        name: "Rahima",
        project: "W4D3-3",
        hardshiplevel: 2,
        funlevel: 1
    },
    {
        name: "Rahima",
        project: "W4D3-4",
        hardshiplevel: 2,
        funlevel: 2
    },
    {
        name: "Rahima",
        project: "W4D3-5",
        hardshiplevel: 3,
        funlevel: 2
    },
    {
        name: "Rahima",
        project: "W4D3 - Project - Next-Level CSS",
        hardshiplevel: 1,
        funlevel: 2
    },
    {
        name: "Rahima",
        project: "W5D4-1",
        hardshiplevel: 3,
        funlevel: 3
    },
    {
        name: "Rahima",
        project: "W5D5 - Project - Lil_Playlist",
        hardshiplevel: 2,
        funlevel: 3
    },
    {
        name: "Rahima",
        project: "W6D1-1",
        hardshiplevel: 4,
        funlevel: 4
    },
    {
        name: "Rahima",
        project: "W6D2-1",
        hardshiplevel: 1,
        funlevel: 4
    },
    {
        name: "Rahima",
        project: "W6D2 - Project - Eindopdracht",
        hardshiplevel: 4,
        funlevel: 1
    },
    {
        name: "Sandra",
        project: "SCRUM",
        hardshiplevel: 4,
        funlevel: 1
    },
    {
        name: "Sandra",
        project: "W1D1-1",
        hardshiplevel: 2,
        funlevel: 4
    },
    {
        name: "Sandra",
        project: "W1D2-1",
        hardshiplevel: 3,
        funlevel: 4
    },
    {
        name: "Sandra",
        project: "W1D2-2",
        hardshiplevel: 3,
        funlevel: 2
    },
    {
        name: "Sandra",
        project: "W1D2-3",
        hardshiplevel: 3,
        funlevel: 4
    },
    {
        name: "Sandra",
        project: "W1D2-4",
        hardshiplevel: 3,
        funlevel: 1
    },
    {
        name: "Sandra",
        project: "W1D2-5",
        hardshiplevel: 4,
        funlevel: 3
    },
    {
        name: "Sandra",
        project: "W1D3-1",
        hardshiplevel: 1,
        funlevel: 1
    },
    {
        name: "Sandra",
        project: "W1D3-2",
        hardshiplevel: 1,
        funlevel: 1
    },
    {
        name: "Sandra",
        project: "W1D3-4",
        hardshiplevel: 3,
        funlevel: 3
    },
    {
        name: "Sandra",
        project: "W1D3-5",
        hardshiplevel: 4,
        funlevel: 3
    },
    {
        name: "Sandra",
        project: "W1D3 - Project - Guess-the-number",
        hardshiplevel: 2,
        funlevel: 4
    },
    {
        name: "Sandra",
        project: "W1D4-1",
        hardshiplevel: 3,
        funlevel: 2
    },
    {
        name: "Sandra",
        project: "W1D4 - Project - Kleurentoggle",
        hardshiplevel: 1,
        funlevel: 3
    },
    {
        name: "Sandra",
        project: "W1D5 - Project - Galgje",
        hardshiplevel: 3,
        funlevel: 3
    },
    {
        name: "Sandra",
        project: "W2D1-1",
        hardshiplevel: 4,
        funlevel: 1
    },
    {
        name: "Sandra",
        project: "W2D1-2",
        hardshiplevel: 4,
        funlevel: 3
    },
    {
        name: "Sandra",
        project: "W2D2-1",
        hardshiplevel: 3,
        funlevel: 4
    },
    {
        name: "Sandra",
        project: "W2D2-2",
        hardshiplevel: 2,
        funlevel: 3
    },
    {
        name: "Sandra",
        project: "W2D2-3",
        hardshiplevel: 4,
        funlevel: 3
    },
    {
        name: "Sandra",
        project: "W2D3-1",
        hardshiplevel: 1,
        funlevel: 2
    },
    {
        name: "Sandra",
        project: "W2D3-2",
        hardshiplevel: 3,
        funlevel: 2
    },
    {
        name: "Sandra",
        project: "W2D3-3",
        hardshiplevel: 2,
        funlevel: 2
    },
    {
        name: "Sandra",
        project: "W2D4-1",
        hardshiplevel: 1,
        funlevel: 3
    },
    {
        name: "Sandra",
        project: "W2D4-2",
        hardshiplevel: 2,
        funlevel: 4
    },
    {
        name: "Sandra",
        project: "W2D4-3",
        hardshiplevel: 2,
        funlevel: 2
    },
    {
        name: "Sandra",
        project: "W2D5 - Project - Filmzoeker",
        hardshiplevel: 2,
        funlevel: 4
    },
    {
        name: "Sandra",
        project: "W3D1-1",
        hardshiplevel: 3,
        funlevel: 3
    },
    {
        name: "Sandra",
        project: "W3D1-2",
        hardshiplevel: 3,
        funlevel: 4
    },
    {
        name: "Sandra",
        project: "W3D1-3",
        hardshiplevel: 2,
        funlevel: 4
    },
    {
        name: "Sandra",
        project: "W3D1-4",
        hardshiplevel: 2,
        funlevel: 2
    },
    {
        name: "Sandra",
        project: "W3D2-1",
        hardshiplevel: 2,
        funlevel: 4
    },
    {
        name: "Sandra",
        project: "W3D2-2",
        hardshiplevel: 2,
        funlevel: 3
    },
    {
        name: "Sandra",
        project: "W3D2-3",
        hardshiplevel: 1,
        funlevel: 2
    },
    {
        name: "Sandra",
        project: "W3D3-1",
        hardshiplevel: 1,
        funlevel: 2
    },
    {
        name: "Sandra",
        project: "W3D3-2",
        hardshiplevel: 2,
        funlevel: 2
    },
    {
        name: "Sandra",
        project: "W3D3-3",
        hardshiplevel: 4,
        funlevel: 4
    },
    {
        name: "Sandra",
        project: "W3D3-4",
        hardshiplevel: 3,
        funlevel: 2
    },
    {
        name: "Sandra",
        project: "W3D4-1",
        hardshiplevel: 2,
        funlevel: 3
    },
    {
        name: "Sandra",
        project: "W3D4-2",
        hardshiplevel: 1,
        funlevel: 1
    },
    {
        name: "Sandra",
        project: "W3D5 - Project - Todo-List",
        hardshiplevel: 1,
        funlevel: 2
    },
    {
        name: "Sandra",
        project: "W4D2-1",
        hardshiplevel: 3,
        funlevel: 3
    },
    {
        name: "Sandra",
        project: "W4D2-2",
        hardshiplevel: 1,
        funlevel: 1
    },
    {
        name: "Sandra",
        project: "W4D2-3",
        hardshiplevel: 3,
        funlevel: 4
    },
    {
        name: "Sandra",
        project: "W4D2-4",
        hardshiplevel: 1,
        funlevel: 4
    },
    {
        name: "Sandra",
        project: "W4D3-1",
        hardshiplevel: 3,
        funlevel: 1
    },
    {
        name: "Sandra",
        project: "W4D3-2",
        hardshiplevel: 1,
        funlevel: 3
    },
    {
        name: "Sandra",
        project: "W4D3-3",
        hardshiplevel: 2,
        funlevel: 4
    },
    {
        name: "Sandra",
        project: "W4D3-4",
        hardshiplevel: 1,
        funlevel: 4
    },
    {
        name: "Sandra",
        project: "W4D3-5",
        hardshiplevel: 1,
        funlevel: 3
    },
    {
        name: "Sandra",
        project: "W4D3 - Project - Next-Level CSS",
        hardshiplevel: 3,
        funlevel: 4
    },
    {
        name: "Sandra",
        project: "W5D4-1",
        hardshiplevel: 1,
        funlevel: 1
    },
    {
        name: "Sandra",
        project: "W5D5 - Project - Lil_Playlist",
        hardshiplevel: 2,
        funlevel: 2
    },
    {
        name: "Sandra",
        project: "W6D1-1",
        hardshiplevel: 1,
        funlevel: 4
    },
    {
        name: "Sandra",
        project: "W6D2-1",
        hardshiplevel: 2,
        funlevel: 3
    },
    {
        name: "Sandra",
        project: "W6D2 - Project - Eindopdracht",
        hardshiplevel: 4,
        funlevel: 1
    },
    {
        name: "Wietske",
        project: "SCRUM",
        hardshiplevel: 1,
        funlevel: 1
    },
    {
        name: "Wietske",
        project: "W1D1-1",
        hardshiplevel: 4,
        funlevel: 3
    },
    {
        name: "Wietske",
        project: "W1D2-1",
        hardshiplevel: 1,
        funlevel: 4
    },
    {
        name: "Wietske",
        project: "W1D2-2",
        hardshiplevel: 1,
        funlevel: 2
    },
    {
        name: "Wietske",
        project: "W1D2-3",
        hardshiplevel: 2,
        funlevel: 3
    },
    {
        name: "Wietske",
        project: "W1D2-4",
        hardshiplevel: 2,
        funlevel: 1
    },
    {
        name: "Wietske",
        project: "W1D2-5",
        hardshiplevel: 3,
        funlevel: 4
    },
    {
        name: "Wietske",
        project: "W1D3-1",
        hardshiplevel: 1,
        funlevel: 2
    },
    {
        name: "Wietske",
        project: "W1D3-2",
        hardshiplevel: 1,
        funlevel: 4
    },
    {
        name: "Wietske",
        project: "W1D3-4",
        hardshiplevel: 2,
        funlevel: 1
    },
    {
        name: "Wietske",
        project: "W1D3-5",
        hardshiplevel: 3,
        funlevel: 4
    },
    {
        name: "Wietske",
        project: "W1D3 - Project - Guess-the-number",
        hardshiplevel: 2,
        funlevel: 4
    },
    {
        name: "Wietske",
        project: "W1D4-1",
        hardshiplevel: 2,
        funlevel: 4
    },
    {
        name: "Wietske",
        project: "W1D4 - Project - Kleurentoggle",
        hardshiplevel: 2,
        funlevel: 3
    },
    {
        name: "Wietske",
        project: "W1D5 - Project - Galgje",
        hardshiplevel: 3,
        funlevel: 3
    },
    {
        name: "Wietske",
        project: "W2D1-1",
        hardshiplevel: 3,
        funlevel: 1
    },
    {
        name: "Wietske",
        project: "W2D1-2",
        hardshiplevel: 4,
        funlevel: 1
    },
    {
        name: "Wietske",
        project: "W2D2-1",
        hardshiplevel: 2,
        funlevel: 2
    },
    {
        name: "Wietske",
        project: "W2D2-2",
        hardshiplevel: 2,
        funlevel: 4
    },
    {
        name: "Wietske",
        project: "W2D2-3",
        hardshiplevel: 3,
        funlevel: 4
    },
    {
        name: "Wietske",
        project: "W2D3-1",
        hardshiplevel: 2,
        funlevel: 1
    },
    {
        name: "Wietske",
        project: "W2D3-2",
        hardshiplevel: 1,
        funlevel: 1
    },
    {
        name: "Wietske",
        project: "W2D3-3",
        hardshiplevel: 2,
        funlevel: 3
    },
    {
        name: "Wietske",
        project: "W2D4-1",
        hardshiplevel: 1,
        funlevel: 1
    },
    {
        name: "Wietske",
        project: "W2D4-2",
        hardshiplevel: 2,
        funlevel: 4
    },
    {
        name: "Wietske",
        project: "W2D4-3",
        hardshiplevel: 4,
        funlevel: 3
    },
    {
        name: "Wietske",
        project: "W2D5 - Project - Filmzoeker",
        hardshiplevel: 2,
        funlevel: 2
    },
    {
        name: "Wietske",
        project: "W3D1-1",
        hardshiplevel: 1,
        funlevel: 3
    },
    {
        name: "Wietske",
        project: "W3D1-2",
        hardshiplevel: 4,
        funlevel: 4
    },
    {
        name: "Wietske",
        project: "W3D1-3",
        hardshiplevel: 4,
        funlevel: 2
    },
    {
        name: "Wietske",
        project: "W3D1-4",
        hardshiplevel: 1,
        funlevel: 4
    },
    {
        name: "Wietske",
        project: "W3D2-1",
        hardshiplevel: 3,
        funlevel: 2
    },
    {
        name: "Wietske",
        project: "W3D2-2",
        hardshiplevel: 1,
        funlevel: 3
    },
    {
        name: "Wietske",
        project: "W3D2-3",
        hardshiplevel: 2,
        funlevel: 4
    },
    {
        name: "Wietske",
        project: "W3D3-1",
        hardshiplevel: 1,
        funlevel: 4
    },
    {
        name: "Wietske",
        project: "W3D3-2",
        hardshiplevel: 3,
        funlevel: 1
    },
    {
        name: "Wietske",
        project: "W3D3-3",
        hardshiplevel: 1,
        funlevel: 3
    },
    {
        name: "Wietske",
        project: "W3D3-4",
        hardshiplevel: 3,
        funlevel: 4
    },
    {
        name: "Wietske",
        project: "W3D4-1",
        hardshiplevel: 3,
        funlevel: 4
    },
    {
        name: "Wietske",
        project: "W3D4-2",
        hardshiplevel: 4,
        funlevel: 2
    },
    {
        name: "Wietske",
        project: "W3D5 - Project - Todo-List",
        hardshiplevel: 2,
        funlevel: 4
    },
    {
        name: "Wietske",
        project: "W4D2-1",
        hardshiplevel: 3,
        funlevel: 3
    },
    {
        name: "Wietske",
        project: "W4D2-2",
        hardshiplevel: 2,
        funlevel: 4
    },
    {
        name: "Wietske",
        project: "W4D2-3",
        hardshiplevel: 1,
        funlevel: 2
    },
    {
        name: "Wietske",
        project: "W4D2-4",
        hardshiplevel: 4,
        funlevel: 3
    },
    {
        name: "Wietske",
        project: "W4D3-1",
        hardshiplevel: 2,
        funlevel: 1
    },
    {
        name: "Wietske",
        project: "W4D3-2",
        hardshiplevel: 1,
        funlevel: 2
    },
    {
        name: "Wietske",
        project: "W4D3-3",
        hardshiplevel: 1,
        funlevel: 4
    },
    {
        name: "Wietske",
        project: "W4D3-4",
        hardshiplevel: 3,
        funlevel: 4
    },
    {
        name: "Wietske",
        project: "W4D3-5",
        hardshiplevel: 4,
        funlevel: 3
    },
    {
        name: "Wietske",
        project: "W4D3 - Project - Next-Level CSS",
        hardshiplevel: 4,
        funlevel: 2
    },
    {
        name: "Wietske",
        project: "W5D4-1",
        hardshiplevel: 3,
        funlevel: 1
    },
    {
        name: "Wietske",
        project: "W5D5 - Project - Lil_Playlist",
        hardshiplevel: 4,
        funlevel: 2
    },
    {
        name: "Wietske",
        project: "W6D1-1",
        hardshiplevel: 1,
        funlevel: 1
    },
    {
        name: "Wietske",
        project: "W6D2-1",
        hardshiplevel: 2,
        funlevel: 1
    },
    {
        name: "Wietske",
        project: "W6D2 - Project - Eindopdracht",
        hardshiplevel: 1,
        funlevel: 2
    },
    {
        name: "Storm",
        project: "SCRUM",
        hardshiplevel: 1,
        funlevel: 1
    },
    {
        name: "Storm",
        project: "W1D1-1",
        hardshiplevel: 2,
        funlevel: 2
    },
    {
        name: "Storm",
        project: "W1D2-1",
        hardshiplevel: 2,
        funlevel: 3
    },
    {
        name: "Storm",
        project: "W1D2-2",
        hardshiplevel: 1,
        funlevel: 3
    },
    {
        name: "Storm",
        project: "W1D2-3",
        hardshiplevel: 1,
        funlevel: 2
    },
    {
        name: "Storm",
        project: "W1D2-4",
        hardshiplevel: 4,
        funlevel: 3
    },
    {
        name: "Storm",
        project: "W1D2-5",
        hardshiplevel: 3,
        funlevel: 3
    },
    {
        name: "Storm",
        project: "W1D3-1",
        hardshiplevel: 2,
        funlevel: 3
    },
    {
        name: "Storm",
        project: "W1D3-2",
        hardshiplevel: 1,
        funlevel: 1
    },
    {
        name: "Storm",
        project: "W1D3-4",
        hardshiplevel: 1,
        funlevel: 1
    },
    {
        name: "Storm",
        project: "W1D3-5",
        hardshiplevel: 2,
        funlevel: 2
    },
    {
        name: "Storm",
        project: "W1D3 - Project - Guess-the-number",
        hardshiplevel: 3,
        funlevel: 4
    },
    {
        name: "Storm",
        project: "W1D4-1",
        hardshiplevel: 4,
        funlevel: 2
    },
    {
        name: "Storm",
        project: "W1D4 - Project - Kleurentoggle",
        hardshiplevel: 3,
        funlevel: 2
    },
    {
        name: "Storm",
        project: "W1D5 - Project - Galgje",
        hardshiplevel: 4,
        funlevel: 4
    },
    {
        name: "Storm",
        project: "W2D1-1",
        hardshiplevel: 2,
        funlevel: 4
    },
    {
        name: "Storm",
        project: "W2D1-2",
        hardshiplevel: 3,
        funlevel: 2
    },
    {
        name: "Storm",
        project: "W2D2-1",
        hardshiplevel: 4,
        funlevel: 4
    },
    {
        name: "Storm",
        project: "W2D2-2",
        hardshiplevel: 2,
        funlevel: 1
    },
    {
        name: "Storm",
        project: "W2D2-3",
        hardshiplevel: 1,
        funlevel: 1
    },
    {
        name: "Storm",
        project: "W2D3-1",
        hardshiplevel: 2,
        funlevel: 3
    },
    {
        name: "Storm",
        project: "W2D3-2",
        hardshiplevel: 3,
        funlevel: 4
    },
    {
        name: "Storm",
        project: "W2D3-3",
        hardshiplevel: 3,
        funlevel: 2
    },
    {
        name: "Storm",
        project: "W2D4-1",
        hardshiplevel: 3,
        funlevel: 4
    },
    {
        name: "Storm",
        project: "W2D4-2",
        hardshiplevel: 4,
        funlevel: 3
    },
    {
        name: "Storm",
        project: "W2D4-3",
        hardshiplevel: 2,
        funlevel: 1
    },
    {
        name: "Storm",
        project: "W2D5 - Project - Filmzoeker",
        hardshiplevel: 4,
        funlevel: 1
    },
    {
        name: "Storm",
        project: "W3D1-1",
        hardshiplevel: 2,
        funlevel: 1
    },
    {
        name: "Storm",
        project: "W3D1-2",
        hardshiplevel: 2,
        funlevel: 2
    },
    {
        name: "Storm",
        project: "W3D1-3",
        hardshiplevel: 1,
        funlevel: 2
    },
    {
        name: "Storm",
        project: "W3D1-4",
        hardshiplevel: 2,
        funlevel: 3
    },
    {
        name: "Storm",
        project: "W3D2-1",
        hardshiplevel: 1,
        funlevel: 4
    },
    {
        name: "Storm",
        project: "W3D2-2",
        hardshiplevel: 3,
        funlevel: 3
    },
    {
        name: "Storm",
        project: "W3D2-3",
        hardshiplevel: 3,
        funlevel: 4
    },
    {
        name: "Storm",
        project: "W3D3-1",
        hardshiplevel: 3,
        funlevel: 4
    },
    {
        name: "Storm",
        project: "W3D3-2",
        hardshiplevel: 1,
        funlevel: 2
    },
    {
        name: "Storm",
        project: "W3D3-3",
        hardshiplevel: 3,
        funlevel: 1
    },
    {
        name: "Storm",
        project: "W3D3-4",
        hardshiplevel: 3,
        funlevel: 1
    },
    {
        name: "Storm",
        project: "W3D4-1",
        hardshiplevel: 2,
        funlevel: 4
    },
    {
        name: "Storm",
        project: "W3D4-2",
        hardshiplevel: 3,
        funlevel: 4
    },
    {
        name: "Storm",
        project: "W3D5 - Project - Todo-List",
        hardshiplevel: 3,
        funlevel: 2
    },
    {
        name: "Storm",
        project: "W4D2-1",
        hardshiplevel: 2,
        funlevel: 1
    },
    {
        name: "Storm",
        project: "W4D2-2",
        hardshiplevel: 3,
        funlevel: 3
    },
    {
        name: "Storm",
        project: "W4D2-3",
        hardshiplevel: 2,
        funlevel: 2
    },
    {
        name: "Storm",
        project: "W4D2-4",
        hardshiplevel: 3,
        funlevel: 4
    },
    {
        name: "Storm",
        project: "W4D3-1",
        hardshiplevel: 3,
        funlevel: 4
    },
    {
        name: "Storm",
        project: "W4D3-2",
        hardshiplevel: 2,
        funlevel: 3
    },
    {
        name: "Storm",
        project: "W4D3-3",
        hardshiplevel: 1,
        funlevel: 1
    },
    {
        name: "Storm",
        project: "W4D3-4",
        hardshiplevel: 3,
        funlevel: 1
    },
    {
        name: "Storm",
        project: "W4D3-5",
        hardshiplevel: 2,
        funlevel: 3
    },
    {
        name: "Storm",
        project: "W4D3 - Project - Next-Level CSS",
        hardshiplevel: 4,
        funlevel: 1
    },
    {
        name: "Storm",
        project: "W5D4-1",
        hardshiplevel: 2,
        funlevel: 2
    },
    {
        name: "Storm",
        project: "W5D5 - Project - Lil_Playlist",
        hardshiplevel: 1,
        funlevel: 2
    },
    {
        name: "Storm",
        project: "W6D1-1",
        hardshiplevel: 4,
        funlevel: 4
    },
    {
        name: "Storm",
        project: "W6D2-1",
        hardshiplevel: 1,
        funlevel: 1
    },
    {
        name: "Storm",
        project: "W6D2 - Project - Eindopdracht",
        hardshiplevel: 3,
        funlevel: 3
    },
]

const names = studentData.map((student) => {
    return student.name;
});

const filteredNames = names.filter((value, index, self) => {
    return self.indexOf(value) === index;
});

const data = {
    studentData: studentData,
    studentNames: filteredNames
};

export { data };










