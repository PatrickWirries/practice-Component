import {Course} from "../model/course";

export const COURSES:Course[] = [
    {
        id: 1,
        title : "CSCI 160: Computer Science - I",
        url: 'https://www.ndsu.edu/themes/ndsu/logo.svg',
        description: "An introductory programming class",
        level: '100 level',
        credits: 4
    },
    {
        id: 2,
        title: "CSCI 161: Computer Science - II",
        url: 'https://www.ndsu.edu/themes/ndsu/logo.svg',
        description: "Introduction to data structures, algorithms and program complexity",
        level: '100 level',
        credits: 4
    },

    {
        id: 3,
        title: 'CSCI 213: Modern Software Development ',
        url: 'https://www.ndsu.edu/themes/ndsu/logo.svg',
        description: "Introduction to modern software developemnt. C#",
        level: '200 level',
        credits: 3
    },

    {
        id: 4,
        title: "CSCI 313: Advanced Software Development",
        url: 'https://www.ndsu.edu/themes/ndsu/logo.svg',
        description: "Introduction to modern software frameworks",
        level: '200 level',
        credits: 3
    },
    {
        id: 5,
        title: 'CSCI 222: Discrete Math',
        url: 'https://www.ndsu.edu/themes/ndsu/logo.svg',
        description: "Discrete Math",
        level: '200 level',
        credits: 3
    },
    {
        id: 6,
        title: 'CSCI 374: Computer Organization',
        url: 'https://www.ndsu.edu/themes/ndsu/logo.svg',
        description: 'Computer Architecture and organization',
        level: '300 level',
        credits: 3
    },
 
];
