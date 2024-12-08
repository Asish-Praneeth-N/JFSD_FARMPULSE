import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./PricesPage.css";
const products = [
    {
      id: 1,
      name: "Wheat",
      price: "₹25/kg",
      image: "https://media.istockphoto.com/id/1673457545/photo/farmer-examining-ripe-ear-of-wheat-in-field-before-the-harvest.jpg?s=612x612&w=0&k=20&c=sG-Ro-n-3FmkmbXmWtwpxzYN1kJNMb5x0DbSmzITdVM=", // Replace with an actual URL
      description: "High-quality wheat from organic farms.",
      category: "Grains",
      stock: "In Stock",
      origin: "Punjab",
      quality: "Premium"
    },
    {
      id: 2,
      name: "Rice",
      price: "₹40/kg",
      image: "https://cdn.britannica.com/17/176517-050-6F2B774A/Pile-uncooked-rice-grains-Oryza-sativa.jpg", // Replace with an actual URL
      description: "Premium basmati rice directly from the farmers.",
      category: "Grains",
      stock: "In Stock",
      origin: "Haryana",
      quality: "Premium"
    },
    {
      id: 3,
      name: "Potatoes",
      price: "₹15/kg",
      image: "https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?cs=srgb&dl=pexels-pixabay-144248.jpg&fm=jpg", // Replace with an actual URL
      description: "Fresh and healthy potatoes grown naturally.",
      category: "Vegetables",
      stock: "Limited Stock",
      origin: "Uttar Pradesh",
      quality: "Standard"
    },
    {
      id: 4,
      name: "Tomatoes",
      price: "₹30/kg",
      image: "https://cdn.pixabay.com/photo/2022/09/05/09/50/tomatoes-7433786_1280.jpg", // Replace with an actual URL
      description: "Juicy and ripe tomatoes, pesticide-free.",
      category: "Vegetables",
      stock: "In Stock",
      origin: "Maharashtra",
      quality: "Premium"
    },
    {
      id: 5,
      name: "Corn",
      price: "₹20/kg",
      image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2023/6/28/fresh-corn-on-the-cob-partially-shucked-on-dark-background.jpg.rend.hgtvcom.1280.1280.suffix/1687987003387.jpeg", // Replace with an actual URL
      description: "Sweet corn fresh from the fields.",
      category: "Vegetables",
      stock: "In Stock",
      origin: "Karnataka",
      quality: "Standard"
    },
    {
      id: 6,
      name: "Soybeans",
      price: "₹45/kg",
      image: "https://nepc.gov.ng/cms/wp-content/uploads/2020/10/nepc-soya-beans.jpg", // Replace with an actual URL
      description: "Organic soybeans for healthy living.",
      category: "Legumes",
      stock: "In Stock",
      origin: "Madhya Pradesh",
      quality: "Premium"
    },
    {
      id: 7,
      name: "Apples",
      price: "₹120/kg",
      image: "https://cdn.britannica.com/22/187222-050-07B17FB6/apples-on-a-tree-branch.jpg", // Replace with an actual URL
      description: "Crunchy and sweet apples sourced from Himachal.",
      category: "Fruits",
      stock: "In Stock",
      origin: "Himachal Pradesh",
      quality: "Premium"
    },
    {
      id: 8,
      name: "Bananas",
      price: "₹50/dozen",
      image: "https://nutritionsource.hsph.harvard.edu/wp-content/uploads/2018/08/bananas-1354785_1920.jpg", // Replace with an actual URL
      description: "Ripe and naturally grown bananas.",
      category: "Fruits",
      stock: "In Stock",
      origin: "Tamil Nadu",
      quality: "Standard"
    },
    {
      id: 9,
      name: "Carrots",
      price: "₹25/kg",
      image: "https://thumbs.dreamstime.com/b/carots-market-29328226.jpg", // Replace with an actual URL
      description: "Fresh and healthy carrots from organic farms.",
      category: "Vegetables",
      stock: "In Stock",
      origin: "Punjab",
      quality: "Premium"
    },
    {
      id: 10,
      name: "Peanuts",
      price: "₹70/kg",
      image: "https://cdn.pixabay.com/photo/2016/10/13/01/04/nuts-1736520_1280.jpg", // Replace with an actual URL
      description: "High-quality peanuts directly from farmers.",
      category: "Legumes",
      stock: "In Stock",
      origin: "Gujarat",
      quality: "Premium"
    },
    
        {
          id: 11,
          name: "Barley",
          price: "₹22/kg",
          image: "https://cdn-prod.medicalnewstoday.com/content/images/articles/295/295268/barley-grains-in-a-wooden-bowl.jpg", // Replace with actual URL
          description: "Nutritious barley for healthy diets.",
          category: "Grains",
          stock: "In Stock",
          origin: "Rajasthan",
          quality: "Standard"
        },
        {
          id: 12,
          name: "Chickpeas",
          price: "₹50/kg",
          image: "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2022/04/chickpeas_closeup_1296x728_header-1024x575.jpg?w=1155&h=1528", // Replace with actual URL
          description: "High-protein chickpeas from organic sources.",
          category: "Legumes",
          stock: "Limited Stock",
          origin: "Madhya Pradesh",
          quality: "Premium"
        },
        {
          id: 13,
          name: "Spinach",
          price: "₹20/bunch",
          image: "https://www.trustbasket.com/cdn/shop/articles/Spinach.webp?v=1686909241", // Replace with actual URL
          description: "Fresh spinach loaded with nutrients.",
          category: "Vegetables",
          stock: "In Stock",
          origin: "West Bengal",
          quality: "Premium"
        },
        {
          id: 14,
          name: "Oranges",
          price: "₹80/kg",
          image: "https://img.freepik.com/free-photo/healthy-fruit-oranges-market-stall-oranges-surface_176474-493.jpg", // Replace with actual URL
          description: "Sweet and tangy oranges from Nagpur.",
          category: "Fruits",
          stock: "In Stock",
          origin: "Maharashtra",
          quality: "Premium"
        },
        {
          id: 15,
          name: "Lentils",
          price: "₹60/kg",
          image: "https://www.keepingthepeas.com/wp-content/uploads/2022/11/red-lentils-in-wood-bowl.jpg", // Replace with actual URL
          description: "Protein-packed lentils for daily meals.",
          category: "Legumes",
          stock: "In Stock",
          origin: "Bihar",
          quality: "Premium"
        },
        {
          id: 16,
          name: "Peas",
          price: "₹25/kg",
          image: "https://images.healthshots.com/healthshots/en/uploads/2021/08/23133154/Peas-1600x900.jpg", // Replace with actual URL
          description: "Fresh green peas for healthy cooking.",
          category: "Vegetables",
          stock: "In Stock",
          origin: "Himachal Pradesh",
          quality: "Standard"
        },
        {
          id: 17,
          name: "Mangoes",
          price: "₹100/kg",
          image: "https://aamrai.com/wp-content/uploads/2023/12/Malawi-product-01.webp", // Replace with actual URL
          description: "Juicy Alphonso mangoes for dessert lovers.",
          category: "Fruits",
          stock: "Limited Stock",
          origin: "Maharashtra",
          quality: "Premium"
        },
        {
          id: 18,
          name: "Cabbage",
          price: "₹18/kg",
          image: "https://assets.clevelandclinic.org/transform/871f96ae-a852-4801-8675-683191ce372d/Benefits-Of-Cabbage-589153824-770x533-1_jpg", // Replace with actual URL
          description: "Fresh cabbage directly from farms.",
          category: "Vegetables",
          stock: "In Stock",
          origin: "Uttarakhand",
          quality: "Standard"
        },
        {
          id: 19,
          name: "Cauliflower",
          price: "₹25/kg",
          image: "https://cdn.pixabay.com/photo/2022/04/11/16/55/cauliflower-7126220_640.jpg", // Replace with actual URL
          description: "Organic cauliflower for wholesome meals.",
          category: "Vegetables",
          stock: "In Stock",
          origin: "Uttar Pradesh",
          quality: "Premium"
        },
        {
          id: 20,
          name: "Chilies",
          price: "₹40/kg",
          image: "https://www.alsothecrumbsplease.com/wp-content/uploads/2024/05/substitute-for-green-chilies-1-500x500.jpg", // Replace with actual URL
          description: "Fresh and spicy chilies for every dish.",
          category: "Vegetables",
          stock: "In Stock",
          origin: "Andhra Pradesh",
          quality: "Premium"
        },
        {
          id: 21,
          name: "Onions",
          price: "₹30/kg",
          image: "https://images.unsplash.com/photo-1638464522667-d255c09cca64?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG9uaW9uc3xlbnwwfHwwfHx8MA%3D%3D", // Replace with actual URL
          description: "Freshly harvested onions for everyday cooking.",
          category: "Vegetables",
          stock: "In Stock",
          origin: "Maharashtra",
          quality: "Standard"
        },
        {
          id: 22,
          name: "Grapes",
          price: "₹90/kg",
          image: "https://cdn.pixabay.com/photo/2023/10/10/16/05/grapes-8306833_1280.jpg", // Replace with actual URL
          description: "Sweet and juicy grapes for snacking.",
          category: "Fruits",
          stock: "In Stock",
          origin: "Karnataka",
          quality: "Premium"
        },
        {
          id: 23,
          name: "Pineapples",
          price: "₹80/kg",
          image: "https://media.istockphoto.com/id/524687723/photo/pineapple-plant.jpg?s=612x612&w=0&k=20&c=kQuadcsV_6L4qGSkIWSRIa5xvrc_RuolV_94WSMbOl0=", // Replace with actual URL
          description: "Fresh pineapples with a tropical flavor.",
          category: "Fruits",
          stock: "In Stock",
          origin: "Assam",
          quality: "Premium"
        },
        {
          id: 24,
          name: "Mustard Seeds",
          price: "₹50/kg",
          image: "https://nuttyyogi.com/cdn/shop/products/MustardSeeds.png?v=1680767117", // Replace with actual URL
          description: "High-quality mustard seeds for flavoring.",
          category: "Grains",
          stock: "In Stock",
          origin: "Rajasthan",
          quality: "Standard"
        },
        {
          id: 25,
          name: "Pomegranates",
          price: "₹150/kg",
          image: "https://nativeindianorganics.com/wp-content/uploads/2024/08/pomegranate-seeds.jpg", // Replace with actual URL
          description: "Fresh and sweet pomegranates for juices.",
          category: "Fruits",
          stock: "Limited Stock",
          origin: "Maharashtra",
          quality: "Premium"
        },{
            id: 26,
            name: "Coconuts",
            price: "₹40/unit",
            image: "https://img.freepik.com/free-photo/coconut-fruit_1203-2413.jpg?semt=ais_hybrid", // Replace with actual URL
            description: "Fresh coconuts for water and cooking.",
            category: "Fruits",
            stock: "In Stock",
            origin: "Kerala",
            quality: "Premium"
          },
          {
            id: 27,
            name: "Beetroot",
            price: "₹30/kg",
            image: "https://live-production.wcms.abc-cdn.net.au/1465ebc907409ba94d795452759f5e35?impolicy=wcms_crop_resize&cropH=576&cropW=1024&xPos=0&yPos=0&width=862&height=485", // Replace with actual URL
            description: "Nutrient-rich beetroot for salads and juices.",
            category: "Vegetables",
            stock: "In Stock",
            origin: "Maharashtra",
            quality: "Standard"
          },
          {
            id: 28,
            name: "Papaya",
            price: "₹60/kg",
            image: "https://cdn.mos.cms.futurecdn.net/SJZnPC8HD3jZyfAR7P2nCg.jpg", // Replace with actual URL
            description: "Sweet and ripe papaya for a healthy lifestyle.",
            category: "Fruits",
            stock: "In Stock",
            origin: "Tamil Nadu",
            quality: "Premium"
          },
          {
            id: 29,
            name: "Garlic",
            price: "₹100/kg",
            image: "https://images.unsplash.com/reserve/E6Ai8EoSQp2unXHEd1GA_GarlicHarvest.jpg?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdhcmxpY3xlbnwwfHwwfHx8MA%3D%3D", // Replace with actual URL
            description: "Fresh and aromatic garlic for seasoning.",
            category: "Vegetables",
            stock: "In Stock",
            origin: "Madhya Pradesh",
            quality: "Premium"
          },
          {
            id: 30,
            name: "Ginger",
            price: "₹80/kg",
            image: "https://images.ctfassets.net/4f3rgqwzdznj/69J2Y3FEmjaSxSRzf5KU53/2e798fa8702971ef0916794d2faa8ef7/GettyImages-183852454.jpg", // Replace with actual URL
            description: "Fresh and organic ginger for cooking and tea.",
            category: "Vegetables",
            stock: "Limited Stock",
            origin: "Kerala",
            quality: "Premium"
          },
          {
            id: 31,
            name: "Strawberries",
            price: "₹200/kg",
            image: "https://cdn.create.vista.com/api/media/small/467259118/stock-photo-new-harvest-box-ripe-red-sweet-strawberry-farmer-fiels-green", // Replace with actual URL
            description: "Sweet and fresh strawberries from the hills.",
            category: "Fruits",
            stock: "Limited Stock",
            origin: "Himachal Pradesh",
            quality: "Premium"
          },
          {
            id: 32,
            name: "Pumpkin",
            price: "₹25/kg",
            image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/FrenchMarketPumpkinsB.jpg", // Replace with actual URL
            description: "Large and fresh pumpkins from local farms.",
            category: "Vegetables",
            stock: "In Stock",
            origin: "Uttar Pradesh",
            quality: "Standard"
          },
          {
            id: 33,
            name: "Capsicum",
            price: "₹40/kg",
            image: "https://www.greendna.in/cdn/shop/products/caps1_796x.jpg?v=1632670443", // Replace with actual URL
            description: "Fresh capsicum in vibrant colors for your meals.",
            category: "Vegetables",
            stock: "In Stock",
            origin: "Karnataka",
            quality: "Premium"
          },
          {
            id: 34,
            name: "Lemons",
            price: "₹50/kg",
            image: "https://cdn.britannica.com/84/188484-050-F27B0049/lemons-tree.jpg", // Replace with actual URL
            description: "Fresh lemons to add zest to your dishes.",
            category: "Fruits",
            stock: "In Stock",
            origin: "Andhra Pradesh",
            quality: "Standard"
          },
          {
            id: 35,
            name: "Watermelons",
            price: "₹15/kg",
            image: "https://cdn.mos.cms.futurecdn.net/SxQpyZbdPoWZuXmxKiJ3uF.jpg", // Replace with actual URL
            description: "Juicy and sweet watermelons for summer refreshment.",
            category: "Fruits",
            stock: "In Stock",
            origin: "Rajasthan",
            quality: "Premium"
          }
      
      
  ];
  
const PricesPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("name");

  const categories = ["All", "Grains", "Vegetables", "Legumes", "Fruits"];

  const filteredProducts = products
    .filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "All" || product.category === selectedCategory)
    )
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "price") return parseInt(a.price.replace(/[₹/kg/dozen]/g, "")) - parseInt(b.price.replace(/[₹/kg/dozen]/g, ""));
      return 0;
    });

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="prices-page">
      <header className="prices-header">
        <h1 className="prices-title">Agricultural Product Prices</h1>
        <div className="search-filter-container">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="category-select"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-select"
          >
            <option value="name">Sort by Name</option>
            <option value="price">Sort by Price</option>
          </select>
        </div>
      </header>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div 
            key={product.id} 
            className="product-card"
            onClick={() => handleProductClick(product.id)}
          >
            <div className="product-image-container">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <span className={`product-stock ${product.stock === "Limited Stock" ? "limited-stock" : ""}`}>
                {product.stock}
              </span>
            </div>
            <div className="product-info">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-price">{product.price}</p>
              <p className="product-description">{product.description}</p>
              <div className="product-details">
                <span className="product-category">{product.category}</span>
                <span className="product-origin">{product.origin}</span>
                <span className="product-quality">{product.quality}</span>
              </div>
            
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="no-results">
          <p>No products found matching your criteria.</p>
        </div>
      )}

      <div className="back-to-top" onClick={() => window.scrollTo(0, 0)}>
        ↑ Back to Top
      </div>
    </div>
  );
};

export default PricesPage;
