import Image from "next/image"
import Link from "next/link"
import styles from "@/app/ui/dashboard/products/products.module.css"
import Search from "@/app/ui/dashboard/search/search"
import Pagination from "@/app/ui/dashboard/pagination/pagination"

const ProductsPage = () => {
    return (
        // <div>Products page</div>
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a product"/>
                <Link href="/dashboard/products/add" >
                    <button className={styles.addButton}>Add New Stand</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Description</td>
                        <td>Price</td>
                        <td>Created at</td>
                        <td>Stock</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.product}>
                                <Image 
                                    src="/noproduct.jpg"
                                    alt=""
                                    width={40}
                                    height={40}
                                    className={styles.productImage}
                                />
                                iPhone
                            </div>
                        </td>
                        <td>Apple iPhone 15 Pro Max</td>
                        <td>$69</td>
                        <td>13-04-24</td>
                        <td>69</td>
                        <td>
                            <div className={styles.buttons}>
                                <Link href="/">
                                    <button className={`${styles.button} ${styles.view}`}>View</button>
                                </Link>
                                <Link href="/">
                                    <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                                </Link>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Pagination />
        </div>
    );
}

export default ProductsPage;