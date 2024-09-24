const locationsMenu = [
    {
        state: 'Missouri',
        cities: [
            { city: 'St. Louis', route: '/locations/mo/stlouis' },
        ],
    },
    {
        state: 'Pennsylvania',
        cities: [
            { city: 'Philadelphia', route: '/locations/pa/philadelphia' },
            { city: 'Pittsburgh', route: '/locations/pa/pittsburgh' },
        ],
    },
    {
        state: 'Texas',
        cities: [
            { city: 'Austin', route: '/locations/tx/austin' },
            { city: 'Dallas', route: '/locations/tx/dallas' },
            { city: 'Fort Worth', route: '/locations/tx/fortworth' },
            { city: 'Fulshear', route: '/locations/tx/fulshear' },
            { city: 'Houston', route: '/locations/tx/houston' },
            { city: 'McKinney', route: '/locations/tx/mckinney' },
            { city: 'Pearland', route: '/locations/tx/pearland' },
            { city: 'San Antonio', route: '/locations/tx/sanantonio' },
            { city: 'Spring', route: '/locations/tx/spring' },
            { city: 'Tomball', route: '/locations/tx/tomball' },
            { city: 'Sugar Land', route: '/locations/tx/sugarland' },
            { city: 'Katy', route: '/locations/tx/katy' },
            { city: 'Conroe', route: '/locations/tx/conroe' },
            { city: 'Cypress', route: '/locations/tx/cypress' },
            { city: 'Richmond', route: '/locations/tx/richmond' },
            { city: 'Irving', route: '/locations/tx/irving' },
        ],
    },
    {
        state: 'Virginia',
        cities: [
            { city: 'Alexandria', route: '/locations/va/alexandria' },
            { city: 'Richmond', route: '/locations/va/richmond' },
        ],
    },
    {
        state: 'North Carolina',
        cities: [
            { city: 'Charlotte', route: '/locations/nc/charlotte' },
        ],
    },
]


const STATES_LIST = [
    { id: 1, title: 'California', value: 'CA' },
    { id: 2, title: 'Florida', value: 'FL' },
    { id: 3, title: 'Georgia', value: 'GA' },
    { id: 4, title: 'Illinois', value: 'IL' },
    { id: 5, title: 'Massachusetts', value: 'MA' },
    { id: 6, title: 'Maryland', value: 'MD' },
    { id: 7, title: 'Missouri', value: 'MO' },
    { id: 8, title: 'Pennsylvania', value: 'PA' },
    { id: 9, title: 'Texas', value: 'TX' },
    { id: 10, title: 'Virginia', value: 'VA' },
    { id: 11, title: 'North Carolina', value: 'NC' },
]

const CITITES_LIST = {
    CA: [
        { id: 'CA1', title: 'Sacramento', value: 'sacramento' },
        { id: 'CA2', title: 'San Jose', value: 'san_jose' },
    ],
    FL: [
        { id: 'FL1', title: 'Jacksonville', value: 'jacksonville' },
        { id: 'FL2', title: 'Miami', value: 'miami' },
        { id: 'FL3', title: 'Orlando', value: 'orlando' },
        { id: 'FL4', title: 'Tampa', value: 'tampa' },
    ],
    GA: [
        { id: 'GA1', title: 'Atlanta', value: 'atlanta' },
    ],
    IL: [
        { id: 'IL1', title: 'Chicago', value: 'chicago' },
    ],
    MA: [
        { id: 'MA1', title: 'Boston', value: 'boston' },
    ],
    MD: [
        { id: 'MD1', title: 'Baltimore', value: 'baltimore' },
    ],
    MO: [
        { id: 'MO1', title: 'St. Louis', value: 'st_louis' },
    ],
}