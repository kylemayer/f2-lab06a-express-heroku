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
            'by': '_id',
            'direction': 'asc'
        },
        'search': {
            'name': 'duck',
            'feet_color': 'orange',
        },
        'results': [
            {
                '_id': '5ff4fb7cd89993a89cc6544f',
                'name': 'Bufflehead Duck',
                'id': 1,
                'mass_oz': 14,
                'body_size': 'compact',
                'feet_color': 'orange',
                'url_image': 'https://res.cloudinary.com/dozx3wxth/image/upload/v1623790612/bufflehead_ulksab.jpg',
            },
            {
                '_id': '5ff4fb7cd89993a89cc65444',
                'name': 'Harlequin Duck',
                'id': 2,
                'mass_oz': 20,
                'body_size': 'medium',
                'feet_color': 'brown',
                'url_image': 'https://res.cloudinary.com/dozx3wxth/image/upload/v1623790612/harlequin_nojjzi.jpg',
            },
            {
                '_id': '5ff4fb7cd89993a89cc65454',
                'name': 'Mallard Duck',
                'id': 3,
                'mass_oz': 50,
                'body_size': 'large',
                'feet_color': 'orange',
                'url_image': 'https://res.cloudinary.com/dozx3wxth/image/upload/v1623790611/mallard_oukwib.jpg',
            },
            {
                '_id': '5ff4fb7cd89993a89cc6545d',
                'id': 4,
                'name': 'Hooded Merganser Duck',
                'mass_oz': 25,
                'body_size': 'medium',
                'feet_color': 'brown',
                'url_image': 'https://res.cloudinary.com/dozx3wxth/image/upload/v1623790612/merg_gflumv.jpg',
            },
            {
                '_id': '5ff4fb7cd89993a89cc6545e',
                'name': 'Muscovy Duck',
                'id': 5,
                'mass_oz': 180,
                'body_size': 'giant',
                'feet_color': 'yellow',
                'url_image': 'https://res.cloudinary.com/dozx3wxth/image/upload/v1623790611/muscovy_dh4avw.jpg',
            },
            {
                '_id': '5ff4fb7cd89993a89cc6546a',
                'name': 'Redhead Duck',
                'id': 6,
                'mass_oz': 35,
                'body_size': 'medium',
                'feet_color': 'brown',
                'url_image': 'https://res.cloudinary.com/dozx3wxth/image/upload/v1623790612/redhead_wkjbzw.jpg',
            },
            {
                '_id': '5ff4fb7cd89993a89cc6546e',
                'name': 'Wood Duck',
                'id': 7,
                'mass_oz': 15,
                'body_size': 'compact',
                'feet_color': 'yellow',
                'url_image': 'https://res.cloudinary.com/dozx3wxth/image/upload/v1623790612/wood_k9g6zv.jpg',
            },
        ]
    };

    res.json(ducks)
})

app.get('/ducks/:id', (req, res) => {
    const ducks = {
        'count': 7,
        'page': 1,
        'perPage': 10,
        'sort': {
            'by': '_id',
            'direction': 'asc'
        },
        'search': {
            'name': 'duck',
            'feet_color': 'orange',
        },
        'results': [
            {
                '_id': '5ff4fb7cd89993a89cc6544f',
                'name': 'Bufflehead Duck',
                'id': 1,
                'mass_oz': 14,
                'body_size': 'compact',
                'feet_color': 'orange',
                'url_image': 'https://res.cloudinary.com/dozx3wxth/image/upload/v1623790612/bufflehead_ulksab.jpg',
            },
            {
                '_id': '5ff4fb7cd89993a89cc65444',
                'name': 'Harlequin Duck',
                'id': 2,
                'mass_oz': 20,
                'body_size': 'medium',
                'feet_color': 'brown',
                'url_image': 'https://res.cloudinary.com/dozx3wxth/image/upload/v1623790612/harlequin_nojjzi.jpg',
            },
            {
                '_id': '5ff4fb7cd89993a89cc65454',
                'name': 'Mallard Duck',
                'id': 3,
                'mass_oz': 50,
                'body_size': 'large',
                'feet_color': 'orange',
                'url_image': 'https://res.cloudinary.com/dozx3wxth/image/upload/v1623790611/mallard_oukwib.jpg',
            },
            {
                '_id': '5ff4fb7cd89993a89cc6545d',
                'id': 4,
                'name': 'Hooded Merganser Duck',
                'mass_oz': 25,
                'body_size': 'medium',
                'feet_color': 'brown',
                'url_image': 'https://res.cloudinary.com/dozx3wxth/image/upload/v1623790612/merg_gflumv.jpg',
            },
            {
                '_id': '5ff4fb7cd89993a89cc6545e',
                'name': 'Muscovy Duck',
                'id': 5,
                'mass_oz': 180,
                'body_size': 'giant',
                'feet_color': 'yellow',
                'url_image': 'https://res.cloudinary.com/dozx3wxth/image/upload/v1623790611/muscovy_dh4avw.jpg',
            },
            {
                '_id': '5ff4fb7cd89993a89cc6546a',
                'name': 'Redhead Duck',
                'id': 6,
                'mass_oz': 35,
                'body_size': 'medium',
                'feet_color': 'brown',
                'url_image': 'https://res.cloudinary.com/dozx3wxth/image/upload/v1623790612/redhead_wkjbzw.jpg',
            },
            {
                '_id': '5ff4fb7cd89993a89cc6546e',
                'name': 'Wood Duck',
                'id': 7,
                'mass_oz': 15,
                'body_size': 'compact',
                'feet_color': 'yellow',
                'url_image': 'https://res.cloudinary.com/dozx3wxth/image/upload/v1623790612/wood_k9g6zv.jpg',
            },
        ]
    };

    const id = Number(req.params.id)

    const duck = ducks.results.find((duck) => duck.id === id)

    res.json(duck)
})

app.listen(port, () => {
    console.log(`Testing at http://localhost:${port}`)
})