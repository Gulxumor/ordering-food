 /*// TODO ============== Route yaratish

? 1. npm i react-router-dom => React Router DOM o'rnatiladi
2. index.js => ya'ni eng 1-o'rab turuvchi BrowserRouter ga o'rab qo'yiladi.
3. Navbardagi a tagiga o'ralgan linklar <NavLink> juft tagiga yoziladi. 
4. Linkka bosilganda qaysi route ga otishini to={} attributi ichiga yozamiz
5. Link active bo'lganda biror hodisa ro'y berishini istasak Navlink ichiga quyidagi kabi kod yozamiz
!  style={({ isActive }) => ({ color: isActive ? "orange" : "grey",fontWeight: isActive ? `800` : "500"})}
6. So'ng Navlink bosilganda yangi sahifa va route ga o'tishi uchun 
   Navbar ning asosiy eng katta Container o'rab turuvchisiga <Outlet/> deb yozib qo'yamiz
7.

*/

/* // TODO  ============= Language changing

0. Select yaratiladi, va optionlari yoziladi.
 1. npm i i18next react-i18next
 2. root ga otiladi
 3. returndan tepada i18next ni ozi chaqiriladi
 4. nuqta qoyib use deyiladi va qavs ichiga reactda ishlatyatganimizi bildirish uchun initReactI18next deb yoziladi
 5. nuqta qo'yib init() deyiladi va uni ichida ozini objecti boladi
 6. resources: {} deb yoziladi. Qanaqa til bolsa nomi yoziladi, song :{translation: "key qilingan til nomi yoziladi" }, barchasini shu holatda yozamiz.
 7. misol uchun en: { } scope ichida ozini translationi boladi
 8. resources dan song language deb yoziladi, unga default language yoziladi. M. lng:"en"
 9. song fallback deyiladi va tanlanmagan til bolsa avtomatik chiqaradigan til yozib qoyiladi string ichida, biror hato bolib tanlangan til ishlamay qolsa ham shu yerga yozilgan tilda ishlaydi. M. fallback:"en"
 10. malumotlarni olib kelish uchun locale degan folder ochiladi
 11. locale folderi ichida mavjud bolgan tillar miqdoricha folder ochiladi
 12. song har 1 til uchun js fayli ochiladi (translation.js)
 13. js fayl ichiga otib obj tipidagi ozgaruvchi ochiladi
 14. song ozgartirmoqchi bolgan section nomi yozilib obj scope ochiladi va ichiga translationlar yozib chiqiladi. M. nav_links: {nav_links_home: "Uy", nav_links_shop:"Bozor"},
 15. translatsiyalar yozib bolingandan song locale folderi ichidagi folderni, rootdagi resources objecti ichidagi translation ga value qilib import qilinadi
 16. ishlatish uchun const {t} = usetranslation() deb yoziladi yani ozgaruvchiga tenglanadi va i18next dan import qilinadi
 17. song ishlatilatiladigan joyga huddi js kod yozganimizdek scope ochiladi va t() deb yoziladi. qavs ichiga esa tarjima qilinadiga sozni obkelamiz like {t("nav_links.nav_links_home")}. 
     song qaysi tilda bolsa shu qismga biriktirilgan sozni osha tilda chiqarib beradi
 18. selectda tanlangan til tasir qilishi uchun  selectga quyidagilar yoziladi. Ya'ni change bolgandagi holati localstorage ga locale nomi bilan saqlab qoyiladi
 ?   <select onChange={(e) => localStorage.setItem("locale", e.target.value)}> options  </select>
 19. Browserga otib select qilib korganda localstorage ga key:locale, value: tanlagan optionimiz bolishi kerak
 20. Selectda tanlaganimizda til avtomatik ozgarishi uchun lng va fallback ga
 ?  localStorage.getItem("locale") || "en"
 ..  deb yozamiz. || belgilanganiga sabab shuki tanlagan tilimiz malum sabablarga kora ishlamay qolishi mumkin. 
     Shu xolatlarda avtomatik ingliz tilini olib ketadi.
 21. Browserga 1-marta kirgandagi default qiymatni kiritish uchun quyidagi amallar bajariladi.
 ?   useEffect(()=>{if (!localStorage.getItem("locale")) {localStorage.setItem("locale", "uz")}},[])
 22. Davomi bor :)
*/

