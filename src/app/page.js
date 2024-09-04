import homeStyles from "@/app/css/page.module.css"
import ProductCard from "./components/productCard"

export default function Home() {
  const headerStyle = {
    backgroundColor: "#a78bfd",
    color: "white", 
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }

  return (
    <main>
      <nav className={homeStyles.homeNav}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
      <h1 style={headerStyle}>Samsung Phones</h1>
      <div className={homeStyles.productList}>
      <ProductCard productName="Samsung Galaxy S23" productPrice="800" imgSrc="SGS23.png"/>
      <ProductCard productName="Samsung Galaxy S23 Ultra" productPrice="1,300" imgSrc="SGS23U.png"/>
      </div>
    </main>
  )
}
