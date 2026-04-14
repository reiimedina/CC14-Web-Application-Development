const products = [
  {
    name: "AWP - Crakow",
    price: "₱2,458",
    img: "/images/product1.jpg",
    link: "https://steamcommunity.com/market/listings/730/AWP%20%7C%20Crakow!%20(Field-Tested)",
  },
  {
    name: "MP7 - Smoking Kills",
    price: "₱475",
    img: "/images/product2.jpg",
    link: "https://steamcommunity.com/market/listings/730/MP7%20%7C%20Smoking%20Kills%20(Field-Tested)",
  },
  {
    name: "AWP - Atheris",
    price: "₱840–₱1,400",
    img: "/images/product3.jpg",
    link: "https://steamcommunity.com/market/listings/730/AWP%20%7C%20Atheris%20(Field-Tested)",
  },
  {
    name: "M4A4 - Temukau",
    price: "₱560–₱1,680",
    img: "/images/product4.jpg",
    link: "https://steamcommunity.com/market/listings/730/M4A4%20%7C%20Temukau%20(Field-Tested)",
  },
  {
    name: "MAC10 - Sakkaku",
    price: "₱280–₱840",
    img: "/images/product5.jpg",
    link: "https://steamcommunity.com/market/listings/730/MAC-10%20%7C%20Sakkaku%20(Field-Tested)",
  },
  {
    name: "Glock18 - Shinobu",
    price: "₱560–₱1,120",
    img: "/images/product6.jpg",
    link: "https://steamcommunity.com/market/listings/730/Glock-18%20%7C%20Shinobu%20(Field-Tested)",
  },
];

const Products = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-5 p-10">
      {products.map((p, i) => (
        <div
          key={i}
          className="bg-cover bg-center text-white p-5 rounded-md transform transition hover:-translate-y-2 hover:scale-105 shadow-lg"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/card.jpg')",
          }}
        >
          <img src={p.img} className="w-full h-48 object-cover rounded" />
          <h3 className="mt-3">{p.name}</h3>
          <p>{p.price}</p>

          <a href={p.link} target="_blank">
            <button className="mt-2 w-full p-2 bg-yellow-800 hover:bg-red-600">
              View in Store
            </button>
          </a>
        </div>
      ))}
    </section>
  );
};

export default Products;