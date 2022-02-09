import Category from "./Category";
import Header from "./Header";
import Nav from "./Nav";
import ShoppingCart from "./ShoppingCart";


const categoriesArray = [
  {
    categoryName: 'Bread',
    productsList: [
      {
        name: 'Sliced ​​uniform bread', price: '6.5 ₪', description: 'Angel Uniform sliced ​​bread without added sugar 750 grams', image: 'Sliced ​​uniform bread.png'
      },
      {
        name: 'Light bread with added rye', price: '11.70 ₪', description: 'Angel 100 light plus rye 750 g, sliced', image: 'Light bread with added rye.png'
      },
      {
        name: 'whole wheat bread', price: '14.90 ₪', description: 'Whole wheat angel with 750 grams of seeds and grains', image: 'whole wheat bread.png'
      },
      {
        name: 'Spelled bread and whole wheat', price: '14.90 ₪', description: 'Angel spelled and whole wheat in a smooth texture, 750 g', image: 'Spelled bread and whole wheat.png'
      },
      {
        name: 'American style bread', price: '11.70 ₪', description: 'Angel American style bread 500 grams', image: 'American style bread.png'
      },
      {
        name: 'Rolls', price: '10.10 ₪', description: 'Engel bun 6 units 450 g', image: 'Rolls.png'
      },
      {
        name: 'Mini rolls', price: '10.00 ₪', description: 'Angel Mini American Style Hamburger Rolls 8 pcs', image: 'Mini rolls.png'
      },
      {
        name: 'Spelled rolls', price: '13.10 ₪', description: 'Angel rolls 100% spelled 450 g', image: 'Spelled rolls.png'
      },
      {
        name: 'Wholemeal rolls', price: '10.10 ₪', description: 'A simple angel filled 6 rolls of wholemeal flour 450 grams', image: 'Wholemeal rolls.png'
      },
      {
        name: 'Spelled pitas', price: '13.70 ₪', description: 'Spelled pitas 5 units', image: 'Spelled pitas.png'
      },

    ]
  },
  {
    categoryName: 'DairyProducts',
    productsList: [
      {
        name: 'Natural milk', price: '7.50 ₪', description: 'Natural Yotvata milk 1 liter bottle 3.6%', image: 'Natural milk.png'
      },
      {
        name: 'Fortified milk', price: '7.50 ₪', description: 'Yotvata milk enriched with calcium and vitamin D 1 liter bottle 1%', image: 'Fortified milk.png'
      },
      {
        name: 'Milk', price: '7.50 ₪', description: 'Formerly flavored milk 3.4%', image: 'milk.png'
      },
      {
        name: 'Milk for coffee', price: '6.80 ₪', description: 'Milk drink for coffee 3% 800 ml', image: 'Milk for coffee.png'
      },
      {
        name: 'Durable milk', price: '6.90 ₪', description: 'Willipod skimmed milk Concentrated and sweetened 397 grams', image: 'Durable milk.png'
      },
      {
        name: 'Actimel', price: '29.90 ₪', description: 'Actimel White Strauss Case 14', image: 'Actimel.png'
      },
      {
        name: 'Gamadim', price: '20.00 ₪', description: 'Six packs of dwarf banana strawberries for drinking', image: 'Gamadim.png'
      },
      {
        name: 'Ice coffee', price: '5.04 ₪', description: 'Ice coffee milk drink 350 ml', image: 'Ice coffee.png'
      },
      {
        name: 'Chocolate milk', price: '19.80 ₪', description: 'Yotvata chocolate 2 liters', image: 'Chocolate milk.png'
      },
      {
        name: 'Yolo', price: '12.70 ₪', description: 'YOLO Milk drink with classic chocolate 1 liter', image: 'Yolo.png'
      },
    ]
  },
  {
    categoryName: 'Sweets',
    productsList: [
      {
        name: 'Bonbonnieres', price: '20.60 ₪', description: 'Mercy Bonbonniere 250 g chocolate candy selection', image: 'Bonbonnieres.png'
      },
      {
        name: 'Toffee and chocolate', price: '7.40 ₪', description: 'Toffee candy toffees with whole hazelnut caramel nougat cream and chocolate 125 g', image: 'Toffee and chocolate.png'
      },
      {
        name: 'Marshmallow', price: '4.90 ₪', description: 'Rami Levy Marshmallow Spins 180 g whipped candy', image: 'Marshmallow.png'
      },
      {
        name: 'Lentils', price: '7.40 ₪', description: 'Mini mini lentils Colorful milk chocolate buttons Colorful', image: 'Lentils.png'
      },
      {
        name: 'Acids', price: '6.80 ₪', description: 'Field-flavored sour candies, 100 g', image: 'Acids.png'
      },
      {
        name: 'Beasley', price: '7.00 ₪', description: 'Beasley Grill 25 * 200 g', image: 'Beasley.png'
      },
      {
        name: 'Bamba', price: '11.90 ₪', description: 'Bamba Classic Uniform Case 8 5 * 50 g', image: 'Bamba.png'
      },
      {
        name: 'pretzels', price: '9.10 ₪', description: 'Flat pretzel barn with salt 12 * 300 g', image: 'pretzels.png'
      },
      {
        name: 'Grissini', price: '9.00 ₪', description: 'Meyer Bagel Classic Grissini Sticks 200g', image: 'Grissini.png'
      },
      {
        name: 'Pretzel with chocolate', price: '7.90 ₪', description: 'Flat pretzel chocolate coated with dark chocolate 80 g', image: 'Pretzel with chocolate.png'
      }
    ]
  }
]

const navArray = [
  {
    name: "Bread",
    img: "bread.png"
  },
  {
    name: "DairyProducts",
    img: 'milky.png'
  },
  {
    name: "Sweets",
    img: "toffee.png"
  }
]



function App() {
  return (
    <div >
      <Header />
      <div id="nav">
        {navArray.map((nav, i) =>
          <Nav key={i} navy={nav.name} image={nav.img} />
        )}
      </div>
      <div id="category">
        {categoriesArray.map((cat, i) =>          
            <Category key={i} category={cat} />
            
          

        )
        }
      </div>
      <ShoppingCart buy="buy.png" />
    </div>
  )
}

export default App;
