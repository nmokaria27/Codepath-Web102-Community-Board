import { useState } from 'react'
import './App.css'
import Card from './components/Card'

const foodTrucks = [
  { name: "Birria-Landia", cuisine: "Mexican", image: "https://pyxis.nymag.com/v1/imgs/38c/2ac/b02a093f6b846ebd1aca78b0d59c7e427a-birria-1.rsocial.w1200.jpg", menuLink: "https://ww12.thebirrialandia.com/menu/?usid=26&utid=8196265162" },
  { name: "Mysttik Masala", cuisine: "Indian", image: "https://res.cloudinary.com/the-infatuation/image/upload/c_fill,w_1200,ar_4:3,g_auto,f_auto/cms/reviews/mysttik-masala/banners/1561989798.42" , menuLink: "https://indianfoodny.com/" },
  { name: "The Halal Guys", cuisine: "Middle Eastern", image: "https://nypost.com/wp-content/uploads/sites/2/2014/08/081114featureshalaguysbz-1.jpg?quality=75&strip=all&w=1024" , menuLink: "https://thehalalguys.com/menu/"},
  { name: "NY Dosas", cuisine: "Vegetarian", image: "https://nydosas.com/wp-content/uploads/2018/07/maxresdefault-2-1024x630.jpg", menuLink: "https://nydosas.com/menu/" },
  { name: "Jerk Pan", cuisine: "Jamaican", image: "https://infatuation.imgix.net/media/images/reviews/jerk-pan/banners/1561989308.8.jpg" , menuLink: "https://www.allmenus.com/ny/new-york/360888-jerk-pan/menu/" },
  { name: "Tong", cuisine: "Bangladeshi", image: "https://static01.nyt.com/images/2019/09/04/dining/29hungry-tong2/merlin_159654336_783be212-7726-485e-9250-4793a743af41-jumbo.jpg" , menuLink: "https://www.facebook.com/Bangladeshistreetfoods/"},
  { name: "King Souvlaki of Astoria", cuisine: "Greek", image: "https://kingsouvlakinyc.com/wp-content/themes/king/images/location-f.jpg" , menuLink: "https://kingsouvlakinyc.com/"},
  { name: "Ling's Sweet Mini Cakes", cuisine: "Chinese", image: "https://fastly.4sqi.net/img/general/600x600/61129566_7PLEKHNMZ-VNqzYx2jWRVZGrZ42PdPX0M-j9Ftpg8Ts.jpg" , menuLink: "https://canalstreet.market/"},
  { name: "Uncle Gussy's", cuisine: "Greek", image: "https://d3hbe0kmbam4a5.cloudfront.net/photos/67e1cdb7-bc27-4f26-8343-851bfaa7fc22.jpg" , menuLink: "https://unclegussys.com/menus/"},
  { name: "Patacon Pisao", cuisine: "Venezuelan", image: "https://live.staticflickr.com/8088/8400188739_53b16c7d13_z.jpg" , menuLink: "https://www.pataconpisaonyc.com/menus/"},
  { name: "Mom's Mono", cuisine: "Tibetan", image: "https://infatuation.imgix.net/media/images/reviews/moms-momo/banners/1606245507.888788.png" , menuLink:"https://www.restaurantji.com/ny/jackson-heights/moms-momo-/menu/" },
  { name: "Makina Cafe", cuisine: "Ethiopian", image: "https://fastly.4sqi.net/img/general/600x600/784042_29bZZHPGisHnWqyIuuXMo8D2zzW7QS6Hft7Vv15SH_I.jpg" , menuLink: "https://makinacafenyc.com/"},
];

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#a9e2e4' }}>
      <img src="https://heroic-pixie-6d7f91.netlify.app/awning.png" alt="Banner" className="w-full" />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="text-center mb-12">
          <h1 
            className="text-white text-[80px] font-bold"
            style={{
              textShadow: 'black 1px 0 10px',
              paddingBottom: '18px',
              marginLeft: '50px'
            }}
          >
            Food Truck Favorites
          </h1>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {foodTrucks.map((truck, index) => (
            <Card key={index} {...truck} />
          ))}
        </div>
      </div>
    </div>
  )
}