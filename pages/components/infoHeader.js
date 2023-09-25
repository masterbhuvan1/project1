const subItem = [
  {
    id: 0,
    items: "courses",
    subItems: [
      {
        id: 0,
        name: "class 11 to 12",
        subItemAbout: "competitive exam preparation",
        svg: "./barGraph.svg",
        listPresent: "true",
        list: ["IITJEE", "Neet", "CUET"],
        lists: [
          {
            lid: 0,
            name: "IITJEE",
            subItemAbout: "engineering exam preparation",
            listPresent: "false",
            svg: "./iit.svg",
          },
          {
            lid: 1,
            name: "Neet",
            subItemAbout: "medical exam preparation",
            listPresent: "false",
            svg: "./medical.svg",
          },
          {
            lid: 2,
            name: "CUET",
            subItemAbout: "common university entrance test",
            listPresent: "false",
            svg: "./cuet.svg",
          },
        ],
      },
      {
        id: 1,
        name: "class 9 to 10",
        svg: "./barGraph.svg",
        listPresent: "true",
        subItemAbout: "competitive exam prep,cbse tutions and more",
        list: ["IITJEE Foundation", "Neet Foundation"],
        lists: [
          {
            lid: 0,
            name: "IITJEE",
            subItemAbout: "engineering exam preparation",
            listPresent: "false",
            svg: "./iit.svg",
          },
          {
            lid: 1,
            name: "Neet",
            subItemAbout: "medical exam preparation",
            listPresent: "false",
            svg: "./medical.svg",
          },
          {
            listHeading: true,
            name: "CBSE tutions",
            svg: "null",

            subItemAbout: "null",
          },
          {
            lid: 2,
            name: "English",
            listPresent: "false",
            svg: "./english.svg",
          },
          {
            lid: 3,
            name: "Science",
            listPresent: "false",
            svg: "./science.svg",
          },
          {
            lid: 4,
            name: "Maths",
            listPresent: "false",
            svg: "./math.svg",
          },
        ],
      },
      {
        id: 2,
        name: "class 4 to 8",
        svg: "./barGraph.svg",
        listPresent: "true",
        subItemAbout: "competitive exam prep,cbse tutions and more",
        list: ["IITJEE Foundation", "Neet Foundation"],
        lists: [
          {
            lid: 0,
            name: "Foundation",
            subItemAbout: "engineering and medical exam preparation",
            listPresent: "false",
            svg: "./foundation.svg",
          },
          {
            listHeading: true,
            name: "CBSE tutions",
            svg: "null",

            subItemAbout: "null",
          },
          {
            lid: 2,
            name: "English",
            listPresent: "false",
            svg: "./english.svg",
          },
          {
            lid: 3,
            name: "Science",
            listPresent: "false",
            svg: "./science.svg",
          },
          {
            lid: 4,
            name: "Maths",
            listPresent: "false",
            svg: "./math.svg",
          },
          {
            listHeading: true,
            name: "Infinity Futurz",
            svg: "null",

            subItemAbout: "null",
          },
          {
            lid: 5,
            name: "Young Product Designers Program",
            listPresent: "false",
            subItemAbout: "unleash your creativity",
            svg: "./ypdp.svg",
          },
          {
            lid: 6,
            name: "High Order Tjinking Skills",
            listPresent: "false",
            subItemAbout: "boost your anlytical thinking",
            svg: "./hots.svg",
          },
        ],
      },
      {
        id: 3,
        name: "class 1 to 3",
        svg: "./barGraph.svg",
        listPresent: "true",
        subItemAbout: "english maths science coding and more",
        list: ["IITJEE Foundation", "Neet Foundation"],
        lists: [
          {
            lid: 0,
            name: "Headstart Program",
            subItemAbout: "english + maths + science + coding",
            listPresent: "false",
            svg: "./foundation.svg",
          },
          {
            listHeading: true,
            name: "Infinity Futurz",
            svg: "null",

            subItemAbout: "null",
          },
          {
            lid: 5,
            name: "Young Product Designers Program",
            listPresent: "false",
            subItemAbout: "unleash your creativity",
            svg: "./ypdp.svg",
          },
          {
            lid: 6,
            name: "High Order Thinking Skills",
            listPresent: "false",
            subItemAbout: "boost your anlytical thinking",
            svg: "./hots.svg",
          },
        ],
      },
    ],
  },
  {
    id: 1,
    items: "study materials",
    subItems: [
      {
        id: 0,
        name: "class 11 to 12+",
        subItemAbout: "free material for competitive exams,cbs,isc and more",
        svg: "./barGraph.svg",
        listPresent: "true",
        list: ["IITJEE", "Neet", "CUET"],
        lists: [],
      },
      {
        id: 0,
        name: "class 9 to 10",
        subItemAbout: "competitive exams prep,cbse,tution and more",
        svg: "./barGraph.svg",
        listPresent: "true",
        list: ["IITJEE", "Neet", "CUET"],
        lists: [],
      },
      {
        id: 0,
        name: "class 6 to 8",
        subItemAbout: "competitive exams prep,cbse,tution and more",
        svg: "./barGraph.svg",
        listPresent: "true",
        list: ["IITJEE", "Neet", "CUET"],
        lists: [],
      },
    ],
  },
  {
    id: 3,
    items: "more",
    subItems: [
      {
        id: 0,
        name: "about us",
        svg: "./barGraph.svg",
      },
      {
        id: 1,
        name: "teaching philosophy",

        svg: "./barGraph.svg",
      },
      {
        id: 2,
        name: "book counselling sessions",

        svg: "./barGraph.svg",
      },
      {
        id: 3,
        name: "scholarships",

        svg: "./barGraph.svg",
      },
      {
        id: 4,
        name: "rank predictor",

        svg: "./barGraph.svg",
      },
      {
        id: 5,
        name: "IL for schools",

        svg: "./barGraph.svg",
      },
      {
        id: 6,
        name: "Careers",

        svg: "./barGraph.svg",
      },
    ],
  },
];
export default subItem;
