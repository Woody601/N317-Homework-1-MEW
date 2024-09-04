import homeStyles from "@/app/css/page.module.css"

export default function ProductCard({ productName, productPrice, imgSrc }) {
  return (
    <div className={homeStyles.productCard}>
      <img className={homeStyles.productImg} src={imgSrc} alt={productName} />

      <div className={homeStyles.productDetails}>
        <h1>{productName}</h1>
        <p>${productPrice}.00</p>
        <button>View Details</button>
      </div>
    </div>
  )
}