/* // TODO  ============= Redux toolkit
    1. redux va redux-toolkit o'rnatib olinadi
    ?  npm install @reduxjs/toolkit react-redux
    2. Store ochib olamiz va uni configure qilib ketamiz. : configureCtore()
    ?  import { configureStore } from "@reduxjs/toolkit"; 
    3. Istalgan (store) nomda ozgaruvchi ochib uni export qilamiz va configureStore() ga tenglaymiz.
    4. Qavs ichiga obj ochilib reducer deb yoziladi va unga value qilib obj tenglanadi.
    5. Keyinchalik qandaydur slice create qiladigan bolsak, hammasi shu obj scope ichiga  yozib ketiladi
    6. Eng 1-orab turuvchiga yani index.js ga o'tilib, provider react-redux dan import qilinadi va root orab qoyiladi
    7. providerning store atribut ichiga create qilgan store imizni yozib qoyamiz lik this => 
    ?  <Provider store={store}></Root></Provider>
    8. Yangi 1 folder/fayl ochib ichiga slice yozamiz. 1-navbatda createSlice ni import qilamiz.
    ?  import { createSlice } from "@reduxjs/toolkit";
    9. createSlice ozgaruvchiga tenglanadi va qavs ichiga obj ochiladi. u oziga 3 ta qiymat oladi.  
      M: ^^^^^^^^^^^^^^^^^^^^
      const counterSlice = createSlice({
          name: "counterSlice",         // ! 1 => slice nomi. 
          initialState: { counter: 0 }, // ! 2=> initialState.
          reducers: {                   // ! 3=> reducers:{}  => bu oz ichiga barcha action (formula) larni oladi.
              increment: (state, action) => {
                  state.counter += 1
              },
              incrementByAmount: (state, action) => {
                  state.counter += action.payload
              }
          }
      });
      export const {increment,incrementByAmount} = counterSlice.actions
      export default counterSlice.reducer   // ! reducers emas
      M: ^^^^^^^^^^^^^^^^^^^^
    10. store.js ga otib  yozilgan slice ni import qilamiz va reducer ichidagi obj ga yozib qoyiladi
    ?  export const store = configureStore({reducer: {counterReducer,}})
    11. Component ochib root ga ulandi va counter qiladigan kod yozildi
       
        import { useDispatch, useSelector } from "react-redux"; // ! useDispatch, useSelector import qilindi 
        import {decrement, decrementByAmount,increment,incrementByAmount} from "../../store/CounterSlice";
        ! button onClick bolgandagi bajariladigan actionlar import qilindi
        const Navbar = () => {
          const { counter } = useSelector((state) => state.counterReducer);   
        ! useSelector orqali ishlatiladigan narsamiz destructatsiya qilib olinyabdi
          const dispatch = useDispatch();  // ! useDispatch dan dispatch import qilinyabdi
          return (
            <div>
              <h2>Navbar, {counter}</h2>   // ! counter ekranga chiqarilyabdi
              <button onClick={() => dispatch(increment())}>+</button>   
        ! onclick bolgandagi xolati => dispatch chaqirilyabdi va qavs ichiga bajariladigan action yozilyabdi
              <button onClick={() => dispatch(decrement())}>-</button>
              <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
              <button onClick={() => dispatch(decrementByAmount({ minus: 2 }))}>-2</button>
        ! dispatch chaqirilyabdi va qavs ichiga bajariladigan action yozilyabdi.
        ! 2 ga kamaytirib ketishi uchun obj ochilib uni ichiga { minus: 2 } deb payload berib ketilyabdi. 
        ! Funksiyasi bajarilayotganda anashu payloadga qarab kamaytirib ketadi           
            </div>
          );
        };
        export default Navbar;

    
        
    




 */

// useselector - malumot olish
// o'zgartirish-useDispatch

/* // TODO  ============= useQuery
  !  useQuery => useEffect va fetch ni o'ziga 1 ta qilib keshlab oladi
  !  va uni istalgan joyimizda ishlatib ketishga imkon beradi
  ?  1. npm i react-query
     2. index.js ga otiladi va queryClient va queryClientProvider import qilinadi
  ?  3. const query = new QueryClient()
        queryClient ozgaruvchiga tenglanadi va root queryClientProvider bilan o'rab qo'yiladi.
     4. queryClientProvider ning client degan atributiga ozgaruvchi yozib qoyiladi.
     5. query ishlatiladigan componentga o'tiladi va useQuery() ozgaruvchiga tenglanadi
        useQuery 3 ta parametr oladi, 1 => uni nomi , 2 => callback funksiya boladi, shu joyda sorov yuborish mumkin,
        3=> obj boladi. keepPreviousData:true boladi. oldingi data ni saqlab turadi, refetchOnWindowFocus:false boladi
        


*/