<template>
  <div class="bg-[#0A0A0A] min-h-screen py-10 text-[#E0E0E0]">
    <div class="max-w-7xl mx-auto px-6">
      <h1
        class="text-3xl font-bold mb-8 text-[#00FF6A] text-center drop-shadow-[0_0_10px_#00FF6A]"
      >
        Your Cart
      </h1>

      <div class="master-container mx-auto">
        <div class="card cart bg-[#1B1B1B] rounded-2xl border border-[#2B2B2B] shadow-lg">
          <label class="title text-[#00FF6A] border-b-[#2B2B2B]">Your Courses in Cart</label>
          <div class="products">
            <div v-for="(item, index) in cartItems" :key="item.title" class="product flex items-center gap-4 p-3 border-b border-[#2B2B2B] last:border-b-0">
              <img :src="item.image" alt="course image" class="w-16 h-16 object-cover rounded-md" />
              <div class="flex-grow">
                <span class="text-white text-base font-semibold">{{ item.title }}</span>
                <p class="text-xs text-gray-400">{{ item.mentor.name }}</p>
              </div>
              <div class="quantity flex items-center bg-[#0A0A0A] rounded-md border border-[#2B2B2B]">
                <button @click="decreaseQuantity(index)" class="p-2 text-[#E0E0E0] hover:text-[#00FF6A]">
                  <svg fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" stroke="currentColor" d="M20 12L4 12"></path>
                  </svg>
                </button>
                <label class="text-[#E0E0E0] px-2">{{ item.quantity }}</label>
                <button @click="increaseQuantity(index)" class="p-2 text-[#E0E0E0] hover:text-[#00FF6A]">
                    <svg fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" stroke="currentColor" d="M12 4V20M20 12H4"></path>
                    </svg>
                </button>
              </div>
              <label class="price small text-[#00FF6A] font-semibold">Rp {{ formatPrice(item.discountPrice * item.quantity) }}</label>
            </div>
            <p v-if="cartItems.length === 0" class="text-center text-gray-500 py-8">Your cart is empty.</p>
          </div>
        </div>

        <div class="card coupons bg-[#1B1B1B] rounded-2xl border border-[#2B2B2B] shadow-lg mt-5">
          <label class="title text-[#00FF6A] border-b-[#2B2B2B]">Apply coupons</label>
          <form class="form p-4">
            <input type="text" placeholder="Apply your coupons here" class="input_field w-full h-10 px-3 rounded-md bg-[#0A0A0A] border border-[#2B2B2B] text-[#E0E0E0] focus:outline-none focus:ring-2 focus:ring-[#00FF6A]" />
            <button class="mt-3 w-full bg-[#00FF6A] hover:bg-[#FF1744] hover:text-white text-black font-semibold py-2 rounded-lg transition-all duration-200">
              Apply
            </button>
          </form>
        </div>

        <div class="card checkout bg-[#1B1B1B] rounded-2xl border border-[#2B2B2B] shadow-lg mt-5">
          <label class="title text-[#00FF6A] border-b-[#2B2B2B]">Checkout Summary</label>
          <div class="details p-4 grid grid-cols-2 gap-y-2">
            <span class="text-gray-400 text-sm font-bold">Cart Subtotal:</span>
            <span class="text-white text-right font-semibold">Rp {{ formatPrice(cartSubtotal) }}</span>
            <span class="text-gray-400 text-sm font-bold">Discount:</span>
            <span class="text-[#FF1744] text-right font-semibold">- Rp {{ formatPrice(discountAmount) }}</span>
            <span class="text-gray-400 text-sm font-bold">Tax (10%):</span>
            <span class="text-white text-right font-semibold">Rp {{ formatPrice(taxAmount) }}</span>
          </div>
          <div class="checkout--footer flex justify-between items-center p-4 bg-[#0A0A0A] rounded-b-xl border-t border-[#2B2B2B]">
            <label class="price text-[#00FF6A] text-2xl font-bold">
              <sup>Rp</sup>{{ formatPrice(totalAmount) }}
            </label>
            <button @click="proceedToCheckout" class="checkout-btn bg-[#00FF6A] hover:bg-[#FF1744] hover:text-white text-black font-semibold py-2 px-5 rounded-lg transition-all duration-200">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
   <div class="bg-[#0A0A0A] min-h-screen py-10 text-[#E0E0E0]">
    <div class="max-w-7xl mx-auto px-6">

      <!-- Custom Success Alert -->
      <div v-if="showSuccessAlert" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
        <div class="bg-[#1B1B1B] border border-[#00FF6A] rounded-lg shadow-xl p-6 max-w-sm w-full text-center transform scale-95 animate-scaleIn">
          <svg class="mx-auto h-16 w-16 text-[#00FF6A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <h3 class="mt-4 text-2xl leading-6 font-bold text-[#00FF6A]">Pembayaran Berhasil!</h3>
          <div class="mt-2 px-7 py-3">
            <p class="text-sm text-[#E0E0E0]">Terima kasih telah berbelanja. Kursus Anda siap diakses.</p>
          </div>
          <div class="mt-4">
            <button @click="showSuccessAlert = false" class="inline-flex justify-center rounded-md border border-transparent bg-[#00FF6A] px-4 py-2 text-base font-medium text-black shadow-sm hover:bg-[#00E65A] sm:text-sm">
              Oke
            </button>
          </div>
        </div>
      </div>
      <div class="master-container mx-auto">
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

const cartItems = ref([]);
const showSuccessAlert = ref(false); 

const formatPrice = (value) => {
  return new Intl.NumberFormat("id-ID").format(value);
};


onMounted(() => {
  const storedCart = localStorage.getItem('cart');
  if (storedCart) {
    cartItems.value = JSON.parse(storedCart);
  }
});

const cartSubtotal = computed(() => {
  return cartItems.value.reduce((sum, item) => sum + item.discountPrice * item.quantity, 0);
});

const discountAmount = computed(() => {
  return cartSubtotal.value > 0 ? 10000 : 0; 
});

const taxAmount = computed(() => {
  return (cartSubtotal.value - discountAmount.value) * 0.10;
});

const totalAmount = computed(() => {
  return cartSubtotal.value - discountAmount.value + taxAmount.value;
});

const increaseQuantity = (index) => {
  cartItems.value[index].quantity++;
  updateLocalStorage();
};


const decreaseQuantity = (index) => {
  if (cartItems.value[index].quantity > 1) {
    cartItems.value[index].quantity--;
  } else {
    cartItems.value.splice(index, 1);
  }
  updateLocalStorage();
};

const updateLocalStorage = () => {
  localStorage.setItem('cart', JSON.stringify(cartItems.value));
};


const proceedToCheckout = () => {
  if (cartItems.value.length === 0) {
    alert('Your cart is empty. Please add some courses before checking out.');
    return;
  }
  
  showSuccessAlert.value = true;
  setTimeout(() => {
    cartItems.value = [];
    updateLocalStorage(); 
    showSuccessAlert.value = false; 
  }, 3000); 

};
</script>

<style scoped>
.master-container {
  display: grid;
  grid-template-columns: auto; /* Default: Original desktop layout */
  gap: 20px;
  max-width: 600px; /* Original max-width */
}

.card {
  width: 100%;
  box-shadow: 0px 0px 15px rgba(0, 255, 106, 0.1);
  transition: all 0.3s ease-in-out;
}

.card:hover {
  box-shadow: 0px 0px 25px rgba(0, 255, 106, 0.3);
}

.title {
  display: flex;
  align-items: center;
  padding: 15px 20px;
  font-weight: 700;
  font-size: 1.1rem;
  color: #00FF6A;
  border-bottom: 1px solid #2B2B2B;
  text-shadow: 0 0 5px rgba(0, 255, 106, 0.5);
}

/* cart */
.cart {
  border-radius: 1rem;
}

.cart .products {
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.cart .products .product {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px 10px;
  border-bottom: 1px solid #2B2B2B;
  last:border-b-0; /* Original: this should be a class or handled in JS for last-child pseudo-class */
}

.cart .products .product:last-child {
  border-bottom: none;
}

.cart .products .product span {
  font-size: 1rem;
  font-weight: 600;
  color: #E0E0E0;
  margin-bottom: 5px;
  display: block;
}

.cart .products .product p {
  font-size: 0.85rem;
  font-weight: 500;
  color: #9E9E9E;
}

.cart .quantity {
  height: 35px;
  display: flex;
  align-items: center;
  background-color: #0A0A0A;
  border: 1px solid #2B2B2B;
  border-radius: 7px;
}

.cart .quantity label {
  width: 30px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 700;
  color: #E0E0E0;
}

.cart .quantity button {
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  outline: none;
  background-color: transparent;
  color: #E0E0E0;
}

.cart .quantity button:hover {
  color: #00FF6A;
}

.card .small {
  font-size: 1.1rem;
  margin: 0 0 auto auto;
  color: #00FF6A;
}

.card .small sup {
  font-size: 0.7em;
}

/* coupons */
.coupons {
  border-radius: 1rem;
}

.coupons form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
}

.input_field {
  height: 40px;
  padding: 0 15px;
  border-radius: 8px;
  outline: none;
  border: 1px solid #2B2B2B;
  background-color: #0A0A0A;
  color: #E0E0E0;
  transition: all 0.3s ease;
}

.input_field::placeholder {
  color: #666;
}

.input_field:focus {
  border: 1px solid #00FF6A;
  box-shadow: 0px 0px 0px 2px rgba(0, 255, 106, 0.3);
}

.coupons form button {
  height: 40px;
  background: #00FF6A;
  color: #000000;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 8px;
  border: 0;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}

.coupons form button:hover {
  background: #FF1744;
  color: #FFFFFF;
  box-shadow: 0px 0px 10px rgba(255, 23, 68, 0.5);
}

/* Checkout */
.checkout {
  border-radius: 1rem;
}

.checkout .details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 15px;
  gap: 10px;
}

