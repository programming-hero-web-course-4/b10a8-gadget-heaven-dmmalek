import { toast } from 'react-toastify';

// for add to cart btn 
const getStoredData = () => {
    let strData = localStorage.getItem('cart');
    if (strData) {
        const storedListData = JSON.parse(strData);
        return storedListData;
    }
    else {
        return [];
    }
}

const addToStoreData = (data) => {
    const storeList = getStoredData();
    const isExist = storeList.find(product => product.product_id == data.product_id)
    if (isExist) return toast('Data already Exist');
    storeList.push(data)
    localStorage.setItem('cart', JSON.stringify(storeList))
    toast('Add to cart successfully');
}

export { addToStoreData };
// for wish list button

const getWishListData = () => {
    let wishData = localStorage.getItem('wish-list');
    if (wishData) {
        try {
            const storeWishList = JSON.parse(wishData);
            return Array.isArray(storeWishList) ? storeWishList : [];
        } catch (e) {
            console.error("Error parsing wishlist data:", e);
            return [];
        }
    } else {
        return [];
    }
}
const addToWishList = (data) => {
    let strWishList = getWishListData();
    // No need to parse strWishList again since it's already an array
    const isExist = strWishList.find(products => products.product_id == data.product_id);
    if (isExist) return toast('Data already Exist');
    strWishList.push(data);
    localStorage.setItem('wish-list', JSON.stringify(strWishList));
    toast('Add to Wishlist successfully');
}

export { addToWishList };