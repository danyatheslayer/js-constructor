import image from './assets/image.jpg'
import {TitleBlock, ImageBlock, ColumnsBlock, TextBlock} from './classes/blocks'

const text = `Тестовое приложение-конструктор`

export const model = [
    new TitleBlock('Конструктор сайтов на чистом JavaScript', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }),
    new ImageBlock(image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '500px',
            height: 'auto'
        },
        alt: 'Kartin04ka'
    }),
    new ColumnsBlock([
        'Раз',
        'Два',
        'Три'
    ], {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold',
            'text-align': 'center'
        }
    }),
    new TextBlock(text, {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold',
            'text-align' : 'center'
        }
    })
]