const products = [
  {
    id: 1,
    title: "Canon EOS 6D Mark II",
    rating: "⭐⭐⭐⭐",
    description: "DSLR Camera Body with Single Lens: EF24-105mm f/4L IS II USM (Black)",
    price: "₹1,72,546",
    action: "buy",
    image: "https://www.orionphotogroup.com/wp-content/uploads/2023/09/OPG-Blog-Best-Professional-Canon-Cameras-That-Should-Be-On-Every-Photographers-List-10-12-2023-scaled.jpg"
  },
  {
    id: 2,
    title: "Nikon D7500",
    rating: "⭐⭐⭐⭐⭐",
    description: "DSLR Camera with 18-140mm VR Lens (Black)",
    price: "₹1,04,450",
    action: "buy",
    image:"https://images.squarespace-cdn.com/content/v1/58db872859cc68c3b09dfd44/1502374421217-WLUDOE8TB4VFM1JC8NPS/image-asset.jpeg"
  },
  {
    id: 3,
    title: "Sony Alpha ILCE-7M3K",
    rating: "⭐⭐⭐⭐⭐",
    description: "Mirrorless Digital SLR Camera with 28-70mm Zoom Lens",
    price: "₹1,57,490",
    action: "buy",
    image: "https://m.media-amazon.com/images/I/71Gb5PYn0wL.jpg"
  },
  {
    id: 4,
    title: "Fujifilm X-T4",
    rating: "⭐⭐⭐⭐",
    description: "Mirrorless Camera Body with APS-C Sensor (Black)",
    price: "₹1,18,000",
    action: "buy",
    image: "https://img.photographyblog.com/reviews/fujifilm_x_t4/fujifilm_x_t4_01.jpg"
  },
  {
    id: 5,
    title: "Panasonic Lumix G7",
    rating: "⭐⭐⭐",
    description: "4K Mirrorless Camera with 14-42mm Lens (Black)",
    price: "₹42,990",
    action: "buy",
    image: "https://www.cameralabs.com/wp-content/uploads/2015/06/Panasonic_Lumix_G7_featured_full.jpg"
  },
  {
    id: 6,
    title: "Olympus OM-D E-M10 Mark III",
    rating: "⭐⭐⭐",
    description: "Mirrorless Camera with 14-42mm Lens Kit (Silver)",
    price: "₹49,990",
    action: "buy",
    image: "https://www.cameralabs.com/wp-content/uploads/2017/10/Olympus-omd-em10-iii-header2-1920x1043.jpg"
  },
  {
    id: 7,
    title: "Nikon Z50",
    rating: "⭐⭐⭐⭐",
    description: "Mirrorless Camera with 16-50mm Lens",
    price: "₹85,450",
    action: "buy",
    image: "https://www.dpreview.com/files/p/articles/5449136504/Product-Images/Nikon_Z50.jpeg"
  },
  {
    id: 8,
    title: "Sony ZV-E10",
    rating: "⭐⭐⭐⭐",
    description: "Mirrorless Vlogging Camera with 16-50mm Lens",
    price: "₹76,990",
    action: "buy",
    image: "https://sm.pcmag.com/t/pcmag_me/review/s/sony-zv-e1/sony-zv-e10-ii_yrmw.1920.jpg"
  },
  {
    id: 9,
    title: "Canon PowerShot G7 X Mark III",
    rating: "⭐⭐⭐",
    description: "Compact Camera with 4.2x Optical Zoom (Black)",
    price: "₹59,995",
    action: "buy",
    image: "https://www.gadgetguy.com.au/wp-content/uploads/2020/02/Canon-PowerShot-G7X-Mark-III-1.jpg"
  },
  {
    id: 10,
    title: "Olympus OM-D E-M10 Mark IV",
    rating: "⭐⭐⭐",
    description: "Mirrorless Camera with M.Zuiko 14-42mm Lens",
    price: "₹67,990",
    action: "buy",
    image: "https://cdn.mos.cms.futurecdn.net/rhmtjhrBK4gkqEXYotXevR.jpg"
  },
  {
    id: 11,
    title: "Pentax K-70",
    rating: "⭐⭐⭐",
    description: "DSLR Camera with 18-135mm Lens (Black)",
    price: "₹78,990",
    action: "buy",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiuKhO6MQ-E0ZLJyRBdwia2yJqq6MoQyVGo-kV7mKvvJ9I5vmpcpFget5Ze0fKZKP3Ne3jW7qaOdedTVrzb_WQe-yA315qHSJG6xXbSSNijJ65wDEw_xcHI539qj7vm16-pUHkNU3ed18EF/s1600/L1036595.jpg"
  },
  {
    id: 12,
    title: "Sony Alpha ILCE-7M3K",
    rating: "⭐⭐⭐⭐⭐",
    description: "Mirrorless Camera with Full-Frame Sensor and Kit Lens",
    price: "₹1,58,490",
    action: "buy",
    image: "https://i.pcmag.com/imagery/reviews/01bBsScYtKpydw39HEtn4YQ-19..v1730237714.jpg"
  },
  {
    id: 13,
    title: "Canon EOS RP",
    rating: "⭐⭐⭐⭐",
    description: "Mirrorless Full Frame Camera with RF24-105mm Lens",
    price: "₹1,09,995",
    action: "buy",
    image: "https://cdn.mos.cms.futurecdn.net/rVdNSdozwfq5aAS9sS8Mka.jpg"
  },
  {
    id: 14,
    title: "Nikon Z fc",
    rating: "⭐⭐⭐⭐",
    description: "Mirrorless Camera with Retro Design and 16-50mm Lens",
    price: "₹90,450",
    action: "buy",
    image: "https://2.img-dpreview.com/files/p/E~TS940x788~articles/3027876356/Nikon_Zfc_main.jpeg"
  },
  {
    id: 15,
    title: "Fujifilm X-S10",
    rating: "⭐⭐⭐⭐",
    description: "Mirrorless Camera Body with IBIS (Black)",
    price: "₹94,990",
    action: "buy",
    image: "https://thephotographyenthusiast.com/wp-content/uploads/2022/09/Fujifilm-XS10-Review.webp"
  },
  {
    id: 16,
    title: "Sony Alpha 6100L",
    rating: "⭐⭐⭐⭐",
    description: "Mirrorless Camera with 16-50mm Power Zoom Lens",
    price: "₹61,490",
    action: "buy",
    image: "https://4.img-dpreview.com/files/p/E~TS940x788~articles/8546484400/Product-Images/Sonya6100-beauty-05.jpeg"
  },
  {
    id: 17,
    title: "Canon EOS M50 Mark II",
    rating: "⭐⭐⭐⭐",
    description: "Mirrorless Camera with EF-M 15-45mm Lens",
    price: "₹58,995",
    action: "buy",
    image: "https://www.dpreview.com/files/p/E~C0x0S3017x2263T600x450~articles/0177716607/Product/IMG_9631.acr.jpeg"
  },
  {
    id: 18,
    title: "Nikon D5600",
    rating: "⭐⭐⭐⭐",
    description: "DSLR Camera with AF-P 18-55mm Lens",
    price: "₹57,990",
    action: "buy",
    image: "https://astrophotographylens.com/cdn/shop/articles/nikon-d5600-1.jpg?v=1682433441&width=1000"
  },
  {
    id: 19,
    title: "Panasonic Lumix S5",
    rating: "⭐⭐⭐⭐⭐",
    description: "Full-Frame Mirrorless Camera Body",
    price: "₹1,49,990",
    action: "buy",
    image: "https://www.dpreview.com/files/p/articles/5859836324/Product/s5-creek.jpeg"
  },
  {
    id: 20,
    title: "Fujifilm X100V",
    rating: "⭐⭐⭐⭐⭐",
    description: "Premium Compact Camera with 23mm f/2 Lens (Black)",
    price: "₹1,19,990",
    action: "buy",
    image: "https://www.cameralabs.com/wp-content/uploads/2023/12/fujifilm-x100v-long-term-test-header-1-1920x1080.jpg"
  }
];

export default products;