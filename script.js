// ========================================================
// Aai Shree Khodiyar Restaurant - Digital Menu Database
// Exactly transcribed from official Restaurant Menu Card (All 167 Dishes)
// Every Single Dish with its Authentic, Name-Related Food Photo
// ========================================================

const menuData = [
    // ---------------- PAGE 2: SOUP (6 Dishes) ----------------
    {
        id: 1,
        name: "Hot and Sour Soup",
        gujName: "હોટ એન્ડ સોર સુપ",
        price: 110,
        category: "Soup",
        photo: "https://www.chilitochoc.com/wp-content/uploads/2021/01/chinese-hot-and-sour-soup-sq.jpg"
    },
    {
        id: 2,
        name: "Tomato Soup",
        gujName: "ટોમેટો સુપ",
        price: 110,
        category: "Soup",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1UDGJ1nkFrb-F4h0MQnSv-PT7Xbq-M3lPbs5oT1UyOrkLZzOtsqm6H5kR&s=10"
    },
    {
        id: 3,
        name: "Manchow Soup",
        gujName: "મનચાઉ સુપ",
        price: 120,
        category: "Soup",
        photo: "https://easyindiancookbook.com/wp-content/uploads/2023/07/manchow-soup-veg-6.jpg"
    },
    {
        id: 4,
        name: "Noodles Soup",
        gujName: "નુડલ્સ સુપ",
        price: 110,
        category: "Soup",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTklj6udbPOwn8nbprjeTge6Migu1pFtGvn14qLjOfFq8rI5jxlNv_jlSMZ&s=10"
    },
    {
        id: 5,
        name: "Sweet Corn Soup",
        gujName: "સ્વીટ કોર્ન સુપ",
        price: 150,
        category: "Soup",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ySAYS9zrxzr6Qm55zzwvPETXP9iQvopJ3r1xGeuWwx-gP7-BO18neDw0&s=10"
    },
    {
        id: 6,
        name: "Lemon Coriander Soup",
        gujName: "લેમન કોરીયન્ડર સુપ",
        price: 120,
        category: "Soup",
        photo: "https://rakskitchen.net/wp-content/uploads/2025/11/easy-lemon-coriander-soup.jpg"
    },

    // ---------------- PAGE 2: PAPAD (4 Dishes) ----------------
    {
        id: 7,
        name: "Roasted Papad",
        gujName: "રોસ્ટેડ પાપડ",
        price: 20,
        category: "Papad",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmMI2vlnipmOy4ZOl1Cs_cByL98Sv5UGgKP3bTTlIl-w&s=10"
    },
    {
        id: 8,
        name: "Fry Papad",
        gujName: "ફ્રાય પાપડ",
        price: 25,
        category: "Papad",
        photo: "https://c.ndtvimg.com/2024-03/9v3bo0fo_pappad-generic_625x300_21_March_24.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350?im=FaceCrop,algorithm=dnn,width=1200,height=886"
    },
    {
        id: 9,
        name: "Masala Papad",
        gujName: "મસાલા પાપડ",
        price: 30,
        category: "Papad",
        photo: "https://static.toiimg.com/thumb/53910008.cms?imgsize=114416&width=800&height=800"
    },
    {
        id: 10,
        name: "Cheese Masala Papad",
        gujName: "ચીઝ મસાલા પાપડ",
        price: 60,
        category: "Papad",
        photo: "https://i.ytimg.com/vi/XGC7Zbr5GwA/maxresdefault.jpg"
    },

    // ---------------- PAGE 2: SALAD & CHHAS (9 Dishes) ----------------
    {
        id: 11,
        name: "Green Salad",
        gujName: "ગ્રીન સલાડ",
        price: 90,
        category: "Salad & Chhas",
        photo: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 12,
        name: "Tomato Salad",
        gujName: "ટોમેટો સલાડ",
        price: 80,
        category: "Salad & Chhas",
        photo: "https://www.cubesnjuliennes.com/wp-content/uploads/2021/08/Marinated-Tomatoes-Salad-Recipe.jpg"
    },
    {
        id: 13,
        name: "Butter Milk (Chhas)",
        gujName: "છાસ",
        price: 20,
        category: "Salad & Chhas",
        photo: "https://5.imimg.com/data5/SELLER/Default/2022/12/PX/UH/BV/50447457/a2-gir-cow-buttermilk-500x500.jpg"
    },
    {
        id: 14,
        name: "Masala Butter Milk",
        gujName: "મસાલા છાસ",
        price: 30,
        category: "Salad & Chhas",
        photo: "https://i0.wp.com/chitrasfoodbook.com/wp-content/uploads/2017/03/masala-chaas.jpg?w=1200&ssl=1"
    },
    {
        id: 15,
        name: "Veg Raita",
        gujName: "વેજ રાઈતા",
        price: 80,
        category: "Salad & Chhas",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ0lvYTchGJ_LeeKj8_QUkeGDaJm8QZecLk5tKqT9qNfCiF46QeSm8-yXt&s=10"
    },
    {
        id: 16,
        name: "Bundi Raita",
        gujName: "બુંદી રાઈતા",
        price: 90,
        category: "Salad & Chhas",
        photo: "https://www.whiskaffair.com/wp-content/uploads/2020/12/Boondi-Raita-2-3.jpg"
    },
    {
        id: 17,
        name: "Plain Dahi",
        gujName: "પ્લેન દહીં",
        price: 50,
        category: "Salad & Chhas",
        photo: "https://www.shutterstock.com/image-photo/homemade-yogurt-indian-dahi-curd-260nw-2277907151.jpg"
    },
    {
        id: 18,
        name: "Special Lassi",

        gujName: "સ્પેશ્યલ લસ્સી",
        price: 100,
        category: "Salad & Chhas",
        photo: "https://ministryofcurry.com/wp-content/uploads/2026/06/sweet-lassi.jpg"
    },
    {
        id: 19,
        name: "Sweet Lassi",
        gujName: "સ્વીટ લસ્સી",
        price: 90,
        category: "Salad & Chhas",
        photo: "https://media.sailusfood.com/wp-content/uploads/2015/04/lassi-recipe.jpg"
    },

    // ---------------- PAGE 3: CHINESE (13 Dishes) ----------------
    {
        id: 20,
        name: "Veg Manchurian Dry / Gravy",
        gujName: "વેજ મંચુરિયન ડ્રાય / ગ્રેવી",
        price: 150,
        category: "Chinese",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQe2lMhfvV5d1ndzon5uE1fk_Iu6uIeB-cDou4b1n8cqJVX8FV-SQdmr8&s=10"
    },
    {
        id: 21,
        name: "Paneer Chilli Dry / Gravy",
        gujName: "પનીર ચિલ્લી ડ્રાય / ગ્રેવી",
        price: 220,
        category: "Chinese",
        photo: "https://www.cubesnjuliennes.com/wp-content/uploads/2018/12/Chilli-Paneer-Recipe.jpg"
    },
    {
        id: 22,
        name: "Paneer Manchurian Dry",
        gujName: "પનીર મંચુરિયન ડ્રાય",
        price: 210,
        category: "Chinese",
        photo: "https://bitesofindiaevan.com/wp-content/uploads/2024/11/Paneer-Manchurian.png"
    },
    {
        id: 23,
        name: "Veg Hakka Noodles",
        gujName: "વેજ હક્કા નુડલ્સ",
        price: 140,
        category: "Chinese",
        photo: "https://www.spiceupthecurry.com/wp-content/uploads/2017/01/veg-hakka-noodles-2.jpg"
    },
    {
        id: 24,
        name: "Veg Fried Rice",
        gujName: "વેજ ફ્રાય રાઈસ",
        price: 150,
        category: "Chinese",
        photo: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 25,
        name: "Schezwan Fried Rice",
        gujName: "શેઝવાન ફ્રાય રાઈસ",
        price: 160,
        category: "Chinese",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhhgtQJM-_Tuvh668O7gIEuEtKPyR8heWIYz_w37FSxg&s=10"
    },
    {
        id: 26,
        name: "Manchurian Fried Rice",
        gujName: "મંચુરિયન ફ્રાય રાઈસ",
        price: 160,
        category: "Chinese",
        photo: "https://img-cdn.publive.online/fit-in/1200x675/filters:format(webp)/sanjeev-kapoor/media/media_files/x10HBwyIRGJLbyExjRtR.JPG"
    },
    {
        id: 27,
        name: "Manchurian Noodles",
        gujName: "મંચુરિયન નુડલ્સ",
        price: 160,
        category: "Chinese",
        photo: "https://sinfullyspicy.com/wp-content/uploads/2022/04/1200-by-1200-images-2.jpg"
    },
    {
        id: 28,
        name: "Schezwan Noodles",
        gujName: "શેઝવાન નુડલ્સ",
        price: 150,
        category: "Chinese",
        photo: "https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 29,
        name: "Chinese Bhel",
        gujName: "ચાઈનીઝ ભેલ",
        price: 190,
        category: "Chinese",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxIwQhlfqjdnQaUcM9hdPkNSAKAEcKjyqSTkIBrw7PyMIw8dZFKM3OFbI&s=10"
    },
    {
        id: 30,
        name: "Chilli Potato",
        gujName: "ચિલ્લી પોટેટો",
        price: 170,
        category: "Chinese",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOmzytj5Pe5Mec1Ce8oR_pA0mwNGdeGx2y98Dn4a8UimxmNGQ88ztde6uI&s=10"
    },
    {
        id: 31,
        name: "Veg Crispy",
        gujName: "વેજ ક્રિસ્પી",
        price: 170,
        category: "Chinese",
        photo: "https://homecookingshow.in/wp-content/uploads/2025/03/Veg-Crispy-1040x884.webp"
    },
    {
        id: 32,
        name: "Chinese Sizzler",
        gujName: "ચાઈનીઝ સિઝલર",
        price: 300,
        category: "Chinese",
        desc: "Noodles, Veg Fry Rice, Paneer Chilli, Veg Manchurian (નુડલ્સ, વેજ ફ્રાય રાઈસ, પનીર ચિલ્લી, વેજ મંચુરિયન)",
        photo: "https://img-cdn.publive.online/fit-in/1200x675/sanjeev-kapoor/media/post_banners/4733756a6278320d5d0dc49e84aee03b98be492d0b003eca21018593b64fd73b.jpg"
    },

    // ---------------- PAGE 4: VEGETABLE SABJI (22 Dishes) ----------------
    {
        id: 33,
        name: "Sp. Khodiyar Veg",
        gujName: "સ્પે. ખોડિયાર વેજ",
        price: 280,
        category: "Vegetable Sabji",
        badge: "Chef Special 👑",
        photo: "https://c.ndtvimg.com/2023-09/cnj1t9vo_rajasthani-sabzi_625x300_14_September_23.jpg?im=FeatureCrop,algorithm=dnn,width=384,height=384"
    },
    {
        id: 34,
        name: "Veg Kolhapuri (Spicy)",
        gujName: "વેજ કોલ્હાપુરી (સ્પાઈસી)",
        price: 200,
        category: "Vegetable Sabji",
        badge: "Spicy 🌶️",
        photo: "https://www.vegrecipesofindia.com/wp-content/uploads/2022/05/veg-kolhapuri-recipe-2.jpg"
    },
    {
        id: 35,
        name: "Veg Jaipuri",
        gujName: "વેજ જયપુરી",
        price: 200,
        category: "Vegetable Sabji",
        photo: "https://www.nehascookbook.com/wp-content/uploads/2022/10/Veg-jaipuri-WS.jpg"
    },
    {
        id: 36,
        name: "Veg Hyderabadi",
        gujName: "વેજ હૈદરાબાદી",
        price: 200,
        category: "Vegetable Sabji",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLVq_JLPAPJCctUtc5JpL09Ffs3P708O9dNjWZgaBFlQAu1uOrGAblOkM&s=10"
    },
    {
        id: 37,
        name: "Veg Makhanwala",
        gujName: "વેજ મખ્ખનવાલા",
        price: 210,
        category: "Vegetable Sabji",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7b3tC3-NkEetuVIzZ3cznZ6-a4ByilOE1o7nEBjvQLEXafSB02Dmxz-g&s=10"
    },
    {
        id: 38,
        name: "Veg Tufani (Spicy)",
        gujName: "વેજ તુફાની (સ્પાઈસી)",
        price: 220,
        category: "Vegetable Sabji",
        badge: "Spicy 🌶️",
        photo: "https://epicureanalley.com/wp-content/uploads/2025/04/Veg-Toofani.jpeg"
    },
    {
        id: 39,
        name: "Mix Veg",
        gujName: "મીક્ષ વેજ",
        price: 180,
        category: "Vegetable Sabji",
        photo: "https://www.cookwithmanali.com/wp-content/uploads/2023/01/Mixed-Veg-Sabzi.jpg"
    },
    {
        id: 40,
        name: "Chana Masala",
        gujName: "ચના મસાલા",
        price: 180,
        category: "Vegetable Sabji",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuvMe05geJykaRFcj689XBKm5DZdTzcUYJ_djJhqV4SB6-DecCoAGfvU8s&s=10"
    },
    {
        id: 41,
        name: "Dum Aloo (Punjabi)",
        gujName: "દમ આલુ (પંજાબી)",
        price: 180,
        category: "Vegetable Sabji",
        photo: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/08/dum-aloo-recipe.jpg"
    },
    {
        id: 42,
        name: "Aloo Matter",
        gujName: "આલુ મટર",
        price: 170,
        category: "Vegetable Sabji",
        photo: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Punjabi-Aloo-Matar-Recipe.jpg"
    },
    {
        id: 43,
        name: "Veg Garlic Masala",
        gujName: "વેજ ગાર્લિક મસાલા",
        price: 220,
        category: "Vegetable Sabji",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtLI3kEoWAfShJkAqVAaaextsGoFNM_2nX_TekcRNruKFVVH9227-ZWfU&s=10"
    },
    {
        id: 44,
        name: "Plain Palak",
        gujName: "પ્લેન પાલક",
        price: 170,
        category: "Vegetable Sabji",
        photo: "https://food.annapurnaderoyal.com/wp-content/uploads/2021/07/Plain-Palak.jpg"
    },
    {
        id: 45,
        name: "Aloo Palak",
        gujName: "આલુ પાલક",
        price: 170,
        category: "Vegetable Sabji",
        photo: "https://bitesofindiaevan.com/wp-content/uploads/2025/01/aloo-palak.png"
    },
    {
        id: 46,
        name: "Veg Balti Masala",
        gujName: "વેજ બાલ્ટી મસાલા",
        price: 200,
        category: "Vegetable Sabji",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQSWMDEmLDs-bNzaDCrHqfoRnVYWWzFT3Aaz9SR005THkue64XWem6cFQ&s=10"
    },
    {
        id: 47,
        name: "Baby Corn Butter Masala",
        gujName: "બેબી કોર્ન બટર મસાલા",
        price: 230,
        category: "Vegetable Sabji",
        photo: "https://smithakalluraya.com/wp-content/uploads/2017/01/babycorn-masala-recipe-indian-babycorn-curry-recipe.1024x1024-3.jpg"
    },
    {
        id: 48,
        name: "Veg Khima Masala",
        gujName: "વેજ ખીમા મસાલા",
        price: 210,
        category: "Vegetable Sabji",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRdUSD_MIAci3Zh_uBRN_3Z2z894G2XWVL1I1jdWt6TiHkREQLOs5h3fAP&s=10"
    },
    {
        id: 49,
        name: "Veg Tawa Masala",
        gujName: "વેજ તવા મસાલા",
        price: 230,
        category: "Vegetable Sabji",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe99EXkbTN8AckME6N7gn4vl55UOeEO_VuUpXSMumbcrKx3zLTTa_S9IY&s=10"
    },
    {
        id: 50,
        name: "Veg Kadai",
        gujName: "વેજ કડાઈ",
        price: 210,
        category: "Vegetable Sabji",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV2fcGJRmvVkeH_wkcbWyAj5IusaEMyNoR7SoBeI5-VQjTi7K1PoFNbLA&s=10"
    },
    {
        id: 51,
        name: "Veg Handi",
        gujName: "વેજ હાંડી",
        price: 220,
        category: "Vegetable Sabji",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT32k_R2K0WTTmocUMFegKTCbDIZf2oatXgr9EdG4orDi5sGpQ85n1v6zkW&s=10"
    },
    {
        id: 52,
        name: "Veg Angara (Spicy)",
        gujName: "વેજ અંગારા (સ્પાઈસી)",
        price: 260,
        category: "Vegetable Sabji",
        badge: "Spicy 🌶️",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4H_d-awzaoXz2dFpOTEoU9NTwbTE8tf4OOyFCO0yHeqNGvwhSRfjm7ks0&s=10"
    },
    {
        id: 53,
        name: "Mushroom Masala",
        gujName: "મશરૂમ મસાલા",
        price: 260,
        category: "Vegetable Sabji",
        photo: "https://shwetainthekitchen.com/wp-content/uploads/2023/03/mutter-mushroom.jpg"
    },
    {
        id: 54,
        name: "Matter Mushroom",
        gujName: "મટર મશરૂમ",
        price: 260,
        category: "Vegetable Sabji",
        photo: "https://sinfullyspicy.com/wp-content/uploads/2014/03/1200-by-1200-images-1.jpg"
    },

    // ---------------- PAGE 5: KATHIYAWADI (26 Dishes) ----------------
    {
        id: 55,
        name: "Sp. Khodiyar Kathiyawadi",
        gujName: "સ્પે. ખોડિયાર કાઠીયાવાડી",
        price: 270,
        category: "Kathiyawadi",
        badge: "Royal Special 👑",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQESBA2fcXtxrT9GVnxzZzUt5HcH-pLbwQsd2lf4YdhIMHigroy80dDSjD&s=10"
    },
    {
        id: 56,
        name: "Vagharelo Rotlo",
        gujName: "વઘારેલો રોટલો",
        price: 190,
        category: "Kathiyawadi",
        badge: "Bestseller 🔥",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXYaTuvIgTaJkwsYUpWGJxqTtmUVDz0nCgChKJBsJK93uD9Avt1Kom6NIx&s=10"
    },
    {
        id: 57,
        name: "Methi Papad",
        gujName: "મેથી પાપડ",
        price: 180,
        category: "Kathiyawadi",
        photo: "https://rakskitchen.net/wp-content/uploads/2016/09/29319463623_0a966dde2c_z-500x500.jpg"
    },
    {
        id: 58,
        name: "Kaju Gathiya",
        gujName: "કાજુ ગાંઠિયા",
        price: 190,
        category: "Kathiyawadi",
        badge: "Must Try ⭐",
        photo: "https://www.nehascookbook.com/wp-content/uploads/2022/10/Kaju-gathiya-shaak-WS-500x500.jpg"
    },
    {
        id: 59,
        name: "Gathiya Dungari",
        gujName: "ગાંઠિયા ડુંગરી",
        price: 170,
        category: "Kathiyawadi",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ay-BRw_izFi6PxvUGaYHrJ_TErvTPQxdlrxNy-8KjnR8oMQBQqo95a5x&s=10"
    },
    {
        id: 60,
        name: "Bharela Bengan",
        gujName: "ભરેલા રીંગણ",
        price: 180,
        category: "Kathiyawadi",
        photo: "https://vspiceroute.com/wp-content/uploads/2023/02/DBDB43EA-4791-44EA-9D87-1F4B33FB17D8-225x300.jpeg"
    },
    {
        id: 61,
        name: "Lasaniya Bataka",
        gujName: "લસણીયા બટાકા",
        price: 180,
        category: "Kathiyawadi",
        badge: "Popular 🌶️",
        photo: "https://ranveerbrar.com/wp-content/uploads/2024/04/lasaniya-batata.jpg"
    },
    {
        id: 62,
        name: "Bhindi Masala",
        gujName: "ભીંડી મસાલા",
        price: 160,
        category: "Kathiyawadi",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL_3sFO_IdKuG-RkxVHSpBXsCkYHI3qEt_sj5bHPWE_M-k_LnAbEQO2LCC&s=10"
    },
    {
        id: 63,
        name: "Dahi Bhindi",
        gujName: "દહીં ભીંડી",
        price: 170,
        category: "Kathiyawadi",
        photo: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/05/bhindi-masala-recipe.jpg"
    },
    {
        id: 64,
        name: "Fry Bhindi",
        gujName: "ફ્રાય ભીંડી",
        price: 160,
        category: "Kathiyawadi",
        photo: "https://www.cookingcarnival.com/wp-content/uploads/2018/05/Tawa-Bhindi.jpg"
    },
    {
        id: 65,
        name: "Bengan Bhartha (Olo)",
        gujName: "રીંગણ ભર્થુ / ઓળો",
        price: 190,
        category: "Kathiyawadi",
        badge: "Kathiyawadi Hit ⭐",
        photo: "https://www.cookwithmanali.com/wp-content/uploads/2014/08/Baingan-Bharta.jpg"
    },
    {
        id: 66,
        name: "Bengan Masala",
        gujName: "રીંગણ મસાલા",
        price: 190,
        category: "Kathiyawadi",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVVcl47rBSNjXrw43kQVYNJOB50SqoPs39FvTOq2mdti-Z1c4tyFkLuM&s=10"
    },
    {
        id: 67,
        name: "Sev Dungari",
        gujName: "સેવ ડુંગરી",
        price: 160,
        category: "Kathiyawadi",
        photo: "https://www.recipeingujarati.com/wp-content/uploads/2022/09/sev-dungri-nu-shaak.jpg"
    },
    {
        id: 68,
        name: "Sev Tomoto",
        gujName: "સેવ ટામેટા",
        price: 170,
        category: "Kathiyawadi",
        badge: "Bestseller 🔥",
        photo: "https://ranveerbrar.com/wp-content/uploads/2021/02/Sev-Tamater-scaled-scaled.jpg"
    },
    {
        id: 69,
        name: "Sev Masala",
        gujName: "સેવ મસાલા",
        price: 160,
        category: "Kathiyawadi",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAlPtMTNgZIXPu5sZtWRTm4F87ylnR77LKd6yoxPBaq058PJOQd0_kgT8x&s=10"
    },
    {
        id: 70,
        name: "Sev Masala Cream",
        gujName: "સેવ મસાલા ક્રીમ",
        price: 200,
        category: "Kathiyawadi",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrVdl-nvyGLyoZtHZEV6yPxXQtgd7FG6phVOp2PBR1h087WpS4wv0N4jg&s=10"
    },
    {
        id: 71,
        name: "Moong Masala",
        gujName: "મગ મસાલા",
        price: 170,
        category: "Kathiyawadi",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSySOZz4iIyeUswhVipddQGMflB4HmpQ1lfx0yvmKpIzr0DE_mSHHKXYK0&s=10"
    },
    {
        id: 72,
        name: "Besan Gattha",
        gujName: "બેસન ગઠ્ઠા",
        price: 170,
        category: "Kathiyawadi",
        photo: "https://cdn.mygingergarlickitchen.com/images/800px/800px-Steamed-Besan-Gatte-Ki-Sabzi-Recipe-Bele-Ki-Sabji-10.jpg"
    },
    {
        id: 73,
        name: "Dahi Fry",
        gujName: "દહીં ફ્રાય",
        price: 140,
        category: "Kathiyawadi",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvB45lCdiszNucmF_tU0khWHQtwOWkD6qWXAaIqKHIBmXvCES6roZLbTnM&s=10"
    },
    {
        id: 74,
        name: "Suki Bhaji",
        gujName: "સુકી ભાજી",
        price: 140,
        category: "Kathiyawadi",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI8oNmpIslyon5ndMMwzYJsfRc1CC_IH8Rri53t4DsKr_NHtcp1nBGdag&s=10"
    },
    {
        id: 75,
        name: "Kathiyawadi Kadhi",
        gujName: "કાઠીયાવાડી કઢી",
        price: 140,
        category: "Kathiyawadi",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn3eAdAURw3QuQ0CvhJDvqVrl-Xhni2AoPIynaX9G4jwPhVDCkTCA3lHVw&s=10"
    },
    {
        id: 76,
        name: "Plain Khichadi",
        gujName: "પ્લેન ખીચડી",
        price: 130,
        category: "Kathiyawadi",
        photo: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/08/baby-dal-lentil-khichdi.jpg"
    },
    {
        id: 77,
        name: "Masala Khichadi",
        gujName: "મસાલા ખીચડી",
        price: 150,
        category: "Kathiyawadi",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT48AOr70b3CruRh8TtLT-rLm-1OhiZI0OsZMeWZ40zWg7i4BUwehmfjxn9&s=10"
    },
    {
        id: 78,
        name: "Rajwadi Khichadi",
        gujName: "રજવાડી ખીચડી",
        price: 190,
        category: "Kathiyawadi",
        badge: "Royal Taste 👑",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8zSZwZHIzs9PFjNNu2PqZtAugZE1lKvBaXk2XKv3e4AT7OqmpPjIc2drm&s=10"
    },
    {
        id: 79,
        name: "Dungri Bataka",
        gujName: "ડુંગરી બટાકા",
        price: 150,
        category: "Kathiyawadi",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4KKk9bsOE6vj4I7nn1Xi4YFQK1py43Lkxpgv7apedXw&s=10"
    },
    {
        id: 80,
        name: "Rasila Aloo",
        gujName: "રસીલા આલુ",
        price: 150,
        category: "Kathiyawadi",
        photo: "https://www.vegrecipesofindia.com/wp-content/uploads/2014/12/aloo-rasedar-recipe-1.jpg"
    },

    // ---------------- PAGE 6: PUNJABI SABJI (25 Dishes) ----------------
    {
        id: 81,
        name: "Sp. Khodiyar Paneer",
        gujName: "સ્પે. ખોડિયાર પનીર",
        price: 300,
        category: "Punjabi Sabji",
        badge: "House Special 👑",
        photo: "https://c.ndtvimg.com/2020-04/e0s7nkfg_paneer-mattar_625x300_16_April_20.jpg"
    },
    {
        id: 82,
        name: "Paneer Tikka Masala",
        gujName: "પનીર ટીક્કા મસાલા",
        price: 240,
        category: "Punjabi Sabji",
        badge: "Popular ⭐",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqoqiHYMKD8NdxfJh9b4EbM3ohsmcfFO5LgrcVgXd5W6Yq-Yhyy3RDLZw&s=10"
    },
    {
        id: 83,
        name: "Paneer Butter Masala",
        gujName: "પનીર બટર મસાલા",
        price: 260,
        category: "Punjabi Sabji",
        badge: "Bestseller 🔥",
        photo: "https://www.ruchiskitchen.com/wp-content/uploads/2020/12/Paneer-butter-masala-recipe-3.jpg"
    },
    {
        id: 84,
        name: "Paneer Tufani (Spicy)",
        gujName: "પનીર તુફાની (સ્પાઈસી)",
        price: 260,
        category: "Punjabi Sabji",
        badge: "Spicy 🌶️",
        photo: "https://m.media-amazon.com/images/I/61hRVZzUtsL._AC_UF350,350_QL80_.jpg"
    },
    {
        id: 85,
        name: "Paneer Kadai",
        gujName: "પનીર કડાઈ",
        price: 240,
        category: "Punjabi Sabji",
        photo: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/03/Best-Kadai-Paneer-Recipe.jpg"
    },
    {
        id: 86,
        name: "Paneer Handi",
        gujName: "પનીર હાંડી",
        price: 240,
        category: "Punjabi Sabji",
        photo: "https://www.vegrecipesofindia.com/wp-content/uploads/2017/12/paneer-handi-recipe-2.jpg"
    },
    {
        id: 87,
        name: "Palak Paneer",
        gujName: "પાલક પનીર",
        price: 220,
        category: "Punjabi Sabji",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUoqJGTlZNeeVRekl4krSc96MnEQ00FnRiC9L6NYI-E3v8ZJZ7XZ5sgNn3&s=10"
    },
    {
        id: 88,
        name: "Shahi Paneer",
        gujName: "શાહી પનીર",
        price: 220,
        category: "Punjabi Sabji",
        photo: "https://shwetainthekitchen.com/wp-content/uploads/2024/04/shahi-paneer.jpg"
    },
    {
        id: 89,
        name: "Paneer Pasanda",
        gujName: "પનીર પસંદા",
        price: 240,
        category: "Punjabi Sabji",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTcHRnxwf62KAeVHa6i-tPkliJuRma8VBCapXqOetxuZ-V4e4dw45LWtee&s=10"
    },
    {
        id: 90,
        name: "Paneer Korma",
        gujName: "પનીર કોરમા",
        price: 230,
        category: "Punjabi Sabji",
        photo: "https://www.indianhealthyrecipes.com/wp-content/uploads/2014/07/paneer-korma-recipe-500x500.jpg"
    },
    {
        id: 91,
        name: "Mutter Paneer",
        gujName: "મટર પનીર",
        price: 220,
        category: "Punjabi Sabji",
        photo: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/03/matar-paneer.jpg"
    },
    {
        id: 92,
        name: "Cheese Butter Masala",
        gujName: "ચીઝ બટર મસાલા",
        price: 300,
        category: "Punjabi Sabji",
        badge: "Rich & Cheesy 🧀",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqTgnqaicZ26wBKVnKL9cil3q_IYsHYbbHY3DcNPWQyngU46zYitT6mJok&s=10"
    },
    {
        id: 93,
        name: "Cheese Anguri",
        gujName: "ચીઝ અંગુરી",
        price: 310,
        category: "Punjabi Sabji",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxw1zjtVV0U604sAJLFXTE-1yZ5Vc71b9tdHSSrdJYd6nSlMvmjxYL5W3M&s=10"
    },
    {
        id: 94,
        name: "Paneer Do Pyaza",
        gujName: "પનીર દો પ્યાઝા",
        price: 230,
        category: "Punjabi Sabji",
        photo: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/01/paneer-do-pyaza.jpg"
    },
    {
        id: 95,
        name: "Paneer Angara (Spicy)",
        gujName: "પનીર અંગારા (સ્પાઈસી)",
        price: 290,
        category: "Punjabi Sabji",
        badge: "Spicy 🌶️",
        photo: "https://5.imimg.com/data5/SELLER/Default/2025/6/521763818/MQ/XX/LO/11777472/frozen-paneer-angara.jpeg"
    },
    {
        id: 96,
        name: "Paneer Garlic Masala",
        gujName: "પનીર ગાર્લિક મસાલા",
        price: 250,
        category: "Punjabi Sabji",
        photo: "https://cdn.prod.website-files.com/65e2ec4e51f6693a3af9151d/660bbc2bf96bfa42f8c93333_f0ef7b68-009e-4c37-bdd5-f67ca31339eb.webp"
    },
    {
        id: 97,
        name: "Paneer Bhurji",
        gujName: "પનીર ભુરજી",
        price: 250,
        category: "Punjabi Sabji",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTyn0tNt2vG-BXCtpcAhPFyvXNh9sv3wNy_sQ_S1dSVQ&s=10"
    },
    {
        id: 98,
        name: "Paneer Lavabdar",
        gujName: "પનીર લબાબદાર",
        price: 240,
        category: "Punjabi Sabji",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDqbZHC5kZLj-Dad7imoiUsG63uJoIgmPDNqfPF4Xj8MR_Ll8iqi4sIWUm&s=10"
    },
    {
        id: 99,
        name: "Paneer Tawa Masala",
        gujName: "પનીર તવા મસાલા",
        price: 260,
        category: "Punjabi Sabji",
        photo: "https://i0.wp.com/cookingfromheart.com/wp-content/uploads/2018/04/Tawa-Paneer-Masala-3.jpg?resize=683%2C1024&ssl=1"
    },
    {
        id: 100,
        name: "Paneer Patiyala",
        gujName: "પનીર પટીયાલા",
        price: 270,
        category: "Punjabi Sabji",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-RnyYRetrejgJL8e9bpXO_6oJTxO-MLSk2TXgTm4sbtStmJBIr5EGjfWN&s=10"
    },
    {
        id: 101,
        name: "Paneer Kolhapuri (Spicy)",
        gujName: "પનીર કોલ્હાપુરી (સ્પાઈસી)",
        price: 240,
        category: "Punjabi Sabji",
        badge: "Spicy 🌶️",
        photo: "https://img-cdn.publive.online/fit-in/1200x675/sanjeev-kapoor/media/media_files/2025/05/27/HtkFhFSLEsII0Xr6kbEH.jpg"
    },
    {
        id: 102,
        name: "Paneer Mushroom",
        gujName: "પનીર મશરૂમ",
        price: 290,
        category: "Punjabi Sabji",
        photo: "https://happietrio.com/wp-content/uploads/2022/05/Mushroommasala.jpg"
    },
    {
        id: 103,
        name: "Paneer Balti",
        gujName: "પનીર બાલ્ટી",
        price: 240,
        category: "Punjabi Sabji",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRX-6gFAR0aZgaDl-UNu6NJhChxncHGPtOki3ZqgC2-R3h7wIONaLc8CE&s=10"
    },
    {
        id: 104,
        name: "Paneer Jwalamukhi",
        gujName: "પનીર જ્વાલામુખી",
        price: 250,
        category: "Punjabi Sabji",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZg-7_uEavGsheSsK1U3-wJxZXuF4lvlecZ4IyNf-pmRhLNYymCTi-jgU&s=10"
    },
    {
        id: 105,
        name: "Navratan Korma (Sweet)",
        gujName: "નવરત્ન કોરમા (સ્વીટ)",
        price: 290,
        category: "Punjabi Sabji",
        photo: "https://www.cookwithmanali.com/wp-content/uploads/2020/06/Navratan-Korma.jpg"
    },

    // ---------------- PAGE 7: KAJU SPECIAL & KOFTA (10 Dishes) ----------------
    {
        id: 106,
        name: "Kaju Paneer Masala",
        gujName: "કાજુ પનીર મસાલા",
        price: 280,
        category: "Kaju & Kofta",
        badge: "Royal Taste 👑",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZo_kssJTgfKgyhBGtAkXBUsEWgYJ7l55PVFZviI8SbegwypnSRrVu4kI&s=10"
    },
    {
        id: 107,
        name: "Kaju Curry",
        gujName: "કાજુ કરી",
        price: 280,
        category: "Kaju & Kofta",
        badge: "Popular ⭐",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv6TjyUOUhafw0VL3P6-UrYPL_LjwtviplT1syJ0RTiw&s=10"
    },
    {
        id: 108,
        name: "Khoya Kaju (Sweet)",
        gujName: "ખોયા કાજુ (સ્વીટ)",
        price: 270,
        category: "Kaju & Kofta",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZmQ-b4hOk7f5NfGj2GrA_u8Jx-IjplOwhmpEVZFgDg7mJ3GEo7Gc-z74&s=10"
    },
    {
        id: 109,
        name: "Kaju Butter Masala",
        gujName: "કાજુ બટર મસાલા",
        price: 290,
        category: "Kaju & Kofta",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOJxRVfbx7FolS8saOWq_IVwec68fqv3i3ycrQxr4XIA&s=10"
    },
    {
        id: 110,
        name: "Kaju Masala",
        gujName: "કાજુ મસાલા",
        price: 260,
        category: "Kaju & Kofta",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKu7CShIV-U88s7rk9357D9HJoD2jMpYM4iHChBTDJdw&s=10"
    },
    {
        id: 111,
        name: "Kaju Kofta",
        gujName: "કાજુ કોફ્તા",
        price: 270,
        category: "Kaju & Kofta",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJkU-AAzsfqntHcrbmjyEZc7fl1jeOq3peaxAE_SCEaBbcnLepGWhzppU&s=10"
    },
    {
        id: 112,
        name: "Paneer Kofta",
        gujName: "પનીર કોફ્તા",
        price: 270,
        category: "Kaju & Kofta",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTPVUMFbvksWY0sOvHIYBGG2vWwMvYaVGk-2sb_zIrq-5xq02sCCC9Qx4&s=10"
    },
    {
        id: 113,
        name: "Malai Kofta (Sweet)",
        gujName: "મલાઈ કોફ્તા (સ્વીટ)",
        price: 270,
        category: "Kaju & Kofta",
        badge: "Sweet & Creamy",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe9aCbaoAioXNfnIzJW8dN5Khby_O8QO2_quPArYnojQ&s=10"
    },
    {
        id: 114,
        name: "Cheese Kofta",
        gujName: "ચીઝ કોફ્તા",
        price: 290,
        category: "Kaju & Kofta",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQolfROZYsNfLOvrr3s0oDe5GRDlTFvi_4cg36Pk5Hl4_YDToUoo7WgqfYz&s=10"
    },
    {
        id: 115,
        name: "Veg Kofta",
        gujName: "વેજ કોફ્તા",
        price: 260,
        category: "Kaju & Kofta",
        photo: "https://shwetainthekitchen.com/wp-content/uploads/2014/10/DSC_0750.jpg"
    },


    // ---------------- PAGE 8: TAWA ROTI (12 Dishes) ----------------
    {
        id: 116,
        name: "Tawa Roti (Plain)",
        gujName: "તવા રોટી પ્લેન",
        price: 15,
        category: "Tawa Roti",
        photo: "https://parafit.in/wp-content/uploads/2019/03/Tawa-Roti-600x500.jpg"
    },
    {
        id: 117,
        name: "Tawa Roti (Butter)",
        gujName: "તવા રોટી બટર",
        price: 20,
        category: "Tawa Roti",
        photo: "https://cdn.uengage.io/uploads/58941/image-9731-1786345017.jpg"
    },
    {
        id: 118,
        name: "Bhakhri (Butter)",
        gujName: "ભાખરી (બટર)",
        price: 30,
        category: "Tawa Roti",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdBc1tC29s4Kg0SdbOqVAQje8VP8QDEcTzYX1WbjP-zQ&s=10"
    },
    {
        id: 119,
        name: "Tawa Paratha (Butter)",
        gujName: "તવા પરાઠા (બટર)",
        price: 35,
        category: "Tawa Roti",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG74iCuJFtW1i2JyMZMsUNpnfFsO2cWEOW77kcNMGZZPOX13854kDd8As&s=10"
    },
    {
        id: 120,
        name: "Bajri No Rotlo (Plain)",
        gujName: "બાજરી નો રોટલો પ્લેન",
        price: 30,
        category: "Tawa Roti",
        badge: "Kathiyawad Pride 🌾",
        photo: "https://neelamfoodlandmumbai.com/cdn/shop/files/IMG_1501_98320059-6c5b-45a2-a0d8-ad78f1c80247.jpg?v=1752068978&width=1445"
    },
    {
        id: 121,
        name: "Bajri No Rotlo (Butter)",
        gujName: "બાજરી નો રોટલો (બટર)",
        price: 35,
        category: "Tawa Roti",
        badge: "Must Have ⭐",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD50Q7SUqZdw9eWUxIUkqoXIhMqE_unL_O1Hm-apE1KwjDN1c23mJM8Ao&s=10"
    },
    {
        id: 122,
        name: "Gobi Paratha ",
        gujName: "ગોબી પરાઠા",
        price: 100,
        category: "Tawa Roti",
        photo: "https://www.indianhealthyrecipes.com/wp-content/uploads/2024/01/gobi-paratha-cauliflower-paratha-recipe.jpg"
    },
    {
        id: 123,
        name: "Aloo Paratha",
        gujName: "આલુ પરાઠા",
        price: 100,
        category: "Tawa Roti",
        photo: "https://www.sanjanafeasts.co.uk/wp-content/uploads/2025/07/Boursin-Aloo-Paratha-735x1103.jpg.webp"
    },
    {
        id: 124,
        name: "Aloo Garlic Paratha",
        gujName: "આલુ ગાર્લિક પરાઠા",
        price: 110,
        category: "Tawa Roti",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ5b_scpp18bG9ikh0ekKNj1OdJPRWB5UgJfEBPdDM7qOGbKBxAzCgoKKR&s=10"
    },
    {
        id: 125,
        name: "Aloo Cheese Paratha",
        gujName: "આલુ ચીઝ પરાઠા",
        price: 130,
        category: "Tawa Roti",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtYgPUVPiLYdFHhlsoPqaexV_ocKQQwV16uIxt4cTRBnSZoZbHcvtgSDWY&s=10"
    },
    {
        id: 126,
        name: "Aloo Cheese Garlic Paratha",
        gujName: "આલુ ચીઝ ગાર્લિક પરાઠા",
        price: 150,
        category: "Tawa Roti",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIaNDFzdgqYCBJ-_oOo3X7EJj4r5hzkgdPxHqIIr67Tej6aBp6e3MByz3o&s=10"
    },
    {
        id: 127,
        name: "Paneer Paratha",
        gujName: "પનીર પરાઠા",
        price: 130,
        category: "Tawa Roti",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwsX-U-qIlr0u-0kwtQn3YVuirTTGrrfNhyNcjOlbdn3UmMAvDgC-zOEyO&s=10"
    },


    // ---------------- PAGE 8: TANDOORI ROTI (10 Dishes) ----------------
    {
        id: 128,
        name: "Plain Roti (Tandoori)",
        gujName: "પ્લેન રોટી",
        price: 20,
        category: "Tandoori Roti",
        photo: "https://www.mygingergarlickitchen.com/wp-content/rich-markup-images/1x1/1x1-garlic-tandoori-roti-recipe.jpg"
    },
    {
        id: 129,
        name: "Butter Roti (Tandoori)",
        gujName: "બટર રોટી",
        price: 25,
        category: "Tandoori Roti",
        photo: "https://www.cookwithmanali.com/wp-content/uploads/2021/07/Tandoori-Roti-500x500.jpg"
    },
    {
        id: 130,
        name: "Plain Naan",
        gujName: "પ્લેન નાન",
        price: 35,
        category: "Tandoori Roti",
        photo: "https://cdn.uengage.io/uploads/28289/image-SUU66D-1742797461.jpg"
    },
    {
        id: 131,
        name: "Butter Naan",
        gujName: "બટર નાન",
        price: 40,
        category: "Tandoori Roti",
        badge: "Popular ⭐",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ0icAMfniwF-Ii6fTuDYOs1OoVA4dLDdFxwnFELra6athhwa6AT6H4Oei&s=10"
    },
    {
        id: 132,
        name: "Cheese Naan",
        gujName: "ચીઝ નાન",
        price: 70,
        category: "Tandoori Roti",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQheHp3xXpI_1Qveb6VP1PygolmUujrBqfZ8gUl_D-MMbn9Jrs1oojeEE&s=10"
    },
    {
        id: 133,
        name: "Garlic Naan",
        gujName: "ગાર્લિક નાન",
        price: 70,
        category: "Tandoori Roti",
        photo: "https://spiceworldinc.com/wp-content/uploads/2020/07/Garlic-Naan.jpg"
    },
    {
        id: 134,
        name: "Cheese Garlic Naan",
        gujName: "ચીઝ ગાર્લિક નાન",
        price: 90,
        category: "Tandoori Roti",
        badge: "Chef Special 🧀",
        photo: "https://www.cookwithkushi.com/wp-content/uploads/2016/08/IMG_2320_-1.jpg"
    },
    {
        id: 135,
        name: "Butter Kulcha",
        gujName: "બટર કુલચા",
        price: 60,
        category: "Tandoori Roti",
        photo: "https://cdn1.foodviva.com/static-content/food-images/north-indian-recipes/plain-butter-kulcha/plain-butter-kulcha.jpg"
    },
    {
        id: 136,
        name: "Stuffed Paratha",
        gujName: "સ્ટફ્ડ પરાઠા",
        price: 60,
        category: "Tandoori Roti",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6FCB0Wbw3GaVSxHt407JYpqgDJd9yuWrFPrsxWnlnsR8lqD9U72AbU9c&s=10"
    },
    {
        id: 137,
        name: "Laccha Paratha",
        gujName: "લચ્છા પરાઠા",
        price: 60,
        category: "Tandoori Roti",
        photo: "https://www.whiskaffair.com/wp-content/uploads/2020/06/Lachha-Paratha-2-3-500x500.jpg"
    },

    // ---------------- PAGE 9: DAL (5 Dishes) ----------------
    {
        id: 138,
        name: "Dal Fry",
        gujName: "દાલ ફ્રાય",
        price: 120,
        category: "Dal",
        photo: "https://www.honeywhatscooking.com/wp-content/uploads/2025/09/Spinach-Dal-Fry-main.jpg"
    },
    {
        id: 139,
        name: "Dal Fry Butter",
        gujName: "દાલ ફ્રાય બટર",
        price: 130,
        category: "Dal",
        photo: "https://www.honeywhatscooking.com/wp-content/uploads/2025/09/Spinach-Dal-Fry-main.jpg"
    },
    {
        id: 140,
        name: "Dal Tadka",
        gujName: "દાલ તડકા",
        price: 140,
        category: "Dal",
        badge: "Bestseller 🔥",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Fkc6ZWS9XN-qQt-KDKHjz3iTmCr4jC7yrjV4lBNih3X4uQwgc8goL5sJ&s=10"
    },
    {
        id: 141,
        name: "Dal Palak",
        gujName: "દાલ પાલક",
        price: 140,
        category: "Dal",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUTxg5ZX1EWhz_aRXc1eG8mB-YI8NhLdoVUAeZmOAkIU6p_hnLOVGr-_0&s=10"
    },
    {
        id: 142,
        name: "Lasaniya Dal Tadka Butter",
        gujName: "લસણીયા દાલ તડકા બટર",
        price: 150,
        category: "Dal",
        badge: "Special 🌶️",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlxHWCoih2MdnKyWeLIFos-ibprgeMVyLplYOHTDosKFZsU0P0FFFDXTuU&s=10"
    },

    // ---------------- PAGE 9: RICE (8 Dishes) ----------------
    {
        id: 143,
        name: "Steam Rice",
        gujName: "સ્ટીમ રાઈસ",
        price: 110,
        category: "Rice",
        photo: "https://static.toiimg.com/thumb/54504752.cms?imgsize=205531&width=800&height=800"
    },
    {
        id: 144,
        name: "Jeera Rice",
        gujName: "જીરા રાઈસ",
        price: 120,
        category: "Rice",
        badge: "Popular ⭐",
        photo: "https://www.spiceupthecurry.com/wp-content/uploads/2022/11/jeera-rice-2.jpg"
    },
    {
        id: 145,
        name: "Veg Pulao",
        gujName: "વેજ પુલાવ",
        price: 140,
        category: "Rice",
        photo: "https://carameltintedlife.com/wp-content/uploads/2022/02/vegetable-pulao-veg-pilaf-4.jpg"
    },
    {
        id: 146,
        name: "Peas Pulao",
        gujName: "પીસ પુલાવ",
        price: 130,
        category: "Rice",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl49RyGb09ryLJWaPxHm4VWSTsor2wdw_VRqesuW9G5TIdLcOHWJSUJlA&s=10"
    },
    {
        id: 147,
        name: "Cheese Pulao",
        gujName: "ચીઝ પુલાવ",
        price: 170,
        category: "Rice",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV2YyRNBJB5WMOM70jXfBFA5o7-M0i6Dxoe3HPqp9eo6cR1XrjCn9gwEKc&s=10"
    },
    {
        id: 148,
        name: "Paneer Pulao",
        gujName: "પનીર પુલાવ",
        price: 160,
        category: "Rice",
        photo: "https://www.whiskaffair.com/wp-content/uploads/2019/08/Paneer-Pulao-1-3.jpg"
    },
    {
        id: 149,
        name: "Veg Biryani",
        gujName: "વેજ બિરયાની",
        price: 160,
        category: "Rice",
        photo: "https://www.indianveggiedelight.com/wp-content/uploads/2020/04/veg-biryani-instant-pot.jpg"
    },
    {
        id: 150,
        name: "Veg Hyderabadi Biryani",
        gujName: "વેજ હૈદરાબાદી બિરયાની",
        price: 170,
        category: "Rice",
        badge: "Aromatic 🍚",
        photo: "https://www.shutterstock.com/image-photo/plate-hyderabadi-biryani-served-vibrant-260nw-2754622605.jpg"
    },

    // ---------------- PAGE 10: PAV BHAJI (5 Dishes) ----------------
    {
        id: 151,
        name: "Sp. Khodiyar Pav Bhaji",
        gujName: "સ્પે. ખોડિયાર પાવ ભાજી",
        price: 180,
        category: "Pav Bhaji",
        badge: "Special 👑",
        photo: "https://www.ohmyveg.co.uk/wp-content/uploads/2025/08/Paneer-Pav-Bhaji-3-1.webp"
    },
    {
        id: 152,
        name: "Pav Bhaji",
        gujName: "પાવ ભાજી",
        price: 140,
        category: "Pav Bhaji",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ODip6B9BDJFsbDejmSGU0kzegLB8BQdGicRGK87KDrKo5HAkkKeYU5E&s=10"
    },
    {
        id: 153,
        name: "Pav Bhaji Butter",
        gujName: "પાવ ભાજી બટર",
        price: 150,
        category: "Pav Bhaji",
        badge: "Bestseller 🔥",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsJxSBFka3HR8tH5UTXnUBg2yJTalDM5gbzL4WpkOwjg&s=10"
    },
    {
        id: 154,
        name: "Only Bhaji",
        gujName: "ખાલી ભાજી",
        price: 120,
        category: "Pav Bhaji",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgzHB7o-Etf5JM77SL3uX-r3McaX0GMNxDt5mtlcT1pDV4Pi0YzS5STyjV&s=10"
    },
    {
        id: 155,
        name: "Extra Pav",
        gujName: "એક્સટ્રા પાવ",
        price: 15,
        category: "Pav Bhaji",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZksr3mqFXv8C0Fad_vy9KIyIgxsbtuqDGwEi9WvaYcw&s=10"
    },

    // ---------------- PAGE 10: DAL-BATI & EXTRAS (9 Dishes) ----------------
    {
        id: 156,
        name: "Sp. Khodiyar Dal Bati",
        gujName: "સ્પે. ખોડિયાર દાલ બાટી",
        price: 190,
        category: "Dal-Bati & Extras",
        badge: "Royal Feast 👑",
        desc: "4 Bati, Dal, Ghee, Gud, Chatni, Butter Milk, Papad (૪ બાટી, દાલ, ઘી, ગોળ, ચટણી, છાસ, પાપડ)",
        photo: "https://b.zmtcdn.com/data/pictures/4/19729844/1a2fa0bd56e17cdce519ee4ca23921a5_featured_v2.jpg"
    },
    {
        id: 157,
        name: "Dal Bati",
        gujName: "દાલ બાટી",
        price: 150,
        category: "Dal-Bati & Extras",
        desc: "4 Bati, Dal, Chatni (૪ બાટી, દાલ, ચટણી)",
        photo: "https://img-global.cpcdn.com/recipes/4e6a9b83a8976619/680x781cq80/%E0%AA%A6%E0%AA%B2-%E0%AA%AC%E0%AA%9Fdal-bati-recipe-in-gujarati-%E0%AA%B0%E0%AA%B8%E0%AA%AA-%E0%AA%AE%E0%AA%96%E0%AA%AF-%E0%AA%AB%E0%AA%9F.jpg"
    },
    {
        id: 158,
        name: "Lasan Ni Chatni",
        gujName: "લસણની ચટણી",
        price: 50,
        category: "Dal-Bati & Extras",
        badge: "Desi Hit 🌶️",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-km6-pftSffn6KbpmMXdfSzPTZHlyVm2Mm7DG_xQRrBBWxc98OoMOJX0&s=10"
    },
    {
        id: 159,
        name: "Rotla Nu Churmu",
        gujName: "રોટલા નું ચૂરમું",
        price: 140,
        category: "Dal-Bati & Extras",
        badge: "Traditional ❤️",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjDTwWpPqRld266e_L74PrCycYTercDprsUk6xcCSIpgrybz9u4Uklbgk&s=10"
    },
    {
        id: 160,
        name: "Bati Nu Churmu",
        gujName: "બાટી નું ચૂરમું",
        price: 140,
        category: "Dal-Bati & Extras",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfYrxdGvKThe-8f0oQmpAgSuQqZEpVTpBwibpeObHWfABuEZiUAGboqvnE&s=10"
    },
    {
        id: 161,
        name: "Ghee (1 Wadki)",
        gujName: "ઘી (૧ વાડકી)",
        price: 30,
        category: "Dal-Bati & Extras",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrNCT6cxwqN3oscmZq1KW7nnZeeZw09-a7ri4q7kgSlu6-EvtqzmibjuA&s=10"
    },
    {
        id: 162,
        name: "Gud (1 Wadki)",
        gujName: "ગોળ (૧ વાડકી)",
        price: 20,
        category: "Dal-Bati & Extras",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtsmafK3WhiMug_VcI1Nocgj-yoQeqc61IqBmflFZcA4ZA5qC5NmbYFBoy&s=10"
    },
    {
        id: 163,
        name: "Extra Bati",
        gujName: "એક્સટ્રા બાટી",
        price: 20,
        category: "Dal-Bati & Extras",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDbnLyVwLhPZnmGbHqi60ubSf5zHE44SCLn4kLtrIsz2CaEkO_kFZqY2A&s=10"
    },
    {
        id: 164,
        name: "Extra Dal",
        gujName: "એક્સટ્રા દાલ",
        price: 40,
        category: "Dal-Bati & Extras",
        photo: "https://eastindianrecipes.net/wp-content/uploads/2021/08/Yellow-Dal-Yellow-Lentil-Recipe32.jpg"
    },

    // ---------------- PAGE 11: FIX THALI (3 Dishes) ----------------
    {
        id: 165,
        name: "Gujarati - Thali",
        gujName: "ગુજરાતી - થાળી",
        price: 110,
        parcelPrice: 130,
        category: "Fix Thali",
        badge: "Morning Fix 🍱",
        desc: "Kathol, Sabji, Daal-Bhat, Chaas, Papad, Butter Chapati (4) | Extra Sabji / Daal / Rice: ₹20 (1 Wadki)",
        photo: "https://b.zmtcdn.com/data/pictures/0/18807800/148cddceeacaaeaf1817440ea7b41c0e.jpg"
    },
    {
        id: 166,
        name: "Kathiyawadi - Thali",
        gujName: "કાઠીયાવાડી - થાળી",
        price: 130,
        parcelPrice: 150,
        category: "Fix Thali",
        badge: "Bestseller 👑",
        desc: "Sev Tomato, Lasaniya Bataka, Kadi, Khichadi, Chass, Papad, Butter Chapati (4) | Extra Sabji, Kadi, Khichadi: ₹30 (1 Wadki)",
        photo: "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/lj5gdoxjsqsu8zau4yxu"
    },
    {
        id: 167,
        name: "Punjabi - Thali",
        gujName: "પંજાબી - થાળી",
        price: 150,
        parcelPrice: 170,
        category: "Fix Thali",
        badge: "Grand Thali ⭐",
        desc: "Paneer Butter Masala, Mix Veg, Daal Fry, Jeera Rice, Chass, Papad, Butter Chapati (4) | Extra Sabji / Daal / Rice: ₹30 (1 Wadki)",
        photo: "https://b.zmtcdn.com/data/reviews_photos/235/7e3103ca7a79d592e2b7f374a76c4235_1529943702.jpg"
    }
];

