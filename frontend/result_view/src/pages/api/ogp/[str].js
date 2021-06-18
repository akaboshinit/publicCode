import * as path from 'path'
const { createCanvas, registerFont, loadImage } = require('canvas')


export default async (req, res) => {
    registerFont(path.resolve('./public/font/ArialUnicodeMS.ttf'), { family: 'Arial' });
    registerFont(path.resolve('./public/font/KosugiMaru-Regular.ttf'), { family: 'KosugiMaru' });
    
    const width = 600
    const height = 315
    const canvas = createCanvas(width, height)
    const context = canvas.getContext('2d')

    const {
        query: { str },
    } = req

    const backgroundImage = await loadImage(
        path.resolve('./public/white.png')
    )
    context.drawImage(backgroundImage, 0, 0, width, height)

    // context.font = '40px mouhitsu'
    // context.font = '40px "Arial","KosugiMaru"'
    context.font = '40px "KosugiMaru"'
    context.fillStyle = '#424242'
    context.textAlign = 'center'
    context.textBaseline = 'middle'
    context.fillText(`${str}`, 300, 157)

    const buffer = canvas.toBuffer()

    res.writeHead(200, {
        'Content-Type': 'image/png',
        'Content-Length': buffer.length,
    })
    res.end(buffer, 'binary');
}