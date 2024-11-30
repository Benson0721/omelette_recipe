
module.exports = {
    plugins: [
        require('postcss-sorting')({
            order: [
                'custom-properties',
                'dollar-variables',
                'declarations',
                'at-rules',
                'rules',
            ],

            'properties-order': [
                "display",
                "position",
                "float",
                "clear",
                "visibility",
                "overflow",
                "width",
                "height",
                "margin",
                "padding",
                "border",
                "background",
                "color",
                "font",
                "text-decoration",
                "text-align",
                "vertical-align",
                "white-space",
                "break-word",
                "content",
                "cursor",
                "border-radius",
                "box-shadow",
                "text-shadow",
                "background: linear-gradient"
            ],

            'unspecified-properties-position': 'bottom',
        })
    ],
};