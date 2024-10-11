//@ts-check

const items = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

/**
 * 
 * @param { import("./colortypes").PalletttePallette[] } input 
 * @returns { Record<string, Record<number, string>>}
 */
export const convertPalettteToTailwind = (input) => {
    /** @type {Record<string, Record<number, string>>} */
    const finalRes = {};
    return input.reduce((tailw, item) => {
        const { paletteName, swatches } = item;
        /**
         * @type {Record<number, string>}
         */
        const res = {};

        tailw[paletteName.toLowerCase()] = swatches.reverse().reduce((res, swath, index) => {
            res[items[index]] = "#" + swath.color;
            return res;
        }, res);
        return tailw;
    }, finalRes);
}

export const baseColors = {
    transparent: 'transparent',
    'white': "#FCFCFC",
    "black": "#0F0F0F",
}

export const colors = [
    {
        "paletteName": "Red",
        "swatches": [
            {
                "name": "New Swatch",
                "color": "1A0000"
            },
            {
                "name": "New Swatch",
                "color": "380000"
            },
            {
                "name": "New Swatch",
                "color": "570000"
            },
            {
                "name": "New Swatch",
                "color": "760000"
            },
            {
                "name": "New Swatch",
                "color": "950000"
            },
            {
                "name": "New Swatch",
                "color": "B40000"
            },
            {
                "name": "New Swatch",
                "color": "BC2323"
            },
            {
                "name": "New Swatch",
                "color": "C44949"
            },
            {
                "name": "New Swatch",
                "color": "CB7272"
            },
            {
                "name": "New Swatch",
                "color": "D39E9E"
            }
        ]
    },
    {
        "paletteName": "Green",
        "swatches": [
            {
                "name": "New Swatch",
                "color": "0A1A00"
            },
            {
                "name": "New Swatch",
                "color": "153400"
            },
            {
                "name": "New Swatch",
                "color": "1F4E00"
            },
            {
                "name": "New Swatch",
                "color": "296800"
            },
            {
                "name": "New Swatch",
                "color": "348300"
            },
            {
                "name": "New Swatch",
                "color": "3E9D00"
            },
            {
                "name": "New Swatch",
                "color": "52A919"
            },
            {
                "name": "New Swatch",
                "color": "69B637"
            },
            {
                "name": "New Swatch",
                "color": "82C257"
            },
            {
                "name": "New Swatch",
                "color": "9DCF7C"
            }
        ]
    },
    {
        "paletteName": "Blue",
        "swatches": [
            {
                "name": "New Swatch",
                "color": "000F1A"
            },
            {
                "name": "New Swatch",
                "color": "002A47"
            },
            {
                "name": "New Swatch",
                "color": "004475"
            },
            {
                "name": "New Swatch",
                "color": "005FA3"
            },
            {
                "name": "New Swatch",
                "color": "007AD1"
            },
            {
                "name": "New Swatch",
                "color": "0095FF"
            },
            {
                "name": "New Swatch",
                "color": "30A9FF"
            },
            {
                "name": "New Swatch",
                "color": "60BDFF"
            },
            {
                "name": "New Swatch",
                "color": "8FD1FF"
            },
            {
                "name": "New Swatch",
                "color": "BFE4FF"
            }
        ]
    },
    {
        "paletteName": "Gray",
        "swatches": [
            {
                "name": "New Swatch",
                "color": "12121A"
            },
            {
                "name": "New Swatch",
                "color": "20202B"
            },
            {
                "name": "New Swatch",
                "color": "2F2F3C"
            },
            {
                "name": "New Swatch",
                "color": "3F3F4D"
            },
            {
                "name": "New Swatch",
                "color": "51515E"
            },
            {
                "name": "New Swatch",
                "color": "64646F"
            },
            {
                "name": "New Swatch",
                "color": "7D7D87"
            },
            {
                "name": "New Swatch",
                "color": "97979F"
            },
            {
                "name": "New Swatch",
                "color": "B1B1B7"
            },
            {
                "name": "New Swatch",
                "color": "CECECF"
            }
        ]
    },
    {
        "paletteName": "Purple",
        "swatches": [
            {
                "name": "New Swatch",
                "color": "0F001A"
            },
            {
                "name": "New Swatch",
                "color": "24023B"
            },
            {
                "name": "New Swatch",
                "color": "3A075D"
            },
            {
                "name": "New Swatch",
                "color": "510E7E"
            },
            {
                "name": "New Swatch",
                "color": "6917A0"
            },
            {
                "name": "New Swatch",
                "color": "8223C1"
            },
            {
                "name": "New Swatch",
                "color": "9843D1"
            },
            {
                "name": "New Swatch",
                "color": "B068E0"
            },
            {
                "name": "New Swatch",
                "color": "CA92F0"
            },
            {
                "name": "New Swatch",
                "color": "E5BFFF"
            }
        ]
    },
    {
        "paletteName": "Primary",
        "swatches": [
            {
                "name": "New Swatch",
                "color": "000000"
            },
            {
                "name": "New Swatch",
                "color": "0F0F0F"
            },
            {
                "name": "New Swatch",
                "color": "313131"
            },
            {
                "name": "New Swatch",
                "color": "535353"
            },
            {
                "name": "New Swatch",
                "color": "757575"
            },
            {
                "name": "New Swatch",
                "color": "979797"
            },
            {
                "name": "New Swatch",
                "color": "B9B9B9"
            },
            {
                "name": "New Swatch",
                "color": "DBDBDB"
            },
            {
                "name": "New Swatch",
                "color": "FCFCFC"
            },
            {
                "name": "New Swatch",
                "color": "FFFFFF"
            }
        ]
    }
]