import { FoodBoutiqueAPI } from '../drafts/food-api';

import {ShopStorage} from '../local-storage-api';
const SHOP_STORAGE = 'shop-storage';
const shopStorage = new ShopStorage(SHOP_STORAGE)
const shopStorageProducts = shopStorage.getAllProducts()






