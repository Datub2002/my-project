import './App.css';
import data from './Data/data.json'
import CartExe from './Props/CartPhoneExercise/CartExe';



// ./ luon tu trong src ra

function App() {

    


  return (
        // <ShoesExercise data={data}/>
        <CartExe />      
    // <div className="container-fluid">
    //   {/* <div className='row'>
    //     <div className='col-4'>

    //       <div className="nav flex-column nav-pills justify-content-center" style={{ minHeight: '800px' }} id="v-pills-tab" role="tablist" aria-orientation="vertical">
    //         <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#Home" role="tab" aria-controls="Home" aria-selected="true">Home</a>
    //         <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#Shop" role="tab" aria-controls="Shop" aria-selected="false">Shop</a>
    //       </div>
    //     </div>
    //     <div className='col-8'>
    //     <h3 className='display-4 text-center'>Shoes Shop</h3>
    //       <div className="tab-content" id="v-pills-tabContent">
    //         <div className="tab-pane fade show active" id="Home" role="tabpanel" aria-labelledby="v-pills-home-tab">


    //           <ProductList arrProduct={dataJson} />

    //         </div>
    //         <div className="tab-pane fade" id="Shop" role="tabpanel" aria-labelledby="v-pills-profile-tab">Shop</div>
           
    //       </div>

    //     </div>
    //   </div> */}
    // </div>
  );
}

export default App;