// Category Icons Mapping
const categoryIcons = {
    "All": "🍽️",
    "Soup": "🥣",
    "Papad": "🫓",
    "Salad & Chhas": "🥗",
    "Chinese": "🍜",
    "Vegetable Sabji": "🍲",
    "Kathiyawadi": "🍛",
    "Punjabi Sabji": "🧀",
    "Kaju & Kofta": "👑",
    "Tawa Roti": "🫓",
    "Tandoori Roti": "🥖",
    "Dal": "🥣",
    "Rice": "🍚",
    "Pav Bhaji": "🥘",
    "Dal-Bati & Extras": "🍲",
    "Fix Thali": "🍱"
};

// Return the individual photo assigned directly to each item
function getPhoto(item) {
    return item.photo;
}

// Fallback SVG Generator matching the Maroon & Beige Logo Theme
function getFallbackSVG(item) {
    const safeName = item.name.replace(/[<>&"]/g, "");
    const safeGuj = (item.gujName || "").replace(/[<>&"]/g, "");
    const icon = categoryIcons[item.category] || "🍲";
    const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
      <defs>
        <linearGradient id="bgG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#420a1a"/>
          <stop offset="60%" stop-color="#580d22"/>
          <stop offset="100%" stop-color="#2a0510"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#bgG)"/>
      <circle cx="300" cy="160" r="70" fill="rgba(216,184,138,0.08)" stroke="#d8b88a" stroke-width="2" stroke-dasharray="6 4"/>
      <text x="300" y="175" font-size="50" text-anchor="middle">${icon}</text>
      <text x="300" y="270" font-family="'Segoe UI', Arial, sans-serif" font-weight="700" font-size="20" fill="#ffffff" text-anchor="middle">${safeName}</text>
      <text x="300" y="300" font-family="'Segoe UI', Arial, sans-serif" font-weight="600" font-size="16" fill="#e2cbb0" text-anchor="middle">${safeGuj}</text>
      <text x="300" y="340" font-family="'Segoe UI', Arial, sans-serif" font-weight="600" font-size="12" fill="#ffd8a4" text-anchor="middle">${item.category.toUpperCase()} • 100% PURE VEG</text>
    </svg>`;
    return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

// DOM Elements
const menuContainer = document.getElementById("menu-container");
const categoriesContainer = document.getElementById("categories");
const searchInput = document.getElementById("search");
const clearSearchBtn = document.getElementById("clear-search");
const resultCount = document.getElementById("result-count");
const noResults = document.getElementById("no-results");
const resetFilterBtn = document.getElementById("reset-filter-btn");
const backToTopBtn = document.getElementById("back-to-top");

let activeCategory = "All";
const categories = ["All", ...new Set(menuData.map(item => item.category))];

// Render Category Navigation
function renderCategories() {
    categoriesContainer.innerHTML = "";

    categories.forEach(category => {
        const count = category === "All"
            ? menuData.length
            : menuData.filter(item => item.category === category).length;

        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "category-btn" + (category === activeCategory ? " active" : "");
        btn.setAttribute("data-category", category);

        const icon = categoryIcons[category] || "🍽️";
        btn.innerHTML = `
            <span class="cat-icon">${icon}</span>
            <span class="cat-name">${category}</span>
            <span class="cat-count">${count}</span>
        `;

        btn.addEventListener("click", () => {
            activeCategory = category;
            renderCategories();
            renderMenu();
            btn.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
        });

        categoriesContainer.appendChild(btn);
    });
}

// Render Menu Cards
function renderMenu() {
    const query = searchInput.value.trim().toLowerCase();

    if (clearSearchBtn) {
        clearSearchBtn.hidden = !query;
    }

    const filtered = menuData.filter(item => {
        const matchesCategory = activeCategory === "All" || item.category === activeCategory;
        const matchesSearch = !query ||
            item.name.toLowerCase().includes(query) ||
            (item.gujName && item.gujName.includes(query)) ||
            item.category.toLowerCase().includes(query) ||
            (item.desc && item.desc.toLowerCase().includes(query));

        return matchesCategory && matchesSearch;
    });

    // Update Result Status
    if (query) {
        resultCount.textContent = `Found ${filtered.length} dish(es) matching "${searchInput.value.trim()}"`;
    } else if (activeCategory === "All") {
        resultCount.textContent = `Showing all ${filtered.length} dishes from official restaurant menu`;
    } else {
        resultCount.textContent = `Showing ${filtered.length} dishes in ${activeCategory}`;
    }

    const hasMatches = filtered.length > 0;
    noResults.hidden = hasMatches;
    menuContainer.innerHTML = "";

    if (!hasMatches) return;

    filtered.forEach((item, index) => {
        const card = document.createElement("article");
        card.className = "food-card";
        card.style.animationDelay = `${Math.min(index * 0.02, 0.4)}s`;

        // Image Wrap
        const imgWrap = document.createElement("div");
        imgWrap.className = "food-img-wrap";

        // Veg Icon (🟢 Pure Veg square)
        const vegMark = document.createElement("span");
        vegMark.className = "food-veg-mark";
        vegMark.title = "100% Pure Vegetarian";
        vegMark.innerHTML = `<span class="food-veg-dot"></span>`;

        // Category Tag
        const catBadge = document.createElement("span");
        catBadge.className = "food-cat-badge";
        catBadge.textContent = item.category;

        // Individual Photo for each dish with fallback
        const img = document.createElement("img");
        img.className = "food-photo";
        img.alt = `${item.name} (${item.gujName}) - Aai Shree Khodiyar Restaurant`;
        img.loading = "lazy";
        img.decoding = "async";
        img.src = getPhoto(item);

        img.onerror = function () {
            this.onerror = null;
            this.src = getFallbackSVG(item);
        };

        imgWrap.append(img, vegMark, catBadge);

        if (item.badge) {
            const highlightBadge = document.createElement("span");
            highlightBadge.className = "food-highlight-badge";
            highlightBadge.textContent = item.badge;
            imgWrap.appendChild(highlightBadge);
        }

        // Info Section
        const info = document.createElement("div");
        info.className = "food-info";

        const title = document.createElement("h3");
        title.className = "food-title";
        title.textContent = item.name;

        const gujTitle = document.createElement("span");
        gujTitle.className = "food-guj-title";
        gujTitle.textContent = item.gujName;

        info.append(title, gujTitle);

        if (item.desc) {
            const desc = document.createElement("p");
            desc.className = "food-desc";
            desc.textContent = item.desc;
            info.appendChild(desc);
        }

        // Bottom Row: Pricing
        const bottom = document.createElement("div");
        bottom.className = "food-bottom";

        const priceWrap = document.createElement("div");
        priceWrap.className = "price-block";

        const price = document.createElement("span");
        price.className = "price";
        price.textContent = `₹${item.price}`;
        priceWrap.appendChild(price);

        if (item.parcelPrice) {
            const parcel = document.createElement("span");
            parcel.className = "parcel-price";
            parcel.textContent = `Parcel: ₹${item.parcelPrice}`;
            priceWrap.appendChild(parcel);
        }

        const orderCue = document.createElement("span");
        orderCue.className = "order-cue";
        orderCue.textContent = "Order with waiter";

        bottom.append(priceWrap, orderCue);
        info.appendChild(bottom);
        card.append(imgWrap, info);

        menuContainer.appendChild(card);
    });
}

// Search Listeners
searchInput.addEventListener("input", renderMenu);

if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", () => {
        searchInput.value = "";
        clearSearchBtn.hidden = true;
        searchInput.focus();
        renderMenu();
    });
}

// Reset Filter Button
if (resetFilterBtn) {
    resetFilterBtn.addEventListener("click", () => {
        activeCategory = "All";
        searchInput.value = "";
        if (clearSearchBtn) clearSearchBtn.hidden = true;
        renderCategories();
        renderMenu();
        window.scrollTo({ top: 320, behavior: "smooth" });
    });
}

// Back to Top Button
window.addEventListener("scroll", () => {
    if (!backToTopBtn) return;
    if (window.scrollY > 350) {
        backToTopBtn.classList.add("visible");
    } else {
        backToTopBtn.classList.remove("visible");
    }
});

if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// Initialize
renderCategories();
renderMenu();
