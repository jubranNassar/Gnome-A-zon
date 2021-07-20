import db from '../db/connection.js'
import Gnome from '../models/gnome.js'
import User from '../models/user.js'
import bcrypt from 'bcrypt'

const insertData = async () => {
  // reset database
  await db.dropDatabase()

  const user1 = new User(
    {
      username: "Tea'n'gnomes",
      email: "tea_garden_girl@gmail.com",
      password_digest: await bcrypt.hash('tea_garden_pw', 11)
  });
  await user1.save()

  const user2 = new User(
    {
      username: "GnomeStan",
      email: "gnome-maker@gmail.com",
      password_digest: await bcrypt.hash('another_pw', 11)
  });
  await user2.save()

  const user3 = new User(
    {
      username: "GnomeDaddy",
      email: "gnome_daddy@gmail.com",
      password_digest: await bcrypt.hash('daddys_pw', 11)
    });
    await user3.save()

    //Gnomes Products
  
  const gnomes = [
    {
      name: 'Reading Gnome', 
      details: 'studying with a fake smile',
      image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThmyzbVfmwpUCke0KA2NmRL6EeUwcQ9B0F2A&usqp=CAU', 
      materials: 'hard clay',
      category:[ 'edumacation'],
      price: '12.95',
      seller: 'GnomeDaddy'
    }, 
    {
      name: 'Harley Gnome', 
      details: 'Watch out! This is a bad mothah! This grandpa gnome comes geared up in his leather!. If only he can find her hog',
      image_url: 'https://secure.img1-fg.wfcdn.com/im/99517139/compr-r85/5802/58026301/knucklehead-the-harley-davidson-gnome-statue.jpg', 
      materials: 'steel',
      category: ['rock-star'],
      price: '15.99',
      seller: 'GnomeMommy'
    }, 
    {
      name: 'Zombie Gnome', 
      details: 'the creeps come out at night, walking dead',
      image_url: 'https://cdn.shopify.com/s/files/1/1241/5688/products/CL6565_2_1024x1024.jpg?v=1563637920',
      materials: 'cement',
      category: ['halloween'],
      price: '29.99',
      seller: 'GnomeBaby'
    },
    {
      name: 'Santa Gnome',
      price: '25.99',
      details:'Ho Ho Ho Merry Christmas!',
      image_url: 'https://4kwallpaper.wiki/wp-content/uploads/2019/09/370183.jpg',
      category:['Christmas'],
      materials:'plastic',
      seller:'Joe Brown'
    },
    {
      name: 'Patriot Gnome',
      price:'15.99',
      details: 'Here he come to light up the sky with his fireworks display',
      image_url: 'https://i5.walmartimages.com/asr/9b7a94f5-dfb9-45b0-8422-8a59a3a39d36_2.bfd40e2f8e019bdfe56dae1fb3bf1e02.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF',
      category: ['4th of July'],
      materials:'ceramic',
      seller: 'Uncle Sam'
    },
    {
      name: 'Every Man Gnome',
      price: '30.00',
      details: '30 minutes in the bathroom doing what!',
      image_url: 'https://cdn.shopify.com/s/files/1/0550/7222/7493/products/On-Toilet-Funny-Garden-Gnome_12_600x600.jpg?v=1621895230',
      category:['Funny Gnome'],
      materials:'iron',
      seller: 'Billy Bob'
    },
    


  ]
  await Gnome.insertMany(gnomes)
  console.log(`Created users & gnomes!`)

  db.close()


}

insertData()