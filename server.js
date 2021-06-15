const express = require('express')
const cors = require('cors')
const app = express()
const port = 777

app.use(cors())

app.get('/ducks', (req, res) => {
    const ducks = {
        'count': 7,
        'page': 1,
        'perPage': 10,
        'sort': {
            'by': 'id',
            'direction': 'asc'
        },
        'search': {
            'name': 'duck',
            'feet_color': 'orange',
        },
        'results': [
            {
                'id': 1,
                'name': 'Bufflehead Duck',
                'mass': 14,
                'body_size': 'compact',
                'feet_color': 'orange',
                'url_image': 'https://res.cloudinary.com/dozx3wxth/image/upload/v1623790612/bufflehead_ulksab.jpg',
            },
            {
                'id': 2,
                'name': 'Harlequin Duck',
                'mass': 20,
                'body_size': 'medium',
                'feet_color': 'brown',
                'url_image': 'https://res.cloudinary.com/dozx3wxth/image/upload/v1623790612/harlequin_nojjzi.jpg',
            },
            {
                'id': 3,
                'name': 'Mallard Duck',
                'mass': 50,
                'body_size': 'large',
                'feet_color': 'orange',
                'url_image': 'https://res.cloudinary.com/dozx3wxth/image/upload/v1623790611/mallard_oukwib.jpg',
            },
            {
                'id': 4,
                'name': 'Hooded Merganser Duck',
                'mass_oz': 25,
                'body_size': 'medium',
                'feet_color': 'brown',
                'url_image': 'https://res.cloudinary.com/dozx3wxth/image/upload/v1623790612/merg_gflumv.jpg',
            },
            {
                'id': 5,
                'name': 'Muscovy Duck',
                'mass': 180,
                'body_size': 'giant',
                'feet_color': 'yellow',
                'url_image': 'https://res.cloudinary.com/dozx3wxth/image/upload/v1623790611/muscovy_dh4avw.jpg',
            },
            {
                'id': 6,
                'name': 'Redhead Duck',
                'mass': 35,
                'body_size': 'medium',
                'feet_color': 'brown',
                'url_image': 'https://res.cloudinary.com/dozx3wxth/image/upload/v1623790612/redhead_wkjbzw.jpg',
            },
            {
                'id': 7,
                'name': 'Wood Duck',
                'mass': 15,
                'body_size': 'compact',
                'feet_color': 'yellow',
                'url_image': 'https://res.cloudinary.com/dozx3wxth/image/upload/v1623790612/wood_k9g6zv.jpg',
            },
        ]
    };

    res.json(ducks)
})

app.get('/other', (req, res) => {
    res.json('Pilgrim 3')
})

app.listen(port, () => {
    console.log(`Testing at http://localhost:${port}`)
})