.checkout .details span {
  font-size: 0.95rem;
  font-weight: 500;
  color: #E0E0E0;
}

.checkout .details span:nth-child(odd) {
  font-weight: 700;
  color: #9E9E9E;
}

.checkout .details span:nth-child(even) {
  text-align: right;
  font-weight: 600;
}

.checkout .checkout--footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  background-color: #0A0A0A;
  border-top: 1px solid #2B2B2B;
  border-radius: 0 0 1rem 1rem;
}

.price {
  position: relative;
  font-size: 2.2rem;
  color: #00FF6A;
  font-weight: 900;
  text-shadow: 0 0 8px rgba(0, 255, 106, 0.6);
}

.price sup {
  font-size: 0.6em;
  top: -0.8em;
  left: -0.2em;
}

.checkout .checkout-btn {
  width: auto;
  min-width: 180px;
  height: 45px;
  background: #00FF6A;
  color: #000000;
  font-size: 1.1rem;
  font-weight: 700;
  border-radius: 8px;
  border: 0;
  outline: none;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

.checkout .checkout-btn:hover {
  background: #FF1744;
  color: #FFFFFF;
  box-shadow: 0px 0px 15px rgba(255, 23, 68, 0.6);
}


@media (max-width: 768px) {
  .master-container {
    grid-template-columns: 1fr; 
    max-width: 100%; 
    padding: 0 15px; 
  }

  .cart .products .product {
    flex-wrap: wrap; 
    justify-content: space-between; 
    gap: 10px; 
    padding: 10px; 
  }

  .cart .products .product > img {
    flex-shrink: 0; 
  }

  .cart .products .product > div:first-of-type { 
    flex-grow: 1; 
    min-width: 120px; 
  }

  .cart .quantity {
    margin-left: auto; 
    order: 1; 
  }

  .cart .products .product .small { 
    width: 100%; 
    text-align: right; 
    margin-top: 5px; 
    order: 2; 
    font-size: 1rem; 
  }

  .checkout .checkout--footer {
    flex-direction: column; 
    gap: 15px; 
    padding: 15px; 
  }

  .price {
    font-size: 1.8rem; 
    margin-bottom: 0; 
  }

  .checkout .checkout-btn {
    width: 100%; 
    padding: 10px 15px; 
    font-size: 1rem; 
  }

  .title {
    font-size: 1rem; 
    padding: 10px 15px;
  }

  .coupons form button {
    font-size: 0.9rem; 
  }
}

@media (max-width: 480px) {
  .cart .products .product img {
    width: 48px; 
    height: 48px;
  }

  .cart .products .product span {
    font-size: 0.9rem; 
  }

  .cart .products .product p {
    font-size: 0.75rem; 
  }

  .cart .quantity {
    height: 30px;
  }

  .cart .quantity label {
    width: 25px;
    height: 30px;
    font-size: 0.9rem;
  }

  .cart .quantity button {
    width: 30px;
    height: 30px;
  }
}
</style>