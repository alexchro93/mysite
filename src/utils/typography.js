import Typography from "typography"

const typography = new Typography({ 
    baseFontSize: '18px',
    scaleRatio: 2.5,
    headerFontFamily: ['Anonymous Pro'],
    bodyFontFamily: ['Nunito'],
    googleFonts: [
        {
            name: 'Nunito',
            styles: [
                '400'
            ],
        }, 
        {
            name: 'Anonymous Pro',
            styles: [
                '400'
            ],
        },
    ],
})

export default typography
