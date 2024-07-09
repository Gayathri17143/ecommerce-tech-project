 
import MainDash from '../Dashbaord/MainDash/MainDash';
import RightSide from '../Dashbaord/RigtSide/RightSide';
 
 
function Dashboard() {
   
  return (
   <>
  <div className="RightSide">
      <div>
        <h3> </h3>
        <MainDash/>
      </div>
      <div>
        <h3> </h3>
        <RightSide/>
      </div>
    </div>
        
       
   </>
  );
}

 
export default Dashboard;
