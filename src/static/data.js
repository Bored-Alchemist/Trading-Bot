import {
  shippingIc,
  discountIc,
  pigIc,
} from '../styles/icon-variables';

export const PRODUCTS = [
  {
    image: require('../../img/imba/img_dress.png'), 
    name: 'Full Length Dress',
    price: 99.69,
    size: ['XS', 'S', 'M', 'L', 'XL'],
    color: ['#99CE66', '#121314', '#9B9B9B', '#3B5998', '#D0021B'],
    slides: [
      {
        image: require('../../img/imba/img.png'),
      },
      {
        image: require('../../img/imba/img_2.png'),
      },
      {
        image: require('../../img/imba/img_3.png'),
      },
    ]
  },
  {
    image: require('../../img/imba/img_bodysuit.png'), 
    name: 'Trim Cami Dress',
    price: 99.69,
    size: ['XS', 'S', 'M', 'L', 'XL'],
    color: ['#121314', '#9B9B9B', '#3B5998', '#D0021B'],
    slides: [
      {
        image: require('../../img/imba/img.png'),
      },
      {
        image: require('../../img/imba/img_2.png'),
      },
      {
        image: require('../../img/imba/img_3.png'),
      },
    ]
  },
  {
    image: require('../../img/imba/img_top.png'), 
    name: 'White Dressrosa',
    price: 99.69,
    color: ['#99CE66', '#121314', '#9B9B9B', '#3B5998'],
    size: ['XS', 'S', 'M', 'L', 'XL'],
    slides: [
      {
        image: require('../../img/imba/img.png'),
      },
      {
        image: require('../../img/imba/img_2.png'),
      },
      {
        image: require('../../img/imba/img_3.png'),
      },
    ]
  },
  {
    image: require('../../img/imba/img_jean.png'), 
    name: 'Full Length Dress',
    price: 99.69,
    size: ['XS', 'S', 'M', 'L', 'XL'],
    color: ['#99CE66', '#9B9B9B', '#3B5998', '#D0021B'],
    slides: [
      {
        image: require('../../img/imba/img.png'),
      },
      {
        image: require('../../img/imba/img_2.png'),
      },
      {
        image: require('../../img/imba/img_3.png'),
      },
    ]
  },
];

export const CATEGORIES = [
  {
    image: require('../../img/imba/img_banner_woman.png'), 
    name: 'For woman',
    count: 113,
    childCategories: [
      {
        image: require('../../img/imba/img_dress.png'), 
        name: 'Dress',
        count: 113 
      },
      {
        image: require('../../img/imba/img_tshirt.png'), 
        name: 'T-Shirt',
        count: 113 
      },
      {
        image: require('../../img/imba/img_jean.png'), 
        name: 'Jeans',
        count: 26
      },
      {
        image: require('../../img/imba/img_bodysuit.png'), 
        name: 'Bodysuit',
        count: 26
      },
      {
        image: require('../../img/imba/img_phong.png'), 
        name: 'SweatShirt',
        count: 26
      },
      {
        image: require('../../img/imba/img_bara.png'), 
        name: 'Bara',
        count: 26
      },
    ]
  },
  {
    image: require('../../img/imba/img_banner_man.png'), 
    name: 'For man',
    count: 113,
    childCategories: [
      {
        image: require('../../img/imba/img_tshirt.png'), 
        name: 'T-Shirt',
        count: 113 
      },
      {
        image: require('../../img/imba/img_bara.png'), 
        name: 'Bara',
        count: 26
      },
    ]
  },
  {
    image: require('../../img/imba/img_banner_kid.png'), 
    name: 'For kid',
    count: 113,
    childCategories: [
      {
        image: require('../../img/imba/img_tshirt.png'), 
        name: 'T-Shirt',
        count: 113 
      },
      {
        image: require('../../img/imba/img_jean.png'), 
        name: 'Jeans',
        count: 26
      },
    ]
  },
];

export const SUB_CATEGORIES = [
  {
    image: require('../../img/imba/new_arrival.png'), 
    name: 'New Arrival',
    count: 10 
  },
  {
    image: require('../../img/imba/img_top.png'), 
    name: 'Top Rated',
    count: 48 
  },
  {
    image: require('../../img/imba/img_winter.png'), 
    name: 'Winter Collection',
    count: 26
  },
  {
    image: require('../../img/imba/img_denim.png'), 
    name: 'Denim Collection',
    count: 26
  },
];

export const PRODUCT_REVIEWS = [
  {
    image: require('../../img/imba/oval_1.png'), 
    name: 'Emma Marsh',
    review: 'Finally A Top Secret Way You Can Get Google Adwords Pay Per ',
  },
  {
    image: require('../../img/imba/oval_3.png'), 
    name: 'Rosetta Holmes',
    review: '3 Smart Reasons Why You Should Consider Paying For Your Traffic',
  },
  {
    image: require('../../img/imba/oval_4.png'), 
    name: 'Polly Tran',
    review: 'Free Real Estate Listings',
  },
  {
    image: require('../../img/imba/oval_5.png'), 
    name: 'Addie Neal',
    review: 'Internet Banner Advertising Most Reliable Forms Of Web ',
  },
];

export const STORES = [
  {
    image: 'https://goo.gl/AT4wny', 
    name: 'Imba Grand Star Store',
    address: '88 Abelardo Village Suite 544'
  },
  {
    image: 'https://goo.gl/yaNww5', 
    name: 'Imba Grand Star Store',
    address: '88 Abelardo Village Suite 544'
  },
  {
    image: 'https://goo.gl/mTmyqy', 
    name: 'Imba Grand Star Store',
    address: '88 Abelardo Village Suite 544'
  },
];

