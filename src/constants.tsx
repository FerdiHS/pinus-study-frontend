/**
 * Format: color_name_opacity
 * If opacity is not defined, then it is 100% by default.
 */
export const Colors = {
    black: "#141212",
    black_10: "#14121210",
    black_25: "#14121225",
    blue: "#F4F4F4",
    blue_accent: "#222638",
    light_blue: "#748EFF",
    red: "#FF3A3A",
    red_accent: "#CD3838",
    dark_grey: "#403B3B",
    dark_grey_75: "#2D2D2F75",
    light_grey: "#8F8F8F",
    light_grey_75: "#8F8F8F75",
    light_grey_50: "#8F8F8F50",
    light_grey_25: "#8F8F8F25",
    light_grey_two: "#D9D9D9", // input background color
    white: "#F5F5F5",
    white_accent: "#BDBDBD", // for pressed module threads
    yellow: "#EFB61E",
    yellow_accent: "#c2910e",
    purple: "#8C52FF",
    light_new_red: '#FFDBDB',
    new_red: "#F16F6F",
    new_red_80: "#F16F6F80",
    new_red_accent: "#892C2C",
    new_blue: "#ABEAE2",
    new_blue_accent: "#2C3B79",
    new_blue_50: "#728DFF50",
    new_blue_75: "#728DFF75",
    very_light_blue: "#CAFAF4",
    light_yellow: '#FEF0E9',
    light_yellow_75: '#FEF0E975',
}

export const ScreenSizes = {
    extra_small: '@media only screen and (max-width: 600px)',
    small_up: '@media only screen and (min-width: 600px)',
    small_below: '@media only screen and (max-width: 768px)',
    medium_up: '@media only screen and (min-width: 768px)',
    medium_below: '@media only screen and (max-width: 992px)',
    large_up: '@media only screen and (min-width: 992px)',
    large_below: '@media only screen and (max-width: 1200px)',
    extra_large_up: '@media only screen and (min-width: 1200px)',
    extra_large_below: '@media only screen and (max-width: 2000px)',
    huge_up:  '@media only screen and (min-width: 1500px)',
    extra_huge_up: '@media only screen and (min-width: 2000px)'
};

// export const API_URL = 'http://localhost:8080';
export const API_URL = 'https://pinus-study-backend-deployment-production.up.railway.app';

export const LOGIN_URL = `${API_URL}/login`;
export const USER_URL = `${API_URL}/user`;
