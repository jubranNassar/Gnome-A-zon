# Gnome-A-zon

## Salty Gnomes Members
Jubran Nassar, Heather Mantooth, Miguel Nebot, Allwyn Avalos

## Overview
Gnome-A-Zon is a garden gnome market place.  It allows members to add garden gnomes for view/sale.  It also allows the original creator to edit the product information.  Users can browse garden gnomes and view details.  Allows users to become members by signing up; authenticates members on sign in. Built using MERN stack (mongoDB, Express.js, React.js and Node.js) and heroku and netlify


## Schema 
```
const Gnome = new Schema(
  {
    name: { type: String, required: true},
    price: { type: String, required: true},
    details: { type: String, required: true},
    image_url: { type: String, required: true },
    collection: { type: Array, required: true},
    materials: { type: String, required: true},
    seller: { type: String, required: true }
  },
  {timestamps: true}
)
```
```
const User = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password_digest: { type: String, required: true, select: false },
  },
  { timestamps: true }
)
```

## Wireframe
![Imgur](https://imgur.com/bAmemCc.png)
![Imgur](https://imgur.com/xIYv1cQ.png)
![Imgur](https://imgur.com/Zuf5F8S.png)
![Imgur](https://imgur.com/FcweAZ6.png)
![Imgur](https://imgur.com/eqqmIRI.png)
![Imgur](https://imgur.com/5FuQLQa.png)

## Components hierarchy
![Imgur](https://imgur.com/clKSvtf.png)

## Team Expectations
https://docs.google.com/document/d/1RKC_j7SeW6_iuH0B2O6LxXQXvv7CoicD2Z_RcBq7c0A/edit?usp=sharing

## MVP
https://github.com/jubranNassar/Gnome-A-zon/projects/1

## Post MVP
1. Search and filter gnomes by collection and materials and sort by seller
2. Add features to homepage, such as links to gnome-relevant websites
3. Add a shopping cart feature that allows users to add gnomes to cart and tally total
4. Add ability to contact seller via an e-mail form link on product detail page
5. Gnome reviews