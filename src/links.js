import { faFacebookF, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export const routes = [
    {
        path: '/',
        text: 'Home',
    },
    {
        path: '/about',
        text: 'About',
        dropdown: [
            {
                path: '/about/cv',
                text: 'Curriculum Vitae'
            }
        ]
    },
    {
        path: '/campaigns',
        text: 'Campaigns',
    },
    {
        path: '/case-study',
        text: 'Case Study',
    },
    // {
    //     path: '/contact',
    //     text: 'Contact',
    // },
    {
        path: '/blog',
        text: 'Blog',
    }
]

export const socials = [
    {
        name: 'twitter',
        icon: faTwitter,
        size: '2x',
        url: 'https://twitter.com/eazymartinez'
    },
    {
        name: 'facebook',
        icon: faFacebookF,
        size: '2x',
        url: 'https://www.facebook.com/marayo11/'
    },
    {
        name: 'instagram',
        icon: faInstagram,
        size: '2x',
        url: 'https://www.instagram.com/eazymartinez/'
    },
    {
        name: 'linkedin',
        icon: faLinkedin,
        size: '2x',
        url: 'https://www.linkedin.com/in/martin-agunwa-168491a9/'
    }
]