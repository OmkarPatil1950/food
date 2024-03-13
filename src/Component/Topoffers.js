// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// function TopOffers(props) {
//   const navigate = useNavigate();

//   const handleClick = (pageUrl) => {
//     navigate(pageUrl);
//   };

//   const topOffersData = [
//     {
//       id: 4,
//       imageUrl: '../images/beautyoffer.jpg',
//       title: '',
//       pageUrl: '/subcategory/2',
//     },
//     {
//       id: 2,
//       imageUrl: '../images/electonicsoffer.jpg',
//       title: '',
//       pageUrl: '/subcategory/4',
//     },
//     {
//       id: 3,
//       imageUrl: '../images/fashionoffer.jpg',
//       title: '',
//       pageUrl: '/productsByCat/14',
//     },
//     {
//       id: 1,
//       imageUrl: '../images/homeappliances.jpg',
//       title: '',
//       pageUrl: '/subcategory/1',
//     },
//     {
//       id: 5,
//       imageUrl: '../images/supermarketoffer.jpg',
//       title: '',
//       pageUrl: '/productsByCat/23',
//     },
//   ];

//   return (
//     <div>
//       <h3 style={{ color: 'blue', textAlign: 'center' }}>
//         <i>
//           <b>Top Offers</b>
//         </i>
//       </h3>

//       <div className="flex justify-center ml-2 mt-2 mb-9">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
//           {topOffersData.map((offer) => (
//             <div
//               className="card flex flex-col items-center justify-center transition-transform hover:scale-110"
//               key={offer.id}
//               style={{ width: '100%', height: 'auto' }}
//             >
//               <img
//                 src={offer.imageUrl}
//                 alt={offer.title}
//                 onClick={() => handleClick(offer.pageUrl)}
//                 style={{ maxWidth: '100%', maxHeight: '200px', objectFit: 'cover' }}
//               />
//               <h3>{offer.title}</h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TopOffers;
import React from 'react';

const Sidebar = () => {

 
  return (


    <>
    <div className="h-screen w-screen flex flex-col-reverse sm:flex-row min-h-0 min-w-0 overflow-hidden mt-2">

      <main className="sm:h-full flex-1 flex flex-col min-h-0 min-w-0 overflow-auto border-none">

        <section className="flex-1 pt-3 md:p-6 lg:mb-0 lg:min-h-0 lg:min-w-0">
          <div className="flex flex-col lg:flex-row h-full w-full">
            {/* <div className="border pb-2 lg:pb-0 w-full lg:max-w-sm px-3 flex flex-row lg:flex-col flex-wrap lg:flex-nowrap"> */}
            {/* control content left */}
            {/* <div className="w-full h-full min-h-0 min-w-0 mb-4" style={{ backgroundImage: 'url("https://static.pxlecdn.com/photos/589639430/original/Virat_2.jpg")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></div>

            </div> */}
            <div className="border-none h-full w-full lg:flex-1 px-3 min-h-0 min-w-0">
              {/* overflow content right */}
              <div className="bg-green-200 w-200% h-full min-h-0 min-w-0 overflow-auto">
                {/* <div className=" w-screen h-96 min-h-0 min-w-0 mb-4" style={{ backgroundImage: 'url("https://www.bigbasket.com/media/uploads/banner_images/b2c052302020_4634_b2c_hp_c&h_cm_bru_460_100623_all.jpg")', backgroundSize: 'cover' }}></div> */}


                <a
                  className="block w-screen h-96 min-h-0 min-w-0 mb-4"
                  href="/productsByCat/13"
                  style={{
                    backgroundImage: 'url("https://s7ap1.scene7.com/is/image/adityabirlafashion/PE_D_HB_36?resMode=sharp2&wid=1600&hei=650")',
                    backgroundSize: 'cover',
                  }}
                ></a>
                <a
                  className="block w-screen h-96 min-h-0 min-w-0 mb-4"
                  href="/productsByCat/8"
                  style={{
                    backgroundImage: 'url("https://whirlpoolindia.vtexassets.com/assets/vtex.file-manager-graphql/images/f929f93c-6f5a-4794-8775-4d0f09b9a75f___d2244087ec68f86c2bb7be0ce7c3635d.jpg")',
                    backgroundSize: 'cover',
                  }}
                ></a>

                <a
                  className="block w-screen h-96 min-h-0 min-w-0 mb-4"
                  href="/productsByCat/23"
                  style={{
                    backgroundImage: 'url("https://www.bigbasket.com/media/uploads/banner_images/b2c052302020_4634_b2c_hp_c&h_cm_bru_460_100623_all.jpg")',
                    backgroundSize: 'cover',
                  }}
                ></a>

                <a
                  className="block w-screen h-96 min-h-0 min-w-0 mb-4"
                  href="/productsByCat/16"
                  style={{
                    backgroundImage: 'url("https://www.lg.com/in/images/Banner/OLED-TV-Banner-1600x600.jpg")',
                    backgroundSize: 'cover',
                  }}
                ></a>

                {/* <div className=" w-screen h-96 min-h-0 min-w-0 mb-4" style={{ backgroundImage: 'url(" https://www.lg.com/in/images/Banner/OLED-TV-Banner-1600x600.jpg")', backgroundSize: 'cover' }}></div> */}

              </div>
            </div>
          </div>
        </section>

      </main>
      
    </div>
    <div className='flex'>
     <div className='mr-5 ml-16 mb-5'>
    <a href='/productsByCat/11'>
     <img src='https://images-static.nykaa.com/uploads/60a0b6f3-5b5c-4493-906a-7268e9637978.gif?tr=w-600,cm-pad_resize'></img>
     </a>
     </div>
     <div>
      <a href='/productsByCat/12'>
    <img src='https://images-static.nykaa.com/uploads/0b501c4f-d927-49c7-aaa0-1c86c1cf0acf.gif?tr=w-600,cm-pad_resize'/>
    </a>
     </div>


    </div>
    
    </>
  );
};

export default Sidebar;