export const DEALS = [
  {
    image: require('../../img/imba/img_tshirt.png'), 
    sale_per: '30',
    header: 'New Store Sale Off 30%',
    out_date: '05-07-2017'
  },
  {
    image: require('../../img/imba/new_arrival.png'), 
    sale_per: '70',
    header: 'Lasik Eye Surgery Are You Ready',
    out_date: '05-07-2017'
  },
  {
    image: require('../../img/imba/img_denim.png'), 
    sale_per: '60',
    header: 'How To Become Top Fashion Designer',
    out_date: '05-07-2017'
  },
];

export const INSTA_IMGS = [
  {
    image: require('../../img/imba/img_insta_1.png'),
  },
  {
    image: require('../../img/imba/img_insta_3.png'),
  },
  {
    image: require('../../img/imba/img_insta_5.png'),
  },
  {
    image: require('../../img/imba/img_insta_2.png'),
  },
  {
    image: require('../../img/imba/img_insta_4.png'),
  },
  {
    image: require('../../img/imba/img_insta_6.png'),
  },
];

export const COLORS = [
  {
    color: 'rgb(18,19,20)',
  },
  {
    color: 'rgb(155,155,155)',
  },
  {
    color: 'rgb(18,19,20)',
  },
  {
    color: 'rgb(232,232,232)',
  },
  {
    color: 'rgb(216,216,216)',
  },
  {
    color: 'rgb(208,2,27)',
  },
];

export const BRANDS = [
  {
    brand: 'Adidas'
  },
  {
    brand: 'Puma'
  },
  {
    brand: 'Nike'
  },
  {
    brand: 'Elise'
  },
  {
    brand: 'Mango'
  },
  {
    brand: 'Bitis'
  },
];

export const ORDERS = [
  {
    code: '#IB1369',
    date: '19/08/2017',
    itemCount: 2,
    orderStatus: 'Delivered'
  },
  {
    code: '#IB1369',
    date: '19/08/2017',
    itemCount: 2,
    orderStatus: 'Shipped'
  },
  {
    code: '#IB1369',
    date: '19/08/2017',
    itemCount: 2,
    orderStatus: 'Cancel'
  },
];

export const STATES = [
  {
    state: 'Alabama'
  },
  {
    state: 'Alaska'
  },
  {
    state: 'Arizona'
  },
  {
    state: 'California'
  },
  {
    state: 'Colorado'
  },
  {
    state: 'Florida'
  },
  {
    state: 'Texas'
  },
  {
    state: 'New York'
  },
  {
    state: 'Ohio'
  },
];

export const POSTS = [
  {
    image: 'https://goo.gl/wUr14z',
    title: 'Tips For Choosing The Perfect Gloss For Your Lips Eye.',
    createdDate: '05-07-2017'
  },
  {
    image: 'https://goo.gl/fXsQDX',
    title: 'Choosing The Perfect Gloss For Your Lips Eye.',
    createdDate: '20-07-2019'
  },
  {
    image: 'https://goo.gl/TpVVWb',
    title: 'Tips For Choosing The Perfect Gloss For Your Lips Eye.',
    createdDate: '05-07-2020'
  },
];

export const RELATED_POSTS = [
  {
    image: {uri: 'https://goo.gl/TU8XPM'},
    name: 'Great Benefits Of Natural Skin Care Products',
    category: 'Travel',
    createdDate: 'Jul 09'
  },
  {
    image: {uri: 'https://goo.gl/TU8XPM'},
    name: 'Great Benefits Of Natural Skin Care Products',
    category: 'Travel',
    createdDate: 'Jul 09'
  },
];

export const NOTIFICATIONS = [
  {
    notification: 'Your order #IB136928 has been shipped!',
    createdDate: '20 mins ago',
    image: require('../../img/icons/ic_shipping.png'),
    imageWidth: shippingIc.width,
    imageHeight: shippingIc.height
  },
  {
    notification: 'Happy Birth Day To You! Gift a 15% to you!',
    createdDate: '20 mins ago',
    image: require('../../img/icons/ic_discount.png'),
    imageWidth: discountIc.width,
    imageHeight: discountIc.height
  },
  {
    notification: 'Special Offer 25% all product t-shirt to day.',
    createdDate: '20 mins ago',
    image: require('../../img/icons/ic_pig.png'),
    imageWidth: pigIc.width,
    imageHeight: pigIc.height
  },
  {
    notification: 'Your order #IB136928 has been shipped!',
    createdDate: '20 mins ago',
    image: require('../../img/icons/ic_shipping.png'),
    imageWidth: shippingIc.width,
    imageHeight: shippingIc.height
  },
  {
    notification: 'Happy Birth Day To You! Gift a 15% to you!',
    createdDate: '20 mins ago',
    image: require('../../img/icons/ic_discount.png'),
    imageWidth: discountIc.width,
    imageHeight: discountIc.height
  },
];

export const COLLECTIONS = [
  {
    header: 'Black & White',
    desc: 129,
    image: require('../../img/imba/img.png')
  },
  {
    header: 'Dressrosa Autumn',
    desc: 129,
    image: require('../../img/imba/img_2.png')
  },
  {
    header: 'Floor Length Tent Dress',
    desc: 129,
    image: require('../../img/imba/img_3.png')
  },
];
